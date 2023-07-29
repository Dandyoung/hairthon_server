var resetBtn = document.querySelector('#reset');
resetBtn.addEventListener("click", resetCanvas);

function resetCanvas(event){
    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
}

// ajax
var sendBtn = document.querySelector('#send');
sendBtn.addEventListener("click", sendAjax);
function sendAjax(event){
    var canvas = document.querySelector('canvas');
    
    $.ajax({
        url : 'https://port-0-hairthon-api-server-rt92alkjpc0lh.sel4.cloudtype.app/predict',
        method : 'GET',
        data : {'image' : canvas.toDataURL()}
    }).done((result)=>{
        console.log(result)
    }).fail((error)=>{
        console.log(error)
    })
}