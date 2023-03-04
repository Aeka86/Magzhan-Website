const dropdowns = document.querySelectorAll('nav li');

dropdowns.forEach(dropdown => {
  const dropdownToggle = dropdown.querySelector('a');

  dropdownToggle.addEventListener('click', () => {
    const dropdownMenu = dropdown.querySelector('ul');
    dropdownMenu.classList.toggle('show');
  });
});
