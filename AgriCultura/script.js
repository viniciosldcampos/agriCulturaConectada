document.addEventListener("DOMContentLoaded", () => {
  const conteudo = document.getElementById("conteudo");

  document.getElementById("btn-login").addEventListener("click", () => {
    conteudo.innerHTML = `
      <h2>Login</h2>
      <form onsubmit="event.preventDefault(); alert('Login simulado!');">
        <label for="usuario">Usuário:</label><br>
        <input type="text" id="usuario" required><br>
        <label for="senha">Senha:</label><br>
        <input type="password" id="senha" required><br><br>
        <button type="submit">Entrar</button>
      </form>
    `;
  });

  document.getElementById("btn-perfil").addEventListener("click", () => {
    conteudo.innerHTML = `
      <h2>Perfil do Usuário</h2>
      <p><strong>Nome:</strong> João da Silva</p>
      <p><strong>Região:</strong> Zona Rural - MG</p>
      <p><strong>Email:</strong> joao@email.com</p>
    `;
  });

  document.getElementById("btn-produtos").addEventListener("click", () => {
    conteudo.innerHTML = `
      <h2>Produtos Disponíveis</h2>
      <ul>
        <li>Tomate orgânico - R$ 4,00/kg</li>
        <li>Leite de cabra - R$ 6,00/L</li>
        <li>Queijo artesanal - R$ 15,00/unidade</li>
      </ul>
    `;
  });

  document.getElementById("btn-receita").addEventListener("click", () => {
    conteudo.innerHTML = `
      <h2>Receitas Cadastradas</h2>
      <ul>
        <li>Venda de legumes - R$ 350,00</li>
        <li>Feira mensal - R$ 1.200,00</li>
      </ul>
    `;
  });

  document.getElementById("btn-despesa").addEventListener("click", () => {
    conteudo.innerHTML = `
      <h2>Despesas Cadastradas</h2>
      <ul>
        <li>Adubo - R$ 200,00</li>
        <li>Transporte - R$ 150,00</li>
      </ul>
    `;
  });
});
