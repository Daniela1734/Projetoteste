function adicionarTarefa() {
    const input = document.getElementById("novaTarefa");
    const texto = input.value.trim();
  
    if (texto === "") return;
  
    const li = document.createElement("li");
    li.textContent = texto;
  
    // Marcar como feita
    li.addEventListener("click", () => {
      li.classList.toggle("feita");
    });
  
    // Botão de remover
    const btn = document.createElement("button");
    btn.textContent = "X";
    btn.style.marginLeft = "10px";
    btn.onclick = () => li.remove();
  
    li.appendChild(btn);
    document.getElementById("listaTarefas").appendChild(li);
  
    input.value = "";
  }
  