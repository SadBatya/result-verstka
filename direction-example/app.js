const container = document.querySelector(".container");

container.addEventListener("change", function ({ target }) {
  if (target.classList.contains('var-switcher')) {
    document
      .documentElement
      .style
      .setProperty('--' + target.dataset.type, target.value);
  } else if (target.classList.contains('global-dir-switcher')) {
    document
      .documentElement
      .setAttribute('dir', target.value);
  }
});
