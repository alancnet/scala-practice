import assert from './assert';
import code from './level3code';

var level3tests = {
    monkeysAndCoconutsTest: function () {
        var actual = code.monkeysAndCoconuts(5);
        assert.areEqual(3121, actual);
    },
    checkSudokuSolution: function (arr) {

        for (var i = 0; i < 9; i += 3)
            for (var j = 0; j < 9; j += 3) {
                var filled = [];
                for (var k = 0; k < 3; k++)
                    for (var l = 0; l < 3; l++)
                        filled.push(arr[i + k][j + l] - 1);
                if (filled.length !== 9)
                    return false;
            }

        return true;
    },
    solveSudokuTest: function () {
        var board = [
            0, 2, 0, 1, 7, 8, 0, 3, 0,
            0, 4, 0, 3, 0, 2, 0, 9, 0,
            1, 0, 0, 0, 0, 0, 0, 0, 6,
            0, 0, 8, 6, 0, 3, 5, 0, 0,
            3, 0, 0, 0, 0, 0, 0, 0, 4,
            0, 0, 6, 7, 0, 9, 2, 0, 0,
            9, 0, 0, 0, 0, 0, 0, 0, 2,
            0, 8, 0, 9, 0, 1, 0, 6, 0,
            0, 1, 0, 4, 3, 6, 0, 5, 0
        ];
        var actual = code.solveSudoku(board);
        assert.areEqual(true, this.checkSudokuSolution(actual));
    },
    deriveAllElementsTest: function() {
        function distinct(array) {
            return array.reduce(function(pv, cv) {
                if (pv.indexOf(cv) == -1) return pv.concat([cv]);
                else return pv;
            }, [])
        }

         var la = require('little-alchemy');
         var recipes = require('little-alchemy/dist/recipes');
         var baseElements = la.getBaseElements();
         var allElements = distinct(baseElements.concat(Object.keys(recipes.byElement)).sort());
         var callCount = 0;
         var result = code.deriveAllElements(baseElements, function() {
             callCount++;
             return la.combine.apply(this, arguments);
         });
         assert.areEqual('Array', result ? result.constructor.name : result === undefined ? 'undefined' : 'null');
         assert.areEqual(allElements.length, result.length);
         assert.areEqual(allElements.sort().join(','), result.sort().join(','))
         console.log(callCount + " calls to combine().");
         var missing = allElements.filter(function(e) {
             return result.indexOf(e) === -1;
         });
     }
};
export default level3tests;