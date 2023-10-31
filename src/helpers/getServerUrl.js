function getServerUrl(game, setter) {
    fetch("config.json")
    .then(
        (res) => res.json())
    .then((config) => {
        if (game === 'buffalo') {
            setter(config.buffaloServer)
            console.log("BUFFALO SERVER URL SET TO " + config.buffaloServer)
        }
    })
    .catch(()=>{
        setter(false)
    })
}

export default getServerUrl;