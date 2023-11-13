
const input = document.querySelector('.input');
const ulContainer = document.querySelector('.ulContainer');
const lixeira = document.querySelector('.lixeira');

input.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.add.value.trim()

    if(inputValue.length){
        ulContainer.innerHTML += `
        <li class="li">

        <span class="linha-li"> ${inputValue}  </span>
        <i class="bx bxs-trash lixeira"></i>
    </li>
        `
        event.target.reset()
    }
})

/* Lixeira */

ulContainer.addEventListener('click', event =>{
    const clickElement = event.target

    if(Array.from(clickElement.classList).includes('lixeira')){
        clickElement.parentElement.remove()
    }


})









