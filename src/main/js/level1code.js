var testData = require('./testData.js');
var code = {
    // Returns "Hello World!"
    helloWorld: function () {
        throw new Error("Not Implemented");
    },
    // Returns the sum of two numbers
    sum: function (a, b) {
        throw new Error("Not Implemented");
    },
    // Returns the product of two numbers
    product: function (a, b) {
        throw new Error("Not Implemented");
    },
    // Returns an array containing the product of an 'a' in array 'arrA' with
    // its respective 'b' in array 'arrB'
    productAll: function (arrA, arrB) {
        throw new Error("Not Implemented");
    },
    // Sums all of the elements in the array and returns the result
    sumAll: function (arr) {
        throw new Error("Not Implemented");
    },
    //Given an array of objects, some of the objects will contain bad data.
    //Return a new array of objects that mimics the order of the original array
    //while removing any items where the eventName property or eventDate
    //property are either undefined, empty string, or for eventDate,
    //are not parseable into a valid date via new Date().
    getValidData: function (arr) {
      throw new Error("Not Implemented");
    },
    //Given an array of objects, sort the array on two parameters.  The primary
    //sort will be by eventDate, going from most recent to oldest. If they share
    //the same date, sort them alphabetically on eventName from a to z.
    getSortedData: function (arr) {
      /*
      sample array: [
        {
          eventName: 'Some excellent event',
          eventDate: '2015-05-22'
        },
        ...
      ]
      */
      throw new Error("Not Implemented");
    },
    //Given an array of objects, return the object representing the closest event
    //in the future or the most recent event in the past.  That is,
    //if there are multiple future dates, return the one closest to today, and
    //if there are no future dates, return the event that occured most recently.
    getLeastFutureOrMostRecent: function (arr) {
      /*
      sample array: [
        {
          eventName: 'Some excellent event',
          eventDate: '2017-05-22'
        },
        ...
      ]
      */
      throw new Error("Not Implemented");
    }
    //Return merged data from two promises
    getCombinedEventData: function (promise1, promise2) {

    }
};
module.exports = code;
