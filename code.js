var code = {
    // Returns "Hello World!"
    helloWorld: function() {
        throw new Error("Not Implemented");
    },
    isTextInStream: function(stream, text) {
        throw new Error("Not Implemented");
    },
    // For a space that is 'populated':
    //   Each cell with one or no neighbors dies, as if by loneliness.
    //   Each cell with four or more neighbors dies, as if by overpopulation.
    //   Each cell with two or three neighbors survives.
    // For a space that is 'empty' or 'unpopulated'
    //   Each cell with three neighbors becomes populated.
    iterateLife: function(field) {
        throw new Error("Not Implemented");
        
    }
};
module.exports = code;