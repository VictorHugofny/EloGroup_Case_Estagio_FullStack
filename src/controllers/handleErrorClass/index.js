export default function(el, bool){ 
    bool = bool || !el.value;
    
    if(bool){
        el.parentElement.classList.add("error");
    }

    return !bool;
}