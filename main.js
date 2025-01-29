const cadastro = document.getElementById('cadastro');

cadastro.addEventListener('submit', function (e) {
    e.preventDefault();

    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;
    const mensagemErro = document.getElementById('senha-errada');
    const senhaCerta = document.getElementById('senha-certa');

    if (senha !== confirmarSenha) {
        e.preventDefault();
        mensagemErro.style.display = 'flex';
        senhaCerta.style.display = 'none';
    }
    else {
        mensagemErro.style.display = 'none';
        senhaCerta.style.display = 'flex'
    };
});