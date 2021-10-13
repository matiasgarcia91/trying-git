const patients = require("./patients");

// [{}, {}, {}, {}, ....]
// forEach => to do SOMETHING for every element in the array
// normally used for "side-effects"
patients.forEach(element => {
  console.log(element.firstName);
});

// .filter returns => [{}, {}, {}] || []
const fitPatients = patients.filter(patient => {
  if (patient.dailyExercise === "yes") {
    return true;
  } else {
    return false;
  }
});
console.log("how many workout", fitPatients.length);
console.log("original list", patients.length);

// filter built with a forEach
let results = [];
patients.forEach(patient => {
  if (patient.dailyExercise === "yes") {
    results.push(patient);
  } else {
    return;
  }
});

// console.log("using filter", fitPatients.length);
// console.log("using forEach", results.length);

// using automatic return from arrow functions.
const fitPatientsShort = patients.filter(
  patient => patient.dailyExercise === "yes"
);

///////// find ///////
const searchId = 2402;

// by id
// patients = [{}, {}, {}, {}]
const specificPatient = patients.find(patient => {
  console.log("im finding a patient");
  return patient.id === searchId;
});
// .find returns => {element} || undefined

// a "find" using a filter => inefficient
const specificPatient2 = patients.filter(patient => {
  console.log("im filtering for a specific patient");
  return patient.id === searchId;
});

console.log(".find", specificPatient);
console.log(".filter", specificPatient2);

// console.log("did I found who im looking for?", specificPatient);
