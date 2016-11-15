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
    eventDate: '2015-8-1'
  },
  {
    eventDate: '2013-8-1'
  },
  {
    eventName: 'Neat Event 6',
    eventDate: '2012-8-1'
  }
];

var dataToSort = [
  {
    eventName: 'Cool 10k A',
    eventDate: '2016-7-20'
  },
  {
    eventName: 'Cool 10k B',
    eventDate: '2017-6-21'
  },
  {
    eventName: 'Cool 10k C',
    eventDate: '2014-7-28'
  },
  {
    eventName: 'Cool 10k D',
    eventDate: '2015-8-1'
  },
  {
    eventName: 'Cool 10k E',
    eventDate: '2017-6-21'
  }
];

var leastFutureOrMostRecentData1 = [
  {
    eventName: 'Amazing Marathon',
    eventDate: '2016-7-20'
  },
  {
    eventName: 'Amazing Marathon',
    eventDate: '2017-6-21'
  },
  {
    eventName: 'Amazing Marathon',
    eventDate: '2015-7-28'
  },
];

var leastFutureOrMostRecentData2 = [
  {
    eventName: 'Amazing Marathon',
    eventDate: '2016-7-20'
  },
  {
    eventName: 'Amazing Marathon',
    eventDate: '2018-6-21'
  },
  {
    eventName: 'Amazing Marathon',
    eventDate: '2019-7-28'
  },
];

var leastFutureOrMostRecentData3 = [
  {
    eventName: 'Amazing Marathon',
    eventDate: '2015-7-20'
  },
  {
    eventName: 'Amazing Marathon',
    eventDate: '2016-6-21'
  },
  {
    eventName: 'Amazing Marathon',
    eventDate: '2014-7-28'
  },
];

var promise1Data = [
  {
    eventName: 'Event Name 1a',
    eventDate: '2016-5-24'
  },
  {
    eventName: 'Event Name 2a',
    eventDate: '2014-6-1'
  },
  {
    eventName: 'Event Name 3a',
    eventDate: '2017-5-56'
  }
];

var promise2Data = [
  {
    eventName: 'Event Name 1b'
  },
  {
    eventName: 'Event Name 2b',
    eventDate: '2015-6-3'
  },
  {
    eventDate: '2015-5-25'
  }
];

var getPromise1 = function(timeDelay) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, timeDelay || 200, promise1Data);
  })
}

var getPromise2 = function(timeDelay) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, timeDelay || 400, promise2Data);
  })
}
module.exports = {
  someValidAndInvalidData: someValidAndInvalidData,
  dataToSort: dataToSort,
  leastFutureOrMostRecentData1: leastFutureOrMostRecentData1,
  leastFutureOrMostRecentData2: leastFutureOrMostRecentData2,
  leastFutureOrMostRecentData3: leastFutureOrMostRecentData3,
  getPromise1: getPromise1,
  getPromise2: getPromise2
};
