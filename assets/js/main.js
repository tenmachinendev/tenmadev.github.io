const modals = document.documentElement.querySelectorAll( '.modal' );
const btns = document.querySelectorAll( '.modal-btn' );
const close = document.querySelectorAll( '.close' );

function openModal() {
    console.log();
    modals[ Number( this.dataset.modal ) ].style.display = 'block';
}
function closeModal() {
    modals[ Number( this.dataset.modal ) ].style.display = 'none';
}
btns.forEach( ( btn ) => {
    btn.addEventListener( 'click', openModal );
} );
close.forEach( ( btn ) => {
    btn.addEventListener( 'click', closeModal );
} );