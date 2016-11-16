var level1code = require('./level1code.js');
var level1tests = require('./level1tests.js');
function Program() {

    function test(t, name) {
        try {
            const ret = t();
            if (ret && ret.then) {
                return ret
                    .then(() => console.log("PASS:" + name))
                    .catch((ex) => console.log("FAIL:" + name + ": " + (ex.message || ex)))
            } else {
                console.log("PASS:" + name);
            }
        } catch (ex) {
            console.log("FAIL:" + name + ": " + (ex.message || ex));
        }
    }

    function run(tests) {
        var names = Object.getOwnPropertyNames(tests);
        return Promise.all(
                names.map(function (name, i) {
                if (/Test$/.test(name)) {
                    return ret = test(tests[name].bind(tests), name);
                }
            }).filter(x => x && x.then)
        );

    }

    function main() {
        console.log("\nJavaScript Tests:");

        run(level1tests).then(x => {
            console.log("Done! ");
            console.log("Done!");
        });

        //console.log("Done!");
    }
    main();
}

Program();
