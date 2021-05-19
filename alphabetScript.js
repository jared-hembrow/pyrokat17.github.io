// assign a const for the display of the hebrew letter and the result of users answer
const getDiplay = document.getElementById("display");
const displayResult = document.getElementById("result");
// asigning the answer buttons to a const
const firstButton = document.getElementById("first-button");
const secondButton = document.getElementById("second-button");
const thirdButton = document.getElementById("third-button");
const fourthButton = document.getElementById("fourth-button");
const nextButton = document.getElementById("reset-button");
// create a random number to be used on the letters array and buttons array
createRandomNum = () => {
  return Math.floor(Math.random() * 26);
};
createRandomNumButton = () => {
  return Math.floor(Math.random() * 4);
};

// an array on the buttons to be able to randomise where the right and wrong answers show up
const buttons = [firstButton, secondButton, thirdButton, fourthButton];
// an array with all hebrew letters and there english name
const letters = [
  ["א", "Alef"],
  ["ב", "Bet"],
  ["ג", "Gimel"],
  ["ד", "Dalet"],
  ["ה", "He"],
  ["ו", "Vav"],
  ["ז", "Zayin"],
  ["ח", "Chet"],
  ["ט", "Tet"],
  ["י", "Yod"],
  ["כ", "Kaf"],
  ["ל", "Lamed"],
  ["מ", "Mem"],
  ["ם", "Mem Final"],
  ["נ", "Nun"],
  ["ן", "Nun Final"],
  ["ס", "Samech"],
  ["ע", "Ayin"],
  ["פ", "Pay"],
  ["ף", "Pay Final"],
  ["צ", "Tsade"],
  ["ץ", "Tsade Final"],
  ["ק", "Qof"],
  ["ר", "Resh"],
  ["ש", "Shin"],
  ["ת", "Tav"],
];

function choose() {
  displayResult.innerText = "";
  let random = createRandomNum();
  let randomButtonNumber = createRandomNumButton();
  getDiplay.innerText = letters[random][0];
  let index = letters[random][1];
  buttons[randomButtonNumber].innerText = index;
  // randomises buttons from index [0]
  if (randomButtonNumber === 0 && random < 23 && random > 2) {
    buttons[1].innerText = letters[random + 1][1];
    buttons[2].innerText = letters[random - 2][1];
    buttons[3].innerText = letters[random + 3][1];
  } else if (randomButtonNumber === 0 && random > 22) {
    buttons[1].innerText = letters[random - 10][1];
    buttons[2].innerText = letters[random - 12][1];
    buttons[3].innerText = letters[random - 3][1];
  } else if (randomButtonNumber === 0 && random < 3) {
    buttons[1].innerText = letters[random + 10][1];
    buttons[2].innerText = letters[random + 12][1];
    buttons[3].innerText = letters[random + 3][1];
  }
  // randomises button from index [1]
  else if (randomButtonNumber === 1 && random < 23 && random > 2) {
    buttons[0].innerText = letters[random + 1][1];
    buttons[2].innerText = letters[random - 2][1];
    buttons[3].innerText = letters[random + 3][1];
  } else if (randomButtonNumber === 1 && random > 22) {
    buttons[0].innerText = letters[random - 10][1];
    buttons[2].innerText = letters[random - 12][1];
    buttons[3].innerText = letters[random - 3][1];
  } else if (randomButtonNumber === 1 && random < 3) {
    buttons[0].innerText = letters[random + 10][1];
    buttons[2].innerText = letters[random + 12][1];
    buttons[3].innerText = letters[random + 3][1];
  }
  // randomises button from index [2]
  else if (randomButtonNumber === 2 && random < 23 && random > 2) {
    buttons[1].innerText = letters[random + 1][1];
    buttons[0].innerText = letters[random - 2][1];
    buttons[3].innerText = letters[random + 3][1];
  } else if (randomButtonNumber === 2 && random > 22) {
    buttons[1].innerText = letters[random - 10][1];
    buttons[0].innerText = letters[random - 12][1];
    buttons[3].innerText = letters[random - 3][1];
  } else if (randomButtonNumber === 2 && random < 3) {
    buttons[1].innerText = letters[random + 10][1];
    buttons[0].innerText = letters[random + 12][1];
    buttons[3].innerText = letters[random + 3][1];
  }
  // randomises button from index [3]
  else if (randomButtonNumber === 3 && random < 23 && random > 2) {
    buttons[1].innerText = letters[random + 1][1];
    buttons[2].innerText = letters[random - 2][1];
    buttons[0].innerText = letters[random + 3][1];
  } else if (randomButtonNumber === 3 && random > 22) {
    buttons[1].innerText = letters[random - 10][1];
    buttons[2].innerText = letters[random - 12][1];
    buttons[0].innerText = letters[random - 3][1];
  } else if (randomButtonNumber === 3 && random < 3) {
    buttons[1].innerText = letters[random + 10][1];
    buttons[2].innerText = letters[random + 12][1];
    buttons[0].innerText = letters[random + 3][1];
  }
  // functions on the buttons to display whether it is the right answer or not
  firstButton.addEventListener("click", () => {
    if (randomButtonNumber == 0) {
      displayResult.innerText = "Correct!!!";
    } else {
      displayResult.innerText = "Incorrect";
    }
  });
  secondButton.addEventListener("click", () => {
    if (randomButtonNumber == 1) {
      displayResult.innerText = "Correct!!!";
    } else {
      displayResult.innerText = "Incorrect";
    }
  });
  thirdButton.addEventListener("click", () => {
    if (randomButtonNumber == 2) {
      displayResult.innerText = "Correct!!!";
    } else {
      displayResult.innerText = "Incorrect";
    }
  });
  fourthButton.addEventListener("click", () => {
    if (randomButtonNumber == 3) {
      displayResult.innerText = "Correct!!!";
    } else {
      displayResult.innerText = "Incorrect";
    }
  });
}
// load in the content once the page is loaded
window.addEventListener("DOMContentLoaded", () => {
  choose();
});
// to restart program and display another letter
nextButton.addEventListener("click", () => {
  choose();
  // window.location.reload();
});
const printFont = document.getElementById("print-font");
const handFont = document.getElementById("hand-font");
printFont.addEventListener("click", () => {
  getDiplay.style.fontFamily = "Times New Roman";
});
handFont.addEventListener("click", () => {
  getDiplay.style.fontFamily = "alef";
  getDiplay.style.fontWeight = "bold";
});
