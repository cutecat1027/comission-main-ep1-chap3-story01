const logo = document.querySelector('.logo');
function hideMissingLogo(){logo.classList.add('missing');}
logo.addEventListener('error',hideMissingLogo);
if(logo.complete && !logo.naturalWidth) hideMissingLogo();
const confirmButton = document.getElementById('confirm');
confirmButton.addEventListener('click',()=>{
  confirmButton.textContent=confirmButton.dataset.confirmed;
  confirmButton.disabled=true;
});
