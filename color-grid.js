function drawGrid() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            context.fillStyle = 'rgb(' + Math.floor(255 - 40 * i) + ', ' + Math.floor(255 - 40 * j) + ', 0)';
            console.log('rgb(' + Math.floor(255 - 40 * i) + ', ' + Math.floor(255 - 40 * j) + ', 0)');
            context.fillRect(j * 25, i * 25, 25, 25);
        }
    }

    for (var k = 0; k < 6; k++) {
        for (var l = 0; l < 6; l++) {
            context.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * k) + ', ' + Math.floor(255 - 42.5 * l) + ') ';
            context.beginPath();
            context.arc(12.5 + l * 25, 12.5 + k * 25, 10, 0, Math.PI * 2, true);
            context.stroke();
        }
    }
}