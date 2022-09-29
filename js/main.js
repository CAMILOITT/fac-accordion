const $questions = document.querySelectorAll('.faq__question');

$questions.forEach((question) => {
  const $answer = question.nextElementSibling;
  if (question.classList !== 'faq__question-active') {
    question.addEventListener('click', () => {
      question.classList.add('faq__question-active');
      $answer.classList.remove('faq__answer-hidden');
    });
  } else {
    window.addEventListener('click', () => {
      question.classList.remove('faq__question-active');
      $answer.classList.add('faq__answer-hidden');
    });
  }
});
