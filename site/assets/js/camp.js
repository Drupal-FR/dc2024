console.log('in hello');
const $button = document.querySelector("[data-js-selector='navigation']");
console.log($button);
if ($button) {
  $button.addEventListener('click', function(e) {
    $content_selector = e.target.getAttribute('aria-controls');
    $content = document.getElementById($content_selector);
    if ($content) {
      expanded_state = $content.getAttribute('aria-expanded');
      console.debug($content);
      console.debug(expanded_state);
      if (expanded_state == null) {
        $content.setAttribute('aria-expanded', false);
        expanded_state = false;
        button_label = 'Afficher la navigation';
        $button.setAttribute('aria-label', button_label);
      }
      if (expanded_state == "true") {
        $content.setAttribute('aria-expanded', false);
        button_label = 'Afficher la navigation';
        $button.setAttribute('aria-label', button_label);
        $button.classList.remove('js-close');
      }
      else {
        $content.setAttribute('aria-expanded', true);
        button_label = 'Masquer la navigation';
        $button.setAttribute('aria-label', button_label);
        $button.classList.add('js-close');
      }
      expanded_state = $content.getAttribute('aria-expanded');
    }

  });
}