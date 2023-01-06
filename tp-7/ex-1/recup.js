    
    import { Recente } from './Recente.js';
    document.querySelector('#calc').addEventListener('click', (event) => {
      recup()
    });

    function recup() {
      let a = document.querySelector('#d1').value;
      let b = document.querySelector('#d2').value;
      let rec = new Recente(a, b);
        let html = rec.recente();
        document.getElementById('result').innerHTML = html;
    }