var parse = require('./')
var assert = require('assert')

var assertUser = function(prefix, nick, user, host) {
    assert.equal(prefix.nickname, nick)
    assert.equal(prefix.username, user)
    assert.equal(prefix.hostname, host)
}

describe('#parsePrefix()', function() {
    it('should recognise servers', function() {
        var prefix = parse('foobar.server.tld')
        assert.equal(prefix.type, 'server')
    })

    it('should parse typical user prefixes', function() {
        var prefix = parse('tom!weechat@127.0.0.1')
        assert.equal(prefix.type, 'user')
        assertUser(prefix, 'tom', 'weechat', '127.0.0.1')
    })

    it('should parse odd (but valid) user prefixes', function() {
        var prefix = parse('nick@kcin!user!resu@host!tsoh@host')
        assertUser(prefix, 'nick@kcin', 'user!resu', 'host!tsoh@host')
    })
    
    it('should parse user prefixes with no username', function() {
        var nickHost = parse('nick@host')
        assertUser(nickHost, 'nick', null, 'host')
    })

    it('should fail on invalid user prefixes', function() {
        var prefix = parse('nick!user')
        assertUser(prefix, 'nick', 'user', null)
    })
})
