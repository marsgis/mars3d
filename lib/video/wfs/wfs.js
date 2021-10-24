(function (f) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;
    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }
    g.Wfs = f();
  }
})(function () {
  var define, module, exports;
  return (function () {
    function r(e, n, t) {
      function o(i, f) {
        if (!n[i]) {
          if (!e[i]) {
            var c = "function" == typeof require && require;
            if (!f && c) return c(i, !0);
            if (u) return u(i, !0);
            var a = new Error("Cannot find module '" + i + "'");
            throw ((a.code = "MODULE_NOT_FOUND"), a);
          }
          var p = (n[i] = { exports: {} });
          e[i][0].call(
            p.exports,
            function (r) {
              var n = e[i][1][r];
              return o(n || r);
            },
            p,
            p.exports,
            r,
            e,
            n,
            t
          );
        }
        return n[i].exports;
      }
      for (
        var u = "function" == typeof require && require, i = 0;
        i < t.length;
        i++
      )
        o(t[i]);
      return o;
    }
    return r;
  })()(
    {
      1: [
        function (require, module, exports) {
          // Copyright Joyent, Inc. and other Node contributors.
          //
          // Permission is hereby granted, free of charge, to any person obtaining a
          // copy of this software and associated documentation files (the
          // "Software"), to deal in the Software without restriction, including
          // without limitation the rights to use, copy, modify, merge, publish,
          // distribute, sublicense, and/or sell copies of the Software, and to permit
          // persons to whom the Software is furnished to do so, subject to the
          // following conditions:
          //
          // The above copyright notice and this permission notice shall be included
          // in all copies or substantial portions of the Software.
          //
          // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
          // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
          // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
          // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
          // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
          // USE OR OTHER DEALINGS IN THE SOFTWARE.

          function EventEmitter() {
            this._events = this._events || {};
            this._maxListeners = this._maxListeners || undefined;
          }
          module.exports = EventEmitter;

          // Backwards-compat with node 0.10.x
          EventEmitter.EventEmitter = EventEmitter;

          EventEmitter.prototype._events = undefined;
          EventEmitter.prototype._maxListeners = undefined;

          // By default EventEmitters will print a warning if more than 10 listeners are
          // added to it. This is a useful default which helps finding memory leaks.
          EventEmitter.defaultMaxListeners = 10;

          // Obviously not all Emitters should be limited to 10. This function allows
          // that to be increased. Set to zero for unlimited.
          EventEmitter.prototype.setMaxListeners = function (n) {
            if (!isNumber(n) || n < 0 || isNaN(n))
              throw TypeError("n must be a positive number");
            this._maxListeners = n;
            return this;
          };

          EventEmitter.prototype.emit = function (type) {
            var er, handler, len, args, i, listeners;

            if (!this._events) this._events = {};

            // If there is no 'error' event listener then throw.
            if (type === "error") {
              if (
                !this._events.error ||
                (isObject(this._events.error) && !this._events.error.length)
              ) {
                er = arguments[1];
                if (er instanceof Error) {
                  throw er; // Unhandled 'error' event
                } else {
                  // At least give some kind of context to the user
                  var err = new Error(
                    'Uncaught, unspecified "error" event. (' + er + ")"
                  );
                  err.context = er;
                  throw err;
                }
              }
            }

            handler = this._events[type];

            if (isUndefined(handler)) return false;

            if (isFunction(handler)) {
              switch (arguments.length) {
                // fast cases
                case 1:
                  handler.call(this);
                  break;
                case 2:
                  handler.call(this, arguments[1]);
                  break;
                case 3:
                  handler.call(this, arguments[1], arguments[2]);
                  break;
                // slower
                default:
                  args = Array.prototype.slice.call(arguments, 1);
                  handler.apply(this, args);
              }
            } else if (isObject(handler)) {
              args = Array.prototype.slice.call(arguments, 1);
              listeners = handler.slice();
              len = listeners.length;
              for (i = 0; i < len; i++) listeners[i].apply(this, args);
            }

            return true;
          };

          EventEmitter.prototype.addListener = function (type, listener) {
            var m;

            if (!isFunction(listener))
              throw TypeError("listener must be a function");

            if (!this._events) this._events = {};

            // To avoid recursion in the case that type === "newListener"! Before
            // adding it to the listeners, first emit "newListener".
            if (this._events.newListener)
              this.emit(
                "newListener",
                type,
                isFunction(listener.listener) ? listener.listener : listener
              );

            if (!this._events[type])
              // Optimize the case of one listener. Don't need the extra array object.
              this._events[type] = listener;
            else if (isObject(this._events[type]))
              // If we've already got an array, just append.
              this._events[type].push(listener);
            // Adding the second element, need to change to array.
            else this._events[type] = [this._events[type], listener];

            // Check for listener leak
            if (isObject(this._events[type]) && !this._events[type].warned) {
              if (!isUndefined(this._maxListeners)) {
                m = this._maxListeners;
              } else {
                m = EventEmitter.defaultMaxListeners;
              }

              if (m && m > 0 && this._events[type].length > m) {
                this._events[type].warned = true;
                console.error(
                  "(node) warning: possible EventEmitter memory " +
                  "leak detected. %d listeners added. " +
                  "Use emitter.setMaxListeners() to increase limit.",
                  this._events[type].length
                );
                if (typeof console.trace === "function") {
                  // not supported in IE 10
                  console.trace();
                }
              }
            }

            return this;
          };

          EventEmitter.prototype.on = EventEmitter.prototype.addListener;

          EventEmitter.prototype.once = function (type, listener) {
            if (!isFunction(listener))
              throw TypeError("listener must be a function");

            var fired = false;

            function g() {
              this.removeListener(type, g);

              if (!fired) {
                fired = true;
                listener.apply(this, arguments);
              }
            }

            g.listener = listener;
            this.on(type, g);

            return this;
          };

          // emits a 'removeListener' event iff the listener was removed
          EventEmitter.prototype.removeListener = function (type, listener) {
            var list, position, length, i;

            if (!isFunction(listener))
              throw TypeError("listener must be a function");

            if (!this._events || !this._events[type]) return this;

            list = this._events[type];
            length = list.length;
            position = -1;

            if (
              list === listener ||
              (isFunction(list.listener) && list.listener === listener)
            ) {
              delete this._events[type];
              if (this._events.removeListener)
                this.emit("removeListener", type, listener);
            } else if (isObject(list)) {
              for (i = length; i-- > 0;) {
                if (
                  list[i] === listener ||
                  (list[i].listener && list[i].listener === listener)
                ) {
                  position = i;
                  break;
                }
              }

              if (position < 0) return this;

              if (list.length === 1) {
                list.length = 0;
                delete this._events[type];
              } else {
                list.splice(position, 1);
              }

              if (this._events.removeListener)
                this.emit("removeListener", type, listener);
            }

            return this;
          };

          EventEmitter.prototype.removeAllListeners = function (type) {
            var key, listeners;

            if (!this._events) return this;

            // not listening for removeListener, no need to emit
            if (!this._events.removeListener) {
              if (arguments.length === 0) this._events = {};
              else if (this._events[type]) delete this._events[type];
              return this;
            }

            // emit removeListener for all listeners on all events
            if (arguments.length === 0) {
              for (key in this._events) {
                if (key === "removeListener") continue;
                this.removeAllListeners(key);
              }
              this.removeAllListeners("removeListener");
              this._events = {};
              return this;
            }

            listeners = this._events[type];

            if (isFunction(listeners)) {
              this.removeListener(type, listeners);
            } else if (listeners) {
              // LIFO order
              while (listeners.length)
                this.removeListener(type, listeners[listeners.length - 1]);
            }
            delete this._events[type];

            return this;
          };

          EventEmitter.prototype.listeners = function (type) {
            var ret;
            if (!this._events || !this._events[type]) ret = [];
            else if (isFunction(this._events[type])) ret = [this._events[type]];
            else ret = this._events[type].slice();
            return ret;
          };

          EventEmitter.prototype.listenerCount = function (type) {
            if (this._events) {
              var evlistener = this._events[type];

              if (isFunction(evlistener)) return 1;
              else if (evlistener) return evlistener.length;
            }
            return 0;
          };

          EventEmitter.listenerCount = function (emitter, type) {
            return emitter.listenerCount(type);
          };

          function isFunction(arg) {
            return typeof arg === "function";
          }

          function isNumber(arg) {
            return typeof arg === "number";
          }

          function isObject(arg) {
            return typeof arg === "object" && arg !== null;
          }

          function isUndefined(arg) {
            return arg === void 0;
          }
        },
        {}
      ],
      2: [
        function (require, module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          })();

          var _events = require("../events");

          var _events2 = _interopRequireDefault(_events);

          var _eventHandler = require("../event-handler");

          var _eventHandler2 = _interopRequireDefault(_eventHandler);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true
                }
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          /*
           * Buffer Controller
           */

          var BufferController = (function (_EventHandler) {
            _inherits(BufferController, _EventHandler);

            function BufferController(wfs) {
              _classCallCheck(this, BufferController);

              var _this = _possibleConstructorReturn(
                this,
                (
                  BufferController.__proto__ ||
                  Object.getPrototypeOf(BufferController)
                ).call(
                  this,
                  wfs,
                  _events2.default.MEDIA_ATTACHING,
                  _events2.default.BUFFER_APPENDING,
                  _events2.default.BUFFER_RESET
                )
              );

              _this.mediaSource = null;
              _this.media = null;
              _this.pendingTracks = {};
              _this.sourceBuffer = {};
              _this.segments = [];

              _this.appended = 0;
              _this._msDuration = null;

              // Source Buffer listeners
              _this.onsbue = _this.onSBUpdateEnd.bind(_this);

              _this.browserType = 0;
              if (navigator.userAgent.toLowerCase().indexOf("firefox") !== -1) {
                _this.browserType = 1;
              }
              _this.mediaType = "H264Raw";

              _this.url = undefined;
              return _this;
            }

            _createClass(BufferController, [
              {
                key: "destroy",
                value: function destroy() {
                  _eventHandler2.default.prototype.destroy.call(this);
                }
              },
              {
                key: "onMediaAttaching",
                value: function onMediaAttaching(data) {
                  var media = (this.media = data.media);
                  this.mediaType = data.mediaType;
                  this.url = data.url;
                  if (media) {
                    // setup the media source
                    var ms = (this.mediaSource = new MediaSource());

                    //Media Source listeners
                    var me = this;
                    this.onmso = function() {
                      me.onMediaSourceOpen();
                    };

                    this.onmse = function() {
                      me.onMediaSourceEnded();
                    };

                    this.onmsc = function() {
                      me.onMediaSourceClose();
                    };

                    // this.onmso = this.onMediaSourceOpen.bind(this);
                    // this.onmse = this.onMediaSourceEnded.bind(this);
                    // this.onmsc = this.onMediaSourceClose.bind(this);

                    ms.addEventListener("sourceopen", this.onmso);
                    ms.addEventListener("sourceended", this.onmse);
                    ms.addEventListener("sourceclose", this.onmsc);
                    // link video and media Source
                    media.src = URL.createObjectURL(ms);
                    media.play();
                  }
                }
              },
              {
                key: "onMediaDetaching",
                value: function onMediaDetaching() { }
              },
              {
                key: "onBufferAppending",
                value: function onBufferAppending(data) {
                  if (!this.segments) {
                    this.segments = [data];
                  } else {
                    this.segments.push(data);
                  }
                  this.doAppending();
                }
              },
              {
                key: "onMediaSourceClose",
                value: function onMediaSourceClose() {
                  console.log("media source closed");
                }
              },
              {
                key: "onMediaSourceEnded",
                value: function onMediaSourceEnded() {
                  console.log("media source ended");
                }
              },
              {
                key: "onSBUpdateEnd",
                value: function onSBUpdateEnd(event) {
                  // Firefox
                  // if (this.browserType === 1) {
                  //   this.mediaSource.endOfStream();
                  //   this.media.play();
                  // }

                  this.appending = false;
                  this.doAppending();
                  this.updateMediaElementDuration();
                }
              },
              {
                key: "updateMediaElementDuration",
                value: function updateMediaElementDuration() { }
              },
              {
                key: "onMediaSourceOpen",
                value: function onMediaSourceOpen() {
                  var mediaSource = this.mediaSource;
                  if (mediaSource) {
                    // once received, don't listen anymore to sourceopen event
                    mediaSource.removeEventListener("sourceopen", this.onmso);
                  }

                  if (this.mediaType === "FMp4") {
                    this.checkPendingTracks();
                  }

                  this.wfs.trigger(_events2.default.MEDIA_ATTACHED, {
                    media: this.media,
                    mediaType: this.mediaType,
                    url: this.url
                  });
                }
              },
              {
                key: "checkPendingTracks",
                value: function checkPendingTracks() {
                  this.createSourceBuffers({ tracks: "video", mimeType: "" });
                  this.pendingTracks = {};
                }
              },
              {
                key: "onBufferReset",
                value: function onBufferReset(data) {
                  if (this.mediaType === "H264Raw") {
                    this.createSourceBuffers({
                      tracks: "video",
                      mimeType: data.mimeType
                    });
                  }
                }
              },
              {
                key: "createSourceBuffers",
                value: function createSourceBuffers(tracks) {
                  var sourceBuffer = this.sourceBuffer,
                    mediaSource = this.mediaSource;
                  var mimeType = void 0;
                  if (tracks.mimeType === "") {
                    mimeType = "video/mp4;codecs=avc1.420028"; // avc1.42c01f avc1.42801e avc1.640028 avc1.420028
                  } else {
                    mimeType = "video/mp4;codecs=" + tracks.mimeType;
                  }

                  try {
                    var sb = (sourceBuffer[
                      "video"
                    ] = mediaSource.addSourceBuffer(mimeType));
                    sb.addEventListener("updateend", this.onsbue);
                    track.buffer = sb;
                  } catch (err) { }
                  this.wfs.trigger(_events2.default.BUFFER_CREATED, {
                    tracks: tracks
                  });
                  this.media.play();
                }
              },
              {
                key: "doAppending",
                value: function doAppending() {
                  var wfs = this.wfs,
                    sourceBuffer = this.sourceBuffer,
                    segments = this.segments;
                  if (Object.keys(sourceBuffer).length) {
                    if (this.media.error) {
                      this.segments = [];
                      console.log(
                        "trying to append although a media error occured, flush segment and abort"
                      );
                      return;
                    }
                    if (this.appending) {
                      return;
                    }

                    if (segments && segments.length) {
                      var segment = segments.shift();
                      try {
                        if (sourceBuffer[segment.type]) {
                          this.parent = segment.parent;
                          sourceBuffer[segment.type].appendBuffer(segment.data);
                          this.appendError = 0;
                          this.appended++;
                          this.appending = true;
                        } else {
                        }
                      } catch (err) {
                        // in case any error occured while appending, put back segment in segments table
                        segments.unshift(segment);
                        var event = { type: ErrorTypes.MEDIA_ERROR };
                        if (err.code !== 22) {
                          if (this.appendError) {
                            this.appendError++;
                          } else {
                            this.appendError = 1;
                          }
                          event.details = ErrorDetails.BUFFER_APPEND_ERROR;
                          event.frag = this.fragCurrent;
                          if (
                            this.appendError > wfs.config.appendErrorMaxRetry
                          ) {
                            segments = [];
                            event.fatal = true;
                            return;
                          } else {
                            event.fatal = false;
                          }
                        } else {
                          this.segments = [];
                          event.details = ErrorDetails.BUFFER_FULL_ERROR;
                          return;
                        }
                      }
                    }
                  }
                }
              }
            ]);

            return BufferController;
          })(_eventHandler2.default);

          exports.default = BufferController;
        },
        { "../event-handler": 7, "../events": 8 }
      ],
      3: [
        function (require, module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          })();

          var _events = require("../events");

          var _events2 = _interopRequireDefault(_events);

          var _eventHandler = require("../event-handler");

          var _eventHandler2 = _interopRequireDefault(_eventHandler);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true
                }
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          /*
           * Flow Controller
           */

          var FlowController = (function (_EventHandler) {
            _inherits(FlowController, _EventHandler);

            function FlowController(wfs) {
              _classCallCheck(this, FlowController);

              var _this = _possibleConstructorReturn(
                this,
                (
                  FlowController.__proto__ ||
                  Object.getPrototypeOf(FlowController)
                ).call(
                  this,
                  wfs,
                  _events2.default.MEDIA_ATTACHED,
                  _events2.default.BUFFER_CREATED,
                  _events2.default.FILE_PARSING_DATA,
                  _events2.default.FILE_HEAD_LOADED,
                  _events2.default.FILE_DATA_LOADED,
                  _events2.default.WEBSOCKET_ATTACHED,
                  _events2.default.FRAG_PARSING_DATA,
                  _events2.default.FRAG_PARSING_INIT_SEGMENT
                )
              );

              _this.fileStart = 0;
              _this.fileEnd = 0;
              _this.pendingAppending = 0;
              _this.mediaType = undefined;
              return _this;
            }

            _createClass(FlowController, [
              {
                key: "destroy",
                value: function destroy() {
                  _eventHandler2.default.prototype.destroy.call(this);
                }
              },
              {
                key: "onMediaAttached",
                value: function onMediaAttached(data) {
                  if (data.url !== undefined) {
                    var client = new WebSocket(
                        data.url
                    );
                    this.wfs.attachWebsocket(client);
                  } else {
                    console.log("URL ERROR!!!");
                  }
                }
              },
              {
                key: "onBufferCreated",
                value: function onBufferCreated(data) {
                  this.mediaType = data.mediaType;
                }
              },
              {
                key: "onFileHeadLoaded",
                value: function onFileHeadLoaded(data) { }
              },
              {
                key: "onFileDataLoaded",
                value: function onFileDataLoaded(data) { }
              },
              {
                key: "onFileParsingData",
                value: function onFileParsingData(data) { }
              },
              {
                key: "onWebsocketAttached",
                value: function onWebsocketAttached(data) {
                  this.wfs.trigger(_events2.default.BUFFER_APPENDING, {
                    type: "video",
                    data: data.payload,
                    parent: "main"
                  });
                }
              },
              {
                key: "onFragParsingInitSegment",
                value: function onFragParsingInitSegment(data) {
                  var tracks = data.tracks,
                    trackName,
                    track;

                  track = tracks.video;
                  if (track) {
                    track.id = data.id;
                  }

                  for (trackName in tracks) {
                    track = tracks[trackName];
                    var initSegment = track.initSegment;
                    if (initSegment) {
                      this.pendingAppending++;
                      this.wfs.trigger(_events2.default.BUFFER_APPENDING, {
                        type: trackName,
                        data: initSegment,
                        parent: "main"
                      });
                    }
                  }
                }
              },
              {
                key: "onFragParsingData",
                value: function onFragParsingData(data) {
                  var _this2 = this;

                  if (data.type === "video") {
                  }

                  [data.data1, data.data2].forEach(function (buffer) {
                    if (buffer) {
                      _this2.pendingAppending++;
                      _this2.wfs.trigger(_events2.default.BUFFER_APPENDING, {
                        type: data.type,
                        data: buffer,
                        parent: "main"
                      });
                    }
                  });
                }
              }
            ]);

            return FlowController;
          })(_eventHandler2.default);

          exports.default = FlowController;
        },
        { "../event-handler": 7, "../events": 8 }
      ],
      4: [
        function (require, module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          })();
          /**
           * Parser for exponential Golomb codes, a variable-bitwidth number encoding scheme used by h264.
           */

          var _logger = require("../utils/logger");

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          var ExpGolomb = (function () {
            function ExpGolomb(data) {
              _classCallCheck(this, ExpGolomb);

              this.data = data;
              // the number of bytes left to examine in this.data
              this.bytesAvailable = this.data.byteLength;
              // the current word being examined
              this.word = 0; // :uint
              // the number of bits left to examine in the current word
              this.bitsAvailable = 0; // :uint
            }

            // ():void

            _createClass(ExpGolomb, [
              {
                key: "loadWord",
                value: function loadWord() {
                  var position = this.data.byteLength - this.bytesAvailable,
                    workingBytes = new Uint8Array(4),
                    availableBytes = Math.min(4, this.bytesAvailable);
                  if (availableBytes === 0) {
                    throw new Error("no bytes available");
                  }
                  workingBytes.set(
                    this.data.subarray(position, position + availableBytes)
                  );
                  this.word = new DataView(workingBytes.buffer).getUint32(0);
                  // track the amount of this.data that has been processed
                  this.bitsAvailable = availableBytes * 8;
                  this.bytesAvailable -= availableBytes;
                }

                // (count:int):void
              },
              {
                key: "skipBits",
                value: function skipBits(count) {
                  var skipBytes; // :int
                  if (this.bitsAvailable > count) {
                    this.word <<= count;
                    this.bitsAvailable -= count;
                  } else {
                    count -= this.bitsAvailable;
                    skipBytes = count >> 3;
                    count -= skipBytes >> 3;
                    this.bytesAvailable -= skipBytes;
                    this.loadWord();
                    this.word <<= count;
                    this.bitsAvailable -= count;
                  }
                }

                // (size:int):uint
              },
              {
                key: "readBits",
                value: function readBits(size) {
                  var bits = Math.min(this.bitsAvailable, size),
                    // :uint
                    valu = this.word >>> (32 - bits); // :uint
                  if (size > 32) {
                    _logger.logger.error(
                      "Cannot read more than 32 bits at a time"
                    );
                  }
                  this.bitsAvailable -= bits;
                  if (this.bitsAvailable > 0) {
                    this.word <<= bits;
                  } else if (this.bytesAvailable > 0) {
                    this.loadWord();
                  }
                  bits = size - bits;
                  if (bits > 0) {
                    return (valu << bits) | this.readBits(bits);
                  } else {
                    return valu;
                  }
                }

                // ():uint
              },
              {
                key: "skipLZ",
                value: function skipLZ() {
                  var leadingZeroCount; // :uint
                  for (
                    leadingZeroCount = 0;
                    leadingZeroCount < this.bitsAvailable;
                    ++leadingZeroCount
                  ) {
                    if (0 !== (this.word & (0x80000000 >>> leadingZeroCount))) {
                      // the first bit of working word is 1
                      this.word <<= leadingZeroCount;
                      this.bitsAvailable -= leadingZeroCount;
                      return leadingZeroCount;
                    }
                  }
                  // we exhausted word and still have not found a 1
                  this.loadWord();
                  return leadingZeroCount + this.skipLZ();
                }

                // ():void
              },
              {
                key: "skipUEG",
                value: function skipUEG() {
                  this.skipBits(1 + this.skipLZ());
                }

                // ():void
              },
              {
                key: "skipEG",
                value: function skipEG() {
                  this.skipBits(1 + this.skipLZ());
                }

                // ():uint
              },
              {
                key: "readUEG",
                value: function readUEG() {
                  var clz = this.skipLZ(); // :uint
                  return this.readBits(clz + 1) - 1;
                }

                // ():int
              },
              {
                key: "readEG",
                value: function readEG() {
                  var valu = this.readUEG(); // :int
                  if (0x01 & valu) {
                    // the number is odd if the low order bit is set
                    return (1 + valu) >>> 1; // add 1 to make it even, and divide by 2
                  } else {
                    return -1 * (valu >>> 1); // divide by two then make it negative
                  }
                }

                // Some convenience functions
                // :Boolean
              },
              {
                key: "readBoolean",
                value: function readBoolean() {
                  return 1 === this.readBits(1);
                }

                // ():int
              },
              {
                key: "readUByte",
                value: function readUByte() {
                  return this.readBits(8);
                }

                // ():int
              },
              {
                key: "readUShort",
                value: function readUShort() {
                  return this.readBits(16);
                }
                // ():int
              },
              {
                key: "readUInt",
                value: function readUInt() {
                  return this.readBits(32);
                }

                /**
                 * Advance the ExpGolomb decoder past a scaling list. The scaling
                 * list is optionally transmitted as part of a sequence parameter
                 * set and is not relevant to transmuxing.
                 * @param count {number} the number of entries in this scaling list
                 * @see Recommendation ITU-T H.264, Section 7.3.2.1.1.1
                 */
              },
              {
                key: "skipScalingList",
                value: function skipScalingList(count) {
                  var lastScale = 8,
                    nextScale = 8,
                    j,
                    deltaScale;
                  for (j = 0; j < count; j++) {
                    if (nextScale !== 0) {
                      deltaScale = this.readEG();
                      nextScale = (lastScale + deltaScale + 256) % 256;
                    }
                    lastScale = nextScale === 0 ? lastScale : nextScale;
                  }
                }

                /**
                 * Read a sequence parameter set and return some interesting video
                 * properties. A sequence parameter set is the H264 metadata that
                 * describes the properties of upcoming video frames.
                 * @param data {Uint8Array} the bytes of a sequence parameter set
                 * @return {object} an object with configuration parsed from the
                 * sequence parameter set, including the dimensions of the
                 * associated video frames.
                 */
              },
              {
                key: "readSPS",
                value: function readSPS() {
                  var frameCropLeftOffset = 0,
                    frameCropRightOffset = 0,
                    frameCropTopOffset = 0,
                    frameCropBottomOffset = 0,
                    sarScale = 1,
                    profileIdc,
                    profileCompat,
                    levelIdc,
                    numRefFramesInPicOrderCntCycle,
                    picWidthInMbsMinus1,
                    picHeightInMapUnitsMinus1,
                    frameMbsOnlyFlag,
                    scalingListCount,
                    i;
                  this.readUByte();
                  profileIdc = this.readUByte(); // profile_idc
                  profileCompat = this.readBits(5); // constraint_set[0-4]_flag, u(5)
                  this.skipBits(3); // reserved_zero_3bits u(3),
                  levelIdc = this.readUByte(); //level_idc u(8)
                  this.skipUEG(); // seq_parameter_set_id
                  // some profiles have more optional data we don't need
                  if (
                    profileIdc === 100 ||
                    profileIdc === 110 ||
                    profileIdc === 122 ||
                    profileIdc === 244 ||
                    profileIdc === 44 ||
                    profileIdc === 83 ||
                    profileIdc === 86 ||
                    profileIdc === 118 ||
                    profileIdc === 128
                  ) {
                    var chromaFormatIdc = this.readUEG();
                    if (chromaFormatIdc === 3) {
                      this.skipBits(1); // separate_colour_plane_flag
                    }
                    this.skipUEG(); // bit_depth_luma_minus8
                    this.skipUEG(); // bit_depth_chroma_minus8
                    this.skipBits(1); // qpprime_y_zero_transform_bypass_flag
                    if (this.readBoolean()) {
                      // seq_scaling_matrix_present_flag
                      scalingListCount = chromaFormatIdc !== 3 ? 8 : 12;
                      for (i = 0; i < scalingListCount; i++) {
                        if (this.readBoolean()) {
                          // seq_scaling_list_present_flag[ i ]
                          if (i < 6) {
                            this.skipScalingList(16);
                          } else {
                            this.skipScalingList(64);
                          }
                        }
                      }
                    }
                  }
                  this.skipUEG(); // log2_max_frame_num_minus4
                  var picOrderCntType = this.readUEG();
                  if (picOrderCntType === 0) {
                    this.readUEG(); //log2_max_pic_order_cnt_lsb_minus4
                  } else if (picOrderCntType === 1) {
                    this.skipBits(1); // delta_pic_order_always_zero_flag
                    this.skipEG(); // offset_for_non_ref_pic
                    this.skipEG(); // offset_for_top_to_bottom_field
                    numRefFramesInPicOrderCntCycle = this.readUEG();
                    for (i = 0; i < numRefFramesInPicOrderCntCycle; i++) {
                      this.skipEG(); // offset_for_ref_frame[ i ]
                    }
                  }
                  this.skipUEG(); // max_num_ref_frames
                  this.skipBits(1); // gaps_in_frame_num_value_allowed_flag
                  picWidthInMbsMinus1 = this.readUEG();
                  picHeightInMapUnitsMinus1 = this.readUEG();
                  frameMbsOnlyFlag = this.readBits(1);
                  if (frameMbsOnlyFlag === 0) {
                    this.skipBits(1); // mb_adaptive_frame_field_flag
                  }
                  this.skipBits(1); // direct_8x8_inference_flag
                  if (this.readBoolean()) {
                    // frame_cropping_flag
                    frameCropLeftOffset = this.readUEG();
                    frameCropRightOffset = this.readUEG();
                    frameCropTopOffset = this.readUEG();
                    frameCropBottomOffset = this.readUEG();
                  }
                  if (this.readBoolean()) {
                    // vui_parameters_present_flag
                    if (this.readBoolean()) {
                      // aspect_ratio_info_present_flag
                      var sarRatio = void 0;
                      var aspectRatioIdc = this.readUByte();
                      switch (aspectRatioIdc) {
                        case 1:
                          sarRatio = [1, 1];
                          break;
                        case 2:
                          sarRatio = [12, 11];
                          break;
                        case 3:
                          sarRatio = [10, 11];
                          break;
                        case 4:
                          sarRatio = [16, 11];
                          break;
                        case 5:
                          sarRatio = [40, 33];
                          break;
                        case 6:
                          sarRatio = [24, 11];
                          break;
                        case 7:
                          sarRatio = [20, 11];
                          break;
                        case 8:
                          sarRatio = [32, 11];
                          break;
                        case 9:
                          sarRatio = [80, 33];
                          break;
                        case 10:
                          sarRatio = [18, 11];
                          break;
                        case 11:
                          sarRatio = [15, 11];
                          break;
                        case 12:
                          sarRatio = [64, 33];
                          break;
                        case 13:
                          sarRatio = [160, 99];
                          break;
                        case 14:
                          sarRatio = [4, 3];
                          break;
                        case 15:
                          sarRatio = [3, 2];
                          break;
                        case 16:
                          sarRatio = [2, 1];
                          break;
                        case 255: {
                          sarRatio = [
                            (this.readUByte() << 8) | this.readUByte(),
                            (this.readUByte() << 8) | this.readUByte()
                          ];
                          break;
                        }
                      }
                      if (sarRatio) {
                        sarScale = sarRatio[0] / sarRatio[1];
                      }
                    }
                  }
                  return {
                    width: Math.ceil(
                      ((picWidthInMbsMinus1 + 1) * 16 -
                        frameCropLeftOffset * 2 -
                        frameCropRightOffset * 2) *
                      sarScale
                    ),
                    height:
                      (2 - frameMbsOnlyFlag) *
                      (picHeightInMapUnitsMinus1 + 1) *
                      16 -
                      (frameMbsOnlyFlag ? 2 : 4) *
                      (frameCropTopOffset + frameCropBottomOffset)
                  };
                }
              },
              {
                key: "readSliceType",
                value: function readSliceType() {
                  // skip NALu type
                  this.readUByte();
                  // discard first_mb_in_slice
                  this.readUEG();
                  // return slice_type
                  return this.readUEG();
                }
              }
            ]);

            return ExpGolomb;
          })();

          exports.default = ExpGolomb;
        },
        { "../utils/logger": 15 }
      ],
      5: [
        function (require, module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          })();

          var _events = require("../events");

          var _events2 = _interopRequireDefault(_events);

          var _expGolomb = require("./exp-golomb");

          var _expGolomb2 = _interopRequireDefault(_expGolomb);

          var _eventHandler = require("../event-handler");

          var _eventHandler2 = _interopRequireDefault(_eventHandler);

          var _mp4Remuxer = require("../remux/mp4-remuxer");

          var _mp4Remuxer2 = _interopRequireDefault(_mp4Remuxer);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true
                }
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          } /**

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

          var h264Demuxer = (function (_EventHandler) {
            _inherits(h264Demuxer, _EventHandler);

            function h264Demuxer(wfs) {
              var config =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : null;

              _classCallCheck(this, h264Demuxer);

              var _this = _possibleConstructorReturn(
                this,
                (
                  h264Demuxer.__proto__ || Object.getPrototypeOf(h264Demuxer)
                ).call(this, wfs, _events2.default.H264_DATA_PARSED)
              );

              _this.config = _this.wfs.config || config;
              _this.wfs = wfs;
              _this.id = "main";

              _this.remuxer = new _mp4Remuxer2.default(
                _this.wfs,
                _this.id,
                _this.config
              );
              _this.contiguous = true;
              _this.timeOffset = 1;
              _this.sn = 0;
              _this.TIMESCALE = 90000;
              _this.timestamp = 0;
              _this.scaleFactor = _this.TIMESCALE / 1000;
              _this.H264_TIMEBASE = 3000;
              _this._avcTrack = {
                container: "video/mp2t",
                type: "video",
                id: 1,
                sequenceNumber: 0,
                samples: [],
                len: 0,
                nbNalu: 0,
                dropped: 0,
                count: 0
              };
              _this.browserType = 0;
              if (navigator.userAgent.toLowerCase().indexOf("firefox") !== -1) {
                _this.browserType = 1;
              }
              return _this;
            }

            _createClass(h264Demuxer, [
              {
                key: "destroy",
                value: function destroy() {
                  _eventHandler2.default.prototype.destroy.call(this);
                }
              },
              {
                key: "getTimestampM",
                value: function getTimestampM() {
                  this.timestamp += this.H264_TIMEBASE;
                  return this.timestamp;
                }
              },
              {
                key: "onH264DataParsed",
                value: function onH264DataParsed(event) {
                  this._parseAVCTrack(event.data);
                  if (
                    this.browserType === 1 ||
                    this._avcTrack.samples.length >= 20
                  ) {
                    // Firefox
                    this.remuxer.pushVideo(
                      0,
                      this.sn,
                      this._avcTrack,
                      this.timeOffset,
                      this.contiguous
                    );
                    this.sn += 1;
                  }
                }
              },
              {
                key: "_parseAVCTrack",
                value: function _parseAVCTrack(array) {
                  var _this2 = this;

                  var track = this._avcTrack,
                    samples = track.samples,
                    units = this._parseAVCNALu(array),
                    units2 = [],
                    debug = false,
                    key = false,
                    length = 0,
                    expGolombDecoder,
                    avcSample,
                    push,
                    i;
                  var debugString = "";
                  var pushAccesUnit = function () {
                    if (units2.length) {
                      if (
                        !this.config.forceKeyFrameOnDiscontinuity ||
                        key === true ||
                        (track.sps && (samples.length || this.contiguous))
                      ) {
                        var tss = this.getTimestampM();
                        avcSample = {
                          units: { units: units2, length: length },
                          pts: tss,
                          dts: tss,
                          key: key
                        };
                        samples.push(avcSample);
                        track.len += length;
                        track.nbNalu += units2.length;
                      } else {
                        track.dropped++;
                      }
                      units2 = [];
                      length = 0;
                    }
                  }.bind(this);

                  units.forEach(function (unit) {
                    switch (unit.type) {
                      //NDR
                      case 1:
                        push = true;
                        if (debug) {
                          debugString += "NDR ";
                        }
                        break;
                      //IDR
                      case 5:
                        push = true;
                        if (debug) {
                          debugString += "IDR ";
                        }
                        key = true;
                        break;
                      //SEI
                      case 6:
                        unit.data = _this2.discardEPB(unit.data);
                        expGolombDecoder = new _expGolomb2.default(unit.data);
                        // skip frameType
                        expGolombDecoder.readUByte();
                        break;
                      //SPS
                      case 7:
                        push = false;
                        if (debug) {
                          debugString += "SPS ";
                        }
                        if (!track.sps) {
                          expGolombDecoder = new _expGolomb2.default(unit.data);
                          var config = expGolombDecoder.readSPS();
                          track.width = config.width;
                          track.height = config.height;
                          track.sps = [unit.data];
                          track.duration = 0;
                          var codecarray = unit.data.subarray(1, 4);
                          var codecstring = "avc1.";
                          for (i = 0; i < 3; i++) {
                            var h = codecarray[i].toString(16);
                            if (h.length < 2) {
                              h = "0" + h;
                            }
                            codecstring += h;
                          }
                          track.codec = codecstring;
                          _this2.wfs.trigger(_events2.default.BUFFER_RESET, {
                            mimeType: track.codec
                          });
                          push = true;
                        }
                        break;
                      //PPS
                      case 8:
                        push = false;
                        if (debug) {
                          debugString += "PPS ";
                        }
                        if (!track.pps) {
                          track.pps = [unit.data];
                          push = true;
                        }
                        break;
                      case 9:
                        push = false;
                        if (debug) {
                          debugString += "AUD ";
                        }
                        pushAccesUnit();
                        break;
                      default:
                        push = false;
                        debugString += "unknown NAL " + unit.type + " ";
                        break;
                    }

                    if (push) {
                      units2.push(unit);
                      length += unit.data.byteLength;
                    }
                  });

                  if (debug || debugString.length) {
                    logger.log(debugString);
                  }

                  pushAccesUnit();
                }
              },
              {
                key: "_parseAVCNALu",
                value: function _parseAVCNALu(array) {
                  var i = 0,
                    len = array.byteLength,
                    value,
                    overflow,
                    state = 0; //state = this.avcNaluState;
                  var units = [],
                    unit,
                    unitType,
                    lastUnitStart,
                    lastUnitType;
                  while (i < len) {
                    value = array[i++];
                    // finding 3 or 4-byte start codes (00 00 01 OR 00 00 00 01)
                    switch (state) {
                      case 0:
                        if (value === 0) {
                          state = 1;
                        }
                        break;
                      case 1:
                        if (value === 0) {
                          state = 2;
                        } else {
                          state = 0;
                        }
                        break;
                      case 2:
                      case 3:
                        if (value === 0) {
                          state = 3;
                        } else if (value === 1 && i < len) {
                          unitType = array[i] & 0x1f;
                          if (lastUnitStart) {
                            unit = {
                              data: array.subarray(
                                lastUnitStart,
                                i - state - 1
                              ),
                              type: lastUnitType
                            };
                            units.push(unit);
                          } else {
                          }
                          lastUnitStart = i;
                          lastUnitType = unitType;
                          state = 0;
                        } else {
                          state = 0;
                        }
                        break;
                      default:
                        break;
                    }
                  }

                  if (lastUnitStart) {
                    unit = {
                      data: array.subarray(lastUnitStart, len),
                      type: lastUnitType,
                      state: state
                    };
                    units.push(unit);
                  }

                  return units;
                }

                /**
                 * remove Emulation Prevention bytes from a RBSP
                 */
              },
              {
                key: "discardEPB",
                value: function discardEPB(data) {
                  var length = data.byteLength,
                    EPBPositions = [],
                    i = 1,
                    newLength,
                    newData;
                  // Find all `Emulation Prevention Bytes`
                  while (i < length - 2) {
                    if (
                      data[i] === 0 &&
                      data[i + 1] === 0 &&
                      data[i + 2] === 0x03
                    ) {
                      EPBPositions.push(i + 2);
                      i += 2;
                    } else {
                      i++;
                    }
                  }
                  // If no Emulation Prevention Bytes were found just return the original
                  // array
                  if (EPBPositions.length === 0) {
                    return data;
                  }
                  // Create a new array to hold the NAL unit data
                  newLength = length - EPBPositions.length;
                  newData = new Uint8Array(newLength);
                  var sourceIndex = 0;

                  for (i = 0; i < newLength; sourceIndex++ , i++) {
                    if (sourceIndex === EPBPositions[0]) {
                      // Skip this byte
                      sourceIndex++;
                      // Remove this position index
                      EPBPositions.shift();
                    }
                    newData[i] = data[sourceIndex];
                  }
                  return newData;
                }
              }
            ]);

            return h264Demuxer;
          })(_eventHandler2.default);

          exports.default = h264Demuxer;
        },
        {
          "../event-handler": 7,
          "../events": 8,
          "../remux/mp4-remuxer": 13,
          "./exp-golomb": 4
        }
      ],
      6: [
        function (require, module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          var ErrorTypes = (exports.ErrorTypes = {
            // Identifier for a network error (loading error / timeout ...)
            NETWORK_ERROR: "networkError",
            // Identifier for a media Error (video/parsing/mediasource error)
            MEDIA_ERROR: "mediaError",
            // Identifier for all other errors
            OTHER_ERROR: "otherError"
          });

          var ErrorDetails = (exports.ErrorDetails = {
            // Identifier for a manifest load error - data: { url : faulty URL, response : { code: error code, text: error text }}
            MANIFEST_LOAD_ERROR: "manifestLoadError",
            // Identifier for a manifest load timeout - data: { url : faulty URL, response : { code: error code, text: error text }}
            MANIFEST_LOAD_TIMEOUT: "manifestLoadTimeOut",
            // Identifier for a manifest parsing error - data: { url : faulty URL, reason : error reason}
            MANIFEST_PARSING_ERROR: "manifestParsingError",
            // Identifier for a manifest with only incompatible codecs error - data: { url : faulty URL, reason : error reason}
            MANIFEST_INCOMPATIBLE_CODECS_ERROR:
              "manifestIncompatibleCodecsError",
            // Identifier for a level load error - data: { url : faulty URL, response : { code: error code, text: error text }}
            LEVEL_LOAD_ERROR: "levelLoadError",
            // Identifier for a level load timeout - data: { url : faulty URL, response : { code: error code, text: error text }}
            LEVEL_LOAD_TIMEOUT: "levelLoadTimeOut",
            // Identifier for a level switch error - data: { level : faulty level Id, event : error description}
            LEVEL_SWITCH_ERROR: "levelSwitchError",
            // Identifier for an audio track load error - data: { url : faulty URL, response : { code: error code, text: error text }}
            AUDIO_TRACK_LOAD_ERROR: "audioTrackLoadError",
            // Identifier for an audio track load timeout - data: { url : faulty URL, response : { code: error code, text: error text }}
            AUDIO_TRACK_LOAD_TIMEOUT: "audioTrackLoadTimeOut",
            // Identifier for fragment load error - data: { frag : fragment object, response : { code: error code, text: error text }}
            FRAG_LOAD_ERROR: "fragLoadError",
            // Identifier for fragment loop loading error - data: { frag : fragment object}
            FRAG_LOOP_LOADING_ERROR: "fragLoopLoadingError",
            // Identifier for fragment load timeout error - data: { frag : fragment object}
            FRAG_LOAD_TIMEOUT: "fragLoadTimeOut",
            // Identifier for a fragment decryption error event - data: parsing error description
            FRAG_DECRYPT_ERROR: "fragDecryptError",
            // Identifier for a fragment parsing error event - data: parsing error description
            FRAG_PARSING_ERROR: "fragParsingError",
            // Identifier for decrypt key load error - data: { frag : fragment object, response : { code: error code, text: error text }}
            KEY_LOAD_ERROR: "keyLoadError",
            // Identifier for decrypt key load timeout error - data: { frag : fragment object}
            KEY_LOAD_TIMEOUT: "keyLoadTimeOut",
            // Triggered when an exception occurs while adding a sourceBuffer to MediaSource - data : {  err : exception , mimeType : mimeType }
            BUFFER_ADD_CODEC_ERROR: "bufferAddCodecError",
            // Identifier for a buffer append error - data: append error description
            BUFFER_APPEND_ERROR: "bufferAppendError",
            // Identifier for a buffer appending error event - data: appending error description
            BUFFER_APPENDING_ERROR: "bufferAppendingError",
            // Identifier for a buffer stalled error event
            BUFFER_STALLED_ERROR: "bufferStalledError",
            // Identifier for a buffer full event
            BUFFER_FULL_ERROR: "bufferFullError",
            // Identifier for a buffer seek over hole event
            BUFFER_SEEK_OVER_HOLE: "bufferSeekOverHole",
            // Identifier for an internal exception happening inside hls.js while handling an event
            INTERNAL_EXCEPTION: "internalException"
          });
        },
        {}
      ],
      7: [
        function (require, module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _typeof =
            typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
              ? function (obj) {
                return typeof obj;
              }
              : function (obj) {
                return obj &&
                  typeof Symbol === "function" &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              };

          var _createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          })();
          /*
           *
           * All objects in the event handling chain should inherit from this class
           *
           */

          var _events = require("./events");

          var _events2 = _interopRequireDefault(_events);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          var EventHandler = (function () {
            function EventHandler(wfs) {
              _classCallCheck(this, EventHandler);

              this.wfs = wfs;
              this.onEvent = this.onEvent.bind(this);

              for (
                var _len = arguments.length,
                events = Array(_len > 1 ? _len - 1 : 0),
                _key = 1;
                _key < _len;
                _key++
              ) {
                events[_key - 1] = arguments[_key];
              }

              this.handledEvents = events;
              this.useGenericHandler = true;

              this.registerListeners();
            }

            _createClass(EventHandler, [
              {
                key: "destroy",
                value: function destroy() {
                  this.unregisterListeners();
                }
              },
              {
                key: "isEventHandler",
                value: function isEventHandler() {
                  return (
                    _typeof(this.handledEvents) === "object" &&
                    this.handledEvents.length &&
                    typeof this.onEvent === "function"
                  );
                }
              },
              {
                key: "registerListeners",
                value: function registerListeners() {
                  if (this.isEventHandler()) {
                    this.handledEvents.forEach(
                      function (event) {
                        if (event === "wfsEventGeneric") {
                          //throw new Error('Forbidden event name: ' + event);
                        }
                        this.wfs.on(event, this.onEvent);
                      }.bind(this)
                    );
                  }
                }
              },
              {
                key: "unregisterListeners",
                value: function unregisterListeners() {
                  if (this.isEventHandler()) {
                    this.handledEvents.forEach(
                      function (event) {
                        this.wfs.off(event, this.onEvent);
                      }.bind(this)
                    );
                  }
                }

                /**
                 * arguments: event (string), data (any)
                 */
              },
              {
                key: "onEvent",
                value: function onEvent(event, data) {
                  this.onEventGeneric(event, data);
                }
              },
              {
                key: "onEventGeneric",
                value: function onEventGeneric(event, data) {
                  var eventToFunction = function eventToFunction(event, data) {
                    var funcName = "on" + event.replace("wfs", "");
                    if (typeof this[funcName] !== "function") {
                      //throw new Error(`Event ${event} has no generic handler in this ${this.constructor.name} class (tried ${funcName})`);
                    }
                    return this[funcName].bind(this, data);
                  };
                  try {
                    eventToFunction.call(this, event, data).call();
                  } catch (err) {
                    console.log(
                      "internal error happened while processing " +
                      event +
                      ":" +
                      err.message
                    );
                    //   this.hls.trigger(Event.ERROR, {type: ErrorTypes.OTHER_ERROR, details: ErrorDetails.INTERNAL_EXCEPTION, fatal: false, event : event, err : err});
                  }
                }
              }
            ]);

            return EventHandler;
          })();

          exports.default = EventHandler;
        },
        { "./events": 8 }
      ],
      8: [
        function (require, module, exports) {
          "use strict";

          module.exports = {
            MEDIA_ATTACHING: "wfsMediaAttaching",

            MEDIA_ATTACHED: "wfsMediaAttached",

            FRAG_LOADING: "wfsFragLoading",

            BUFFER_CREATED: "wfsBufferCreated",

            BUFFER_APPENDING: "wfsBufferAppending",

            BUFFER_RESET: "wfsBufferReset",

            FRAG_PARSING_DATA: "wfsFragParsingData",

            FRAG_PARSING_INIT_SEGMENT: "wfsFragParsingInitSegment",
            //------------------------------------------
            H264_DATA_PARSING: "wfsH264DataParsing",

            H264_DATA_PARSED: "wfsH264DataParsed",
            //------------------------------------------
            WEBSOCKET_ATTACHED: "wfsWebsocketAttached",

            WEBSOCKET_ATTACHING: "wfsWebsocketAttaching",

            WEBSOCKET_DATA_UPLOADING: "wfsWebsocketDataUploading",

            WEBSOCKET_MESSAGE_SENDING: "wfsWebsocketMessageSending",
            //------------------------------------------
            FILE_HEAD_LOADING: "wfsFileHeadLoading",

            FILE_HEAD_LOADED: "wfsFileHeadLoaded",

            FILE_DATA_LOADING: "wfsFileDataLoading",

            FILE_DATA_LOADED: "wfsFileDataLoaded",

            FILE_PARSING_DATA: "wfsFileParsingData"
            //------------------------------------------
          };
        },
        {}
      ],
      9: [
        function (require, module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          })();

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          /**
           *  AAC helper
           */

          var AAC = (function () {
            function AAC() {
              _classCallCheck(this, AAC);
            }

            _createClass(AAC, null, [
              {
                key: "getSilentFrame",
                value: function getSilentFrame(channelCount) {
                  if (channelCount === 1) {
                    return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x23, 0x80]);
                  } else if (channelCount === 2) {
                    return new Uint8Array([
                      0x21,
                      0x00,
                      0x49,
                      0x90,
                      0x02,
                      0x19,
                      0x00,
                      0x23,
                      0x80
                    ]);
                  } else if (channelCount === 3) {
                    return new Uint8Array([
                      0x00,
                      0xc8,
                      0x00,
                      0x80,
                      0x20,
                      0x84,
                      0x01,
                      0x26,
                      0x40,
                      0x08,
                      0x64,
                      0x00,
                      0x8e
                    ]);
                  } else if (channelCount === 4) {
                    return new Uint8Array([
                      0x00,
                      0xc8,
                      0x00,
                      0x80,
                      0x20,
                      0x84,
                      0x01,
                      0x26,
                      0x40,
                      0x08,
                      0x64,
                      0x00,
                      0x80,
                      0x2c,
                      0x80,
                      0x08,
                      0x02,
                      0x38
                    ]);
                  } else if (channelCount === 5) {
                    return new Uint8Array([
                      0x00,
                      0xc8,
                      0x00,
                      0x80,
                      0x20,
                      0x84,
                      0x01,
                      0x26,
                      0x40,
                      0x08,
                      0x64,
                      0x00,
                      0x82,
                      0x30,
                      0x04,
                      0x99,
                      0x00,
                      0x21,
                      0x90,
                      0x02,
                      0x38
                    ]);
                  } else if (channelCount === 6) {
                    return new Uint8Array([
                      0x00,
                      0xc8,
                      0x00,
                      0x80,
                      0x20,
                      0x84,
                      0x01,
                      0x26,
                      0x40,
                      0x08,
                      0x64,
                      0x00,
                      0x82,
                      0x30,
                      0x04,
                      0x99,
                      0x00,
                      0x21,
                      0x90,
                      0x02,
                      0x00,
                      0xb2,
                      0x00,
                      0x20,
                      0x08,
                      0xe0
                    ]);
                  }
                  return null;
                }
              }
            ]);

            return AAC;
          })();

          exports.default = AAC;
        },
        {}
      ],
      10: [
        function (require, module, exports) {
          "use strict";

          // This is mostly for support of the es6 module export
          // syntax with the babel compiler, it looks like it doesnt support
          // function exports like we are used to in node/commonjs
          module.exports = require("./wfs.js").default;
        },
        { "./wfs.js": 18 }
      ],
      11: [
        function (require, module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          })();

          var _events = require("../events");

          var _events2 = _interopRequireDefault(_events);

          var _eventHandler = require("../event-handler");

          var _eventHandler2 = _interopRequireDefault(_eventHandler);

          var _h264NalSlicesreader = require("../utils/h264-nal-slicesreader.js");

          var _h264NalSlicesreader2 = _interopRequireDefault(
            _h264NalSlicesreader
          );

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true
                }
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          /*
           * Websocket Loader
           */

          var WebsocketLoader = (function (_EventHandler) {
            _inherits(WebsocketLoader, _EventHandler);

            function WebsocketLoader(wfs) {
              _classCallCheck(this, WebsocketLoader);

              var _this = _possibleConstructorReturn(
                this,
                (
                  WebsocketLoader.__proto__ ||
                  Object.getPrototypeOf(WebsocketLoader)
                ).call(
                  this,
                  wfs,
                  _events2.default.WEBSOCKET_ATTACHING,
                  _events2.default.WEBSOCKET_DATA_UPLOADING,
                  _events2.default.WEBSOCKET_MESSAGE_SENDING
                )
              );

              _this.buf = null;
              _this.slicesReader = new _h264NalSlicesreader2.default(wfs);
              _this.mediaType = undefined;
              return _this;
            }

            _createClass(WebsocketLoader, [
              {
                key: "destroy",
                value: function destroy() {
                  !!this.client && this.client.close();
                  this.slicesReader.destroy();
                  _eventHandler2.default.prototype.destroy.call(this);
                }
              },
              {
                key: "onWebsocketAttaching",
                value: function onWebsocketAttaching(data) {
                  this.mediaType = data.mediaType;
                  if (data.websocket instanceof WebSocket) {
                    this.client = data.websocket;
                    this.client.onopen = this.initSocketClient.bind(this);
                    this.client.onclose = function (e) {
                      console.log("Websocket Disconnected!");
                    };
                  }
                }
              },
              {
                key: "initSocketClient",
                value: function initSocketClient(client) {
                  this.client.binaryType = "arraybuffer";
                  this.client.onmessage = this.receiveSocketMessage.bind(this);
                  this.wfs.trigger(_events2.default.WEBSOCKET_MESSAGE_SENDING, {
                    commandType: "open",
                    commandValue: "NA"
                  });
                  console.log("Websocket Open!");
                }
              },
              {
                key: "receiveSocketMessage",
                value: function receiveSocketMessage(event) {
                  this.buf = new Uint8Array(event.data);
                  var copy = new Uint8Array(this.buf);

                  if (this.mediaType === "FMp4") {
                    this.wfs.trigger(_events2.default.WEBSOCKET_ATTACHED, {
                      payload: copy
                    });
                  }
                  if (this.mediaType === "H264Raw") {
                    this.wfs.trigger(_events2.default.H264_DATA_PARSING, {
                      data: copy
                    });
                  }
                }
              },
              {
                key: "onWebsocketDataUploading",
                value: function onWebsocketDataUploading(event) {
                  this.client.send(event.data);
                }
              },
              {
                key: "onWebsocketMessageSending",
                value: function onWebsocketMessageSending(event) {
                  this.client.send(
                    JSON.stringify({
                      t: event.commandType,
                      v: event.commandValue
                    })
                  );
                }
              }
            ]);

            return WebsocketLoader;
          })(_eventHandler2.default);

          exports.default = WebsocketLoader;
        },
        {
          "../event-handler": 7,
          "../events": 8,
          "../utils/h264-nal-slicesreader.js": 14
        }
      ],
      12: [
        function (require, module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          })();

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          /**
           * Generate MP4 Box
           */

          //import Hex from '../utils/hex';
          var MP4 = (function () {
            function MP4() {
              _classCallCheck(this, MP4);
            }

            _createClass(MP4, null, [
              {
                key: "init",
                value: function init() {
                  MP4.types = {
                    avc1: [], // codingname
                    avcC: [],
                    btrt: [],
                    dinf: [],
                    dref: [],
                    esds: [],
                    ftyp: [],
                    hdlr: [],
                    mdat: [],
                    mdhd: [],
                    mdia: [],
                    mfhd: [],
                    minf: [],
                    moof: [],
                    moov: [],
                    mp4a: [],
                    mvex: [],
                    mvhd: [],
                    sdtp: [],
                    stbl: [],
                    stco: [],
                    stsc: [],
                    stsd: [],
                    stsz: [],
                    stts: [],
                    tfdt: [],
                    tfhd: [],
                    traf: [],
                    trak: [],
                    trun: [],
                    trex: [],
                    tkhd: [],
                    vmhd: [],
                    smhd: []
                  };

                  var i;
                  for (i in MP4.types) {
                    if (MP4.types.hasOwnProperty(i)) {
                      MP4.types[i] = [
                        i.charCodeAt(0),
                        i.charCodeAt(1),
                        i.charCodeAt(2),
                        i.charCodeAt(3)
                      ];
                    }
                  }

                  var videoHdlr = new Uint8Array([
                    0x00, // version 0
                    0x00,
                    0x00,
                    0x00, // flags
                    0x00,
                    0x00,
                    0x00,
                    0x00, // pre_defined
                    0x76,
                    0x69,
                    0x64,
                    0x65, // handler_type: 'vide'
                    0x00,
                    0x00,
                    0x00,
                    0x00, // reserved
                    0x00,
                    0x00,
                    0x00,
                    0x00, // reserved
                    0x00,
                    0x00,
                    0x00,
                    0x00, // reserved
                    0x56,
                    0x69,
                    0x64,
                    0x65,
                    0x6f,
                    0x48,
                    0x61,
                    0x6e,
                    0x64,
                    0x6c,
                    0x65,
                    0x72,
                    0x00 // name: 'VideoHandler'
                  ]);

                  var audioHdlr = new Uint8Array([
                    0x00, // version 0
                    0x00,
                    0x00,
                    0x00, // flags
                    0x00,
                    0x00,
                    0x00,
                    0x00, // pre_defined
                    0x73,
                    0x6f,
                    0x75,
                    0x6e, // handler_type: 'soun'
                    0x00,
                    0x00,
                    0x00,
                    0x00, // reserved
                    0x00,
                    0x00,
                    0x00,
                    0x00, // reserved
                    0x00,
                    0x00,
                    0x00,
                    0x00, // reserved
                    0x53,
                    0x6f,
                    0x75,
                    0x6e,
                    0x64,
                    0x48,
                    0x61,
                    0x6e,
                    0x64,
                    0x6c,
                    0x65,
                    0x72,
                    0x00 // name: 'SoundHandler'
                  ]);

                  MP4.HDLR_TYPES = {
                    video: videoHdlr,
                    audio: audioHdlr
                  };

                  var dref = new Uint8Array([
                    0x00, // version 0
                    0x00,
                    0x00,
                    0x00, // flags
                    0x00,
                    0x00,
                    0x00,
                    0x01, // entry_count
                    0x00,
                    0x00,
                    0x00,
                    0x0c, // entry_size
                    0x75,
                    0x72,
                    0x6c,
                    0x20, // 'url' type
                    0x00, // version 0
                    0x00,
                    0x00,
                    0x01 // entry_flags
                  ]);

                  var stco = new Uint8Array([
                    0x00, // version
                    0x00,
                    0x00,
                    0x00, // flags
                    0x00,
                    0x00,
                    0x00,
                    0x00 // entry_count
                  ]);

                  MP4.STTS = MP4.STSC = MP4.STCO = stco;

                  MP4.STSZ = new Uint8Array([
                    0x00, // version
                    0x00,
                    0x00,
                    0x00, // flags
                    0x00,
                    0x00,
                    0x00,
                    0x00, // sample_size
                    0x00,
                    0x00,
                    0x00,
                    0x00
                  ]);
                  MP4.VMHD = new Uint8Array([
                    0x00, // version
                    0x00,
                    0x00,
                    0x01, // flags
                    0x00,
                    0x00, // graphicsmode
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00 // opcolor
                  ]);
                  MP4.SMHD = new Uint8Array([
                    0x00, // version
                    0x00,
                    0x00,
                    0x00, // flags
                    0x00,
                    0x00, // balance
                    0x00,
                    0x00 // reserved
                  ]);

                  MP4.STSD = new Uint8Array([
                    0x00, // version 0
                    0x00,
                    0x00,
                    0x00, // flags
                    0x00,
                    0x00,
                    0x00,
                    0x01
                  ]); // entry_count

                  var majorBrand = new Uint8Array([105, 115, 111, 109]); // isom
                  var avc1Brand = new Uint8Array([97, 118, 99, 49]); // avc1
                  var minorVersion = new Uint8Array([0, 0, 0, 1]);

                  MP4.FTYP = MP4.box(
                    MP4.types.ftyp,
                    majorBrand,
                    minorVersion,
                    majorBrand,
                    avc1Brand
                  );
                  MP4.DINF = MP4.box(
                    MP4.types.dinf,
                    MP4.box(MP4.types.dref, dref)
                  );
                }
              },
              {
                key: "box",
                value: function box(type) {
                  var payload = Array.prototype.slice.call(arguments, 1),
                    size = 8,
                    i = payload.length,
                    len = i,
                    result;
                  // calculate the total size we need to allocate
                  while (i--) {
                    size += payload[i].byteLength;
                  }
                  result = new Uint8Array(size);
                  result[0] = (size >> 24) & 0xff;
                  result[1] = (size >> 16) & 0xff;
                  result[2] = (size >> 8) & 0xff;
                  result[3] = size & 0xff;
                  result.set(type, 4);
                  // copy the payload into the result
                  for (i = 0, size = 8; i < len; i++) {
                    // copy payload[i] array @ offset size
                    result.set(payload[i], size);
                    size += payload[i].byteLength;
                  }
                  return result;
                }
              },
              {
                key: "hdlr",
                value: function hdlr(type) {
                  return MP4.box(MP4.types.hdlr, MP4.HDLR_TYPES[type]);
                }
              },
              {
                key: "mdat",
                value: function mdat(data) {
                  //  console.log( "mdat==> ",data.length );
                  return MP4.box(MP4.types.mdat, data);
                }
              },
              {
                key: "mdhd",
                value: function mdhd(timescale, duration) {
                  duration *= timescale;
                  return MP4.box(
                    MP4.types.mdhd,
                    new Uint8Array([
                      0x00, // version 0
                      0x00,
                      0x00,
                      0x00, // flags
                      0x00,
                      0x00,
                      0x00,
                      0x02, // creation_time
                      0x00,
                      0x00,
                      0x00,
                      0x03, // modification_time
                      (timescale >> 24) & 0xff,
                      (timescale >> 16) & 0xff,
                      (timescale >> 8) & 0xff,
                      timescale & 0xff, // timescale
                      duration >> 24,
                      (duration >> 16) & 0xff,
                      (duration >> 8) & 0xff,
                      duration & 0xff, // duration
                      0x55,
                      0xc4, // 'und' language (undetermined)
                      0x00,
                      0x00
                    ])
                  );
                }
              },
              {
                key: "mdia",
                value: function mdia(track) {
                  return MP4.box(
                    MP4.types.mdia,
                    MP4.mdhd(track.timescale, track.duration),
                    MP4.hdlr(track.type),
                    MP4.minf(track)
                  );
                }
              },
              {
                key: "mfhd",
                value: function mfhd(sequenceNumber) {
                  return MP4.box(
                    MP4.types.mfhd,
                    new Uint8Array([
                      0x00,
                      0x00,
                      0x00,
                      0x00, // flags
                      sequenceNumber >> 24,
                      (sequenceNumber >> 16) & 0xff,
                      (sequenceNumber >> 8) & 0xff,
                      sequenceNumber & 0xff
                    ]) // sequence_number
                  );
                }
              },
              {
                key: "minf",
                value: function minf(track) {
                  if (track.type === "audio") {
                    return MP4.box(
                      MP4.types.minf,
                      MP4.box(MP4.types.smhd, MP4.SMHD),
                      MP4.DINF,
                      MP4.stbl(track)
                    );
                  } else {
                    return MP4.box(
                      MP4.types.minf,
                      MP4.box(MP4.types.vmhd, MP4.VMHD),
                      MP4.DINF,
                      MP4.stbl(track)
                    );
                  }
                }
              },
              {
                key: "moof",
                value: function moof(sn, baseMediaDecodeTime, track) {
                  return MP4.box(
                    MP4.types.moof,
                    MP4.mfhd(sn),
                    MP4.traf(track, baseMediaDecodeTime)
                  );
                }
                /**
                 * @param tracks... (optional) {array} the tracks associated with this movie
                 */
              },
              {
                key: "moov",
                value: function moov(tracks) {
                  var i = tracks.length,
                    boxes = [];

                  while (i--) {
                    boxes[i] = MP4.trak(tracks[i]);
                  }

                  return MP4.box.apply(
                    null,
                    [
                      MP4.types.moov,
                      MP4.mvhd(tracks[0].timescale, tracks[0].duration)
                    ]
                      .concat(boxes)
                      .concat(MP4.mvex(tracks))
                  );
                }
              },
              {
                key: "mvex",
                value: function mvex(tracks) {
                  var i = tracks.length,
                    boxes = [];

                  while (i--) {
                    boxes[i] = MP4.trex(tracks[i]);
                  }
                  return MP4.box.apply(null, [MP4.types.mvex].concat(boxes));
                }
              },
              {
                key: "mvhd",
                value: function mvhd(timescale, duration) {
                  duration = 0;//*= timescale;
                  var bytes = new Uint8Array([
                    0x00, // version 0
                    0x00,
                    0x00,
                    0x00, // flags
                    0x00,
                    0x00,
                    0x00,
                    0x01, // creation_time
                    0x00,
                    0x00,
                    0x00,
                    0x02, // modification_time
                    (timescale >> 24) & 0xff,
                    (timescale >> 16) & 0xff,
                    (timescale >> 8) & 0xff,
                    timescale & 0xff, // timescale
                    (duration >> 24) & 0xff,
                    (duration >> 16) & 0xff,
                    (duration >> 8) & 0xff,
                    duration & 0xff, // duration
                    0x00,
                    0x01,
                    0x00,
                    0x00, // 1.0 rate
                    0x01,
                    0x00, // 1.0 volume
                    0x00,
                    0x00, // reserved
                    0x00,
                    0x00,
                    0x00,
                    0x00, // reserved
                    0x00,
                    0x00,
                    0x00,
                    0x00, // reserved
                    0x00,
                    0x01,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x01,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x40,
                    0x00,
                    0x00,
                    0x00, // transformation: unity matrix
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00,
                    0x00, // pre_defined
                    0xff,
                    0xff,
                    0xff,
                    0xff // next_track_ID
                  ]);
                  return MP4.box(MP4.types.mvhd, bytes);
                }
              },
              {
                key: "sdtp",
                value: function sdtp(track) {
                  var samples = track.samples || [],
                    bytes = new Uint8Array(4 + samples.length),
                    flags,
                    i;
                  // leave the full box header (4 bytes) all zero
                  // write the sample table
                  for (i = 0; i < samples.length; i++) {
                    flags = samples[i].flags;
                    bytes[i + 4] =
                      (flags.dependsOn << 4) |
                      (flags.isDependedOn << 2) |
                      flags.hasRedundancy;
                  }

                  return MP4.box(MP4.types.sdtp, bytes);
                }
              },
              {
                key: "stbl",
                value: function stbl(track) {
                  return MP4.box(
                    MP4.types.stbl,
                    MP4.stsd(track),
                    MP4.box(MP4.types.stts, MP4.STTS),
                    MP4.box(MP4.types.stsc, MP4.STSC),
                    MP4.box(MP4.types.stsz, MP4.STSZ),
                    MP4.box(MP4.types.stco, MP4.STCO)
                  );
                }
              },
              {
                key: "avc1",
                value: function avc1(track) {
                  var sps = [],
                    pps = [],
                    i,
                    data,
                    len;
                  // assemble the SPSs

                  for (i = 0; i < track.sps.length; i++) {
                    data = track.sps[i];
                    len = data.byteLength;
                    sps.push((len >>> 8) & 0xff);
                    sps.push(len & 0xff);
                    sps = sps.concat(Array.prototype.slice.call(data)); // SPS
                  }

                  // assemble the PPSs
                  for (i = 0; i < track.pps.length; i++) {
                    data = track.pps[i];
                    len = data.byteLength;
                    pps.push((len >>> 8) & 0xff);
                    pps.push(len & 0xff);
                    pps = pps.concat(Array.prototype.slice.call(data));
                  }

                  var avcc = MP4.box(
                    MP4.types.avcC,
                    new Uint8Array(
                      [
                        0x01, // version
                        sps[3], // profile
                        sps[4], // profile compat
                        sps[5], // level
                        0xfc | 3, // lengthSizeMinusOne, hard-coded to 4 bytes
                        0xe0 | track.sps.length // 3bit reserved (111) + numOfSequenceParameterSets
                      ]
                        .concat(sps)
                        .concat([
                          track.pps.length // numOfPictureParameterSets
                        ])
                        .concat(pps)
                    )
                  ),
                    // "PPS"
                    width = track.width,
                    height = track.height;
                  //console.log('avcc:' + Hex.hexDump(avcc));
                  return MP4.box(
                    MP4.types.avc1,
                    new Uint8Array([
                      0x00,
                      0x00,
                      0x00, // reserved
                      0x00,
                      0x00,
                      0x00, // reserved
                      0x00,
                      0x01, // data_reference_index
                      0x00,
                      0x00, // pre_defined
                      0x00,
                      0x00, // reserved
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00, // pre_defined
                      (width >> 8) & 0xff,
                      width & 0xff, // width
                      (height >> 8) & 0xff,
                      height & 0xff, // height
                      0x00,
                      0x48,
                      0x00,
                      0x00, // horizresolution
                      0x00,
                      0x48,
                      0x00,
                      0x00, // vertresolution
                      0x00,
                      0x00,
                      0x00,
                      0x00, // reserved
                      0x00,
                      0x01, // frame_count
                      0x12,
                      0x6a,
                      0x65,
                      0x66,
                      0x66, // wfs.js
                      0x2d,
                      0x79,
                      0x61,
                      0x6e,
                      0x2f,
                      0x2f,
                      0x2f,
                      0x67,
                      0x77,
                      0x66,
                      0x73,
                      0x2e,
                      0x6a,
                      0x73,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00, // compressorname
                      0x00,
                      0x18, // depth = 24
                      0x11,
                      0x11
                    ]), // pre_defined = -1
                    avcc,
                    MP4.box(
                      MP4.types.btrt,
                      new Uint8Array([
                        0x00,
                        0x1c,
                        0x9c,
                        0x80, // bufferSizeDB
                        0x00,
                        0x2d,
                        0xc6,
                        0xc0, // maxBitrate
                        0x00,
                        0x2d,
                        0xc6,
                        0xc0
                      ])
                    ) // avgBitrate
                  );
                }
              },
              {
                key: "esds",
                value: function esds(track) {
                  var configlen = track.config.length;
                  return new Uint8Array(
                    [
                      0x00, // version 0
                      0x00,
                      0x00,
                      0x00, // flags

                      0x03, // descriptor_type
                      0x17 + configlen, // length
                      0x00,
                      0x01, //es_id
                      0x00, // stream_priority

                      0x04, // descriptor_type
                      0x0f + configlen, // length
                      0x40, //codec : mpeg4_audio
                      0x15, // stream_type
                      0x00,
                      0x00,
                      0x00, // buffer_size
                      0x00,
                      0x00,
                      0x00,
                      0x00, // maxBitrate
                      0x00,
                      0x00,
                      0x00,
                      0x00, // avgBitrate

                      0x05 // descriptor_type
                    ]
                      .concat([configlen])
                      .concat(track.config)
                      .concat([0x06, 0x01, 0x02])
                  ); // GASpecificConfig)); // length + audio config descriptor
                }
              },
              {
                key: "mp4a",
                value: function mp4a(track) {
                  var audiosamplerate = track.audiosamplerate;
                  return MP4.box(
                    MP4.types.mp4a,
                    new Uint8Array([
                      0x00,
                      0x00,
                      0x00, // reserved
                      0x00,
                      0x00,
                      0x00, // reserved
                      0x00,
                      0x01, // data_reference_index
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00, // reserved
                      0x00,
                      track.channelCount, // channelcount
                      0x00,
                      0x10, // sampleSize:16bits
                      0x00,
                      0x00,
                      0x00,
                      0x00, // reserved2
                      (audiosamplerate >> 8) & 0xff,
                      audiosamplerate & 0xff, //
                      0x00,
                      0x00
                    ]),
                    MP4.box(MP4.types.esds, MP4.esds(track))
                  );
                }
              },
              {
                key: "stsd",
                value: function stsd(track) {
                  if (track.type === "audio") {
                    return MP4.box(MP4.types.stsd, MP4.STSD, MP4.mp4a(track));
                  } else {
                    return MP4.box(MP4.types.stsd, MP4.STSD, MP4.avc1(track));
                  }
                }
              },
              {
                key: "tkhd",
                value: function tkhd(track) {
                  var id = track.id,
                    duration = track.duration * track.timescale,
                    width = track.width,
                    height = track.height;

                  //   console.log( "tkhd==> ",track.id, track.duration, track.timescale, width,height );

                  return MP4.box(
                    MP4.types.tkhd,
                    new Uint8Array([
                      0x00, // version 0
                      0x00,
                      0x00,
                      0x07, // flags
                      0x00,
                      0x00,
                      0x00,
                      0x00, // creation_time
                      0x00,
                      0x00,
                      0x00,
                      0x00, // modification_time
                      (id >> 24) & 0xff,
                      (id >> 16) & 0xff,
                      (id >> 8) & 0xff,
                      id & 0xff, // track_ID
                      0x00,
                      0x00,
                      0x00,
                      0x00, // reserved
                      duration >> 24,
                      (duration >> 16) & 0xff,
                      (duration >> 8) & 0xff,
                      duration & 0xff, // duration
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00, // reserved
                      0x00,
                      0x00, // layer
                      0x00,
                      0x00, // alternate_group
                      0x00,
                      0x00, // non-audio track volume
                      0x00,
                      0x00, // reserved
                      0x00,
                      0x01,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x01,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x00,
                      0x40,
                      0x00,
                      0x00,
                      0x00, // transformation: unity matrix
                      (width >> 8) & 0xff,
                      width & 0xff,
                      0x00,
                      0x00, // width
                      (height >> 8) & 0xff,
                      height & 0xff,
                      0x00,
                      0x00 // height
                    ])
                  );
                }
              },
              {
                key: "traf",
                value: function traf(track, baseMediaDecodeTime) {
                  var sampleDependencyTable = MP4.sdtp(track),
                    id = track.id;

                  //  console.log( "traf==> ",id ,baseMediaDecodeTime);

                  return MP4.box(
                    MP4.types.traf,
                    MP4.box(
                      MP4.types.tfhd,
                      new Uint8Array([
                        0x00, // version 0
                        0x00,
                        0x00,
                        0x00, // flags
                        id >> 24,
                        (id >> 16) & 0xff,
                        (id >> 8) & 0xff,
                        id & 0xff
                      ]) // track_ID
                    ),
                    MP4.box(
                      MP4.types.tfdt,
                      new Uint8Array([
                        0x00, // version 0
                        0x00,
                        0x00,
                        0x00, // flags
                        baseMediaDecodeTime >> 24,
                        (baseMediaDecodeTime >> 16) & 0xff,
                        (baseMediaDecodeTime >> 8) & 0xff,
                        baseMediaDecodeTime & 0xff
                      ]) // baseMediaDecodeTime
                    ),
                    MP4.trun(
                      track,
                      sampleDependencyTable.length +
                      16 + // tfhd
                      16 + // tfdt
                      8 + // traf header
                      16 + // mfhd
                      8 + // moof header
                      8
                    ), // mdat header
                    sampleDependencyTable
                  );
                }

                /**
                 * Generate a track box.
                 * @param track {object} a track definition
                 * @return {Uint8Array} the track box
                 */
              },
              {
                key: "trak",
                value: function trak(track) {
                  track.duration = track.duration || 0xffffffff;
                  return MP4.box(
                    MP4.types.trak,
                    MP4.tkhd(track),
                    MP4.mdia(track)
                  );
                }
              },
              {
                key: "trex",
                value: function trex(track) {
                  var id = track.id;
                  return MP4.box(
                    MP4.types.trex,
                    new Uint8Array([
                      0x00, // version 0
                      0x00,
                      0x00,
                      0x00, // flags
                      id >> 24,
                      (id >> 16) & 0xff,
                      (id >> 8) & 0xff,
                      id & 0xff, // track_ID
                      0x00,
                      0x00,
                      0x00,
                      0x01, // default_sample_description_index
                      0x00,
                      0x00,
                      0x00,
                      0x00, // default_sample_duration
                      0x00,
                      0x00,
                      0x00,
                      0x00, // default_sample_size
                      0x00,
                      0x01,
                      0x00,
                      0x01 // default_sample_flags
                    ])
                  );
                }
              },
              {
                key: "trun",
                value: function trun(track, offset) {
                  var samples = track.samples || [],
                    len = samples.length,
                    arraylen = 12 + 16 * len,
                    array = new Uint8Array(arraylen),
                    i,
                    sample,
                    duration,
                    size,
                    flags,
                    cts;

                  //sample = samples[0];
                  //       console.log( "trun==> ",sample.duration, sample.cts ,sample.size,len );

                  offset += 8 + arraylen;
                  array.set(
                    [
                      0x00, // version 0
                      0x00,
                      0x0f,
                      0x01, // flags
                      (len >>> 24) & 0xff,
                      (len >>> 16) & 0xff,
                      (len >>> 8) & 0xff,
                      len & 0xff, // sample_count
                      (offset >>> 24) & 0xff,
                      (offset >>> 16) & 0xff,
                      (offset >>> 8) & 0xff,
                      offset & 0xff // data_offset
                    ],
                    0
                  );
                  for (i = 0; i < len; i++) {
                    sample = samples[i];
                    duration = sample.duration;
                    size = sample.size;
                    flags = sample.flags;
                    cts = sample.cts;
                    array.set(
                      [
                        (duration >>> 24) & 0xff,
                        (duration >>> 16) & 0xff,
                        (duration >>> 8) & 0xff,
                        duration & 0xff, // sample_duration
                        (size >>> 24) & 0xff,
                        (size >>> 16) & 0xff,
                        (size >>> 8) & 0xff,
                        size & 0xff, // sample_size
                        (flags.isLeading << 2) | flags.dependsOn,
                        (flags.isDependedOn << 6) |
                        (flags.hasRedundancy << 4) |
                        (flags.paddingValue << 1) |
                        flags.isNonSync,
                        flags.degradPrio & (0xf0 << 8),
                        flags.degradPrio & 0x0f, // sample_flags
                        (cts >>> 24) & 0xff,
                        (cts >>> 16) & 0xff,
                        (cts >>> 8) & 0xff,
                        cts & 0xff // sample_composition_time_offset
                      ],
                      12 + 16 * i
                    );
                  }
                  return MP4.box(MP4.types.trun, array);
                }
              },
              {
                key: "initSegment",
                value: function initSegment(tracks) {
                  if (!MP4.types) {
                    MP4.init();
                  }
                  var movie = MP4.moov(tracks),
                    result;
                  result = new Uint8Array(
                    MP4.FTYP.byteLength + movie.byteLength
                  );
                  result.set(MP4.FTYP);
                  result.set(movie, MP4.FTYP.byteLength);

                  return result;
                }
              }
            ]);

            return MP4;
          })();

          exports.default = MP4;
        },
        {}
      ],
      13: [
        function (require, module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          })();
          /**
           * fMP4 remuxer
           */

          var _aac = require("../helper/aac");

          var _aac2 = _interopRequireDefault(_aac);

          var _events = require("../events");

          var _events2 = _interopRequireDefault(_events);

          var _logger = require("../utils/logger");

          var _mp4Generator = require("../remux/mp4-generator");

          var _mp4Generator2 = _interopRequireDefault(_mp4Generator);

          var _errors = require("../errors");

          require("../utils/polyfill");

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          var MP4Remuxer = (function () {
            function MP4Remuxer(observer, id, config) {
              _classCallCheck(this, MP4Remuxer);

              this.observer = observer;
              this.id = id;
              this.config = config;
              this.ISGenerated = false;
              this.PES2MP4SCALEFACTOR = 4;
              this.PES_TIMESCALE = 90000;
              this.MP4_TIMESCALE = this.PES_TIMESCALE / this.PES2MP4SCALEFACTOR;
              this.nextAvcDts = 90300;
              this.H264_TIMEBASE = 3000;
            }

            _createClass(MP4Remuxer, [
              {
                key: "destroy",
                value: function destroy() { }
              },
              {
                key: "insertDiscontinuity",
                value: function insertDiscontinuity() {
                  this._initPTS = this._initDTS = undefined;
                }
              },
              {
                key: "switchLevel",
                value: function switchLevel() {
                  this.ISGenerated = false;
                }
              },
              {
                key: "pushVideo",
                value: function pushVideo(
                  level,
                  sn,
                  videoTrack,
                  timeOffset,
                  contiguous
                ) {
                  this.level = level;
                  this.sn = sn;
                  var videoData = void 0;
                  // generate Init Segment if needed
                  if (!this.ISGenerated) {
                    this.generateVideoIS(videoTrack, timeOffset);
                  }
                  if (this.ISGenerated) {
                    if (videoTrack.samples.length) {
                      this.remuxVideo_2(videoTrack, timeOffset, contiguous);
                    }
                  }
                }
              },
              {
                key: "remuxVideo_2",
                value: function remuxVideo_2(
                  track,
                  timeOffset,
                  contiguous,
                  audioTrackLength
                ) {
                  var offset = 8,
                    pesTimeScale = this.PES_TIMESCALE,
                    pes2mp4ScaleFactor = this.PES2MP4SCALEFACTOR,
                    mp4SampleDuration,
                    mdat,
                    moof,
                    firstPTS,
                    firstDTS,
                    nextDTS,
                    inputSamples = track.samples,
                    outputSamples = [];

                  /* concatenate the video data and construct the mdat in place
        (need 8 more bytes to fill length and mpdat type) */
                  mdat = new Uint8Array(track.len + 4 * track.nbNalu + 8);
                  var view = new DataView(mdat.buffer);
                  view.setUint32(0, mdat.byteLength);
                  mdat.set(_mp4Generator2.default.types.mdat, 4);
                  var sampleDuration = 0;
                  var ptsnorm = void 0,
                    dtsnorm = void 0,
                    mp4Sample = void 0,
                    lastDTS = void 0;

                  for (var i = 0; i < inputSamples.length; i++) {
                    var avcSample = inputSamples[i],
                      mp4SampleLength = 0,
                      compositionTimeOffset = void 0;
                    // convert NALU bitstream to MP4 format (prepend NALU with size field)
                    while (avcSample.units.units.length) {
                      var unit = avcSample.units.units.shift();
                      view.setUint32(offset, unit.data.byteLength);
                      offset += 4;
                      mdat.set(unit.data, offset);
                      offset += unit.data.byteLength;
                      mp4SampleLength += 4 + unit.data.byteLength;
                    }

                    var pts = avcSample.pts - this._initPTS;
                    var dts = avcSample.dts - this._initDTS;
                    dts = Math.min(pts, dts);

                    if (lastDTS !== undefined) {
                      ptsnorm = this._PTSNormalize(pts, lastDTS);
                      dtsnorm = this._PTSNormalize(dts, lastDTS);
                      sampleDuration = dtsnorm - lastDTS;
                      if (sampleDuration <= 0) {
                        _logger.logger.log(
                          "invalid sample duration at PTS/DTS: " +
                          avcSample.pts +
                          "/" +
                          avcSample.dts +
                          "|dts norm: " +
                          dtsnorm +
                          "|lastDTS: " +
                          lastDTS +
                          ":" +
                          sampleDuration
                        );
                        sampleDuration = 1;
                      }
                    } else {
                      var nextAvcDts = this.nextAvcDts,
                        delta;
                      ptsnorm = this._PTSNormalize(pts, nextAvcDts);
                      dtsnorm = this._PTSNormalize(dts, nextAvcDts);
                      if (nextAvcDts) {
                        delta = Math.round(dtsnorm - nextAvcDts);
                        if (/*contiguous ||*/ Math.abs(delta) < 600) {
                          if (delta) {
                            if (delta > 1) {
                              _logger.logger.log(
                                "AVC:" +
                                delta +
                                " ms hole between fragments detected,filling it"
                              );
                            } else if (delta < -1) {
                              _logger.logger.log(
                                "AVC:" +
                                -delta +
                                " ms overlapping between fragments detected"
                              );
                            }
                            dtsnorm = nextAvcDts;
                            ptsnorm = Math.max(ptsnorm - delta, dtsnorm);
                            _logger.logger.log(
                              "Video/PTS/DTS adjusted: " +
                              ptsnorm +
                              "/" +
                              dtsnorm +
                              ",delta:" +
                              delta
                            );
                          }
                        }
                      }
                      this.firstPTS = Math.max(0, ptsnorm);
                      this.firstDTS = Math.max(0, dtsnorm);
                      sampleDuration = 0.03;
                    }

                    outputSamples.push({
                      size: mp4SampleLength,
                      duration: this.H264_TIMEBASE,
                      cts: 0,
                      flags: {
                        isLeading: 0,
                        isDependedOn: 0,
                        hasRedundancy: 0,
                        degradPrio: 0,
                        dependsOn: avcSample.key ? 2 : 1,
                        isNonSync: avcSample.key ? 0 : 1
                      }
                    });
                    lastDTS = dtsnorm;
                  }

                  var lastSampleDuration = 0;
                  if (outputSamples.length >= 2) {
                    lastSampleDuration =
                      outputSamples[outputSamples.length - 2].duration;
                    outputSamples[0].duration = lastSampleDuration;
                  }
                  this.nextAvcDts = dtsnorm + lastSampleDuration;
                  var dropped = track.dropped;
                  track.len = 0;
                  track.nbNalu = 0;
                  track.dropped = 0;
                  if (
                    outputSamples.length &&
                    navigator.userAgent.toLowerCase().indexOf("chrome") > -1
                  ) {
                    var flags = outputSamples[0].flags;
                    flags.dependsOn = 2;
                    flags.isNonSync = 0;
                  }
                  track.samples = outputSamples;
                  moof = _mp4Generator2.default.moof(
                    track.sequenceNumber++,
                    dtsnorm,
                    track
                  );
                  track.samples = [];

                  var data = {
                    id: this.id,
                    level: this.level,
                    sn: this.sn,
                    data1: moof,
                    data2: mdat,
                    startPTS: ptsnorm,
                    endPTS: ptsnorm,
                    startDTS: dtsnorm,
                    endDTS: dtsnorm,
                    type: "video",
                    nb: outputSamples.length,
                    dropped: dropped
                  };

                  this.observer.trigger(
                    _events2.default.FRAG_PARSING_DATA,
                    data
                  );
                  return data;
                }
              },
              {
                key: "generateVideoIS",
                value: function generateVideoIS(videoTrack, timeOffset) {
                  var observer = this.observer,
                    videoSamples = videoTrack.samples,
                    pesTimeScale = this.PES_TIMESCALE,
                    tracks = {},
                    data = {
                      id: this.id,
                      level: this.level,
                      sn: this.sn,
                      tracks: tracks,
                      unique: false
                    },
                    computePTSDTS = this._initPTS === undefined,
                    initPTS,
                    initDTS;

                  if (computePTSDTS) {
                    initPTS = initDTS = Infinity;
                  }

                  if (videoTrack.sps && videoTrack.pps && videoSamples.length) {
                    videoTrack.timescale = 90000; //this.MP4_TIMESCALE;
                    tracks.video = {
                      container: "video/mp4",
                      codec: videoTrack.codec,
                      initSegment: _mp4Generator2.default.initSegment([
                        videoTrack
                      ]),
                      metadata: {
                        width: videoTrack.width,
                        height: videoTrack.height
                      }
                    };
                    if (computePTSDTS) {
                      initPTS = Math.min(
                        initPTS,
                        videoSamples[0].pts - this.H264_TIMEBASE
                      );
                      initDTS = Math.min(
                        initDTS,
                        videoSamples[0].dts - this.H264_TIMEBASE
                      );
                    }
                  }

                  if (Object.keys(tracks).length) {
                    observer.trigger(
                      _events2.default.FRAG_PARSING_INIT_SEGMENT,
                      data
                    );
                    this.ISGenerated = true;
                    if (computePTSDTS) {
                      this._initPTS = initPTS;
                      this._initDTS = initDTS;
                    }
                  } else {
                    console.log(
                      "generateVideoIS ERROR==> ",
                      _errors.ErrorTypes.MEDIA_ERROR
                    );
                  }
                }
              },
              {
                key: "remux",
                value: function remux(
                  level,
                  sn,
                  audioTrack,
                  videoTrack,
                  id3Track,
                  textTrack,
                  timeOffset,
                  contiguous
                ) {
                  this.level = level;
                  this.sn = sn;
                  // generate Init Segment if needed
                  if (!this.ISGenerated) {
                    this.generateIS(audioTrack, videoTrack, timeOffset);
                  }

                  if (this.ISGenerated) {
                    // Purposefully remuxing audio before video, so that remuxVideo can use nextAacPts, which is
                    // calculated in remuxAudio.
                    //logger.log('nb AAC samples:' + audioTrack.samples.length);
                    if (audioTrack.samples.length) {
                      var audioData = this.remuxAudio(
                        audioTrack,
                        timeOffset,
                        contiguous
                      );
                      //logger.log('nb AVC samples:' + videoTrack.samples.length);
                      if (videoTrack.samples.length) {
                        var audioTrackLength = void 0;
                        if (audioData) {
                          audioTrackLength =
                            audioData.endPTS - audioData.startPTS;
                        }
                        this.remuxVideo(
                          videoTrack,
                          timeOffset,
                          contiguous,
                          audioTrackLength
                        );
                      }
                    } else {
                      var videoData = void 0;
                      //logger.log('nb AVC samples:' + videoTrack.samples.length);
                      if (videoTrack.samples.length) {
                        videoData = this.remuxVideo(
                          videoTrack,
                          timeOffset,
                          contiguous
                        );
                      }
                      if (videoData && audioTrack.codec) {
                        this.remuxEmptyAudio(
                          audioTrack,
                          timeOffset,
                          contiguous,
                          videoData
                        );
                      }
                    }
                  }
                  //logger.log('nb ID3 samples:' + audioTrack.samples.length);
                  if (id3Track.samples.length) {
                    this.remuxID3(id3Track, timeOffset);
                  }
                  //logger.log('nb ID3 samples:' + audioTrack.samples.length);
                  if (textTrack.samples.length) {
                    this.remuxText(textTrack, timeOffset);
                  }
                  //notify end of parsing
                  this.observer.trigger(_events2.default.FRAG_PARSED, {
                    id: this.id,
                    level: this.level,
                    sn: this.sn
                  });
                }
              },
              {
                key: "generateIS",
                value: function generateIS(audioTrack, videoTrack, timeOffset) {
                  var observer = this.observer,
                    audioSamples = audioTrack.samples,
                    videoSamples = videoTrack.samples,
                    pesTimeScale = this.PES_TIMESCALE,
                    tracks = {},
                    data = {
                      id: this.id,
                      level: this.level,
                      sn: this.sn,
                      tracks: tracks,
                      unique: false
                    },
                    computePTSDTS = this._initPTS === undefined,
                    initPTS,
                    initDTS;

                  if (computePTSDTS) {
                    initPTS = initDTS = Infinity;
                  }
                  if (audioTrack.config && audioSamples.length) {
                    audioTrack.timescale = audioTrack.audiosamplerate;
                    // MP4 duration (track duration in seconds multiplied by timescale) is coded on 32 bits
                    // we know that each AAC sample contains 1024 frames....
                    // in order to avoid overflowing the 32 bit counter for large duration, we use smaller timescale (timescale/gcd)
                    // we just need to ensure that AAC sample duration will still be an integer (will be 1024/gcd)
                    if (
                      audioTrack.timescale * audioTrack.duration >
                      Math.pow(2, 32)
                    ) {
                      var greatestCommonDivisor = function greatestCommonDivisor(
                        a,
                        b
                      ) {
                        if (!b) {
                          return a;
                        }
                        return greatestCommonDivisor(b, a % b);
                      };
                      audioTrack.timescale =
                        audioTrack.audiosamplerate /
                        greatestCommonDivisor(audioTrack.audiosamplerate, 1024);
                    }
                    _logger.logger.log(
                      "audio mp4 timescale :" + audioTrack.timescale
                    );
                    tracks.audio = {
                      container: "audio/mp4",
                      codec: audioTrack.codec,
                      initSegment: _mp4Generator2.default.initSegment([
                        audioTrack
                      ]),
                      metadata: {
                        channelCount: audioTrack.channelCount
                      }
                    };
                    if (computePTSDTS) {
                      // remember first PTS of this demuxing context. for audio, PTS + DTS ...
                      initPTS = initDTS =
                        audioSamples[0].pts - pesTimeScale * timeOffset;
                    }
                  }

                  if (videoTrack.sps && videoTrack.pps && videoSamples.length) {
                    videoTrack.timescale = this.MP4_TIMESCALE;
                    tracks.video = {
                      container: "video/mp4",
                      codec: videoTrack.codec,
                      initSegment: _mp4Generator2.default.initSegment([
                        videoTrack
                      ]),
                      metadata: {
                        width: videoTrack.width,
                        height: videoTrack.height
                      }
                    };
                    if (computePTSDTS) {
                      initPTS = Math.min(
                        initPTS,
                        videoSamples[0].pts - pesTimeScale * timeOffset
                      );
                      initDTS = Math.min(
                        initDTS,
                        videoSamples[0].dts - pesTimeScale * timeOffset
                      );
                    }
                  }

                  if (Object.keys(tracks).length) {
                    observer.trigger(
                      _events2.default.FRAG_PARSING_INIT_SEGMENT,
                      data
                    );
                    this.ISGenerated = true;
                    if (computePTSDTS) {
                      this._initPTS = initPTS;
                      this._initDTS = initDTS;
                    }
                  } else {
                    observer.trigger(_events2.default.ERROR, {
                      type: _errors.ErrorTypes.MEDIA_ERROR,
                      id: this.id,
                      details: _errors.ErrorDetails.FRAG_PARSING_ERROR,
                      fatal: false,
                      reason: "no audio/video samples found"
                    });
                  }
                }
              },
              {
                key: "remuxVideo",
                value: function remuxVideo(
                  track,
                  timeOffset,
                  contiguous,
                  audioTrackLength
                ) {
                  var offset = 8,
                    pesTimeScale = this.PES_TIMESCALE,
                    pes2mp4ScaleFactor = this.PES2MP4SCALEFACTOR,
                    mp4SampleDuration,
                    mdat,
                    moof,
                    firstPTS,
                    firstDTS,
                    nextDTS,
                    lastPTS,
                    lastDTS,
                    inputSamples = track.samples,
                    outputSamples = [];

                  // PTS is coded on 33bits, and can loop from -2^32 to 2^32
                  // PTSNormalize will make PTS/DTS value monotonic, we use last known DTS value as reference value
                  var nextAvcDts = void 0;
                  if (contiguous) {
                    // if parsed fragment is contiguous with last one, let's use last DTS value as reference
                    nextAvcDts = this.nextAvcDts;
                  } else {
                    // if not contiguous, let's use target timeOffset
                    nextAvcDts = timeOffset * pesTimeScale;
                  }

                  // compute first DTS and last DTS, normalize them against reference value
                  var sample = inputSamples[0];
                  firstDTS = Math.max(
                    this._PTSNormalize(sample.dts, nextAvcDts) - this._initDTS,
                    0
                  );
                  firstPTS = Math.max(
                    this._PTSNormalize(sample.pts, nextAvcDts) - this._initDTS,
                    0
                  );

                  // check timestamp continuity accross consecutive fragments (this is to remove inter-fragment gap/hole)
                  var delta = Math.round((firstDTS - nextAvcDts) / 90);
                  // if fragment are contiguous, detect hole/overlapping between fragments
                  if (contiguous) {
                    if (delta) {
                      if (delta > 1) {
                        _logger.logger.log(
                          "AVC:" +
                          delta +
                          " ms hole between fragments detected,filling it"
                        );
                      } else if (delta < -1) {
                        _logger.logger.log(
                          "AVC:" +
                          -delta +
                          " ms overlapping between fragments detected"
                        );
                      }
                      // remove hole/gap : set DTS to next expected DTS
                      firstDTS = nextAvcDts;
                      inputSamples[0].dts = firstDTS + this._initDTS;
                      // offset PTS as well, ensure that PTS is smaller or equal than new DTS
                      firstPTS = Math.max(firstPTS - delta, nextAvcDts);
                      inputSamples[0].pts = firstPTS + this._initDTS;
                      _logger.logger.log(
                        "Video/PTS/DTS adjusted: " +
                        firstPTS +
                        "/" +
                        firstDTS +
                        ",delta:" +
                        delta
                      );
                    }
                  }
                  nextDTS = firstDTS;

                  // compute lastPTS/lastDTS
                  sample = inputSamples[inputSamples.length - 1];
                  lastDTS = Math.max(
                    this._PTSNormalize(sample.dts, nextAvcDts) - this._initDTS,
                    0
                  );
                  lastPTS = Math.max(
                    this._PTSNormalize(sample.pts, nextAvcDts) - this._initDTS,
                    0
                  );
                  lastPTS = Math.max(lastPTS, lastDTS);

                  var vendor = navigator.vendor,
                    userAgent = navigator.userAgent,
                    isSafari =
                      vendor &&
                      vendor.indexOf("Apple") > -1 &&
                      userAgent &&
                      !userAgent.match("CriOS");

                  // on Safari let's signal the same sample duration for all samples
                  // sample duration (as expected by trun MP4 boxes), should be the delta between sample DTS
                  // set this constant duration as being the avg delta between consecutive DTS.
                  if (isSafari) {
                    mp4SampleDuration = Math.round(
                      (lastDTS - firstDTS) /
                      (pes2mp4ScaleFactor * (inputSamples.length - 1))
                    );
                  }

                  // normalize all PTS/DTS now ...
                  for (var i = 0; i < inputSamples.length; i++) {
                    var _sample = inputSamples[i];
                    if (isSafari) {
                      // sample DTS is computed using a constant decoding offset (mp4SampleDuration) between samples
                      _sample.dts =
                        firstDTS + i * pes2mp4ScaleFactor * mp4SampleDuration;
                    } else {
                      // ensure sample monotonic DTS
                      _sample.dts = Math.max(
                        this._PTSNormalize(_sample.dts, nextAvcDts) -
                        this._initDTS,
                        firstDTS
                      );
                      // ensure dts is a multiple of scale factor to avoid rounding issues
                      _sample.dts =
                        Math.round(_sample.dts / pes2mp4ScaleFactor) *
                        pes2mp4ScaleFactor;
                    }
                    // we normalize PTS against nextAvcDts, we also substract initDTS (some streams don't start @ PTS O)
                    // and we ensure that computed value is greater or equal than sample DTS
                    _sample.pts = Math.max(
                      this._PTSNormalize(_sample.pts, nextAvcDts) -
                      this._initDTS,
                      _sample.dts
                    );
                    // ensure pts is a multiple of scale factor to avoid rounding issues
                    _sample.pts =
                      Math.round(_sample.pts / pes2mp4ScaleFactor) *
                      pes2mp4ScaleFactor;
                  }

                  /* concatenate the video data and construct the mdat in place
        (need 8 more bytes to fill length and mpdat type) */
                  mdat = new Uint8Array(track.len + 4 * track.nbNalu + 8);
                  var view = new DataView(mdat.buffer);
                  view.setUint32(0, mdat.byteLength);
                  mdat.set(_mp4Generator2.default.types.mdat, 4);

                  for (var _i = 0; _i < inputSamples.length; _i++) {
                    var avcSample = inputSamples[_i],
                      mp4SampleLength = 0,
                      compositionTimeOffset = void 0;
                    // convert NALU bitstream to MP4 format (prepend NALU with size field)
                    while (avcSample.units.units.length) {
                      var unit = avcSample.units.units.shift();
                      view.setUint32(offset, unit.data.byteLength);
                      offset += 4;
                      mdat.set(unit.data, offset);
                      offset += unit.data.byteLength;
                      mp4SampleLength += 4 + unit.data.byteLength;
                    }

                    if (!isSafari) {
                      // expected sample duration is the Decoding Timestamp diff of consecutive samples
                      if (_i < inputSamples.length - 1) {
                        mp4SampleDuration =
                          inputSamples[_i + 1].dts - avcSample.dts;
                      } else {
                        var config = this.config,
                          lastFrameDuration =
                            avcSample.dts -
                            inputSamples[_i > 0 ? _i - 1 : _i].dts;
                        if (config.stretchShortVideoTrack) {
                          // In some cases, a segment's audio track duration may exceed the video track duration.
                          // Since we've already remuxed audio, and we know how long the audio track is, we look to
                          // see if the delta to the next segment is longer than the minimum of maxBufferHole and
                          // maxSeekHole. If so, playback would potentially get stuck, so we artificially inflate
                          // the duration of the last frame to minimize any potential gap between segments.
                          var maxBufferHole = config.maxBufferHole,
                            maxSeekHole = config.maxSeekHole,
                            gapTolerance = Math.floor(
                              Math.min(maxBufferHole, maxSeekHole) *
                              pesTimeScale
                            ),
                            deltaToFrameEnd =
                              (audioTrackLength
                                ? firstPTS + audioTrackLength * pesTimeScale
                                : this.nextAacPts) - avcSample.pts;
                          if (deltaToFrameEnd > gapTolerance) {
                            // We subtract lastFrameDuration from deltaToFrameEnd to try to prevent any video
                            // frame overlap. maxBufferHole/maxSeekHole should be >> lastFrameDuration anyway.
                            mp4SampleDuration =
                              deltaToFrameEnd - lastFrameDuration;
                            if (mp4SampleDuration < 0) {
                              mp4SampleDuration = lastFrameDuration;
                            }
                            _logger.logger.log(
                              "It is approximately " +
                              deltaToFrameEnd / 90 +
                              " ms to the next segment; using duration " +
                              mp4SampleDuration / 90 +
                              " ms for the last video frame."
                            );
                          } else {
                            mp4SampleDuration = lastFrameDuration;
                          }
                        } else {
                          mp4SampleDuration = lastFrameDuration;
                        }
                      }
                      mp4SampleDuration /= pes2mp4ScaleFactor;
                      compositionTimeOffset = Math.round(
                        (avcSample.pts - avcSample.dts) / pes2mp4ScaleFactor
                      );
                    } else {
                      compositionTimeOffset = Math.max(
                        0,
                        mp4SampleDuration *
                        Math.round(
                          (avcSample.pts - avcSample.dts) /
                          (pes2mp4ScaleFactor * mp4SampleDuration)
                        )
                      );
                    }
                    outputSamples.push({
                      size: mp4SampleLength,
                      // constant duration
                      duration: mp4SampleDuration,
                      cts: compositionTimeOffset,
                      flags: {
                        isLeading: 0,
                        isDependedOn: 0,
                        hasRedundancy: 0,
                        degradPrio: 0,
                        dependsOn: avcSample.key ? 2 : 1,
                        isNonSync: avcSample.key ? 0 : 1
                      }
                    });
                  }
                  // next AVC sample DTS should be equal to last sample DTS + last sample duration (in PES timescale)
                  this.nextAvcDts =
                    lastDTS + mp4SampleDuration * pes2mp4ScaleFactor;
                  var dropped = track.dropped;
                  track.len = 0;
                  track.nbNalu = 0;
                  track.dropped = 0;
                  if (
                    outputSamples.length &&
                    navigator.userAgent.toLowerCase().indexOf("chrome") > -1
                  ) {
                    var flags = outputSamples[0].flags;
                    // chrome workaround, mark first sample as being a Random Access Point to avoid sourcebuffer append issue
                    // https://code.google.com/p/chromium/issues/detail?id=229412
                    flags.dependsOn = 2;
                    flags.isNonSync = 0;
                  }
                  track.samples = outputSamples;
                  moof = _mp4Generator2.default.moof(
                    track.sequenceNumber++,
                    firstDTS / pes2mp4ScaleFactor,
                    track
                  );
                  track.samples = [];

                  var data = {
                    id: this.id,
                    level: this.level,
                    sn: this.sn,
                    data1: moof,
                    data2: mdat,
                    startPTS: firstPTS / pesTimeScale,
                    endPTS:
                      (lastPTS + pes2mp4ScaleFactor * mp4SampleDuration) /
                      pesTimeScale,
                    startDTS: firstPTS / pesTimeScale,
                    endDTS:
                      (lastPTS + pes2mp4ScaleFactor * mp4SampleDuration) /
                      pesTimeScale,
                    // startDTS: firstDTS / pesTimeScale,
                    // endDTS: this.nextAvcDts / pesTimeScale,
                    type: "video",
                    nb: outputSamples.length,
                    dropped: dropped
                  };
                  this.observer.trigger(
                    _events2.default.FRAG_PARSING_DATA,
                    data
                  );
                  return data;
                }
              },
              {
                key: "remuxAudio",
                value: function remuxAudio(track, timeOffset, contiguous) {
                  var pesTimeScale = this.PES_TIMESCALE,
                    mp4timeScale = track.timescale,
                    pes2mp4ScaleFactor = pesTimeScale / mp4timeScale,
                    expectedSampleDuration =
                      (track.timescale * 1024) / track.audiosamplerate;
                  var view,
                    offset = 8,
                    aacSample,
                    mp4Sample,
                    unit,
                    mdat,
                    moof,
                    firstPTS,
                    firstDTS,
                    lastDTS,
                    pts,
                    dts,
                    ptsnorm,
                    dtsnorm,
                    samples = [],
                    samples0 = [];

                  track.samples.sort(function (a, b) {
                    return a.pts - b.pts;
                  });
                  samples0 = track.samples;

                  var nextAacPts = contiguous
                    ? this.nextAacPts
                    : timeOffset * pesTimeScale;

                  // If the audio track is missing samples, the frames seem to get "left-shifted" within the
                  // resulting mp4 segment, causing sync issues and leaving gaps at the end of the audio segment.
                  // In an effort to prevent this from happening, we inject frames here where there are gaps.
                  // When possible, we inject a silent frame; when that's not possible, we duplicate the last
                  // frame.
                  var firstPtsNorm = this._PTSNormalize(
                    samples0[0].pts - this._initPTS,
                    nextAacPts
                  ),
                    pesFrameDuration =
                      expectedSampleDuration * pes2mp4ScaleFactor;
                  var nextPtsNorm = firstPtsNorm + pesFrameDuration;
                  for (var i = 1; i < samples0.length;) {
                    // First, let's see how far off this frame is from where we expect it to be
                    var sample = samples0[i],
                      ptsNorm = this._PTSNormalize(
                        sample.pts - this._initPTS,
                        nextAacPts
                      ),
                      delta = ptsNorm - nextPtsNorm;

                    // If we're overlapping by more than half a duration, drop this sample
                    if (delta < -0.5 * pesFrameDuration) {
                      _logger.logger.log(
                        "Dropping frame due to " +
                        Math.abs(delta / 90) +
                        " ms overlap."
                      );
                      samples0.splice(i, 1);
                      track.len -= sample.unit.length;
                      // Don't touch nextPtsNorm or i
                    }
                    // Otherwise, if we're more than half a frame away from where we should be, insert missing frames
                    else if (delta > 0.5 * pesFrameDuration) {
                      var missing = Math.round(delta / pesFrameDuration);
                      _logger.logger.log(
                        "Injecting " +
                        missing +
                        " frame" +
                        (missing > 1 ? "s" : "") +
                        " of missing audio due to " +
                        Math.round(delta / 90) +
                        " ms gap."
                      );
                      for (var j = 0; j < missing; j++) {
                        var newStamp = samples0[i - 1].pts + pesFrameDuration,
                          fillFrame = _aac2.default.getSilentFrame(
                            track.channelCount
                          );
                        if (!fillFrame) {
                          _logger.logger.log(
                            "Unable to get silent frame for given audio codec; duplicating last frame instead."
                          );
                          fillFrame = sample.unit.slice(0);
                        }
                        samples0.splice(i, 0, {
                          unit: fillFrame,
                          pts: newStamp,
                          dts: newStamp
                        });
                        track.len += fillFrame.length;
                        i += 1;
                      }

                      // Adjust sample to next expected pts
                      nextPtsNorm += (missing + 1) * pesFrameDuration;
                      sample.pts = samples0[i - 1].pts + pesFrameDuration;
                      i += 1;
                    }
                    // Otherwise, we're within half a frame duration, so just adjust pts
                    else {
                      if (Math.abs(delta) > 0.1 * pesFrameDuration) {
                        _logger.logger.log(
                          "Invalid frame delta " +
                          (ptsNorm - nextPtsNorm + pesFrameDuration) +
                          " at PTS " +
                          Math.round(ptsNorm / 90) +
                          " (should be " +
                          pesFrameDuration +
                          ")."
                        );
                      }
                      nextPtsNorm += pesFrameDuration;
                      sample.pts = samples0[i - 1].pts + pesFrameDuration;
                      i += 1;
                    }
                  }

                  while (samples0.length) {
                    aacSample = samples0.shift();
                    unit = aacSample.unit;
                    pts = aacSample.pts - this._initDTS;
                    dts = aacSample.dts - this._initDTS;
                    //logger.log(`Audio/PTS:${Math.round(pts/90)}`);
                    // if not first sample
                    if (lastDTS !== undefined) {
                      ptsnorm = this._PTSNormalize(pts, lastDTS);
                      dtsnorm = this._PTSNormalize(dts, lastDTS);
                      mp4Sample.duration =
                        (dtsnorm - lastDTS) / pes2mp4ScaleFactor;
                    } else {
                      ptsnorm = this._PTSNormalize(pts, nextAacPts);
                      dtsnorm = this._PTSNormalize(dts, nextAacPts);
                      var _delta = Math.round(
                        (1000 * (ptsnorm - nextAacPts)) / pesTimeScale
                      );
                      // if fragment are contiguous, detect hole/overlapping between fragments
                      if (contiguous) {
                        // log delta
                        if (_delta) {
                          if (_delta > 0) {
                            _logger.logger.log(
                              _delta +
                              " ms hole between AAC samples detected,filling it"
                            );
                            // if we have frame overlap, overlapping for more than half a frame duraion
                          } else if (_delta < -12) {
                            // drop overlapping audio frames... browser will deal with it
                            _logger.logger.log(
                              -_delta +
                              " ms overlapping between AAC samples detected, drop frame"
                            );
                            track.len -= unit.byteLength;
                            continue;
                          }
                          // set PTS/DTS to expected PTS/DTS
                          ptsnorm = dtsnorm = nextAacPts;
                        }
                      }
                      // remember first PTS of our aacSamples, ensure value is positive
                      firstPTS = Math.max(0, ptsnorm);
                      firstDTS = Math.max(0, dtsnorm);
                      if (track.len > 0) {
                        /* concatenate the audio data and construct the mdat in place
              (need 8 more bytes to fill length and mdat type) */
                        mdat = new Uint8Array(track.len + 8);
                        view = new DataView(mdat.buffer);
                        view.setUint32(0, mdat.byteLength);
                        mdat.set(_mp4Generator2.default.types.mdat, 4);
                      } else {
                        // no audio samples
                        return;
                      }
                    }
                    mdat.set(unit, offset);
                    offset += unit.byteLength;
                    //console.log('PTS/DTS/initDTS/normPTS/normDTS/relative PTS : ${aacSample.pts}/${aacSample.dts}/${this._initDTS}/${ptsnorm}/${dtsnorm}/${(aacSample.pts/4294967296).toFixed(3)}');
                    mp4Sample = {
                      size: unit.byteLength,
                      cts: 0,
                      duration: 0,
                      flags: {
                        isLeading: 0,
                        isDependedOn: 0,
                        hasRedundancy: 0,
                        degradPrio: 0,
                        dependsOn: 1
                      }
                    };
                    samples.push(mp4Sample);
                    lastDTS = dtsnorm;
                  }
                  var lastSampleDuration = 0;
                  var nbSamples = samples.length;
                  //set last sample duration as being identical to previous sample
                  if (nbSamples >= 2) {
                    lastSampleDuration = samples[nbSamples - 2].duration;
                    mp4Sample.duration = lastSampleDuration;
                  }
                  if (nbSamples) {
                    // next aac sample PTS should be equal to last sample PTS + duration
                    this.nextAacPts =
                      ptsnorm + pes2mp4ScaleFactor * lastSampleDuration;
                    //logger.log('Audio/PTS/PTSend:' + aacSample.pts.toFixed(0) + '/' + this.nextAacDts.toFixed(0));
                    track.len = 0;
                    track.samples = samples;
                    moof = _mp4Generator2.default.moof(
                      track.sequenceNumber++,
                      firstDTS / pes2mp4ScaleFactor,
                      track
                    );
                    track.samples = [];
                    var audioData = {
                      id: this.id,
                      level: this.level,
                      sn: this.sn,
                      data1: moof,
                      data2: mdat,
                      startPTS: firstPTS / pesTimeScale,
                      endPTS: this.nextAacPts / pesTimeScale,
                      startDTS: firstDTS / pesTimeScale,
                      endDTS:
                        (dtsnorm + pes2mp4ScaleFactor * lastSampleDuration) /
                        pesTimeScale,
                      type: "audio",
                      nb: nbSamples
                    };
                    this.observer.trigger(
                      _events2.default.FRAG_PARSING_DATA,
                      audioData
                    );
                    return audioData;
                  }
                  return null;
                }
              },
              {
                key: "remuxEmptyAudio",
                value: function remuxEmptyAudio(
                  track,
                  timeOffset,
                  contiguous,
                  videoData
                ) {
                  var pesTimeScale = this.PES_TIMESCALE,
                    mp4timeScale = track.timescale
                      ? track.timescale
                      : track.audiosamplerate,
                    pes2mp4ScaleFactor = pesTimeScale / mp4timeScale,
                    // sync with video's timestamp
                    startDTS =
                      videoData.startDTS * pesTimeScale + this._initDTS,
                    endDTS = videoData.endDTS * pesTimeScale + this._initDTS,
                    // one sample's duration value
                    sampleDuration = 1024,
                    frameDuration = pes2mp4ScaleFactor * sampleDuration,
                    // samples count of this segment's duration
                    nbSamples = Math.ceil((endDTS - startDTS) / frameDuration),
                    // silent frame
                    silentFrame = _aac2.default.getSilentFrame(
                      track.channelCount
                    );

                  // Can't remux if we can't generate a silent frame...
                  if (!silentFrame) {
                    _logger.logger.trace(
                      "Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!"
                    );
                    return;
                  }

                  var samples = [];
                  for (var i = 0; i < nbSamples; i++) {
                    var stamp = startDTS + i * frameDuration;
                    samples.push({
                      unit: silentFrame.slice(0),
                      pts: stamp,
                      dts: stamp
                    });
                    track.len += silentFrame.length;
                  }
                  track.samples = samples;

                  this.remuxAudio(track, timeOffset, contiguous);
                }
              },
              {
                key: "remuxID3",
                value: function remuxID3(track, timeOffset) {
                  var length = track.samples.length,
                    sample;
                  // consume samples
                  if (length) {
                    for (var index = 0; index < length; index++) {
                      sample = track.samples[index];
                      // setting id3 pts, dts to relative time
                      // using this._initPTS and this._initDTS to calculate relative time
                      sample.pts =
                        (sample.pts - this._initPTS) / this.PES_TIMESCALE;
                      sample.dts =
                        (sample.dts - this._initDTS) / this.PES_TIMESCALE;
                    }
                    this.observer.trigger(
                      _events2.default.FRAG_PARSING_METADATA,
                      {
                        id: this.id,
                        level: this.level,
                        sn: this.sn,
                        samples: track.samples
                      }
                    );
                  }

                  track.samples = [];
                  timeOffset = timeOffset;
                }
              },
              {
                key: "remuxText",
                value: function remuxText(track, timeOffset) {
                  track.samples.sort(function (a, b) {
                    return a.pts - b.pts;
                  });

                  var length = track.samples.length,
                    sample;
                  // consume samples
                  if (length) {
                    for (var index = 0; index < length; index++) {
                      sample = track.samples[index];
                      // setting text pts, dts to relative time
                      // using this._initPTS and this._initDTS to calculate relative time
                      sample.pts =
                        (sample.pts - this._initPTS) / this.PES_TIMESCALE;
                    }
                    this.observer.trigger(
                      _events2.default.FRAG_PARSING_USERDATA,
                      {
                        id: this.id,
                        level: this.level,
                        sn: this.sn,
                        samples: track.samples
                      }
                    );
                  }

                  track.samples = [];
                  timeOffset = timeOffset;
                }
              },
              {
                key: "_PTSNormalize",
                value: function _PTSNormalize(value, reference) {
                  var offset;
                  if (reference === undefined) {
                    return value;
                  }
                  if (reference < value) {
                    // - 2^33
                    offset = -8589934592;
                  } else {
                    // + 2^33
                    offset = 8589934592;
                  }
                  /* PTS is 33bit (from 0 to 2^33 -1)
        if diff between value and reference is bigger than half of the amplitude (2^32) then it means that
        PTS looping occured. fill the gap */
                  while (Math.abs(value - reference) > 4294967296) {
                    value += offset;
                  }
                  return value;
                }
              },
              {
                key: "passthrough",
                get: function get() {
                  return false;
                }
              }
            ]);

            return MP4Remuxer;
          })();

          exports.default = MP4Remuxer;
        },
        {
          "../errors": 6,
          "../events": 8,
          "../helper/aac": 9,
          "../remux/mp4-generator": 12,
          "../utils/logger": 15,
          "../utils/polyfill": 16
        }
      ],
      14: [
        function (require, module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          })();

          var _events = require("../events");

          var _events2 = _interopRequireDefault(_events);

          var _eventHandler = require("../event-handler");

          var _eventHandler2 = _interopRequireDefault(_eventHandler);

          var _h264Demuxer = require("../demux/h264-demuxer");

          var _h264Demuxer2 = _interopRequireDefault(_h264Demuxer);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true
                }
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }
          /*
           * H264 NAL Slicer
           */

          var SlicesReader = (function (_EventHandler) {
            _inherits(SlicesReader, _EventHandler);

            function SlicesReader(wfs) {
              var config =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : null;

              _classCallCheck(this, SlicesReader);

              var _this = _possibleConstructorReturn(
                this,
                (
                  SlicesReader.__proto__ || Object.getPrototypeOf(SlicesReader)
                ).call(this, wfs, _events2.default.H264_DATA_PARSING)
              );

              _this.config = _this.wfs.config || config;
              _this.h264Demuxer = new _h264Demuxer2.default(wfs);
              _this.wfs = wfs;
              _this.lastBuf = null;
              _this.nals = [];
              return _this;
            }

            _createClass(SlicesReader, [
              {
                key: "destroy",
                value: function destroy() {
                  this.lastBuf = null;
                  this.nals = [];
                  _eventHandler2.default.prototype.destroy.call(this);
                }
              },
              {
                key: "_read",
                value: function _read(buffer) {
                  var typedAr = null;
                  this.nals = [];
                  if (!buffer || buffer.byteLength < 1) return;
                  if (this.lastBuf) {
                    typedAr = new Uint8Array(
                      buffer.byteLength + this.lastBuf.length
                    );
                    typedAr.set(this.lastBuf);
                    typedAr.set(new Uint8Array(buffer), this.lastBuf.length);
                  } else {
                    typedAr = new Uint8Array(buffer);
                  }
                  var lastNalEndPos = 0;
                  var b1 = -1; // byte before one
                  var b2 = -2; // byte before two
                  var nalStartPos = new Array();
                  for (var i = 0; i < typedAr.length; i += 2) {
                    var b_0 = typedAr[i];
                    var b_1 = typedAr[i + 1];
                    if (b1 == 0 && b_0 == 0 && b_1 == 0) {
                      nalStartPos.push(i - 1);
                    } else if (b_1 == 1 && b_0 == 0 && b1 == 0 && b2 == 0) {
                      nalStartPos.push(i - 2);
                    }
                    b2 = b_0;
                    b1 = b_1;
                  }
                  if (nalStartPos.length > 1) {
                    for (var i = 0; i < nalStartPos.length - 1; ++i) {
                      this.nals.push(
                        typedAr.subarray(nalStartPos[i], nalStartPos[i + 1] + 1)
                      );
                      lastNalEndPos = nalStartPos[i + 1];
                    }
                  } else {
                    lastNalEndPos = nalStartPos[0];
                  }
                  if (lastNalEndPos != 0 && lastNalEndPos < typedAr.length) {
                    this.lastBuf = typedAr.subarray(lastNalEndPos);
                  } else {
                    if (!!!this.lastBuf) {
                      this.lastBuf = typedAr;
                    }
                    var _newBuf = new Uint8Array(
                      this.lastBuf.length + buffer.byteLength
                    );
                    _newBuf.set(this.lastBuf);
                    _newBuf.set(new Uint8Array(buffer), this.lastBuf.length);
                    this.lastBuf = _newBuf;
                  }
                }
              },
              {
                key: "onH264DataParsing",
                value: function onH264DataParsing(event) {
                  this._read(event.data);
                  var $this = this;
                  this.nals.forEach(function (nal) {
                    $this.wfs.trigger(_events2.default.H264_DATA_PARSED, {
                      data: nal
                    });
                  });
                }
              }
            ]);

            return SlicesReader;
          })(_eventHandler2.default);

          exports.default = SlicesReader;
        },
        { "../demux/h264-demuxer": 5, "../event-handler": 7, "../events": 8 }
      ],
      15: [
        function (require, module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _typeof =
            typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
              ? function (obj) {
                return typeof obj;
              }
              : function (obj) {
                return obj &&
                  typeof Symbol === "function" &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              };

          function noop() { }

          var fakeLogger = {
            trace: noop,
            debug: noop,
            log: noop,
            warn: noop,
            info: noop,
            error: noop
          };

          var exportedLogger = fakeLogger;

          //let lastCallTime;
          // function formatMsgWithTimeInfo(type, msg) {
          //   const now = Date.now();
          //   const diff = lastCallTime ? '+' + (now - lastCallTime) : '0';
          //   lastCallTime = now;
          //   msg = (new Date(now)).toISOString() + ' | [' +  type + '] > ' + msg + ' ( ' + diff + ' ms )';
          //   return msg;
          // }

          function formatMsg(type, msg) {
            msg = "[" + type + "] > " + msg;
            return msg;
          }

          function consolePrintFn(type) {
            var func = window.console[type];
            if (func) {
              return function () {
                for (
                  var _len = arguments.length, args = Array(_len), _key = 0;
                  _key < _len;
                  _key++
                ) {
                  args[_key] = arguments[_key];
                }

                if (args[0]) {
                  args[0] = formatMsg(type, args[0]);
                }
                func.apply(window.console, args);
              };
            }
            return noop;
          }

          function exportLoggerFunctions(debugConfig) {
            for (
              var _len2 = arguments.length,
              functions = Array(_len2 > 1 ? _len2 - 1 : 0),
              _key2 = 1;
              _key2 < _len2;
              _key2++
            ) {
              functions[_key2 - 1] = arguments[_key2];
            }

            functions.forEach(function (type) {
              exportedLogger[type] = debugConfig[type]
                ? debugConfig[type].bind(debugConfig)
                : consolePrintFn(type);
            });
          }

          var enableLogs = (exports.enableLogs = function enableLogs(
            debugConfig
          ) {
            if (
              debugConfig === true ||
              (typeof debugConfig === "undefined"
                ? "undefined"
                : _typeof(debugConfig)) === "object"
            ) {
              exportLoggerFunctions(
                debugConfig,
                // Remove out from list here to hard-disable a log-level
                //'trace',
                "debug",
                "log",
                "info",
                "warn",
                "error"
              );
              // Some browsers don't allow to use bind on console object anyway
              // fallback to default if needed
              try {
                exportedLogger.log();
              } catch (e) {
                exportedLogger = fakeLogger;
              }
            } else {
              exportedLogger = fakeLogger;
            }
          });

          var logger = (exports.logger = exportedLogger);
        },
        {}
      ],
      16: [
        function (require, module, exports) {
          "use strict";

          if (
            typeof ArrayBuffer !== "undefined" &&
            !ArrayBuffer.prototype.slice
          ) {
            ArrayBuffer.prototype.slice = function (start, end) {
              var that = new Uint8Array(this);
              if (end === undefined) {
                end = that.length;
              }
              var result = new ArrayBuffer(end - start);
              var resultArray = new Uint8Array(result);
              for (var i = 0; i < resultArray.length; i++) {
                resultArray[i] = that[i + start];
              }
              return result;
            };
          }
        },
        {}
      ],
      17: [
        function (require, module, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          })();

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          /**
           * XHR based logger
           */

          var XhrLoader = (function () {
            function XhrLoader(config) {
              _classCallCheck(this, XhrLoader);

              if (config && config.xhrSetup) {
                this.xhrSetup = config.xhrSetup;
              }
            }

            _createClass(XhrLoader, [
              {
                key: "destroy",
                value: function destroy() {
                  this.abort();
                  this.loader = null;
                }
              },
              {
                key: "abort",
                value: function abort() {
                  var loader = this.loader;
                  if (loader && loader.readyState !== 4) {
                    this.stats.aborted = true;
                    loader.abort();
                  }

                  window.clearTimeout(this.requestTimeout);
                  this.requestTimeout = null;
                  window.clearTimeout(this.retryTimeout);
                  this.retryTimeout = null;
                }
              },
              {
                key: "loadHead",
                value: function loadHead(context, config, callbacks) {
                  this.context = context;
                  this.config = config;
                  this.callbacks = callbacks;
                  this.stats = { trequest: performance.now(), retry: 0 };
                  this.retryDelay = config.retryDelay;
                  var xhr = new XMLHttpRequest();
                  xhr.open("head", context.url);
                  xhr.onload = function () {
                    callbacks.onSuccess(
                      xhr.getResponseHeader("content-length")
                    );
                  };
                  xhr.send();
                }
              },
              {
                key: "load",
                value: function load(context, config, callbacks) {
                  this.context = context;
                  this.config = config;
                  this.callbacks = callbacks;
                  this.stats = { trequest: performance.now(), retry: 0 };
                  this.retryDelay = config.retryDelay;
                  this.loadInternal();
                }
              },
              {
                key: "loadInternal",
                value: function loadInternal() {
                  var xhr,
                    context = this.context;
                  if (typeof XDomainRequest !== "undefined") {
                    xhr = this.loader = new XDomainRequest();
                  } else {
                    xhr = this.loader = new XMLHttpRequest();
                  }
                  xhr.onloadend = this.loadend.bind(this);
                  xhr.onprogress = this.loadprogress.bind(this);
                  xhr.open("GET", context.url, true);
                  if (context.rangeEnd) {
                    xhr.setRequestHeader(
                      "Range",
                      "bytes=" +
                      context.rangeStart +
                      "-" +
                      (context.rangeEnd - 1)
                    );
                  }
                  xhr.responseType = context.responseType;
                  var stats = this.stats;
                  stats.tfirst = 0;
                  stats.loaded = 0;
                  if (this.xhrSetup) {
                    this.xhrSetup(xhr, context.url);
                  }
                  // setup timeout before we perform request
                  this.requestTimeout = window.setTimeout(
                    this.loadtimeout.bind(this),
                    this.config.timeout
                  );
                  xhr.send();
                }
              },
              {
                key: "loadend",
                value: function loadend(event) {
                  var xhr = event.currentTarget,
                    status = xhr.status,
                    stats = this.stats,
                    context = this.context,
                    config = this.config;
                  // don't proceed if xhr has been aborted
                  if (stats.aborted) {
                    return;
                  }
                  // in any case clear the current xhrs timeout
                  window.clearTimeout(this.requestTimeout);

                  // http status between 200 to 299 are all successful
                  if (status >= 200 && status < 300) {
                    stats.tload = Math.max(stats.tfirst, performance.now());
                    var data = void 0,
                      len = void 0;
                    if (context.responseType === "arraybuffer") {
                      data = xhr.response;
                      len = data.byteLength;
                    } else {
                      data = xhr.responseText;
                      len = data.length;
                    }
                    stats.loaded = stats.total = len;
                    var response = { url: xhr.responseURL, data: data };
                    this.callbacks.onSuccess(response, stats, context);
                  } else {
                    // if max nb of retries reached or if http status between 400 and 499 (such error cannot be recovered, retrying is useless), return error
                    if (
                      stats.retry >= config.maxRetry ||
                      (status >= 400 && status < 499)
                    ) {
                      //  logger.error(`${status} while loading ${context.url}` );
                      this.callbacks.onError(
                        { code: status, text: xhr.statusText },
                        context
                      );
                    } else {
                      // retry
                      //  logger.warn(`${status} while loading ${context.url}, retrying in ${this.retryDelay}...`);
                      // aborts and resets internal state
                      this.destroy();
                      // schedule retry
                      this.retryTimeout = window.setTimeout(
                        this.loadInternal.bind(this),
                        this.retryDelay
                      );
                      // set exponential backoff
                      this.retryDelay = Math.min(
                        2 * this.retryDelay,
                        config.maxRetryDelay
                      );
                      stats.retry++;
                    }
                  }
                }
              },
              {
                key: "loadtimeout",
                value: function loadtimeout() {
                  //  logger.warn(`timeout while loading ${this.context.url}` );
                  this.callbacks.onTimeout(this.stats, this.context);
                }
              },
              {
                key: "loadprogress",
                value: function loadprogress(event) {
                  var stats = this.stats;
                  if (stats.tfirst === 0) {
                    stats.tfirst = Math.max(performance.now(), stats.trequest);
                  }
                  stats.loaded = event.loaded;
                  if (event.lengthComputable) {
                    stats.total = event.total;
                  }
                  var onProgress = this.callbacks.onProgress;
                  if (onProgress) {
                    // last args is to provide on progress data
                    onProgress(stats, this.context, null);
                  }
                }
              }
            ]);

            return XhrLoader;
          })();

          exports.default = XhrLoader;
        },
        {}
      ],
      18: [
        function (require, module, exports) {
          /**
           * WFS interface, Jeff Yang 2016.10
           */
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          })();

          var _events = require("./events");

          var _events2 = _interopRequireDefault(_events);

          var _flowController = require("./controller/flow-controller");

          var _flowController2 = _interopRequireDefault(_flowController);

          var _bufferController = require("./controller/buffer-controller");

          var _bufferController2 = _interopRequireDefault(_bufferController);

          var _events3 = require("events");

          var _events4 = _interopRequireDefault(_events3);

          var _xhrLoader = require("./utils/xhr-loader");

          var _xhrLoader2 = _interopRequireDefault(_xhrLoader);

          var _websocketLoader = require("./loader/websocket-loader");

          var _websocketLoader2 = _interopRequireDefault(_websocketLoader);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          var Wfs = (function () {
            _createClass(Wfs, null, [
              {
                key: "isSupported",
                value: function isSupported() {
                  return (
                    window.MediaSource &&
                    typeof window.MediaSource.isTypeSupported === "function" &&
                    window.MediaSource.isTypeSupported(
                      'video/mp4; codecs="avc1.42c01f,mp4a.40.2"'
                    )
                  );
                }
              },
              {
                key: "version",
                get: function get() {
                  // replaced with browserify-versionify transform
                  return "" + "v.0.0.0.1";
                }
              },
              {
                key: "Events",
                get: function get() {
                  return _events2.default;
                }
              },
              {
                key: "DefaultConfig",
                get: function get() {
                  if (!Wfs.defaultConfig) {
                    Wfs.defaultConfig = {
                      autoStartLoad: true,
                      startPosition: -1,
                      debug: false,
                      fLoader: undefined,
                      loader: _xhrLoader2.default,
                      //loader: FetchLoader,
                      fmp4FileUrl: "xxxx.mp4",
                      fragLoadingTimeOut: 20000,
                      fragLoadingMaxRetry: 6,
                      fragLoadingRetryDelay: 1000,
                      fragLoadingMaxRetryTimeout: 64000,
                      fragLoadingLoopThreshold: 3,
                      forceKeyFrameOnDiscontinuity: true,
                      appendErrorMaxRetry: 3
                    };
                  }
                  return Wfs.defaultConfig;
                },
                set: function set(defaultConfig) {
                  Wfs.defaultConfig = defaultConfig;
                }
              }
            ]);

            function Wfs() {
              var config =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : {};

              _classCallCheck(this, Wfs);

              var defaultConfig = Wfs.DefaultConfig;
              for (var prop in defaultConfig) {
                if (prop in config) {
                  continue;
                }
                config[prop] = defaultConfig[prop];
              }
              this.config = config;
              // observer setup
              var observer = (this.observer = new _events4.default());
              observer.trigger = function trigger(event) {
                for (
                  var _len = arguments.length,
                  data = Array(_len > 1 ? _len - 1 : 0),
                  _key = 1;
                  _key < _len;
                  _key++
                ) {
                  data[_key - 1] = arguments[_key];
                }

                observer.emit.apply(observer, [event, event].concat(data));
              };

              observer.off = function off(event) {
                for (
                  var _len2 = arguments.length,
                  data = Array(_len2 > 1 ? _len2 - 1 : 0),
                  _key2 = 1;
                  _key2 < _len2;
                  _key2++
                ) {
                  data[_key2 - 1] = arguments[_key2];
                }

                observer.removeListener.apply(observer, [event].concat(data));
              };
              this.on = observer.on.bind(observer);
              this.off = observer.off.bind(observer);
              this.trigger = observer.trigger.bind(observer);

              this.flowController = new _flowController2.default(this);
              this.bufferController = new _bufferController2.default(this);
              //  this.fileLoader = new FileLoader(this);
              this.websocketLoader = new _websocketLoader2.default(this);
              this.mediaType = undefined;
            }

            _createClass(Wfs, [
              {
                key: "destroy",
                value: function destroy() {
                  this.flowController.destroy();
                  this.bufferController.destroy();
                  //   this.fileLoader.destroy();
                  this.websocketLoader.destroy();
                }
              },
              {
                key: "attachMedia",
                value: function attachMedia(media) {
                  var config =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : undefined;

                  var mediaType = "H264Raw";
                  var url = undefined;

                  if (config !== undefined) {
                    // 'H264Raw' 'FMp4'
                    if (config.type !== undefined) {
                      mediaType = config.type;
                    }

                    if (config.url !== undefined) {
                      url = config.url;
                    }
                  }

                  if (url === undefined) {
                    throw new Error("URL is NULL!!!");
                  }

                  this.url = url;
                  this.mediaType = mediaType;
                  this.media = media;
                  this.trigger(_events2.default.MEDIA_ATTACHING, {
                    media: media,
                    mediaType: mediaType,
                    url: url
                  });
                }
              },
              {
                key: "attachWebsocket",
                value: function attachWebsocket(websocket) {
                  this.trigger(_events2.default.WEBSOCKET_ATTACHING, {
                    websocket: websocket,
                    mediaType: this.mediaType,
                    url: this.url
                  });
                }
              }
            ]);

            return Wfs;
          })();

          exports.default = Wfs;
        },
        {
          "./controller/buffer-controller": 2,
          "./controller/flow-controller": 3,
          "./events": 8,
          "./loader/websocket-loader": 11,
          "./utils/xhr-loader": 17,
          events: 1
        }
      ]
    },
    {},
    [10]
  )(10);
});
//# sourceMappingURL=wfs.js.map
