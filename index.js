let changePreview = (e)=>{
    const box = document.querySelector("#preview_box");
    box.innerHTML = null;
    const image = document.createElement("img");   
    switch(e.target.id){
        case "yellow":
            image.setAttribute("src","https://drive.google.com/uc?export=view&id=1MUsJ7TOc2dLnrvJ_VFWVApTh1OVfkK3S");
        break;
        case "pink":
            image.setAttribute("src","https://drive.google.com/uc?export=view&id=1EGZdRH9RffKCorSJjgKEGCHy4YFro2EX");
        break;
        default:
            image.setAttribute("src","https://drive.google.com/uc?export=view&id=1VsHEklDiL5VbAlW3wJDG1iovKMJOBOrc");
    }
    box.appendChild(image);
}

const action = document.getElementById("color_buttons");
action.addEventListener("click",(e)=>{
    console.log(e.target.id);
    setTimeout(()=>{
        changePreview(e)
    },2000);
   
    const image = document.querySelector("#preview_box"); 
    image.innerHTML = null;
    const loader = document.createElement("img");
    loader.setAttribute("src","https://drive.google.com/uc?export=view&id=1VX4q4rdO8ta5nVYcXlrv-YXXC8EEyRNS");
    loader.setAttribute("id","rotate");
    loader.style.width="50px";
    loader.style.height="50px";
    image.append(loader);
});

