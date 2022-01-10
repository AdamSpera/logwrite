/* index.js - Adam T Spera */

var fs = require('fs');

function go(content) {
    console.log(content)
    fs.appendFile('logbin.log', `\n${content}`, err => {
        if (err) {
            console.error(err)
            return
        }
    })
}

module.exports = { go };