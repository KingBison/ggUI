function setServerUrl(game, setter) {
    fetch("config.json")
    .then(
        (res) => res.json())
    .then((config) => {
        if (game === 'buffalo') {
            console.log("SERVER URL SET TO " + config.buffaloServer);
            setter(config.buffaloServer);
        } else {
            console.log('passed buffalo');
            setter("");
        }
    })
    .catch(()=>{
        console.log("ERROR SETTING SERVER URL");
        setter("");
    })
}

export default setServerUrl;