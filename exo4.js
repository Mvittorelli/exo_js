function peutVoter(age, nationalite) {
    if (age >= 18 && nationalite == "française"){
      console.log("Eligible");
    } else {
      console.log("Non eligible");
    }
  }
  console.log(peutVoter(20, "française"));
  console.log(peutVoter(16, "française")); 
  console.log(peutVoter(20, "espagnole")); 