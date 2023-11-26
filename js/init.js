if (getUrlVars('theme') == 'light' || getUrlVars('theme') == 'dark') {
  setCookie('theme',getUrlVars('theme'),7)
}

setTheme();

$('#ul_menu').empty();
var html = '';

// ----------------------------------------------------------------------------
var lang = null;
var langs = [];
// get languages list and default value
let lang_opts = document.getElementById('sel_lang').options;
var defaultLang = lang_opts[lang_opts.selectedIndex].value;
// get all languages
for(let i=0; i < lang_opts.length; i++) {
  if (lang_opts[i].value) {
    langs.push(lang_opts[i].value);
  }
}
// match language in url
langs.forEach(val => {
  if (window.location.href.indexOf('/' + val + '/') != -1) {
    lang = val;
  }
});
// match language in navigator
if (!lang) {
  var userLang = navigator.language || navigator.userLanguage;
  userLang = userLang.slice(0, 2).toLowerCase();
  langs.forEach(val => {
    if (userLang.indexOf(val.slice(0, 2).toLowerCase()) !== -1) {
      lang = val;
    }
  });
}
// use default language
if (!lang) {
  lang = defaultLang;
}
// set language in cookie
if (getCookie('lang') != lang) {
  setCookie('lang', lang, 7);
}
$('#meta-lang').attr('content', lang);
$('#sel_lang').val(lang);

// ----------------------------------------------------------------------------
var version = null;
var versions = [];
// get versions list and default value
let ver_opts = document.getElementById('sel_version').options;
var defaultVersion = ver_opts[ver_opts.selectedIndex].value;
// get all versions
for(let i=0; i < ver_opts.length; i++) {
  if (ver_opts[i].value) {
    versions.push(ver_opts[i].value);
  }
}
// match version in url
versions.forEach(val => {
  if (window.location.href.indexOf('/' + val + '/') != -1) {
    version = val;
  }
});
// get version from cookie
if (getCookie('version') != '') {
  version = getCookie('version');
}
// use default version
if (!version) {
  version = defaultVersion;
}
// set version in cookie
if (getCookie('version') != version) {
  setCookie('version', version, 7)
}
if ($('#sel_version').val() != version) {
  $('#sel_version').val(version);
}

// ----------------------------------------------------------------------------
function genText(_menu) {
  let _text = _menu[defaultLang];
  if (_menu[lang]) {
    _text = _menu[lang];
  }
  if (_menu.icon) {
    return '<i class="'+_menu.icon+'"></i>'+_text;
  } else {
    return _text;
  }
}

// ----------------------------------------------------------------------------
function genLink(_link) {
    return _link.replace('#LANG#', lang).replace('#VERSION#', version);
}

// ----------------------------------------------------------------------------
function genMenuRec(_menu) {
  let src = '';
  for (let i in _menu) {
    let menu = _menu[i]
    src += '<li>';
    if (menu.divider) {
      src += '<div class="divider"></div>';
    } else if (menu.version && menu.version.indexOf(version) == -1) {
      continue;
    } else if (menu.submenu) {
      src += '<div class="collapsible-header">'+genText(menu)+'</div>';
      src += '<div class="collapsible-body"><ul>';
      src += genMenuRec(menu.submenu)
      src += '</ul></div>';
    } else if (menu.link && menu.link != '') {
      src += '<a href="'+genLink(menu.link)+'">'+genText(menu)+'</a>';
    } else {
      src += '<div style="padding:7px 0 0 16px;display:flex;font-weight:bold;">'+genText(menu)+'</div>';
    }
    src += '</li>';
  }
  return src
}

html += genMenuRec(docMenu);
// html += '<li class="small"><small>Jeedom: Free, Open, Cloudless,';
// html += ' Multiprotocol solution since 2014</small></li>';
$('#ul_menu').empty().html(html);

// ----------------------------------------------------------------------------
$(function() {
  document.title = 'Documentation of Bad’s plugins for Jeedom'
  $('.sidenav').sidenav();
  setTimeout(function() {
    if ($('#slide-out').length > 0 && window.matchMedia("only screen and (max-width: 760px)").matches) {
      $('.sidenav').sidenav();
    }
  }, 100);
  setTimeout(function() {
    if ($('#slide-out').length > 0 && window.matchMedia("only screen and (max-width: 760px)").matches) {
      $('.sidenav').sidenav();
    }
  }, 250);
  setTimeout(function() {
    if ($('#slide-out').length > 0 && window.matchMedia("only screen and (max-width: 760px)").matches) {
      $('.sidenav').sidenav();
    }
  }, 500);
  $('.parallax').parallax();
  $('.dropdown-trigger').dropdown();
  $('.collapsible').collapsible();

  $('#div_summary').empty().append('<ul></ul>');
  $('#div_content h1,h2,h3').each(function() {
    var id = encodeURIComponent($(this).text());
    $(this).attr('id',id)
    if ($(this).is('h1')) {
      $('#div_summary ul').append('<li><a href="#'+id+'" class="tocAnchor">'+$(this).text()+'</a></li>')
    }
    if ($(this).is('h2')) {
      $('#div_summary ul').append('<li><a href="#'+id+'" class="tocAnchor" style="margin-left:10px;">'+$(this).text()+'</a></li>')
    }
    if ($(this).is('h3')) {
      $('#div_summary ul').append('<li><a href="#'+id+'" class="tocAnchor" style="margin-left:20px;">'+$(this).text()+'</a></li>')
    }
    $(this).addClass('scrollspy');
  });
  $('.scrollspy').scrollSpy();

  $('.tocAnchor').off('click').on('click',function() {
    window.location.hash = $(this).attr('href')
  });

  setTimeout(function() {
    $('#div_summary').pushpin({top:$('nav').height(),offset:$('nav').height()+10})
  }, 100);

  $('#sel_lang').on('change',function() {
    setCookie('lang',$(this).val(),7)
    var url = window.location.href.replace('fr_FR',$(this).val()).replace('en_US',$(this).val()).replace('es_ES',$(this).val()).replace('de_DE',$(this).val());
    window.location.href = url;
  })

  $('#sel_theme').on('change',function() {
    setCookie('theme',$(this).val(),7)
    setTheme();
  })

  $('#sel_version').on('change',function() {
    setCookie('version', $(this).val(), 7)
    let url = window.location.href;
    let cookieVersion = getCookie('version');
    if (url.indexOf('/' + cookieVersion + '/') == -1) {
      versions.forEach(val => {
        if (window.location.href.indexOf('/' + val + '/') != -1) {
          url = url.replace('/' + val + '/', '/' + cookieVersion + '/');
        }
      });
      window.location.href = url;
      return;
    }
    window.location.reload();
  })

  $('select').formSelect();
  $('#div_content :not(td)>img').addClass('responsive-img')
  cookiesPolicyBar();
  setLeftMenu();

  if (window.location.hash) {
    document.getElementById(window.location.hash.replace('#','')).scrollIntoView()
    window.scrollBy(0, -200);
  }
});

function setTheme() {
  if (getCookie('theme') == 'dark') {
    $('html').addClass('dark')
    if ($('#sel_theme').val() != 'dark') {
      $('#sel_theme').val('dark');
    }
  } else {
    $('html').removeClass('dark')
  }
}

function getCookie(name) {
  var cookies = document.cookie.split(';');
  for (var i in cookies) {
    var csplit = cookies[i].split('=');
    if (name.trim() == csplit[0].trim()) {
      return csplit[1];
    }
  }
  return '';
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;samesite=Lax;secure";
}

function cookiesPolicyBar() {
  if (getCookie('cookiePolicyAccept') != "active") $('#cookieAcceptBar').show();
  $('#cookieAcceptBarConfirm').on('click',function() {
    setCookie('cookiePolicyAccept', 'active', 30);
    $('#cookieAcceptBar').fadeOut();
  });
}

function setLeftMenu() {
  var url = window.location.href
  if (url.indexOf('design3d') != -1) {
    $('#ul_menu a').each(function() {
      if ($(this).attr('href') && $(this).attr('href').indexOf('design3d') != -1) {
        $(this).closest('li').addClass('menu_active')
        if ($(this).closest('li').closest('ul').closest('li')) {
          $(this).closest('li').closest('ul').closest('li').find('.collapsible-header').click()
        }
        scrollMenu()
        return false
      }
    })
    return
  }
  $('#ul_menu a').each(function() {
    if ($(this).attr('href') && url.indexOf($(this).attr('href')) != -1) {
      $(this).closest('li').addClass('menu_active')
      if ($(this).closest('li').closest('ul').closest('li')) {
        $(this).closest('li').closest('ul').closest('li').find('.collapsible-header').click()
        scrollMenu()
        return false
      }
    }
  })
}

function scrollMenu() {
  setTimeout(function() {
    var container = $('#slide-out')
    var pos = container.find('li.menu_active').offset().top
    var winHeight = $(window).height()
    if (pos > winHeight-100) {
      container.animate({scrollTop: pos-(winHeight/4)})
    }
  }, 500)
}

function getUrlVars(_key) {
  var vars = [], hash, nbVars = 0;
  var hashes = window.location.search.replace('?','').split('&');
  for (var i = 0; i < hashes.length; i++) {
    if (hashes[i] !== "" && hashes[i] !== "?") {
      hash = hashes[i].split('=');
      nbVars++;
      vars[hash[0]] = hash[1];
      if (_key && _key == hash[0]) {
        return hash[1];
      }
    }
  }
  if (!_key) {
    return false;
  }
  vars.length = nbVars;
  return vars;
}

if ($('#div_searchBar')) {
  var html = "<div>";
  html += "<script>";
  html += "(function() {";
  html += "var cx = '007992890294536312136:75s0-jhumye';";
  html += "var gcse = document.createElement('script');";
  html += "gcse.type = 'text/javascript';";
  html += "gcse.async = true;";
  html += "gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;";
  html += "var s = document.getElementsByTagName('script')[0];";
  html += "s.parentNode.insertBefore(gcse, s);";
  html += "})();";
  html += "window.onload = function() {";
  html += "$('#gsc-i-id1').removeAttr( 'style' );";
  html += "$('#gsc-i-id1').attr('style','width: 100%; padding: 0px; border: none; margin: -0.0625em 0px 0px; height: 1.25em; outline: none; background-image: url(https://www.google.com/cse/static/images/1x/googlelogo_lightgrey_46x16dp.png); text-indent: 48px; background-position: left center; background-repeat: no-repeat no-repeat;');";
    if (lang == 'fr_FR') {
      html += "$('#gsc-i-id1').attr('placeholder','Rechercher...');";
    } else if (lang == 'en_US') {
      html += "$('#gsc-i-id1').attr('placeholder','Search...');";
    } else if (lang == 'es_ES') {
      html += "$('#gsc-i-id1').attr('placeholder','Buscar...');";
    } else if (lang == 'de_DE') {
      html += "$('#gsc-i-id1').attr('placeholder','Suche...');";
    }
    html += "};";
    html += "</script>";
    html += "<gcse:search></gcse:search>";
    html += "</div>";
    $('#div_searchBar').empty().append(html);
    setTimeout(function() {
      $('.gsib_a input').addClass('browser-default');
    }, 1000);
  }
