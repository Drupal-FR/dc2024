const $button = document.querySelector("[data-js-selector='navigation']");
if ($button) {
  $button.addEventListener('click', function(e) {
    $content_selector = e.target.getAttribute('aria-controls');
    $content = document.getElementById($content_selector);
    if ($content) {
      expanded_state = $content.getAttribute('aria-expanded');
      // Initiate status, we don't have default value on the first click.
      if (expanded_state == null) {
        expanded_state = false;
        button_label = 'Afficher la navigation';
        $button.setAttribute('aria-label', button_label);
        $content.setAttribute('aria-expanded', expanded_state);
      }
      // Toggle status.
      else if (expanded_state == "true") {
        button_label = 'Afficher la navigation';
        $button.setAttribute('aria-label', button_label);
        $button.classList.remove('js-close');
        $content.setAttribute('aria-expanded', false);
      }
      else {
        button_label = 'Masquer la navigation';
        $button.setAttribute('aria-label', button_label);
        $button.classList.add('js-close');
        $content.setAttribute('aria-expanded', true);
      }
    }

  });
}