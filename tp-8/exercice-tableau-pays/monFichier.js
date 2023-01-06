let data = {"polluant":"CO2",
"unite":"milliards de tonnes",
"annee":2017,
"pays":[{"nom":"Chine", "valeur":9.26, "pourcentage":28.2, "code":"cn"},
{"nom":"Etats-Unis", "valeur":4.76, "pourcentage":14.5, "code":"us"},
{"nom":"Inde", "valeur":2.16, "pourcentage":6.6, "code":"in"},
{"nom":"Russie", "valeur":1.54, "pourcentage":4.7, "code":"ru"},
{"nom":"Japon", "valeur":1.13, "pourcentage":3.4, "code":"jp"},
{"nom":"Allemagne", "valeur":0.72, "pourcentage":2.2, "code":"de"},
{"nom":"Corée du Sud", "valeur":0.6, "pourcentage":1.8, "code":"kr"},
{"nom":"Iran", "valeur":0.57, "pourcentage":1.7, "code":"ir"},
{"nom":"Canada", "valeur":0.55, "pourcentage":1.7, "code":"ca"}]}


function initialiserDonnees() {
        
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
         
    }
