const date = new Date();
const currentDay = date.getDay();

const daysBar = Array.from(document.querySelectorAll('.day-bar'));

const data = fetch('data.json')
  .then((res) => res.json())
  .then((data) => {
    start(data);
    showInfoPerDay(data);
  });

const start = (data) => {
  for (let i = 0; i < daysBar.length; i++) {
    daysBar[i].nextElementSibling.innerText = `${data[i].day}`;
    daysBar[i].style.height = `${data[i].amount * 2}px`;
    if (i + 1 === currentDay) {
      daysBar[i + 1].classList.add('active');
    }
  }
};

const showInfoPerDay = (data) => {
  for (let i = 0; i < daysBar.length; i++) {
    daysBar[i].addEventListener('mouseenter', () => {
      daysBar[i].classList.add('hover');
      daysBar[i].previousElementSibling.classList.remove('hide');
      daysBar[i].previousElementSibling.innerText = `$${data[i].amount}`;
    });
    daysBar[i].addEventListener('mouseleave', () => {
      daysBar[i].classList.remove('hover');
      daysBar[i].previousElementSibling.classList.add('hide');
    });
  }
};
