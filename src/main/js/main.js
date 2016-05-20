import level3code from './level3code';
import level3tests from './level3tests';

function Program() {

    function test(t, name) {
        try {
            t();
            console.log("PASS:" + name);
        } catch (ex) {
            console.log("FAIL:" + name + ": " + (ex.message || ex));
        }
    }

    function run(tests) {
        var names = Object.getOwnPropertyNames(tests);
        names.forEach((name, i) => {
            if (/Test$/.test(name)) {
                test(tests[name].bind(tests), name);
            }
        });
    }

    function main() {
        console.log("\nJavaScript Tests:");

        run(level3tests);

        console.log("Done!");
    }
    main();
}

Program();