export default function(){
    let markArray = document.querySelectorAll('.markall')
    let markall = document.querySelector('.markallControler')

    Array.from(markArray).forEach((checkbox)=>{
        checkbox.checked = markall.checked
    })
}