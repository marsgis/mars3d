#hls视频流 加载

github地址： https://github.com/video-dev/hls.js 

 

介绍： 
	常用的流媒体协议主要有 HTTP 渐进下载和基于 RTSP/RTP 的实时流媒体协议，这二种基本是完全不同的东西，目前比较方便又好用的是用 HTTP 渐进下载方法。在这个中 apple 公司的 HTTP Live Streaming 是这个方面的代表。它最初是苹果公司针对iPhone、iPod、iTouch和iPad等移动设备而开发的流.现在见到在桌面也有很多应用了，HTML5 是直接支持这个.使用hls.js播放m3u8格式视频流，目前在IE8/IE11/edge/Chrome/火狐这些浏览器中都可以很好的播放

<video id="video"></video>

<script src="../lib/video/hls/hls.js"></script> 
<script>
	var video = document.getElementById('video');
	if(Hls.isSupported()) {
		var hls = new Hls();
		hls.loadSource('http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8');
		hls.attachMedia(video);
		hls.on(Hls.Events.MANIFEST_PARSED,function() {
		video.play();
	});
	} 
	else if (video.canPlayType('application/vnd.apple.mpegurl')) {
		video.src = 'http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8';
		video.addEventListener('loadedmetadata',function() {
		video.play();
		});
	}
</script>