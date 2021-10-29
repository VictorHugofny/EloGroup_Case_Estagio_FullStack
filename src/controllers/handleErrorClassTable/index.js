export default function(el, bool){
    if(bool){
        el.classList.add("error");
    }

    return !bool;
}