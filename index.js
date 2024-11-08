let block = () => {
    if (window.location.hostname !== 'www.megastudy.net') return window.location.href = 'https://www.megastudy.net';
    else return console.log("study now")
}

window.onload = block
setInterval(block,10000)