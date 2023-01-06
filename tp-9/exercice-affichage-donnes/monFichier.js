     
     function initialiserDonnees() {
          fetch('http://time.jsontest.com')
          .then(res => res.json())
          .then((out) => {
               document.querySelector('#donnes').innerHTML = out.time;
      }).catch(err => console.error(err));




     }