var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
const CANVAS_SIZE = 300;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
context.lineWidth = 30;
context.strokeStyle = "#FFFFFF";
var painting = false;

// mouse 이벤트 리스너 등록
function onMouseMove(event){
	const x = event.offsetX;
	const y = event.offsetY;
	if(!painting){
		context.beginPath();
		context.moveTo(x, y);
	} else {
		context.lineTo(x, y);
		context.stroke();
	}
}
function startPainting(event){
	painting = true;
}
function stopPainting(event){
	painting = false;
}

if(canvas){
    console.log(canvas)
	canvas.addEventListener("mousemove", onMouseMove);
	canvas.addEventListener("mousedown", startPainting);
	canvas.addEventListener("mouseup", stopPainting);
	canvas.addEventListener("mouseleave", stopPainting);
}