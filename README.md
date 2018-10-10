# Mocha + RunKit = ❤️

Stupidly simple alpha version of mocha runner adapted for RunKit with broken interface.

## Installation

No need. Use [RunKit](https://runkit.com/).

## Usage

For now you can run tests in [RunKit](https://runkit.com/) like this:
```js
const { tests } = require('mocha-runkit');
const { expect } = require('chai');

await tests({
    'green': () => {
        expect(1).to.equal(1);
    },

    'red': () => {
        expect(24).to.equal(42);
    }
});
```

## License

MPL-2.0
