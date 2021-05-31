function bmi(weight, height) {
  let bmi;
  // check parameters
  if (weight != null && height != null) {
    //bmi = weight / height2
    bmi = weight / height ** 2;
    if (bmi <= 18.5) return 'Underweight';
    if (bmi <= 25.0) return 'Normal';
    if (bmi <= 30.0) return 'Overweight';
    if (bmi > 30) return 'Obese';
  }
  return '';
}
console.log(bmi(80, 1.8));
