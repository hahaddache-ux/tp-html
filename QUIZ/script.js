const questions = document.querySelectorAll(".qst");
const choices = document.querySelectorAll(".choice");
let currentQuestion = 0;
let score = 0;

// Réponses correctes (indexées par question)
const correctAnswers = [
  "Paris",     // Q1
  "CSS",       // Q2
  "/* commentaire */", // Q3
  "<a>"        // Q4
];

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    // Vérifier la réponse
    if (choice.textContent === correctAnswers[currentQuestion]) {
      score++;
      choice.style.background = "#90ee90"; // vert clair
    } else {
      choice.style.background = "#f08080"; // rouge clair
    }

    // Attendre un peu avant de passer à la question suivante
    setTimeout(() => {
      questions[currentQuestion].classList.remove("active");
      currentQuestion++;
      if (currentQuestion < questions.length) {
        questions[currentQuestion].classList.add("active");
      } else {
        document.getElementById("end").style.display = "block";
        document.getElementById("end").textContent = `Quiz terminé 🎉 Score: ${score}/${questions.length}`;
      }
    }, 600);
  });
});
