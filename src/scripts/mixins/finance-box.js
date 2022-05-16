const steps1 = document.querySelectorAll('[data-name="steps1"]');
const steps2 = document.querySelectorAll('[data-name="step2"]');
const arrows1 = document.querySelectorAll('[data-name="arrows1"]');
const arrows2 = document.querySelectorAll('[data-name="arrows2"]');
const icons = document.querySelectorAll('[data-name="icons"]');

function highlightStep1() {
  icons[0].classList.remove('active');
  icons[1].classList.remove('active');
  icons[2].classList.remove('active');
  const currentNumb = this.getAttribute('steps1');

  steps1.forEach((elem) => {
    if (elem.getAttribute('steps1') === currentNumb) {
      elem.classList.add('active');
    } else {
      elem.classList.remove('active');
    }
  });
  arrows1.forEach((elem) => {
    if (elem.getAttribute('steps1') === currentNumb) {
      elem.classList.add('active');

      if (currentNumb === '1' || currentNumb === '4') {
        icons[1].classList.add('active');
      }
      if (currentNumb === '2' || currentNumb === '5') {
        icons[0].classList.add('active');
      }
      if (currentNumb === '3') {
        icons[2].classList.add('active');
      }
    } else {
      elem.classList.remove('active');
    }
  });
}

function highlightStep2() {
  icons[3].classList.remove('active');
  icons[4].classList.remove('active');
  icons[5].classList.remove('active');
  const currentNumb = this.getAttribute('step2');

  steps2.forEach((elem) => {
    if (elem.getAttribute('step2') === currentNumb) {
      elem.classList.add('active');
    } else {
      elem.classList.remove('active');
    }
  });
  arrows2.forEach((elem) => {
    if (elem.getAttribute('step2') === currentNumb) {
      elem.classList.add('active');

      if (currentNumb === '1') {
        icons[4].classList.add('active');
      }
      if (currentNumb === '2' || currentNumb === '4') {
        icons[3].classList.add('active');
      }
      if (currentNumb === '5' || currentNumb === '3') {
        icons[5].classList.add('active');
      }
    } else {
      elem.classList.remove('active');
    }
  });
}

steps1.forEach((elem) => {
  elem.addEventListener('click', highlightStep1);
});
arrows1.forEach((elem) => {
  elem.addEventListener('click', highlightStep1);
});
steps2.forEach((elem) => {
  elem.addEventListener('click', highlightStep2);
});
arrows2.forEach((elem) => {
  elem.addEventListener('click', highlightStep2);
});
