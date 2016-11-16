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

    /*
      For the following problems, assume the data takes the form of the following
      array of objects:
      [
        {
          eventName: 'Some excellent event',
          eventDate: '2015-05-22'
        },
        ...
      ]
    */

    /*
      Given an array of objects, return an array of objects that keeps the order
      of the original array while removing items according to these rules:
      1) eventName is invalid if: it’s undefined or an empty string.
      2) eventDate is invalid if: it’s undefined, an empty string, or new
        Date(eventDate) produces an Invalid Date.
    */
    getValidData: function (arr) {
        throw new Error("Not Implemented");
    },

    /*
      Given an array of objects, sort the array on two parameters.  The primary
      sort will be by eventDate, descending. If two events share the same date,
      sort them alphabetically on eventName from a to z. For this problem,
      assume all the data is valid.
    */
    getSortedData: function (arr) {
        throw new Error("Not Implemented");
    },

    /*
      Sometimes we may need to display an event that happens year to year.  In
      some cases, the event may be planned even two years ahead. We want to show
      the most appropriate date.

      Given an array of objects, return the object representing the closest event
      in the future or the most recent event in the past.  That is,
      if there are multiple future dates, return the one closest to today, and
      if there are no future dates, return the event that occured most recently.
    */
    getLeastFutureOrMostRecent: function (arr) {
        throw new Error("Not Implemented");
    },

    /*
      Often times in front end code, we need to take data from two sources and
      merge them together or manipulate them in some way.

      Given two promises that will return data (in the format outlined above):
      1) Wait for both to resolve
      2) Merge the two data sets together
      3) Filter out non valid events by the getValidData rules
      4) Sort the list based on the getSortedData rules
      5) Return a new promise that will resolve when all of the above is done
    */
    getCombinedEventData: function (promise1, promise2) {
        throw new Error("Not Implemented");
    }
};
module.exports = code;
