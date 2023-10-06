const form = document.getElementById('form-transfer');
const valorTransferencia = document.getElementById('campoA');
const valorSaldo = document.getElementById('campoB');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `O valor de: ${valorTransferencia.value} foi transferido!`;

    if (valorSaldo.value > valorTransferencia.value){

        document.querySelector('.error-message').style.display = '';

        valorTransferencia.value = ''
        valorSaldo.value = ''

        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

    } 
    else{
        document.querySelector('.error-message').style.display = 'block';
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = '';
        containerMensagemSucesso.style.display = '';
    }
})