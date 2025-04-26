function login(event) {
    event.preventDefault(); // Impede que o formulário recarregue a página!

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');

    const nomeFormatado = formatarNome(nome);

    const user = JSON.parse(localStorage.getItem(email));

    if (user) {
        if (user.senha === senha) {
            mensagem.style.color = "lightgreen";
            mensagem.textContent = `Bem-vindo(a) ${user.nome}! Redirecionando...`;
            setTimeout(() => {
                window.location.href = "agenda.html";
            }, 2000);
        } else {
            mensagem.style.color = "red";
            mensagem.textContent = "Senha incorreta!";
        }
    } else {
        const novoUser = {
            nome: nomeFormatado,
            email: email,
            senha: senha
        };
        localStorage.setItem(email, JSON.stringify(novoUser));
        mensagem.style.color = "lightgreen";
        mensagem.textContent = `Bem-vindo(a) ${user.nome}! Redirecionando...`;

        setTimeout(() => {
            window.location.href = "agenda.html";
        }, 2000);
    }
}

function formatarNome(nome) {
    const palavras = nome.toLowerCase().split(' ');

    const palavrasFormatadas = palavras.map(palavra => {
        if (palavra.length > 3) {
            return palavra.charAt(0).toUpperCase() + palavra.slice(1);
        } else {
            return palavra;
        }
    });

    palavrasFormatadas[0] = palavrasFormatadas[0].charAt(0).toUpperCase() + palavrasFormatadas[0].slice(1);

    return palavrasFormatadas.join(' ');
}
