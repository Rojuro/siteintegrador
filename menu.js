
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    // definir uma classe unica em toggle
    header.classList.toggle('rolagem',window.scrollY > 300)
})

window.addEventListener("scroll", function(){
    let section = document.querySelector('#section')
    // definir uma classe unica em toggle
    section.classList.toggle('rolagem',window.scrollY > 0)
})