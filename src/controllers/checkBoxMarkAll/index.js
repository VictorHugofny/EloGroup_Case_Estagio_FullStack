export default function(event) {
    const tableChildren = event.target.parentElement.parentElement.parentElement.parentElement.children;

    Array.from(tableChildren).filter(e=>!e.classList.contains("tableHeader")).forEach(e => {
        var checkBox = e.querySelector("input");
        
        checkBox.checked = event.target.checked;
    })
}