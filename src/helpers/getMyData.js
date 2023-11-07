const getMyData = (name, game) => {
    if (!game || !game.players) {
        return false
    }

    for (let player of game.players) {
        if (player.name === name) {
            return player
        }
    }

    return false
}

export default getMyData;