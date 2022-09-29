const $questions = document.querySelectorAll('.faq__question');

console.log($questions);

$questions.forEach((question) => {
  const $answer = question.nextElementSibling;
  question.addEventListener('click', () => {
    console.log(question);
    console.log($answer);
    question.classList.toggle('faq__question-active');
    $answer.classList.toggle('faq__answer-hidden');
  });
});
