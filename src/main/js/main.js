var level1code = require('./level1code.js');
var level1tests = require('../../test/js/level1tests.js');
function Program() {
    
    function test(t, name) {
        try {
            t();
            console.log("PASS:" + name);
        } catch (ex) {
            console.log("FAIL:" + name + ": " + (ex.message || ex));
        }
    }
    
    function main() {
        console.log("\nJavaScript Tests:");
        var names = Object.getOwnPropertyNames(level1tests);//.sort();
        names.forEach(function(name, i) {
            if (/Test$/.test(name)) {
                test(level1tests[name].bind(level1tests), name);
            }
        });
        console.log("Done!");
    }
    main();
}

Program();