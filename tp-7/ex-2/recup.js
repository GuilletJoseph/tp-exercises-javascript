    
    import { CalculAge } from './CalculAge.js';
    document.querySelector('#calc').addEventListener('click', (event) => {
      recup()
    });

    function recup() {
      let a = new Date(document.querySelector('#d1').value);
      let cAge = new CalculAge(a);
        let html = cAge.calcul();
        document.getElementById('result').innerHTML = html;
    }