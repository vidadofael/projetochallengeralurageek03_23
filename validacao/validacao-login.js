function isEmailValid(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function isPasswordValid(password) {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/;
    return pattern.test(password);
}

function showError(elementId, message) {
    const element = document.getElementById(elementId);
    element.style.display = "block";
    element.innerText = message;
}

document.getElementById("botaoEntrar").addEventListener("click", function() {
    const email = document.querySelector("input[name='email']").value;
    const senha = document.querySelector("input[name='senha']").value;
    let valid = true;

    if (!isEmailValid(email)) {
        valid = false;
        showError("mensagemEmail", "Email incorreto");
    }

    if (!isPasswordValid(senha)) {
        valid = false;
        showError("mensagemSenha", "Senha incorreta");
    }

    if (valid) {
        // Ação a ser executada se as informações de login estiverem corretas
        alert("Bem vindo ao portal de produtos AluraGeek!");
        window.location.href = "../telas/todos-produtos.html";
    }
});
