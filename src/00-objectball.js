function gameHash (){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: [
                {
                    playerName: "Alan Anderson",
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                {
                    playerName: "Reggie Evans",
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                {
                    playerName: "Brook Lopez",
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                {
                    playerName: "Mason Plumlee",
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                {
                    playerName: "Jason Terry",
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            ]
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: [
                {
                    playerName: "Jeff Adrien",
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                {
                    playerName: "Bismak Biyombo",
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                {
                    playerName: "DeSagna Diop",
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                {
                    playerName: "Ben Gordon",
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                {
                    playerName: "Brendan Haywood",
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                },
            ]
        }
        

        
    }
}
function allPlayers () {
    return gameHash().home.players.concat(gameHash()
    .away.players)
}
const getTeamIndoByTeamName = teamName => {
    if ( gameHash.home.teamName === teamName)
    return gameHash.home
    else return gameHash.away
}
const getPlayerByName = name => allPlayers().find( player =>
    player.playerName === name)

function numPointScored ( playerName ) {
    return getPlayerByName(playerName.points)
}
const shoeSize = playerName => getPlayerByName(playerName)
.shoe

function teamColors (teamName) {
    return getTeamInfoByTeamName(teamName).colors
}
const teamNames = ( ) => [ gameHash().home.teamName, gameHash()
.away.teamName ]

function playerNumbers (teamName) {
    return getTeamInfoByTeamName(teamName).players.map(player => player.number)
}
const playerStats = playerName => {
    let player = getPlayerByName(playerName)
    let showPlayerStats = {}
    for (let key in player)
        if (key !== 'playerName')
            showPlayerStats[key] = player[key]

    return showPlayerStats
}

function bigShoeRebounds() {
    return allPlayers().sort((player1, player2) => player2.shoe - 
    player1.shoe)[0].rebounds
}
