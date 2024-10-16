function tarif(age) {
    if(age < 5){
      console.log("Gratuit");
    } else if (age >= 5 && age <= 17){
      console.log("Reduit");
    } else if (age >= 18){
      console.log("Plein tarif");
    }
  }
  console.log(tarif(3)); // Résultat attendu : "Gratuit"
  console.log(tarif(15)); // Résultat attendu : "Réduit"
  console.log(tarif(25)); // Résultat attendu : "Plein tarif"