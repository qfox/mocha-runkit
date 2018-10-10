const { tests } = require('./mocha-runkit');

(async () => {
await tests({
    'lul': async() => {
        assert.equal(1, 1);
    },

    'wtf': async() => {
        assert.equal(1, 2);
    },
});
})();
