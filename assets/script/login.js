function validateLogin(event) {
    event.preventDefault() // Impede o envio do formulário
  
    // Defina as credenciais
    const USERNAME = "SESMT"
    const PASSWORD = "SESMT@2026"
    const redirectTo =
      "https://drive.google.com/drive/folders/1lA1ciYhh9Bo1Dbk1RZtuG4F-gTSZd6-D?usp=sharing"
  
    // Obtenha os valores dos campos de entrada
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
  
    // Obtenha o formulário para resetar
    const form = document.getElementById("loginForm")
  
    // Valide as credenciais
    if (username === USERNAME && password === PASSWORD) {
      window.location.href = redirectTo // Redireciona para o URL
    } else {
      alert("Usuário ou senha incorretos.") // Mensagem de erro
      form.reset() // Limpa os campos de entrada
    }
  }