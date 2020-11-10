var btn = document.querySelector('.press');

btn.addEventListener('click', function(e) {
  e.preventDefault();
  
  var select = document.querySelector('.options').value;
  var inputSum = document.querySelector('.input-summa').value;
  
  var p = document.querySelector('.summa');
  
  if (isNaN(inputSum)) {
    p.textContent = 'Qiymatga harf kiritish mumkun emas';
    return;
  }

  var info = (inputSum * select).toFixed(2);
  
  p.textContent = info;
  
});