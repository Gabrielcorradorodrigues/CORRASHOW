document.addEventListener('DOMContentLoaded',()=>{
    const listanames= document.body.querySelector('#listanames');
    const inputname= document.body.querySelector('#inputname');
    const buttonAdicionar= document.body.querySelector('#buttonAdicionar');
    buttonAdicionar.addEventListener('click',()=>{
        const div = document.createElement('div');
        div.innerHTML= '<li>'+ inputname.value+ '</li>' 
        listanames.appendChild(div.firstElementChild); 
    })
});
