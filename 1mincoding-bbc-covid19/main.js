//전역변수를 막기위해
(() => {
  const actions = {
    birdFlies(key) {
      if (key) {
        document.querySelector(
          '[data-index="2"] .bird'
        ).style.transform = `translateX(${window.innerWidth}px)`;
      } else {
        document.querySelector(
          '[data-index="2"] .bird'
        ).style.transform = `translateX(-100%)`; //초기값
      }
    },
    birdFlies2(key) {
      if (key) {
        document.querySelector(
          '[data-index="5"] .bird'
        ).style.transform = `translate(${window.innerWidth}px, ${
          -window.innerHeight * 0.7
        }px)`;
      } else {
        document.querySelector(
          '[data-index="5"] .bird'
        ).style.transform = `translateX(-100%)`; //초기값
      }
    },
  };

  const stepEl = document.querySelectorAll(".step");
  const graphicEl = document.querySelectorAll(".graphic-item");
  let currentItem = graphicEl[0]; //현재 visible 붙은 애를 지정 [0]번 초기값
  let ioIndex;

  const io = new IntersectionObserver((entries, observer) => {
    //roop 횟수 줄이기 위해 효율적으로 눈에 보이는 것만

    // console.log(entries[0].target.dataset.index); //검정색은 문자열 나타냄
    ioIndex = Number(entries[0].target.dataset.index);
    // console.log(ioIndex);
  });

  for (let i = 0; i < stepEl.length; i++) {
    io.observe(stepEl[i]);
    // stepEl[i].setAttribute('data-index', i);
    stepEl[i].dataset.index = i;
    graphicEl[i].dataset.index = i;
  }

  function activate(action) {
    currentItem.classList.add("visible");
    if (action) {
      actions[action](true);
    }
  }

  function inactivate(action) {
    currentItem.classList.remove("visible");
    if (action) {
      actions[action](false);
    }
  }

  window.addEventListener("scroll", () => {
    let step;
    let boundingRect;

    for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
      step = stepEl[i];
      if (!step) continue; //step에 값이 처음에 없으니 패스
      boundingRect = step.getBoundingClientRect();
      //   console.log(boundingRect.top);

      if (
        boundingRect.top > window.innerHeight * 0.1 && //브라우저 창 위 10프로 아래 80프로
        boundingRect.top < window.innerHeight * 0.8
      ) {
        // console.log(step.dataset.index);

        inactivate(currentItem.dataset.action);
        currentItem = graphicEl[step.dataset.index];
        activate(currentItem.dataset.action);
      }
    }
  });

  //새로고침 하면 위로
  window.addEventListener("load", () => {
    setTimeout(() => scrollTo(0, 0), 100); //scrollTo는 조금 딜레이를 줘야 잘 작동
  });

  activate();
})();
