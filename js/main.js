(function ($) {
  var body = $(document.body || 'body');
  var main = $('main');
  var lb = $('.lightbox');

  var lbContent = lb.find('.lightbox-content').on('scroll', function () {
    lb.toggleClass('scrolled', lbContent.scrollTop() > 10);
  });

  $(document).ready(function () {
    body.addClass('domready');
  });

  $('.cards-montadoras').on('click tap', '.card-montadoras', function () {
    
    var data = $(this).data();
    
    var content = $('.info-montadora[data-id="' + data.id + '"]').html();
    lb.find('.lightbox-icon')
      .attr('src', 'img/montadoras/' + data.id + '.png')
      .attr('title', data.id)
      .attr('alt', data.id);
    lb.find('.lightbox-title').text(data.name);

    lbContent.html(content).scrollTop(0);
    setTimeout(function () {
      body.addClass('lightbox-open');
    }, 200);
  });

  $('.lightbox-backdrop, .lightbox-fechar').on('click tap', function () {
    body.removeClass('lightbox-open');
  });

  $('.cabecalho-menu, .menu-fechar').on('click tap', function () {
    body.toggleClass('menu-open', this.className === 'cabecalho-menu');
  });

  $('.menu-backdrop').on('click tap', function () {
    body.removeClass('menu-open');
  });

  $('.menu')
    .on('click tap', '.menu-lista-sublista > a', function (e) {
      e.preventDefault();
      $(this)
        .parent()
        .toggleClass('fechado')
        .siblings()
        .addClass('fechado');
    })
    .on('click tap', '.menu-sublista-link', function (e) {
      if (this.pathname === location.pathname) {
        body.removeClass('menu-open');
        if (!this.hash) {
          e.preventDefault();
          main.scrollTop(0);
        }
      }
    });

  // var submit = $('.contato button[type="submit"]');
  // $('.contato').on('submit', function (e) {
  //   submit.attr('disabled', 'disabled');
  //   e.preventDefault();
  //   setTimeout(function () {
  //     console.log('enviado');
  //     lb.find('.lightbox-icon')
  //       .attr('src', 'img/logo-dp6-square.png')
  //       .attr('alt', 'Logo DP6');
  //     lb.find('.lightbox-title').text('Contato enviado');
  //     lbContent.html('Obrigado pelo seu contato!').scrollTop(0);
  //     setTimeout(function () {
  //       body.addClass('lightbox-open');
  //       submit.removeAttr('disabled');
  //     }, 200);
  //   }, Math.random() * 2000);
  // });

  $(
    '.menu-lista-' +
      location.pathname.split('/').reverse()[0].replace('.html', '')
  )
    .parent()
    .removeClass('fechado');
})($);

function download_file(fileURL, fileName) {

  if (!window.ActiveXObject) {
      var save = document.createElement('a');
      save.href = fileURL;
      save.target = '_blank';
      var filename = fileURL.substring(fileURL.lastIndexOf('/')+1);
      save.download = fileName || filename;
       if ( navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) && navigator.userAgent.search("Chrome") < 0) {
      document.location = save.href; 

    }else{
          var evt = new MouseEvent('click', {
              'view': window,
              'bubbles': true,
              'cancelable': false
          });
          save.dispatchEvent(evt);
          (window.URL || window.webkitURL).revokeObjectURL(save.href);
    }	
  }


  else if ( !! window.ActiveXObject && document.execCommand)     {
      var _window = window.open(fileURL, '_blank');
      _window.document.close();
      _window.document.execCommand('SaveAs', true, fileName || fileURL)
      _window.close();
  }
}