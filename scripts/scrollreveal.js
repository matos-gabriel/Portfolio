let leftToRight = {
    origin: "left",
    distance: "10%",
    duration: 3500,
    delay: 50,
    reset: true,
  }
  let rigthToLeft = {
    origin: "rigth",
    distance: "10%",
    duration: 3500,
    delay: 50,
    reset: true,
  }
  let bottomToTop = {
    origin: "bottom",
    distance: "20%",
    duration: 3500,
    delay: 50,
    reset: true,
    opacity:0,
    scale: 1.2
  }
  let leftToRightSlow = leftToRight
  let bottomToTopslow = bottomToTop
  bottomToTopslow.duration = 3000
  leftToRightSlow.duration = 3000 
  
  
  ScrollReveal().reveal(".conteudo__paragrafo", leftToRight);
  ScrollReveal().reveal(".foto-perfil", bottomToTop);
  ScrollReveal().reveal(".sobre-mim__subtitulo", leftToRight);
  ScrollReveal().reveal(".sobre-mim__nome", leftToRight);
  ScrollReveal().reveal(".sobre-mim__card", leftToRight);
  ScrollReveal().reveal(".apresentacao__info .apresentacao__msg", leftToRightSlow);
  ScrollReveal().reveal(".apresentacao__info .apresentacao__carreira", bottomToTopslow);
  ScrollReveal().reveal(".div-ilustration", bottomToTopslow);
  ScrollReveal().reveal(".mensagem-contato h1", leftToRightSlow);
  ScrollReveal().reveal(".projetos-grid__item--breve, .projetos-grid__item, .sobre-mim__nome", leftToRight);
  ScrollReveal().reveal(".sobre-mim__nome", rigthToLeft);
  
  
  const itemsGrid = document.querySelectorAll('.skills-grid .skills-grid__item');
  
  itemsGrid.forEach(function(myElement) {
    let bottomToTopGrid = bottomToTop;
    bottomToTopGrid.delay = bottomToTopGrid.delay + 50
    bottomToTopGrid.distance = '50px'
    ScrollReveal().reveal(myElement, bottomToTopGrid);
  });


  const itemsGridUtilizei = document.querySelectorAll('.skills-utilizei-grid .skills-grid__item');
  
  itemsGridUtilizei.forEach(function(myElement) {
    let bottomToTopGrid = bottomToTop;
    bottomToTopGrid.delay = bottomToTopGrid.delay + 50
    bottomToTopGrid.distance = '50px'
    ScrollReveal().reveal(myElement, bottomToTopGrid);
  });
