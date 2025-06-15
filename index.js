function verAnimais() {
    alert("Você será redirecionado para a lista de animais disponíveis para adoção.");
    // Aqui você poderia redirecionar para uma seção específica da página
    window.scrollTo({
      top: document.querySelector(".animais").offsetTop,
      behavior: "smooth"
    });
  }
  