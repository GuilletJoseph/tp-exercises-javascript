function initialiserDonnees() {
     fetch('https://digicode.cleverapps.io/json/pays/pollution')
     .then(res => res.json())
     .then((data) => {
          document.querySelector('#titre').innerHTML = "Pays les plus polluants pour le "+ data.polluant+" "+"("+data.unite+")";
          document.querySelector('#annee').innerHTML = "en " +data.annee;
         for (var i = 0; i < data.pays.length; i++ ) {
             document.querySelector('#corps').innerHTML +=
  
  "<tr>"
        +"<th scope= \"row\">"+(i+1)+"</th>"
        +"<th><img src=\"https://flagcdn.com/24x18/"+data.pays[i].code+".png\"></th>"
        +"<th>"+ data.pays[i].nom+ "</th>"
        +"<th>"+ data.pays[i].valeur+"</th>"
        +"<th>"+data.pays[i].pourcentage+"</th>"
      +"</tr>";
           }
 }).catch(err => console.error(err));
}
