const rp = require('request-promise-native')

function setOptions(url) {
    return {
        uri: url,
        headers: {
            'User-Agent': 'Request-Promise-Native'
        },
        json: true
    }
}

function helper(options, resolve) {
    rp(options)
            .then(function (body) {
                resolve(body)
            })
            .catch(function (err) {
                console.error(err)
            })
}
function search(playerName) {
    return new Promise(function (resolve, reject) {
        let options = setOptions(`https://api.opendota.com/api/search?q=${playerName}`)
        helper(options, resolve, reject)
    })
}

function getHeroes() {
    return new Promise(function (resolve, reject) {
        let options = setOptions(`https://api.opendota.com/api/heroes`)
        helper(options, resolve, reject)
    })    
}

function getPlayer(accountId) {
    return new Promise(function (resolve, reject) {
        let options = setOptions(`https://api.opendota.com/api/players/${accountId}`)
        helper(options, resolve, reject)
    })
}

function getPlayerHeroes(accountId) {
    return new Promise(function (resolve, reject) {
        let options = setOptions(`https://api.opendota.com/api/players/${accountId}/heroes`)
        helper(options, resolve, reject)
    })
}
// function getLastMatch(playerId) {
//     request(
// }

module.exports = {
    search,
    getHeroes,
    getPlayer,
    getPlayerHeroes
}