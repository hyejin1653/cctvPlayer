Stream = require('node-rtsp-stream');
stream = new Stream({
    name : 'name',
    streamUrl : 'rtsp://218.150.18.36/0/H.264/media.smp',
    wsPort : 9999,
    ffmpegOptions : {'-stats' : '', '-r' : 30}
})