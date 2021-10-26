// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

var body = $(document.body || 'body');
var main = $('main');
var lb = $('.lightbox');

var lbContent = lb.find('.lightbox-content').on('scroll', function () {
    lb.toggleClass('scrolled', lbContent.scrollTop() > 10);
});

var contato = document.getElementById("contato");
contato.removeAttribute("href");
contato.addEventListener("click", function () {
    entre_em_contato();
});


var pdf = document.getElementById("pdf");
pdf.removeAttribute("href");
pdf.addEventListener("click", function (event) {
    event.preventDefault();
    download_pdf();
});

/* validacao do form - sobre */
var form_contato = document.getElementById("form_contato");


form_contato.addEventListener("submit", function (event) {
    event.preventDefault();
var nome = document.getElementById("nome").value;
var email = document.getElementById("email").value;
var telefone = document.getElementById("telefone").value;


    lb.find('.lightbox-icon')
        .attr('src', 'img/logo-dp6-square.png')
        .attr('alt', 'Logo DP6');
    lb.find('.lightbox-title').text('Contato enviado');
    lbContent.html('Obrigado pelo seu contato! ' + nome + ' vamos entrar em contato em breve no seu email cadastrado:  ' + email + '  ou pelo telefone: ' + telefone);
    setTimeout(function () {
        body.addClass('lightbox-open');
        //submit.removeAttr('disabled');
    }, 200);
});

function geraIds(){
    var cards = document.getElementsByClassName("card card-montadoras");

    for (var i=0; i < cards.length; i++) {
        cards[i].id = document.getElementsByClassName("card card-montadoras")[i].attributes[1].nodeValue;
    }
}

function entre_em_contato() {
    var url = "https://www.dp6.com.br/contato/";
    contato.setAttribute("href", url);
}

function download_pdf() {
    var file = "download_pdf.pdf";
    download_file("/", file);
}

