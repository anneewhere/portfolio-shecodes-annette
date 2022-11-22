let button = document.querySelector('.top')

window.addEventListener('scroll', ()=>{
    if (window.pageYOffset > 500){
        button.classList.add('show')
    }

    else{
        button.classList.remove('show')
    }

});