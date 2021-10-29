export default function (event){
    const classHolder = event.target.tagName != "DIV"? event.target.parentElement: event.target; 
    
    if(classHolder.classList.contains("error")){ 
        classHolder.querySelector("input").value = "";
        classHolder.classList.remove("error"); 
    }

    if(classHolder.parentElement.children[0].classList.contains("error") && classHolder.parentElement.children[0].querySelector("input").id == "loginPassword"){
        classHolder.parentElement.children[0].querySelector("input").value = "";
        classHolder.parentElement.children[0].classList.remove("error"); 
    }
}