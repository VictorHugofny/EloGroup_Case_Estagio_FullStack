
export default function(){
    if (this.position < 2){
        localStorage.position++
    }


    if (localStorage.position == 0){
        localStorage.position = 0
        this.position = 0

    }else if (localStorage.position == 1){
        localStorage.position = 1
        this.position = 1

    }
    else if (localStorage.position == 2){
        localStorage.position = 2
        this.position = 2
    } 
}

