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