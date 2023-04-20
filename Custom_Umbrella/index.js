let changePreview = (e)=>{

    const box = document.querySelector("#child_box");
    box.innerHTML = null;

    const image = document.createElement("img");
    image.setAttribute("id","main_img");   

    const logo = document.getElementById("upload_logo");
    logo.src = "https://drive.google.com/uc?export=view&id=1-iV7uV2c8fEez4zRSIgusopCVZydoYif";
    logo.removeAttribute("class");

    if(document.getElementById("loading")){
        document.getElementById("loading").style.visibility = "visible";
    }
    
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
    box.append(image);
}

const backgroundColorChange = (value)=>{
    let body = document.body;
    const button = document.getElementById("upload_button");
    switch (value){
        case "yellow":
            body.style.backgroundColor="rgba(227, 227, 113, 0.203)";
            button.style.backgroundColor = "rgba(239, 217, 22, 0.937)";
        break;
        case "pink":
            body.style.backgroundColor="rgba(220, 156, 167, 0.24)";
            button.style.backgroundColor = "pink";
        break;
        default:
            body.style.backgroundColor="rgba(108, 213, 232, 0.211)";
            button.style.backgroundColor = "rgb(10, 181, 215)";
    }
}

const addLoader = () =>{
    const image = document.querySelector("#child_box"); 
    image.innerHTML = null;
    const loader = document.createElement("img");
    loader.setAttribute("src","https://drive.google.com/uc?export=view&id=1VX4q4rdO8ta5nVYcXlrv-YXXC8EEyRNS");
    loader.setAttribute("class","rotate");
    loader.style.width="50px";
    loader.style.height="50px";
    image.append(loader);
}

const addLogo = () =>{
    const logo = document.getElementById("upload_logo");
    logo.src = "https://drive.google.com/uc?export=view&id=1VX4q4rdO8ta5nVYcXlrv-YXXC8EEyRNS";
    logo.setAttribute("class","rotate");
    if(document.getElementById("loading")){
        document.getElementById("loading").style.visibility = "hidden";
    }
}

const action = document.getElementById("color_buttons");
action.addEventListener("click",(e)=>{
    // console.log(e.target.id);
    setTimeout(()=>{
        changePreview(e)
    },2000);

    backgroundColorChange(e.target.id);

    addLoader();

    addLogo(); 
});

const res = document.getElementById("upload");
res.addEventListener('change', (event) => {

    const addLogo = document.getElementById("logo_box");
    const getLogo = document.createElement("img");
    getLogo.setAttribute("id","loading");
    getLogo.setAttribute("src","");
    addLogo.append(getLogo);

  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (readerEvent) => {
        const imageElement = document.getElementById('loading');
        imageElement.src = readerEvent.target.result;
  };

  const file_name = document.querySelector("#file_name");
  file_name.innerHTML = file.name;
  const remove_icon = document.getElementById("icon");
  remove_icon.style.visibility = "visible";
});

const remove_icon = document.getElementById("icon");
remove_icon.addEventListener("click",()=>{
    remove_icon.style.visibility = "hidden";
    const file_name = document.querySelector("#file_name");
    file_name.innerHTML = "UPLOAD LOGO";
    document.getElementById("logo_box").innerHTML = null;
})
