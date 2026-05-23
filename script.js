const questions = [
  {
    id: "ignored-call",
    en: "Have you ignored a call from someone you like because you did not have the energy?",
    es: "¿Has ignorado una llamada de alguien que quieres porque no tenías energía?",
    yesPercent: 74,
  },
  {
    id: "reread-message",
    en: "Have you reread a message after sending it and worried it sounded wrong?",
    es: "¿Has releído un mensaje después de enviarlo y te preocupó cómo sonaba?",
    yesPercent: 77,
  },
  {
    id: "pretended-not-see",
    en: "Have you ever pretended not to see someone you knew in public?",
    es: "¿Has fingido no ver a alguien conocido en público?",
    yesPercent: 64,
  },
  {
    id: "already-on-way",
    en: "Have you said you were already on your way when you had not left yet?",
    es: "¿Has dicho que ya ibas de camino cuando todavía no habías salido?",
    yesPercent: 64,
  },
  {
    id: "faked-laugh",
    en: "Have you faked a laugh so the room would not get uncomfortable?",
    es: "¿Has fingido una risa para que el momento no se pusiera incómodo?",
    yesPercent: 68,
  },
  {
    id: "deleted-comment",
    en: "Have you deleted a comment before posting it because it suddenly felt too much?",
    es: "¿Has borrado un comentario antes de publicarlo porque de pronto se sintió demasiado?",
    yesPercent: 73,
  },
  {
    id: "watched-online",
    en: "Have you watched someone be online and hoped they would message you?",
    es: "¿Has visto a alguien en línea esperando que te escribiera?",
    yesPercent: 71,
  },
  {
    id: "lonely-surrounded",
    en: "Have you felt lonely while surrounded by people?",
    es: "¿Te has sentido solo estando rodeado de gente?",
    yesPercent: 67,
  },
  {
    id: "rehearsed-conversation",
    en: "Have you rehearsed a conversation in your head before having it?",
    es: "¿Has ensayado una conversación en tu cabeza antes de tenerla?",
    yesPercent: 81,
  },
  {
    id: "checked-profile",
    en: "Have you checked someone's profile even though you do not like them?",
    es: "¿Has revisado el perfil de alguien aunque no te caiga bien?",
    yesPercent: 66,
  },
  {
    id: "room-everyone-looking",
    en: "Have you entered a room and felt like everyone looked at you?",
    es: "¿Has entrado a una habitación y sentido que todos te miraban?",
    yesPercent: 72,
  },
  {
    id: "apologized-not-fault",
    en: "Have you apologized when you did not think it was your fault?",
    es: "¿Has pedido perdón cuando no creías que era tu culpa?",
    yesPercent: 71,
  },
  {
    id: "smarter-than-average",
    en: "Do you think you are smarter than the average person?",
    es: "¿Crees que eres más inteligente que la persona promedio?",
    yesPercent: 65,
  },
  {
    id: "different-online",
    en: "Have you acted different online than you are in person?",
    es: "¿Has actuado distinto en internet de como eres en persona?",
    yesPercent: 74,
  },
  {
    id: "never-told-anyone",
    en: "Do you have something you have never told anyone?",
    es: "¿Hay algo que nunca le has dicho a nadie?",
    yesPercent: 83,
  },
  {
    id: "cried-no-reason",
    en: "Have you cried without knowing exactly why?",
    es: "¿Has llorado sin saber exactamente por qué?",
    yesPercent: 54,
  },
  {
    id: "shallow-relationships",
    en: "Do you feel most of your relationships are more shallow than you want?",
    es: "¿Sientes que la mayoría de tus relaciones son más superficiales de lo que quisieras?",
    yesPercent: 49,
  },
  {
    id: "afraid-disappointing",
    en: "Are you more afraid of disappointing people you love than you admit?",
    es: "¿Te da más miedo decepcionar a la gente que quieres de lo que admites?",
    yesPercent: 71,
  },
  {
    id: "hidden-version",
    en: "Do you think there is a version of you most people never get to meet?",
    es: "¿Crees que hay una versión de ti que la mayoría nunca llega a conocer?",
    yesPercent: 76,
  },
  {
    id: "talked-to-device",
    en: "Have you spoken to your phone or computer when it stopped working?",
    es: "¿Le has hablado a tu teléfono o computador cuando dejó de funcionar?",
    yesPercent: 71,
  },
  {
    id: "body-video-game",
    en: "Have you moved your body while moving something in a video game?",
    es: "¿Has movido el cuerpo al mover algo en un videojuego?",
    yesPercent: 48,
  },
  {
    id: "lowered-head",
    en: "Have you lowered your head under something even though you knew it would not hit you?",
    es: "¿Has bajado la cabeza bajo algo aunque sabías que no te iba a tocar?",
    yesPercent: 61,
  },
  {
    id: "late-what-wear",
    en: "Have you been late because you could not decide what to wear?",
    es: "¿Has llegado tarde porque no podías decidir qué ponerte?",
    yesPercent: 52,
  },
  {
    id: "typed-deleted-nothing",
    en: "Have you started writing a message, deleted it, and sent nothing?",
    es: "¿Has empezado a escribir un mensaje, lo borraste y no mandaste nada?",
    yesPercent: 78,
  },
  {
    id: "hidden-meaning-message",
    en: "Have you reread a message ten times looking for a hidden meaning?",
    es: "¿Has releído un mensaje diez veces buscando un significado oculto?",
    yesPercent: 69,
  },
  {
    id: "handle-stress",
    en: "Do you think you handle stress better than most people?",
    es: "¿Crees que manejas el estrés mejor que la mayoría?",
    yesPercent: 57,
  },
  {
    id: "judged-first-seconds",
    en: "Have you judged someone in the first few seconds and never really changed your mind?",
    es: "¿Has juzgado a alguien en los primeros segundos y nunca cambiaste mucho de opinión?",
    yesPercent: 61,
  },
  {
    id: "not-forgiven",
    en: "Is there someone you have not forgiven, even if you act like you have?",
    es: "¿Hay alguien a quien no has perdonado, aunque actúes como si sí?",
    yesPercent: 58,
  },
  {
    id: "wished-bad-thing",
    en: "Have you ever wished something bad would happen to someone, even for one second?",
    es: "¿Alguna vez deseaste que algo malo le pasara a alguien, aunque fuera por un segundo?",
    yesPercent: 72,
  },
  {
    id: "thoughts-respect-less",
    en: "Do you think people would respect you less if they knew exactly what you think?",
    es: "¿Crees que la gente te respetaría menos si supiera exactamente lo que piensas?",
    yesPercent: 63,
  },
  {
    id: "fit-nowhere",
    en: "Have you felt like you do not fully fit anywhere?",
    es: "¿Has sentido que no encajas del todo en ningún lugar?",
    yesPercent: 58,
  },
  {
    id: "song-private-moment",
    en: "Do you connect a song with a specific moment you have never explained to anyone?",
    es: "¿Conectas una canción con un momento específico que nunca le explicaste a nadie?",
    yesPercent: 74,
  },
  {
    id: "remember-if-died",
    en: "Have you thought about how people would remember you if you died tomorrow?",
    es: "¿Has pensado en cómo te recordarían si murieras mañana?",
    yesPercent: 71,
  },
  {
    id: "life-not-chosen",
    en: "Do you sometimes think about a version of your life you did not choose?",
    es: "¿A veces piensas en una versión de tu vida que no elegiste?",
    yesPercent: 69,
  },
  {
    id: "honest-strangers",
    en: "Is it easier for you to be honest with strangers than with people close to you?",
    es: "¿Te resulta más fácil ser honesto con extraños que con gente cercana?",
    yesPercent: 44,
  },
  {
    id: "wanted-disappear",
    en: "Have you wanted to disappear for a while, not dramatically, just to be unreachable?",
    es: "¿Has querido desaparecer por un rato, no dramáticamente, solo estar inalcanzable?",
    yesPercent: 67,
  },
  {
    id: "felt-invisible",
    en: "Have you ever felt invisible?",
    es: "¿Alguna vez te has sentido invisible?",
    yesPercent: 61,
  },
  {
    id: "people-carry-hidden",
    en: "Do you think most people carry something they do not show?",
    es: "¿Crees que la mayoría carga algo que no muestra?",
    yesPercent: 87,
  },
  {
    id: "social-pressure",
    en: "Have you done something because of social pressure that you never would have done alone?",
    es: "¿Has hecho algo por presión social que nunca habrías hecho solo?",
    yesPercent: 79,
  },
  {
    id: "real-version-known",
    en: "Do you think the version of you people know is the real one?",
    es: "¿Crees que la versión de ti que la gente conoce es la real?",
    yesPercent: 31,
  },
  {
    id: "googled-name",
    en: "Have you Googled your own name?",
    es: "¿Has buscado tu propio nombre en Google?",
    yesPercent: 56,
  },
  {
    id: "phone-after-waking",
    en: "Do you check your phone in the first ten minutes after waking up?",
    es: "¿Revisas el teléfono en los primeros diez minutos después de despertar?",
    yesPercent: 71,
  },
  {
    id: "phone-while-sleep",
    en: "Do you keep your phone close while you sleep?",
    es: "¿Mantienes el teléfono cerca mientras duermes?",
    yesPercent: 60,
  },
  {
    id: "edited-photo",
    en: "Have you edited a photo of yourself before posting it?",
    es: "¿Has editado una foto tuya antes de subirla?",
    yesPercent: 59,
  },
  {
    id: "pretended-busy",
    en: "Have you pretended to be busy to avoid going out?",
    es: "¿Has fingido estar ocupado para evitar salir?",
    yesPercent: 69,
  },
  {
    id: "cried-car",
    en: "Have you cried alone in a car?",
    es: "¿Has llorado solo en un auto?",
    yesPercent: 62,
  },
  {
    id: "talked-to-self",
    en: "Have you talked to yourself out loud when nobody was around?",
    es: "¿Has hablado contigo mismo en voz alta cuando no había nadie?",
    yesPercent: 58,
  },
  {
    id: "fight-calculation",
    en: "Have you calculated whether you could win a physical fight with someone you just met?",
    es: "¿Has calculado si podrías ganarle una pelea física a alguien que acabas de conocer?",
    yesPercent: 54,
  },
];

const copy = {
  en: {
    htmlLang: "en",
    title: "You Don't Know People",
    taunt: "you think you do.",
    rules: [
      "guess what most people said.",
      "3 lives.",
      "miss by more than 20 and lose a life.",
    ],
    start: "PROVE IT",
    rounds: "ROUNDS",
    prompt: "guess the % who said yes",
    rangeLabel: "Guess percentage",
    lockIt: "LOCK IT",
    lockValue: (value) => `LOCK ${value}%`,
    resultLine: "most people said yes.",
    guessed: (value) => `you guessed ${value}%.`,
    offBy: (error) => `off by ${error}.`,
    lostLife: "you lost a life.",
    next: "NEXT",
    seeDamage: "SEE DAMAGE",
    gameOverKicker: "Game over",
    diedAtRound: (round) => `You died at round ${round}.`,
    averageLine: (average, verdict) => `average error: ${average}. human understanding: ${verdict}`,
    verdictIntro: "you thought you knew people.\nyou did not.",
    record: (stats) =>
      `best run: ${stats.bestRound}. best average error: ${stats.bestAverageError}. games played: ${stats.gamesPlayed}.`,
    best: (stats) =>
      `best: round ${stats.bestRound} - avg error ${stats.bestAverageError} - ${stats.gamesPlayed} games played`,
    copyDamage: "COPY DAMAGE",
    copied: "COPIED",
    copiedNote: "Copied.",
    again: "AGAIN",
    footer: "made by one person.<br />if this breaks, that's also data.",
    submitToggle: "got a question that would expose people?<br />send it.",
    questionPlaceholder: "write the question",
    percentPlaceholder: "what % do you think would say yes?",
    sendQuestion: "SEND QUESTION",
    submittedNote: "sent. if it's good, it might hurt people later.",
    copyError: "Could not copy. The result is the damage.",
    reachedEnd: "you reached the end.\nthat was not supposed to happen.",
    shareTitle: "You Don't Know People",
    shareRound: (round) => `I died at round ${round}.`,
    shareAverage: (average) => `Average error: ${average}.`,
    shareUnderstanding: (verdict) => `Human understanding: ${verdict}`,
    shareThought: "I thought I knew people.",
    shareNo: "I did not.",
    survival: {
      close: "disturbingly close.",
      tooMuch: "you know too much.",
      barely: "still alive. barely.",
    },
    death: {
      moved: "humans moved without you.",
      species: "not even close to the species.",
      planet: "different planet.",
    },
    verdicts: {
      good: "suspiciously good.",
      unstable: "unstable.",
      damaged: "damaged.",
      missing: "not found.",
    },
  },
  es: {
    htmlLang: "es",
    title: "No Entiendes a la Gente",
    taunt: "crees que sí.",
    rules: [
      "adivina qué respondió la mayoría.",
      "3 vidas.",
      "falla por más de 20 puntos y pierdes una vida.",
    ],
    start: "PRUÉBALO",
    rounds: "RONDAS",
    prompt: "adivina el % que dijo que sí",
    rangeLabel: "Adivina el porcentaje",
    lockIt: "FIJAR",
    lockValue: (value) => `FIJAR ${value}%`,
    resultLine: "la mayoría dijo que sí.",
    guessed: (value) => `dijiste ${value}%.`,
    offBy: (error) => `fallaste por ${error}.`,
    lostLife: "perdiste una vida.",
    next: "SIGUIENTE",
    seeDamage: "VER DAÑO",
    gameOverKicker: "Fin",
    diedAtRound: (round) => `Moriste en la ronda ${round}.`,
    averageLine: (average, verdict) => `error promedio: ${average}. comprensión humana: ${verdict}`,
    verdictIntro: "creíste que entendías a la gente.\nno.",
    record: (stats) =>
      `mejor run: ${stats.bestRound}. mejor error promedio: ${stats.bestAverageError}. partidas jugadas: ${stats.gamesPlayed}.`,
    best: (stats) =>
      `mejor: ronda ${stats.bestRound} - error promedio ${stats.bestAverageError} - ${stats.gamesPlayed} partidas jugadas`,
    copyDamage: "COPIAR DAÑO",
    copied: "COPIADO",
    copiedNote: "Copiado.",
    again: "OTRA VEZ",
    footer: "hecho por una persona.<br />si esto se rompe, también cuenta.",
    submitToggle: "¿tienes una pregunta que expondría a la gente?<br />mándala.",
    questionPlaceholder: "escribe la pregunta",
    percentPlaceholder: "¿qué % crees que diría que sí?",
    sendQuestion: "ENVIAR PREGUNTA",
    submittedNote: "enviado. si es buena, puede dolerle a alguien después.",
    copyError: "No se pudo copiar. El resultado es el daño.",
    reachedEnd: "llegaste al final.\neso no debía pasar.",
    shareTitle: "No Entiendes a la Gente",
    shareRound: (round) => `Morí en la ronda ${round}.`,
    shareAverage: (average) => `Error promedio: ${average}.`,
    shareUnderstanding: (verdict) => `Comprensión humana: ${verdict}`,
    shareThought: "Creí que entendía a la gente.",
    shareNo: "No.",
    survival: {
      close: "sospechosamente cerca.",
      tooMuch: "sabes demasiado.",
      barely: "sigues vivo. apenas.",
    },
    death: {
      moved: "la gente no estaba donde pensabas.",
      species: "ni cerca de la especie.",
      planet: "otro planeta.",
    },
    verdicts: {
      good: "sospechosamente buena.",
      unstable: "inestable.",
      damaged: "dañada.",
      missing: "no encontrada.",
    },
  },
};

const maxLives = 3;
const deathError = 20;
const hookQuestionCount = 8;
const storageKey = "youDontKnowPeopleStats";
const languageKey = "language";
const lastFirstQuestionKey = "youDontKnowPeopleLastFirstQuestionId";
const submittedQuestionsKey = "submittedQuestions";

const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const gameOverScreen = document.getElementById("gameOverScreen");
const startButton = document.getElementById("startButton");
const lockButton = document.getElementById("lockButton");
const nextButton = document.getElementById("nextButton");
const againButton = document.getElementById("againButton");
const copyButton = document.getElementById("copyButton");
const questionWrap = document.getElementById("questionWrap");
const revealWrap = document.getElementById("revealWrap");
const questionText = document.getElementById("questionText");
const guessSlider = document.getElementById("guessSlider");
const guessOutput = document.getElementById("guessOutput");
const livesLabel = document.getElementById("livesLabel");
const roundsLabel = document.getElementById("roundsLabel");
const judgementText = document.getElementById("judgementText");
const humanRead = document.getElementById("humanRead");
const resultLine = document.getElementById("resultLine");
const guessLine = document.getElementById("guessLine");
const damageLine = document.getElementById("damageLine");
const errorLine = document.getElementById("errorLine");
const finalTitle = document.getElementById("finalTitle");
const finalStats = document.getElementById("finalStats");
const verdictLine = document.getElementById("verdictLine");
const recordLine = document.getElementById("recordLine");
const copiedText = document.getElementById("copiedText");
const bestLine = document.getElementById("bestLine");
const submitQuestionToggle = document.getElementById("submitQuestionToggle");
const submitQuestionForm = document.getElementById("submitQuestionForm");
const submittedQuestionText = document.getElementById("submittedQuestionText");
const submittedQuestionPercent = document.getElementById("submittedQuestionPercent");
const submittedQuestionNote = document.getElementById("submittedQuestionNote");
const sendQuestionButton = document.getElementById("sendQuestionButton");
const languageEnButton = document.getElementById("languageEnButton");
const languageEsButton = document.getElementById("languageEsButton");

let currentRunQuestions = [];
let currentLanguage = detectLanguage();
let index = 0;
let lives = maxLives;
let roundsSurvived = 0;
let totalError = 0;
let guesses = 0;
let hasMovedSlider = false;
let stats = loadStats();
let lastReveal = null;
let gameOverState = null;

function t() {
  return copy[currentLanguage];
}

function track(eventName, data = {}) {
  console.log("[track]", eventName, data);
}

track("language_detected", { language: currentLanguage });
track("page_loaded", { questions: questions.length, language: currentLanguage });
renderStaticCopy();

function detectLanguage() {
  const saved = localStorage.getItem(languageKey);
  if (saved === "en" || saved === "es") {
    return saved;
  }

  const detected = navigator.language && navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
  localStorage.setItem(languageKey, detected);
  return detected;
}

function setLanguage(language) {
  if (language !== "en" && language !== "es") return;
  currentLanguage = language;
  localStorage.setItem(languageKey, language);
  renderStaticCopy();
  renderCurrentScreenCopy();
  track("language_changed", { language: currentLanguage });
}

function renderStaticCopy() {
  document.documentElement.lang = t().htmlLang;
  document.title = t().title;
  document.querySelector("h1").textContent = t().title;
  document.querySelector(".taunt").textContent = t().taunt;
  document.querySelectorAll(".rules p").forEach((item, ruleIndex) => {
    item.textContent = t().rules[ruleIndex];
  });
  document.querySelector(".human-footer").innerHTML = t().footer;
  document.querySelector(".prompt-label").textContent = t().prompt;
  guessSlider.setAttribute("aria-label", t().rangeLabel);
  resultLine.textContent = t().resultLine;
  startButton.textContent = t().start;
  againButton.textContent = t().again;
  copyButton.textContent = copyButton.textContent === copy[currentLanguage === "en" ? "es" : "en"].copied ? t().copied : t().copyDamage;
  copiedText.textContent = t().copiedNote;
  submitQuestionToggle.innerHTML = t().submitToggle;
  submittedQuestionText.placeholder = t().questionPlaceholder;
  submittedQuestionPercent.placeholder = t().percentPlaceholder;
  sendQuestionButton.textContent = t().sendQuestion;
  submittedQuestionNote.textContent = t().submittedNote;
  document.querySelector(".screen-over .kicker").textContent = t().gameOverKicker;
  languageEnButton.classList.toggle("is-active", currentLanguage === "en");
  languageEsButton.classList.toggle("is-active", currentLanguage === "es");
  renderBestLine();
}

function renderCurrentScreenCopy() {
  if (gameScreen.classList.contains("is-active")) {
    updateStatus();
    if (!questionWrap.hidden && currentRunQuestions[index]) {
      questionText.textContent = currentRunQuestions[index][currentLanguage];
      lockButton.textContent = hasMovedSlider ? t().lockValue(guessSlider.value) : t().lockIt;
    }
    if (!revealWrap.hidden && lastReveal) {
      renderReveal(lastReveal);
    }
  }

  if (gameOverScreen.classList.contains("is-active") && gameOverState) {
    renderGameOver(gameOverState.customTitle);
  }
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildCurrentRunQuestions() {
  const hooks = shuffle(questions.slice(0, hookQuestionCount));
  const rest = shuffle(questions.slice(hookQuestionCount));
  const run = [...hooks, ...rest];
  const lastFirstQuestionId = localStorage.getItem(lastFirstQuestionKey);

  if (run.length > 1 && run[0].id === lastFirstQuestionId) {
    const hookSwapIndex = run.findIndex(
      (question, questionIndex) =>
        questionIndex > 0 && questionIndex < hookQuestionCount && question.id !== lastFirstQuestionId,
    );
    const fallbackSwapIndex = run.findIndex(
      (question, questionIndex) => questionIndex > 0 && question.id !== lastFirstQuestionId,
    );
    const swapIndex = hookSwapIndex === -1 ? fallbackSwapIndex : hookSwapIndex;

    if (swapIndex > 0) {
      [run[0], run[swapIndex]] = [run[swapIndex], run[0]];
    }
  }

  if (run[0]) {
    localStorage.setItem(lastFirstQuestionKey, run[0].id);
  }

  return run;
}

function showScreen(screen) {
  [startScreen, gameScreen, gameOverScreen].forEach((item) => {
    item.classList.toggle("is-active", item === screen);
  });
}

function startGame() {
  currentRunQuestions = buildCurrentRunQuestions();
  index = 0;
  lives = maxLives;
  roundsSurvived = 0;
  totalError = 0;
  guesses = 0;
  lastReveal = null;
  gameOverState = null;
  copiedText.hidden = true;
  copiedText.textContent = t().copiedNote;
  copyButton.textContent = t().copyDamage;
  showScreen(gameScreen);
  renderQuestion();
  track("game_started", {
    gamesPlayed: stats.gamesPlayed,
    firstQuestionId: currentRunQuestions[0]?.id,
    language: currentLanguage,
  });
}

function renderQuestion() {
  if (index >= currentRunQuestions.length) {
    endGame(t().reachedEnd);
    return;
  }

  const current = currentRunQuestions[index];
  hasMovedSlider = false;
  questionText.textContent = current[currentLanguage];
  guessSlider.value = "50";
  guessOutput.textContent = "50%";
  lockButton.textContent = t().lockIt;
  questionWrap.hidden = false;
  revealWrap.hidden = true;
  lockButton.disabled = false;
  updateStatus();
}

function updateStatus() {
  roundsLabel.textContent = `${t().rounds}: ${roundsSurvived}`;
  livesLabel.innerHTML = renderLives();
}

function renderLives() {
  return `${"&hearts; ".repeat(lives)}${"&#9825; ".repeat(maxLives - lives)}`.trim();
}

function lockGuess() {
  const current = currentRunQuestions[index];
  const guess = Number(guessSlider.value);
  const error = Math.abs(guess - current.yesPercent);
  const lostLife = error > deathError;

  track("answer_locked", {
    round: roundsSurvived + 1,
    questionId: current.id,
    question: current[currentLanguage],
    guess,
    actual: current.yesPercent,
    error,
    lostLife,
    language: currentLanguage,
  });

  lockButton.disabled = true;
  guesses += 1;
  totalError += error;
  roundsSurvived += 1;

  if (lostLife) {
    lives -= 1;
    track("life_lost", { round: roundsSurvived, lives, error });
  } else {
    track("round_survived", { round: roundsSurvived, lives, error });
  }

  lastReveal = { guess, actual: current.yesPercent, error, lostLife };
  renderReveal(lastReveal);
  questionWrap.hidden = true;
  revealWrap.hidden = false;
  updateStatus();

  nextButton.textContent = lives <= 0 ? t().seeDamage : t().next;
}

function renderReveal(result) {
  judgementText.textContent = result.lostLife ? getDeathLine(result.error) : getSurvivalLine(result.error);
  judgementText.classList.toggle("lost-life", result.lostLife);
  humanRead.textContent = `${result.actual}%`;
  resultLine.textContent = t().resultLine;
  guessLine.textContent = t().guessed(result.guess);
  damageLine.textContent = t().offBy(result.error);
  damageLine.classList.toggle("lost-life", result.lostLife);
  errorLine.textContent = result.lostLife ? t().lostLife : "";
}

function getSurvivalLine(error) {
  if (error <= 5) return t().survival.close;
  if (error <= 10) return t().survival.tooMuch;
  return t().survival.barely;
}

function getDeathLine(error) {
  if (error > 40) return t().death.planet;
  if (error > 30) return t().death.species;
  return t().death.moved;
}

function nextQuestion() {
  if (lives <= 0) {
    endGame();
    return;
  }

  index += 1;
  renderQuestion();
}

function endGame(customTitle) {
  const averageError = guesses ? Math.round(totalError / guesses) : 0;
  const survived = roundsSurvived;
  const verdict = getHumanVerdict(averageError);
  const bestUpdated = saveGameStats(survived, averageError);
  gameOverState = { averageError, survived, verdict, customTitle };
  renderGameOver(customTitle);
  renderBestLine();
  showScreen(gameOverScreen);
  track("game_over", { round: survived, averageError, verdict, bestUpdated, language: currentLanguage });
}

function renderGameOver(customTitle) {
  const averageError = gameOverState?.averageError ?? 0;
  const survived = gameOverState?.survived ?? roundsSurvived;
  const verdict = gameOverState?.verdict ?? getHumanVerdict(averageError);
  const reachedEndTitle = customTitle === copy.en.reachedEnd || customTitle === copy.es.reachedEnd;
  finalTitle.textContent = reachedEndTitle ? t().reachedEnd : customTitle || t().diedAtRound(survived);
  finalStats.textContent = t().averageLine(averageError, verdict);
  verdictLine.textContent = t().verdictIntro;
  recordLine.textContent = t().record(stats);
  againButton.textContent = t().again;
  copyButton.textContent = t().copyDamage;
}

function loadStats() {
  const fallback = {
    gamesPlayed: 0,
    bestRound: 0,
    bestAverageError: null,
  };

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    const normalized = { ...fallback, ...saved };
    if (saved && saved.bestRoundsSurvived && !saved.bestRound) {
      normalized.bestRound = saved.bestRoundsSurvived;
    }
    return normalized;
  } catch {
    return fallback;
  }
}

function saveGameStats(rounds, averageError) {
  const previousBestRound = stats.bestRound;
  const previousBestAverageError = stats.bestAverageError;
  const isBest =
    rounds > stats.bestRound ||
    (rounds === stats.bestRound &&
      (stats.bestAverageError === null || averageError < stats.bestAverageError));

  stats.gamesPlayed += 1;
  if (isBest) {
    stats.bestRound = rounds;
    stats.bestAverageError = averageError;
  }
  localStorage.setItem(storageKey, JSON.stringify(stats));
  if (isBest) {
    track("best_score_updated", {
      previousBestRound,
      previousBestAverageError,
      bestRound: stats.bestRound,
      bestAverageError: stats.bestAverageError,
    });
  }
  return isBest;
}

function renderBestLine() {
  if (!stats.bestRound || stats.bestAverageError === null) {
    bestLine.hidden = true;
    return;
  }

  bestLine.hidden = false;
  bestLine.textContent = t().best(stats);
}

function getHumanVerdict(averageError) {
  if (averageError <= 10) return t().verdicts.good;
  if (averageError <= 18) return t().verdicts.unstable;
  if (averageError <= 28) return t().verdicts.damaged;
  return t().verdicts.missing;
}

async function copyResult() {
  const averageError = guesses ? Math.round(totalError / guesses) : 0;
  const verdict = getHumanVerdict(averageError);
  const text = [
    t().shareTitle,
    "",
    t().shareRound(roundsSurvived),
    t().shareAverage(averageError),
    t().shareUnderstanding(verdict),
    "",
    t().shareThought,
    t().shareNo,
  ].join("\n");

  copiedText.textContent = t().copiedNote;

  try {
    await copyText(text);
    copiedText.hidden = false;
    copyButton.textContent = t().copied;
    track("result_copied", { round: roundsSurvived, averageError, verdict, language: currentLanguage });
    window.setTimeout(() => {
      copyButton.textContent = t().copyDamage;
    }, 1400);
  } catch {
    copiedText.hidden = false;
    copiedText.textContent = t().copyError;
  }
}

function openSubmitQuestion() {
  submitQuestionForm.hidden = false;
  submittedQuestionNote.hidden = true;
  submittedQuestionText.focus();
  track("question_submit_opened", { round: roundsSurvived, language: currentLanguage });
}

function submitQuestion(event) {
  event.preventDefault();
  const text = submittedQuestionText.value.trim();
  const estimatedYes = submittedQuestionPercent.value.trim();

  if (!text) {
    submittedQuestionText.focus();
    return;
  }

  const submissions = loadSubmittedQuestions();
  const submission = {
    text,
    language: currentLanguage,
    estimatedYes: estimatedYes === "" ? null : Number(estimatedYes),
    submittedAt: new Date().toISOString(),
  };

  submissions.push(submission);
  localStorage.setItem(submittedQuestionsKey, JSON.stringify(submissions));
  submitQuestionForm.reset();
  submitQuestionForm.hidden = true;
  submittedQuestionNote.hidden = false;
  submittedQuestionNote.textContent = t().submittedNote;
  track("question_submitted", {
    hasEstimatedYes: submission.estimatedYes !== null,
    submittedQuestions: submissions.length,
    language: currentLanguage,
  });
}

function loadSubmittedQuestions() {
  try {
    const saved = JSON.parse(localStorage.getItem(submittedQuestionsKey));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(textarea);

  if (!copied) {
    throw new Error("copy failed");
  }
}

guessSlider.addEventListener("input", () => {
  hasMovedSlider = true;
  guessOutput.textContent = `${guessSlider.value}%`;
  lockButton.textContent = t().lockValue(guessSlider.value);
});

startButton.addEventListener("click", startGame);
lockButton.addEventListener("click", lockGuess);
nextButton.addEventListener("click", nextQuestion);
againButton.addEventListener("click", () => {
  track("game_restarted", { previousRound: roundsSurvived, language: currentLanguage });
  startGame();
});
copyButton.addEventListener("click", copyResult);
submitQuestionToggle.addEventListener("click", openSubmitQuestion);
submitQuestionForm.addEventListener("submit", submitQuestion);
languageEnButton.addEventListener("click", () => setLanguage("en"));
languageEsButton.addEventListener("click", () => setLanguage("es"));
