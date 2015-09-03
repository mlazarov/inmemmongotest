
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;




var bigArray = [];

var smallObject = {
	rsa1: 'AAAAB3NzaC1yc2EAAAADAQABAAABAQCuCt8m4MLXDZpUnOtdLejB8t8oW4GQ6cExOcfN/F6DHSCpvccA8K4feqEm3xzPS4m6mq+G9U2I5BwcmYcucGW+/q7fYbYfBI6mxqihSovg1+1xqWROa/nM89zdR433+yOUvPS32oAm6jgAXEpvBIBT1LQKkB3Zg3mKnoAyEyTDwYJwSKFu+0mnKgw1YSSoxOZbLWgbNGX8J2fkCHhEclP3myeVbfmE6fiKqcCgj9BVXozQ43dQdR+IyjR6KroAbNKDwuy5mGtJu0gHT3YeHnHyiF9VGwRxjL3NVgM8N4/4L5YXLOlhNzr3oSE9W+1DIZb1hrzMSDq1H2IDQr4LlqhB1',
	rsa2: 'AAAAB3NzaC1yc2EAAAADAQABAAABAQCuCt8m4MLXDZpUnOtdLejB8t8oW4GQ6cExOcfN/F6DHSCpvccA8K4feqEm3xzPS4m6mq+G9U2I5BwcmYcucGW+/q7fYbYfBI6mxqihSovg1+1xqWROa/nM89zdR433+yOUvPS32oAm6jgAXEpvBIBT1LQKkB3Zg3mKnoAyEyTDwYJwSKFu+0mnKgw1YSSoxOZbLWgbNGX8J2fkCHhEclP3myeVbfmE6fiKqcCgj9BVXozQ43dQdR+IyjR6KroAbNKDwuy5mGtJu0gHT3YeHnHyiF9VGwRxjL3NVgM8N4/4L5YXLOlhNzr3oSE9W+1DIZb1hrzMSDq1H2IDQr4LlqhB2',
	rsa3: 'AAAAB3NzaC1yc2EAAAADAQABAAABAQCuCt8m4MLXDZpUnOtdLejB8t8oW4GQ6cExOcfN/F6DHSCpvccA8K4feqEm3xzPS4m6mq+G9U2I5BwcmYcucGW+/q7fYbYfBI6mxqihSovg1+1xqWROa/nM89zdR433+yOUvPS32oAm6jgAXEpvBIBT1LQKkB3Zg3mKnoAyEyTDwYJwSKFu+0mnKgw1YSSoxOZbLWgbNGX8J2fkCHhEclP3myeVbfmE6fiKqcCgj9BVXozQ43dQdR+IyjR6KroAbNKDwuy5mGtJu0gHT3YeHnHyiF9VGwRxjL3NVgM8N4/4L5YXLOlhNzr3oSE9W+1DIZb1hrzMSDq1H2IDQr4LlqhB3',
	rsa4: 'AAAAB3NzaC1yc2EAAAADAQABAAABAQCuCt8m4MLXDZpUnOtdLejB8t8oW4GQ6cExOcfN/F6DHSCpvccA8K4feqEm3xzPS4m6mq+G9U2I5BwcmYcucGW+/q7fYbYfBI6mxqihSovg1+1xqWROa/nM89zdR433+yOUvPS32oAm6jgAXEpvBIBT1LQKkB3Zg3mKnoAyEyTDwYJwSKFu+0mnKgw1YSSoxOZbLWgbNGX8J2fkCHhEclP3myeVbfmE6fiKqcCgj9BVXozQ43dQdR+IyjR6KroAbNKDwuy5mGtJu0gHT3YeHnHyiF9VGwRxjL3NVgM8N4/4L5YXLOlhNzr3oSE9W+1DIZb1hrzMSDq1H2IDQr4LlqhB4',
	rsa5: 'AAAAB3NzaC1yc2EAAAADAQABAAABAQCuCt8m4MLXDZpUnOtdLejB8t8oW4GQ6cExOcfN/F6DHSCpvccA8K4feqEm3xzPS4m6mq+G9U2I5BwcmYcucGW+/q7fYbYfBI6mxqihSovg1+1xqWROa/nM89zdR433+yOUvPS32oAm6jgAXEpvBIBT1LQKkB3Zg3mKnoAyEyTDwYJwSKFu+0mnKgw1YSSoxOZbLWgbNGX8J2fkCHhEclP3myeVbfmE6fiKqcCgj9BVXozQ43dQdR+IyjR6KroAbNKDwuy5mGtJu0gHT3YeHnHyiF9VGwRxjL3NVgM8N4/4L5YXLOlhNzr3oSE9W+1DIZb1hrzMSDq1H2IDQr4LlqhB5'
};

console.time('From start');

var rounds = 1000;

MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;

    var collection = db.collection('demo');
    done = 0;
    for (i = 0; i < rounds; i++) { 
        collection.insert({'_id': new ObjectId(i),'data':smallObject}, function(err, docs) {
            if(err) throw err;
            done++;
            if(done == rounds){
               console.log('All send!');
               db.close();
               console.log('Real End:');
               console.timeEnd('From start');
            }
        });
    }

});



console.log('Mem Heap:',process.memoryUsage().heapTotal/1024/1024,'Mb');


console.timeEnd('From start');
