// Selector de idioma: español / inglés. Se recuerda en el navegador; por defecto, el idioma del navegador.
(function () {
  var root = document.documentElement;

  function setLang(lang) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang);
    try { localStorage.setItem('evertome-lang', lang); } catch (e) { /* almacenamiento no disponible */ }
  }

  var saved = null;
  try { saved = localStorage.getItem('evertome-lang'); } catch (e) { /* almacenamiento no disponible */ }
  var browser = (navigator.language || 'es').toLowerCase().indexOf('es') === 0 ? 'es' : 'en';
  setLang(saved === 'es' || saved === 'en' ? saved : browser);

  document.querySelector('.lang').addEventListener('click', function () {
    setLang(root.getAttribute('data-lang') === 'es' ? 'en' : 'es');
  });
})();
