const $questions = document.querySelectorAll('.faq__question');

console.log($questions);

let $ = () => document.querySelector();
let on = () => addEventListener();

$questions.forEach((question) => {

  const $answer = question.nextElementSibling;
  question.addEventListener('click', () => {
    console.log(question);
    console.log($answer);
    question.classList.toggle('faq__question-active');
    $answer.classList.toggle('faq__answer-hidden');
    console.log('hola');
  });
});

// $(document).on('click', '.cerrarModal', function () {
//   $(question).fadeOut();
//   $('.cerrarModal').attr('class', '');
// });

// document
//   .querySelector(document)
//   .addEventListener('click', '.cerrarModal', function () {
//     document.querySelector('.Contenedor').fadeOut();
//     document.querySelector('.cerrarModal').attr('class', '');
//   });

// document.querySelector('#abrirModal').click(function () {
//   document.querySelector('.Contenedor').fadeIn();
//   setTimeout(function () {
//     document.body.classList.add('cerrarModal');
//   }, 10);
// });
