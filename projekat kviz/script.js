let questions = [
  {
    text: "Koja od navedenih država nema izlaz na Jadransko more?",
    answers: ["Albanija", "Italija", "Slovenija", "Makedonija"],
    index: 3,
  },

  {
    text: "Kako se zove glavni grad Kipra?",
    answers: ["Larnaka", "Nikozija", "Nijedan od navedenih", "Limasol"],
    index: 1,
  },

  {
    text: "Helsinki je glavni grad...",
    answers: ["Finske", "Danske", "Aljaske", "Ukrajine"],
    index: 0,
  },

  {
    text: "Poljska se ne graniči sa jednom od navedenih država. Kojom?",
    answers: ["Češka", "Belorusija", "Litvanija", "Austrija"],
    index: 3,
  },

  {
    text: "Kom okrugu pripada grad Vranje?",
    answers: ["Pčinjskom", "Rasinskom", "Bačkom", "Nišavskom"],
    index: 0,
  },

  {
    text: "U kom glavnom gradu se nalazi 'Zabranjeni grad'?",
    answers: ["Peking", "Džakarta", "Hong Kong", "PjongJang"],
    index: 0,
  },

  {
    text: "Ulan Bator je glavni grad..",
    answers: ["Kambodže", "Avagnistana", "Mongolije", "Jermenije"],
    index: 2,
  },

  {
    text: "Pored engleskog, u Pakistanu je sluzbeni jezik..",
    answers: ["urdu", "turski", "persijski", "francuski"],
    index: 0,
  },

  {
    text: "Koji je pun naziv Mauricijusa?",
    answers: ["Kraljevina Mauricijus", "Republika Mauricijus", "Francuska Republika Mauricijus", "Demokratska Država Mauricijus"],
    index: 1,
  },

  {
    text: "Koji je glavni grad Gruzije",
    answers: ["Batumi", "Kutaisi", "Tbilisi", "Gori"],
    index: 2,
  },
];

let bodi = document.querySelector("body");
bodi.style.marginBottom = "200px";
let title = document.createElement("h1");
title.textContent = "ZANIMLJIVA GEOGRAFIJA";
bodi.appendChild(title);
let questionsanswersElement = document.createElement("div");
questionsanswersElement.setAttribute("id","div2")
bodi.appendChild(questionsanswersElement);

function questionsanswers(questions) {
  questionsanswersElement.innerHTML = "";
  for (let i = 0; i < questions.length - 5; i++) {
    let div = document.createElement("div");
    let title = document.createElement("h4");
    title.textContent = `${i + 1}. ${questions[i].text}`;
    div.appendChild(title);
    for (let j = 0; j < questions[i].answers.length; j++) {
      let radio = document.createElement("input");

      radio.setAttribute("type", "radio");
      radio.setAttribute("name", `pitanje${i + 1}`);
      radio.setAttribute("id", "radio")
      radio.id = j;

      if (j == 0) {
        radio.checked = true;
      }

      let answer = document.createElement("label");
      answer.setAttribute("for", j);
      answer.textContent = questions[i].answers[j];
      radio.appendChild(answer);
      answer.innerHTML += `<br>`;
      div.append(radio, answer);
      questionsanswersElement.appendChild(div);
    }
  }
}
questionsanswers(questions);

let butt = document.createElement("button");
butt.textContent = "Pošalji odgovore";
butt.setAttribute("id", "odg");
let butt2 = document.createElement("button");
butt2.textContent = "Nova pitanja";
butt2.setAttribute("id", "new");
bodi.append(butt, butt2);


butt.addEventListener("click", () => {
  let allInputs = document.querySelectorAll("input");
  for(let k=0;k<allInputs.length;k++){
    allInputs[k].disabled=true
  }
  
  let sendAnswers = document.createElement("div");
  sendAnswers.id = "showAnswers";

  let trueAnswer = document.querySelectorAll("input:checked");
  for (let i = 0; i < questions.length - 5; i++) {
    let answerText = document.createElement("p");
    if (questions[i].index == trueAnswer[i].id) {
      answerText.textContent = `Tacno ste odgovorili na ${i + 1}. pitanje !!!`;
      answerText.style.color = "green";
      sendAnswers.appendChild(answerText);
    } else {
      answerText.textContent = `Niste tacno ste odgovorili na ${i + 1}. pitanje!!!`;
      answerText.style.color = "red";
      sendAnswers.appendChild(answerText);
    }
  }
  bodi.appendChild(sendAnswers);
});

let questionsShuffle = function (questions) {
  for (let i = questions.length - 1; i > 0; i--) {
    for (let i = questions.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = questions[i];
      questions[i] = questions[j];
      questions[j] = temp;
    }
    questionsanswers(questions)
  }
}
let newOrder = questionsShuffle(questions)
butt2.addEventListener("click", () => { location.reload(); });

