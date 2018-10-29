

var net = require('net');

var client = new net.Socket();
client.setDefaultEncoding('utf8');

client.connect(9750,'192.168.1.200', function(){

    var buffer = new Buffer.from([
        0x01, 0x10, 0x01, 0x70, 0x01, 0xf0, 0x05, 0x02,
        0x2f, 0x10, 0x01, 0x64, 0x00, 0x03, 0x71, 0x4b,
        0x04
    ]);

    console.log('sending');
    console.log(buffer);

    client.write(buffer);
});

client.on('data', function(data){
    console.log('response');
    console.log(data);
    client.destroy();
});

client.on('close', function() {
    console.log('Connection closed');
});


