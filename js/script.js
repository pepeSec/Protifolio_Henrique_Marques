//Inicio do modal
function iniciaModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('mostrar')
    modal.addEventListener('click', (e) => {
        if (e.target.id == modalId || e.target.className == 'fechar') {
            modal.classList.remove('mostrar')
        }
    })
}

const modalcalc = document.querySelector('#calc')
modalcalc.addEventListener('click', () => iniciaModal('modal_calc'))
const modalciber = document.querySelector('#ciber')
modalciber.addEventListener('click', () => iniciaModal('modal_ciber'))
const modalport = document.querySelector('#port')
modalport.addEventListener('click', () => iniciaModal('modal_port'))
//Fim do Modal

//inicio do typeWriter
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i)
        setTimeout(() => typeWriter(tituloInicial), 20000)
    })
}

const tituloInicial = document.querySelector('#tituloInicial')
typeWriter(tituloInicial)
//Fim do typeWriter

//Inicio da seta
function ativaNoScroll() {
    const seta = document.querySelector('#setaImagem')
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        seta.style.transition = '0.5s'
        seta.style.opacity = 0
    }
}

window.onscroll = function () {ativaNoScroll()}