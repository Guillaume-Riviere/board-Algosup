
function convert(){
    let input = document.getElementById("board");
    html2canvas(input, {
        allowTaint: false,
        useCORS: false,
    } ).then(canvas => {
        // rotate the canvas 90 deg before displaying it
        let rotatedCanvas = document.createElement("canvas");
        rotatedCanvas.width = canvas.height;
        rotatedCanvas.height = canvas.width;
        let ctx = rotatedCanvas.getContext("2d");
        ctx.translate(rotatedCanvas.width / 2, rotatedCanvas.height / 2);
        ctx.rotate(90 * Math.PI / 180);
        ctx.drawImage(canvas, -canvas.width / 2, -canvas.height / 2);
        document.body.appendChild(rotatedCanvas);
        
    });
}


// Add event listener to the id DownloadLnk
document.getElementById("downloadLnk").addEventListener("click", convert, false);

