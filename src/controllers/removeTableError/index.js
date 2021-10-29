export default function (id){
    const classHolder = document.getElementById(id); 

    if(classHolder.classList.contains("error")){  
        classHolder.classList.remove("error"); 
    }
}