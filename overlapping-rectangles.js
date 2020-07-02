function drawRectangle() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.fillStyle = "rgb(0, 0, 60)";
    context.fillRect(50, 50, 100, 100);

    context.fillStyle = "rgb(0, 0, 90, 0.5)";
    context.fillRect(10, 10, 100, 100);
}