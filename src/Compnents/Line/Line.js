import React, {useRef} from 'react';
function Line(props) {
    const canvas = useRef();
    let ctx = null
    let width = null;
    useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;
    width = canvasEle.clientWidth;
    ctx = canvasEle.getContext("2d");
  }, []);
  useEffect(()=>{
    drawLine({ x: 0, y: 0, x1: width, y1: 0 }, { color: 'red' });
  },[])
    const drawLine = (info, style = {}) => {
        const { x, y, x1, y1 } = info;
        const { color = 'black', width = 5 } = style;
     
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x1, y1);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
      }
      
  return (
    <div>
      <canvas ref={canvas}></canvas>
    </div>
  )
}

export default Line()
