# irc-prefix-parser
> Parse IRC message prefixes

## Installation

    npm install irc-prefix-parser

## Usage

The parser takes a string and 

```js
var parse = require('irc-prefix-parser')

console.log(parse('foobar.freenode.net'))
/* {
 *   input: 'foobar.freenode.net',
 *   type: 'server'
 * }
 */

console.log(parse('jamie!weechat@127.0.0.1'))
/* {
 *   input: 'jamie!weechat@127.0.0.1',
 *   type: 'user',
 *   nickname: 'jamie',
 *   username: 'weechat',
 *   hostname: '127.0.0.1'
 * }
 */
```
