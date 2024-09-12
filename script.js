document.querySelectorAll('.carrinho-de-compras').forEach(function(element) {
    element.addEventListener("click", function() {
      let mensagem = "Olá, Estou interessado neste produto!";
      let instagramUser = "natanggabriel";
      let url = `https://www.instagram.com/${instagramUser}/`;
      window.open(url, '_blank');
    });
  });