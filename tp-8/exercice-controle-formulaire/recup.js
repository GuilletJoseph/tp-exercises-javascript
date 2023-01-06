    
    import { Controle } from './Controle.js';
    document.querySelector('#calc').addEventListener('click', (event) => {
      recup()
    });

    function recup() {
      let a = document.querySelector('#c1').value;
      let b = document.querySelector('#c2').value;
      let c = document.querySelector('#c3').value;
      let controle = new Controle(a, b, c);
      try {
        let html = controle.controle();
        document.querySelector('#result').innerHTML = html;
        console.log(html);
      } catch (e) {
        document.querySelector('#result').innerHTML = e.message+" "+e.name;
       console.log(e.message +" "+e.name);
      }
    }