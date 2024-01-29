export function retrieveServers(setter) {
    fetch("config.json")
    .then( (res) => res.json())
    .then((config) => {
        setter({
            "buffalo": config.buffaloServer
        })
    })
    .catch(()=>{
        alert("ERROR GETTING SERVER DATA");
        setter({});
    })
}