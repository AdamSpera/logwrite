# Logwrite NPM Package
Logwrite writes to a log file and prints in one function, made for nodejs.

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install logwrite
```

Installing inside files is done by adding the following code:
```js
const logwrite = require('logwrite')
```

## Using Logwrite
Using Logwrite is the simplest part, only one function!

```js
logwrite.go(content)
```

The parameter content can be any kind of data.

If no logbin.log file exsists already, one will be made in the directory from which it is called.
