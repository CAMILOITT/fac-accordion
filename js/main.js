const $questions = document.querySelectorAll('.faq__question');

function handleToggle(question, $answer, $imgArrow) {
  question.classList.toggle('faq__question-active');
  $answer.classList.toggle('faq__answer-hidden');
  $imgArrow.classList.toggle('question__img-active');
}
function handleRemove(question, $answer, $imgArrow) {
  question.classList.remove('faq__question-active');
  $answer.classList.add('faq__answer-hidden');
  $imgArrow.classList.remove('question__img-active');
}
window.addEventListener('click', (e) => {
  $questions.forEach((question) => {
    const $imgArrow = question.lastElementChild;
    const $answer = question.nextElementSibling;
    if (question.contains(e.target)) {
      handleToggle(question, $answer, $imgArrow);
    } else {
      handleRemove(question, $answer, $imgArrow);
    }
    console.log('hola');
  });
});
