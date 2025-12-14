const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();

    navItems.forEach(i => i.classList.remove('active'));

    item.classList.add('active');
  });
});

document.addEventListener('click', () => {
  navItems.forEach(i => i.classList.remove('active'));
});
