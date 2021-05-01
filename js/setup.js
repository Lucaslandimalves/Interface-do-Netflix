$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false, // setas de navegacao

    // quantidade de filmes a ser exibido por tamanho de tela
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})