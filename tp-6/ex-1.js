let societe = {
    "nom": "Google",
    "siegeSocial": { "entreprise": "Googleplex", "ville": "Mountain View", "department": "California", "pays": "United States" },
    "fondateurs": [{ "nomPrenom": "Larry Page", "naissance": "26/03/1973", "villeNaissance": "East Lansing", "paysNaissance": "Michigan" },
    { "nomPrenom": "Sergey Brin", "naissance": "21/08/1973 ", "villeNaissance": "Moscou", "paysNaissance": "Union Soviétique" }],
    "chiffreAffaire": [{ "annee": "2008", "valeur": 16.49 },
    { "annee": "2012", "valeur": 37.97 },
    { "annee": "2016", "valeur": 89.46 },
    { "annee": "2018", "valeur": 136.2 }]
};


document.getElementById('get').addEventListener('click', (event) => {
    recup()
});

function recup() {
        document.write("<br> -  : Fondateurs: ");
       for (var i = 0; i < societe.fondateurs.length; i++ ) {
            var value = societe.fondateurs[i].nomPrenom;
            document.write("<br> -  : " + value);
        }

        document.write("<br> -  : Chiffres d'affaire: ");
        for (var i = 0; i < societe.chiffreAffaire.length; i++ ) {
             var value = societe.chiffreAffaire[i].annee+" "+societe.chiffreAffaire[i].valeur;
             document.write("<br> -  : " + value);
         }


    }

