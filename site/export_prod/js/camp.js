const $button = document.querySelector("[data-js-selector='navigation']");
if ($button) {
  $button.addEventListener('click', function(e) {
    // Menu block.
    $content_selector = e.target.getAttribute('aria-controls');
    $content = document.getElementById($content_selector);

    // Tickets link block.
    $ticket_link = document.querySelector('[data-js-selector="nav-tickets"]');
    if ($content) {
      expanded_state = $content.getAttribute('aria-expanded');
      // Initiate status, we don't have default value on the first click.
      if (expanded_state == null) {
        expanded_state = false;
        button_label = 'Afficher la navigation';
        $button.setAttribute('aria-label', button_label);
        $content.setAttribute('aria-expanded', expanded_state);
        if ($ticket_link) {
          $ticket_link.classList.remove('js-close');
        }
      }

      // Toggle status.
      if (expanded_state == "true") {
        button_label = 'Afficher la navigation';
        $button.setAttribute('aria-label', button_label);
        $button.classList.remove('js-close');
        $content.setAttribute('aria-expanded', false);
        if ($ticket_link) {
          $ticket_link.classList.remove('js-close');
        }
      }
      else {
        button_label = 'Masquer la navigation';
        $button.setAttribute('aria-label', button_label);
        $button.classList.add('js-close');
        $content.setAttribute('aria-expanded', true);

        if ($ticket_link) {
          $ticket_link.classList.add('js-close');
        }
      }
    }

  });
}