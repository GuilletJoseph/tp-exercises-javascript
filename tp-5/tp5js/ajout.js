document.querySelector('#ajout').addEventListener('click', (event) => {
      ajouter()
    });
    var arr = [];
    function ajouter() {
      
      let test = document.querySelector('#c1').value;
      if (isNaN(parseInt(test))) {
        arr.push(test);
      } else { arr.push(parseInt(test)); }
      document.querySelector('#c1').value = "";
      document.querySelector('#array').innerHTML = 'Le tableau - arr = [' + arr + ']';
    }
    export { arr }