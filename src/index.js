document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.button-success');
  const googleLogo = document.querySelector('.icon-google-logo');
  const oddityLogo = document.querySelector('.icon-oddity-logo');

  button.addEventListener('click', function () {
    googleLogo.classList.toggle('visible');
    googleLogo.classList.toggle('hidden');
    oddityLogo.classList.toggle('visible');
    oddityLogo.classList.toggle('hidden');
  });
});
