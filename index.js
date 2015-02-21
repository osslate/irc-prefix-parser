module.exports = function parsePrefix(prefix) {
    var result = {}
    result.input = prefix

    var hasExclamation = prefix.indexOf('!') !== -1
    var hasAt = prefix.indexOf('@') !== -1
    var hasPeriod = prefix.indexOf('.') !== -1

    if (hasPeriod && !hasExclamation && !hasAt) {
        result.type = 'server'
        return result
    }

    result.type = 'user'

    result.nickname = null
    result.username = null
    result.hostname = null

    var userStart = 0
    var userEnd = 0

    while (userStart < prefix.length && prefix[userStart] !== '!') userStart++

    if (userStart < prefix.length) {
        result.nickname = prefix.slice(0, userStart)
        userEnd = userStart
    }

    console.log(result.nickname)

    while (userEnd < prefix.length && prefix[userEnd] !== '@') userEnd++

    if (userEnd < prefix.length && result.nickname) {
        result.username = prefix.slice(userStart + 1, userEnd )
        result.hostname = prefix.slice(userEnd + 1)
    } else {
        result.nickname = prefix.slice(0, userEnd)
        result.hostname = prefix.slice(userEnd + 1)
    }

    return result
}
