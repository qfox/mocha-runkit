const Mocha = require('mocha');
const reporter = require('mocha-simple-html-reporter-callback');
const { ValueViewerSymbol } = require('@runkit/value-viewer');

function dfd() {
    const res = {};
    res.promise = new Promise((resolve, reject) => {
        res.resolve = resolve;
        res.reject = reject;
    });
    return res;
}

async function tests(obj) {
    const results = dfd();
    const mocha = new Mocha();
    mocha.reporter(reporter, { output: results.resolve });

    for (const [title, fn] of Object.entries(obj)) {
        mocha.suite.addTest(new Mocha.Test(title, fn));
    }

    mocha.run();

    return { [ValueViewerSymbol]: { title: 'Mocha Viewer', HTML: await results.promise } };
}

exports.tests = tests;
