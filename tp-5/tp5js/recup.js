    
    import { Calcul } from './Calcul.js';
    document.querySelector('#calc').addEventListener('click', (event) => {
      recup()
    });

    function recup() {
      let a = parseInt(document.querySelector('#c1').value);
      let b = parseInt(document.querySelector('#c2').value);
      let calc = new Calcul(a, b);
      try {
        let html = calc.calcul();
        document.getElementById('result').innerHTML = html;
        console.log(html);
      } catch (e) {
        document.getElementById('result').innerHTML = e.message;
       console.log(e.message);
      }
    }