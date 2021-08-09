class LabelBox{
    test(){
        console.log('test이다')
    }

    drag(e){
    let container = document.createElement('p');
    let Name = document.createElement('input');
    let startX;
    let startY;
    let x;
    let y;
    
    let mousedown =(e)=>{
        e.preventDefault();
        startX = e.clientX;
        startY = e.clientY;
        container.appendChild(Name);
        document.querySelector('article').appendChild(container);
        document.body.removeEventListener("mousedown", mousedown);
    }
    let mouseup =(e)=>{
        e.preventDefault();
        document.body.removeEventListener("mousemove", mousemove);
       document.body.removeEventListener("mouseup", mouseup);
    }
    let mousemove =(e)=>{
        e.preventDefault();
        x = e.clientX;
        y = e.clientY;
        container.style.width = `${Math.max(x - startX, startX - x)}px`;
        container.style.height = `${Math.max(y - startY, startY - y)}px`;
        container.style.top = `${Math.min(startY, y)}px`;
        container.style.left = `${Math.min(startX, x)}px`;
    }
    document.body.addEventListener('mousedown', mousedown);
    document.body.addEventListener('mousemove', mousemove);
    document.body.addEventListener('mouseup', mouseup);
    }
}

export default LabelBox;