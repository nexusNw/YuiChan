function successfullMessage(msg) {
    return "β *YuiChan*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *YuiChan*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *YuiChan*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
