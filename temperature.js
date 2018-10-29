

var net = require('net');

var client = new net.Socket();

client.connect(9750,'192.168.1.200', function(){

    var buffer = new Buffer.from([
        0x01, 0x10, 0x01, 0x70, 0x01, 0xf0, 0x05, 0x02,
        0x2f, 0x10, 0x01, 0x5e, 0x12, 0x03, 0x84, 0x18,
        0x04
    ]);

// 2nd line for bootcount 0x5e, 0x12, 0x03, 0x84, 0x18
// 2nd line for temperature 0x64, 0x00, 0x03, 0x71, 0x4b
// 2nd line for time 0x60, 0x12, 0x03, 0x31, 0x8e


// 60 12 14 9f 47 d7 5b 03 1b 59
// 64 00 16 56 8e c4 3e 03 54 6c

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


