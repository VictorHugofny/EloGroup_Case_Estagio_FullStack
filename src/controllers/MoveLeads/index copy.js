
export default function(){
    if (this.estado < 2){
        localStorage.estado++
    }


    if (localStorage.estado == 0){
        localStorage.estado = 0
        this.estado = 0

    }else if (localStorage.estado == 1){
        localStorage.estado = 1
        this.estado = 1

    }
    else if (localStorage.estado == 2){
        localStorage.estado = 2
        this.estado = 2
    } 
}

