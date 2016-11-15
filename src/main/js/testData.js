//Sample Data for getValidData
var someValidAndInvalidData = [
  {
    eventName: 'Neat Event 1',
    eventDate: '2016-7-20'
  },
  {
    eventName: 'Neat Event 2',
    eventDate: '2017-6-61'
  },
  {
    eventName: 'Neat Event 3',
    eventDate: '2014-7-28'
  },
  {
    eventName: '',
    eventDate: '2016-8-1'
  },
  {
    eventDate: '2016-8-1'
  },
  {
    eventName: 'Neat Event 6',
    eventDate: '2016-8-1'
  }
];

var promise1Data = [
  {
    eventName: 'Event Name 1a',
    eventDate: '2016-5-24'
  },
  {
    eventName: 'Event Name 2a',
    eventDate: '2017-6-1'
  },
  {
    eventName: 'Event Name 3a',
    eventDate: '2014-5-28'
  }
];

var promise2Data = [
  {
    eventName: 'Event Name 1b'
  },
  {
    eventName: 'Event Name 2b',
    eventDate: '2013-6-3'
  },
  {
    eventDate: '2015-5-25'
  }
];

var getPromise1 = function(timeDelay) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, timeDelay || 400, promise1Data);
  })
}

var getPromise2 = function(timeDelay) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, timeDelay || 800, promise2Data);
  })
}
module.exports = {
  someValidAndInvalidData: someValidAndInvalidData,
  getPromise1: getPromise1,
  getPromise2: getPromise2
};
