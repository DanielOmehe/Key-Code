const keyName = document.getElementById('key-name'),
keyCode = document.getElementById('key-code'),
placeHolder = document.getElementById('placeholder'),
keyText = document.getElementById('key-text');

window.addEventListener('keypress', e => {
      placeHolder.classList.add('hide');
      keyText.classList.add('show');

      console.log(e.key);
      console.log(e.keyCode);

      if(e.key === ' ') keyName.textContent = 'backspace';
      else keyName.textContent = e.key;

      keyCode.classList.add('show');
      keyCode.textContent = e.keyCode
})