    
    import { Calcul } from './Calcul.js';
    document.querySelector('#calc').addEventListener('click', (event) => {
      recup()
    });

    function recup() {
      let a = parseInt(document.querySelector('#c1').value);
      let b = parseInt(document.querySelector('#c2').value);
      let op = document.querySelector('#op').value;
      let calc = new Calcul(a, b, op);
      try {
        let html = calc.calcul();
        document.querySelector('#result').innerHTML = html;
        console.log(html);
      } catch (e) {
        document.querySelector('#result').innerHTML = e.message+" "+e.name;
       console.log(e.message +" "+e.name);
      }
    }