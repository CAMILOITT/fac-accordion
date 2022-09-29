const $questions = document.querySelectorAll('.faq__question');

$questions.forEach((question) => {
  const $imgArrow = question.lastElementChild;
  const $answer = question.nextElementSibling;
  question.addEventListener('click', () => {
    question.classList.toggle('faq__question-active');
    $answer.classList.toggle('faq__answer-hidden');
    $imgArrow.classList.toggle('question__img-active');
  });
});
