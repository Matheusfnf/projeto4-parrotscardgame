function createElement() {
  const wrapperCard = document.querySelector(".card-placeholder");
  const result = prompt("Quantas cartas? Selecione um valor par entre 2 e 14 ");

  if (result % 2 !== 0) {
    return window.location.reload();
  }

  let cards = [];

  function createTurnedBird() {
    const turnedBird = document.createElement("img");
    turnedBird.src = "./images/bird.png";
    return turnedBird;
  }

  function createArray(result) {
    const firstGif = document.createElement("img");
    firstGif.src = "./images/bobrossparrot.gif";
    firstGif.classList.add("turned");
    const firstGifObject = {
      id: 1,
      gif: firstGif,
      img: createTurnedBird(),
    };

    const firstGifClone = document.createElement("img");
    firstGifClone.src = "./images/bobrossparrot.gif";
    firstGifClone.classList.add("turned");
    const firstGifCloneObject = {
      id: 1,
      gif: firstGifClone,
      img: createTurnedBird(),
    };

    const secondGif = document.createElement("img");
    secondGif.src = "./images/explodyparrot.gif";
    secondGif.classList.add("turned");
    const secondGifObject = {
      id: 2,
      gif: secondGif,
      img: createTurnedBird(),
    };

    const secondGifClone = document.createElement("img");
    secondGifClone.src = "./images/explodyparrot.gif";
    secondGifClone.classList.add("turned");
    const secondGifCloneObject = {
      id: 2,
      gif: secondGifClone,
      img: createTurnedBird(),
    };

    const thirdGif = document.createElement("img");
    thirdGif.src = "./images/fiestaparrot.gif";
    thirdGif.classList.add("turned");
    const thirdGifObject = {
      id: 3,
      gif: thirdGif,
      img: createTurnedBird(),
    };

    const thirdGifClone = document.createElement("img");
    thirdGifClone.src = "./images/fiestaparrot.gif";
    thirdGifClone.classList.add("turned");
    const thirdImgCloneObject = {
      id: 3,
      gif: thirdGifClone,
      img: createTurnedBird(),
    };

    const fourthGif = document.createElement("img");
    fourthGif.src = "./images/metalparrot.gif";
    fourthGif.classList.add("turned");
    const fourthImgObject = {
      id: 4,
      gif: fourthGif,
      img: createTurnedBird(),
    };

    const fourthGifClone = document.createElement("img");
    fourthGifClone.src = "./images/metalparrot.gif";
    fourthGifClone.classList.add("turned");
    const fourthGifCloneObject = {
      id: 4,
      gif: fourthGifClone,
      img: createTurnedBird(),
    };

    const fifthGif = document.createElement("img");
    fifthGif.src = "./images/revertitparrot.gif";
    fifthGif.classList.add("turned");
    const fifthGifObject = {
      id: 5,
      gif: fifthGif,
      img: createTurnedBird(),
    };

    const fifthGifClone = document.createElement("img");
    fifthGifClone.src = "./images/revertitparrot.gif";
    fifthGifClone.classList.add("turned");
    const fifthGifCloneObject = {
      id: 5,
      gif: fifthGifClone,
      img: createTurnedBird(),
    };

    const sixthGif = document.createElement("img");
    sixthGif.src = "./images/tripletsparrot.gif";
    sixthGif.classList.add("turned");
    const sixthGifObject = {
      id: 6,
      gif: sixthGif,
      img: createTurnedBird(),
    };

    const sixthGifClone = document.createElement("img");
    sixthGifClone.src = "./images/tripletsparrot.gif";
    sixthGifClone.classList.add("turned");
    const sixthGifCloneObject = {
      id: 6,
      gif: sixthGifClone,
      img: createTurnedBird(),
    };

    const seventhGif = document.createElement("img");
    seventhGif.src = "./images/unicornparrot.gif";
    seventhGif.classList.add("turned");
    const seventhGifObject = {
      id: 7,
      gif: seventhGif,
      img: createTurnedBird(),
    };

    const seventhGifClone = document.createElement("img");
    seventhGifClone.src = "./images/unicornparrot.gif";
    seventhGifClone.classList.add("turned");
    const seventhGifCloneObject = {
      id: 7,
      gif: seventhGifClone,
      img: createTurnedBird(),
    };

    cards.push(firstGifObject, firstGifCloneObject);

    if (result >= 4) cards.push(secondGifObject, secondGifCloneObject);
    if (result >= 6) cards.push(thirdGifObject, thirdImgCloneObject);
    if (result >= 8) cards.push(fourthImgObject, fourthGifCloneObject);
    if (result >= 10) cards.push(fifthGifObject, fifthGifCloneObject);
    if (result >= 12) cards.push(sixthGifObject, sixthGifCloneObject);
    if (result >= 14) cards.push(seventhGifObject, seventhGifCloneObject);
    return;
  }

  createArray(Number(result));

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  let compArr = [];
  let armazenaResult = [];
  let validated = [];
  let wrongArr = [];
  let tries = 0;

  shuffle(cards).map((e) => {
    for (let i of validated) {
      if (i.id == e.id && verified) return;
    }

    const firstElement = document.createElement("div");
    firstElement.appendChild(e.img);
    firstElement.classList.add(`card`);
    firstElement.appendChild(e.gif);
    firstElement.addEventListener("click", (event) => {
      tries++;
      for (let i of validated) {
        if (i.id == e.id && i.verified) return;
      }

      e.gif.classList.remove(`turned`);
      e.img.classList.add("turned");
      compArr.push(e.id);
      checkTrue();
    });

    wrapperCard.appendChild(firstElement);

    function checkTrue() {
      if (compArr.length < 2) return;
      if (compArr[0] == compArr[1]) {
        validated.push(
          { id: compArr[0], verified: true },
          { id: compArr[1], verified: true }
        );
        armazenaResult.push(1, 1);
        wrongArr = [];
        endChallenge();
        return (compArr = []);
      }

      wrongArr.push(compArr[0], compArr[1]);
      compArr = [];
      turnBackCards();
      return;
    }

    async function turnBackCards() {
      await delay(500);
      cards.map((e) => {
        if (e.id == wrongArr[0] || e.id == wrongArr[1]) {
          e.gif.classList.add("turned");
          e.img.classList.remove("turned");
        }
      });
      wrongArr = [];
    }
  });

  async function endChallenge() {
    if (armazenaResult.length < result) return;
    await delay(500);
    alert(`Parabéns! Você conseguiu completar em ${tries / 2} tentativas!`);
    window.location.reload();
    return;
  }

  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
}
createElement();
