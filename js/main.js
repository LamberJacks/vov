(function () {
  const select = document.getElementById('yearSelect');
  const toggle = select.querySelector('.year-select__toggle');
  const label = select.querySelector('.year-select__label');
  const items = select.querySelectorAll('.year-select__item');
  const contents = document.querySelectorAll('.year__content');


    toggle.addEventListener('click', () => {
    select.classList.toggle('open');
  });

  items.forEach(item => {

    item.addEventListener('click', (e) => {
      e.preventDefault();


      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');


      const link = item.querySelector('a');
      const targetId = link.getAttribute('href').replace('#', '');
      const targetContent = document.getElementById(targetId);
      console.log(targetContent)


      contents.forEach(content =>
        content.classList.remove('year__content--show')
      );
      targetContent.classList.add('year__content--show');


      label.textContent = link.textContent.trim();

      select.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  });


})();

