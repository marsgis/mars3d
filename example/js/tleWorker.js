/* eslint-disable no-undef */
importScripts("../../lib/mars3d/plugins/space/worker/mars3d-tle-worker.js");
let mars3d = mars3dTle;

self.onmessage = function (e) {
  let arr = e.data.list;
  let time = e.data.time;

  let positionObj = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    try {
      let position = mars3d.Tle.getEcfPosition(item.tle1, item.tle2, time); //计算卫星位置
      if (position) {
        positionObj[item.id] = position;
      }
    } catch (err) {
      continue;
    }
  }

  //self代表子线程自身
  self.postMessage({ time: time, positionObj: positionObj });
  // self.close()
};
