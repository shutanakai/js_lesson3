window.addEventListener("load", () => {

  // Profileボタン
  const profileButton = document.querySelector(".navigation__button--profile");

  // 全てのボタン
  const triggerButtons = document.querySelectorAll(".navigation__button");

  // コンテナー
  const container = document.querySelector(".cardsContainer__mask");


  // ボタンを押せるようにする
  const enableButton = function (button) {
    button.style.pointerEvents = "";
    button.style.color = "#fff";
  };

  // ボタンを非活性にする
  // ※アロー関数の参考
  const disableButton = (button) => {
    button.style.pointerEvents = "none";
    button.style.color = "#555";
  };

  // カルーセルをスライドさせる
  const slideCarousel = function (index) {
    const percent = `${-100 * index}%`;
    container.style.transform = `translateX(${percent})`;
  };

  // ボタンを制御する
  const buttonControl = function(targetButton) {

    for(let index = 0; index < triggerButtons.length; index++) {
      const button = triggerButtons[index];
      if (button === targetButton) {
        disableButton(button);
      } else {
        enableButton(button);
      };
    };

    // 参考(forEach)
    // triggerButtons.forEach((button) => {
    //   if (button === targetButton) {
    //     disableButton(button);
    //   } else {
    //     enableButton(button);
    //   }
    // });
  }

  const clickButton = function(e) {

    // e.targetでclickした対象を取得できる
    const clickedButton = e.target;
    let index;
    for(let i = 0; i < triggerButtons.length; i++) {
      const button = triggerButtons[i];
      if (button === clickedButton) {
        index = i;
        break;
      };
    };

    // 再帰関数参考(findIndex)
    // const index = [...triggerButtons].findIndex((button) => button === clickedButton);

    slideCarousel(index);
    buttonControl(clickedButton);
  };

  // Profileボタンを非活性にする
  disableButton(profileButton);

  triggerButtons.forEach(function(button) {
    button.addEventListener("click", clickButton);

    // 同じ意味
    // button.addEventListener("click", (e) => clickButton(e));
  });
});
