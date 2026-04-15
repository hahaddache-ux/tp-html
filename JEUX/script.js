$(function () {
  const symboles = [
    "😅","😄","😁","😆",
    "🤣","😂","🙂","😇",
    "😅","😄","😁","😆",
    "🤣","😂","🙂","😇"
  ];

  let firstcard = null;
  let lock = false;
  let coups = 0;

  function shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
  }

  function initGame() {
    $(".game").empty();
    shuffle(symboles);
    coups = 0;
    $("#score").text(coups);
    firstcard = null;
    lock = false;

    symboles.forEach(symbol => {
      $(".game").append(`
        <div class="card" data-symbol="${symbol}">?</div>
      `);
    });
  }

  // نطلق اللعبة مباشرة ملي الصفحة تتحمل
  initGame();

  $(".game").on("click", ".card", function () {
    if (lock || $(this).hasClass("open") || $(this).hasClass("matched")) return;

    $(this).text($(this).data("symbol")).addClass("open");

    if (!firstcard) {
      firstcard = $(this);
    } else {
      
      if (firstcard.data("symbol") === $(this).data("symbol")) {
        firstcard.addClass("matched");
        $(this).addClass("matched");
        firstcard = null;
      coups++; $("#score").text(coups);
      } else {
        lock = true;
        const secondCard = $(this);
        setTimeout(() => {
          firstcard.text("?").removeClass("open");
          secondCard.text("?").removeClass("open");
          firstcard = null;
          lock = false;
        }, 800);
      }
    }
  });

  // زر إعادة التشغيل
  window.resetGame = function () {
    initGame();
  };
});
