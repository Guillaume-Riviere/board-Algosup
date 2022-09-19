





function convert(){
    let input = document.getElementById("board");
    html2canvas(input, {
        allowTaint: false,
        useCORS: false,
    } ).then(canvas => {
        document.body.appendChild(canvas)
        
    });
}
function download(){
    var canvas = document.getElementsByTagName("canvas")[0];
    console.log(canvas);
    var dt = canvas.toDataURL('image/jpeg');
    this.href = dt;
};


// Add event listener to the id DownloadLnk
document.getElementById("downloadLnk").addEventListener("click", convert, false);

document.getElementById("download").addEventListener("click", download, false);
