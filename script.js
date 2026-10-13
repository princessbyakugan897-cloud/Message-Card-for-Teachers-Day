const book = document.getElementById("book");

const openCard = document.getElementById("openCard");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const pageIndicator =
  document.getElementById("pageIndicator");

const photoInput =
  document.getElementById("photoInput");

const teacherPhoto =
  document.getElementById("teacherPhoto");

const musicInput =
  document.getElementById("musicInput");

const audioPlayer =
  document.getElementById("audioPlayer");

const musicButton =
  document.getElementById("musicButton");

const musicName =
  document.getElementById("musicName");

const messageInput =
  document.getElementById("messageInput");

const messageText =
  document.getElementById("messageText");

const updateMessage =
  document.getElementById("updateMessage");


let cardOpened = false;


/* =========================
   OPEN CARD
========================= */

function openTeachersDayCard() {

  if (cardOpened) return;

  book.classList.add("open");

  cardOpened = true;

  pageIndicator.textContent = "Inside";

  createConfetti();
}


/* =========================
   CLOSE CARD
========================= */

function closeTeachersDayCard() {

  if (!cardOpened) return;

  book.classList.remove("open");

  cardOpened = false;

  pageIndicator.textContent = "Cover";
}


/* =========================
   BUTTONS
========================= */

openCard.addEventListener(
  "click",
  openTeachersDayCard
);


nextBtn.addEventListener(
  "click",
  openTeachersDayCard
);


prevBtn.addEventListener(
  "click",
  closeTeachersDayCard
);


/* =========================
   PHOTO UPLOAD
========================= */

photoInput.addEventListener(
  "change",
  function () {

    const file = this.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {

      alert("Please select an image.");

      return;
    }

    const imageURL =
      URL.createObjectURL(file);

    teacherPhoto.src = imageURL;

  }
);


/* =========================
   MUSIC UPLOAD
========================= */

musicInput.addEventListener(
  "change",
  function () {

    const file = this.files[0];

    if (!file) return;

    if (!file.type.startsWith("audio/")) {

      alert("Please select an audio file.");

      return;
    }

    const musicURL =
      URL.createObjectURL(file);

    audioPlayer.src = musicURL;

    musicName.textContent =
      file.name;

    musicButton.textContent = "▶";

  }
);


/* =========================
   MUSIC PLAY / PAUSE
========================= */

musicButton.addEventListener(
  "click",
  function () {

    if (!audioPlayer.src) {

      alert(
        "Please add music to the card first."
      );

      return;
    }

    if (audioPlayer.paused) {

      audioPlayer.play();

      musicButton.textContent = "❚❚";

    } else {

      audioPlayer.pause();

      musicButton.textContent = "▶";
    }

  }
);


audioPlayer.addEventListener(
  "ended",
  function () {

    musicButton.textContent = "▶";

  }
);


/* =========================
   UPDATE MESSAGE
========================= */

updateMessage.addEventListener(
  "click",
  function () {

    const newMessage =
      messageInput.value.trim();

    if (!newMessage) {

      alert(
        "Please write a message first."
      );

      return;
    }

    messageText.textContent =
      newMessage;

    updateMessage.textContent =
      "✓ Message Updated";

    setTimeout(
      function () {

        updateMessage.textContent =
          "✓ Update Message";

      },
      2000
    );

  }
);


/* =========================
   CONFETTI
========================= */

function createConfetti() {

  const amount = 90;

  for (let i = 0; i < amount; i++) {

    const piece =
      document.createElement("div");

    piece.classList.add("confetti");

    piece.style.left =
      Math.random() * 100 + "vw";

    piece.style.animationDuration =
      Math.random() * 2 + 2 + "s";

    piece.style.animationDelay =
      Math.random() * .5 + "s";

    piece.style.background =
      randomConfettiColor();

    document.body.appendChild(piece);

    setTimeout(
      () => piece.remove(),
      5000
    );

  }
}


/* =========================
   CONFETTI COLORS
========================= */

function randomConfettiColor() {

  const colors = [
    "#b8914a",
    "#d9bd7d",
    "#22211e",
    "#ffffff",
    "#c7a968",
    "#8c9da5"
  ];

  return colors[
    Math.floor(
      Math.random() * colors.length
    )
  ];

}


/* =========================
   KEYBOARD CONTROLS
========================= */

document.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "ArrowRight") {

      openTeachersDayCard();

    }

    if (event.key === "ArrowLeft") {

      closeTeachersDayCard();

    }

  }
);