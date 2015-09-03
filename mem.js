var util = require('util');

var bigArray = [];

var smallObject = {
	rsa1: 'AAAAB3NzaC1yc2EAAAADAQABAAABAQCuCt8m4MLXDZpUnOtdLejB8t8oW4GQ6cExOcfN/F6DHSCpvccA8K4feqEm3xzPS4m6mq+G9U2I5BwcmYcucGW+/q7fYbYfBI6mxqihSovg1+1xqWROa/nM89zdR433+yOUvPS32oAm6jgAXEpvBIBT1LQKkB3Zg3mKnoAyEyTDwYJwSKFu+0mnKgw1YSSoxOZbLWgbNGX8J2fkCHhEclP3myeVbfmE6fiKqcCgj9BVXozQ43dQdR+IyjR6KroAbNKDwuy5mGtJu0gHT3YeHnHyiF9VGwRxjL3NVgM8N4/4L5YXLOlhNzr3oSE9W+1DIZb1hrzMSDq1H2IDQr4LlqhB1',
	rsa2: 'AAAAB3NzaC1yc2EAAAADAQABAAABAQCuCt8m4MLXDZpUnOtdLejB8t8oW4GQ6cExOcfN/F6DHSCpvccA8K4feqEm3xzPS4m6mq+G9U2I5BwcmYcucGW+/q7fYbYfBI6mxqihSovg1+1xqWROa/nM89zdR433+yOUvPS32oAm6jgAXEpvBIBT1LQKkB3Zg3mKnoAyEyTDwYJwSKFu+0mnKgw1YSSoxOZbLWgbNGX8J2fkCHhEclP3myeVbfmE6fiKqcCgj9BVXozQ43dQdR+IyjR6KroAbNKDwuy5mGtJu0gHT3YeHnHyiF9VGwRxjL3NVgM8N4/4L5YXLOlhNzr3oSE9W+1DIZb1hrzMSDq1H2IDQr4LlqhB2',
	rsa3: 'AAAAB3NzaC1yc2EAAAADAQABAAABAQCuCt8m4MLXDZpUnOtdLejB8t8oW4GQ6cExOcfN/F6DHSCpvccA8K4feqEm3xzPS4m6mq+G9U2I5BwcmYcucGW+/q7fYbYfBI6mxqihSovg1+1xqWROa/nM89zdR433+yOUvPS32oAm6jgAXEpvBIBT1LQKkB3Zg3mKnoAyEyTDwYJwSKFu+0mnKgw1YSSoxOZbLWgbNGX8J2fkCHhEclP3myeVbfmE6fiKqcCgj9BVXozQ43dQdR+IyjR6KroAbNKDwuy5mGtJu0gHT3YeHnHyiF9VGwRxjL3NVgM8N4/4L5YXLOlhNzr3oSE9W+1DIZb1hrzMSDq1H2IDQr4LlqhB3',
	rsa4: 'AAAAB3NzaC1yc2EAAAADAQABAAABAQCuCt8m4MLXDZpUnOtdLejB8t8oW4GQ6cExOcfN/F6DHSCpvccA8K4feqEm3xzPS4m6mq+G9U2I5BwcmYcucGW+/q7fYbYfBI6mxqihSovg1+1xqWROa/nM89zdR433+yOUvPS32oAm6jgAXEpvBIBT1LQKkB3Zg3mKnoAyEyTDwYJwSKFu+0mnKgw1YSSoxOZbLWgbNGX8J2fkCHhEclP3myeVbfmE6fiKqcCgj9BVXozQ43dQdR+IyjR6KroAbNKDwuy5mGtJu0gHT3YeHnHyiF9VGwRxjL3NVgM8N4/4L5YXLOlhNzr3oSE9W+1DIZb1hrzMSDq1H2IDQr4LlqhB4',
	rsa5: 'AAAAB3NzaC1yc2EAAAADAQABAAABAQCuCt8m4MLXDZpUnOtdLejB8t8oW4GQ6cExOcfN/F6DHSCpvccA8K4feqEm3xzPS4m6mq+G9U2I5BwcmYcucGW+/q7fYbYfBI6mxqihSovg1+1xqWROa/nM89zdR433+yOUvPS32oAm6jgAXEpvBIBT1LQKkB3Zg3mKnoAyEyTDwYJwSKFu+0mnKgw1YSSoxOZbLWgbNGX8J2fkCHhEclP3myeVbfmE6fiKqcCgj9BVXozQ43dQdR+IyjR6KroAbNKDwuy5mGtJu0gHT3YeHnHyiF9VGwRxjL3NVgM8N4/4L5YXLOlhNzr3oSE9W+1DIZb1hrzMSDq1H2IDQr4LlqhB5'
};

console.time('start');

rounds = 1000 * 1000 * 10;

for (i = 0; i < rounds; i++) { 
    bigArray[i] =  smallObject;
}

console.timeEnd('start');
console.log('Size:',JSON.stringify(smallObject).replace(/[\[\]\,\"]/g,'').length*rounds/1024/1024,'Mb');

console.log('Mem Heap:',process.memoryUsage().heapTotal/1024/1024,'Mb');


console.timeEnd('start');
