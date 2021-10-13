const patients = require("./patients");

// > 50 "senior" "young"

const mappedPatients = patients.map(patient => {
  return patient.age > 50 ? "senior" : "young";
});

// {
//   id: 2401,
//   firstName: "Cynde", // personal
//   lastName: "Dohmann", // personal
//   phoneNumber: "+98-468-937-0605", // personal
//   email: "cdohmann0@netscape.com", // personal
//   gender: "f",
//   height: 1.76,
//   weight: 97,
//   dailyExercise: "no",
//   age: 49,
// },

// patient data with no personal info

const noPersonalInfoList = patients.map(patient => {
  return {
    id: patient.id,
    gender: patient.gender,
    height: patient.height,
    weight: patient.weight,
    dailyExercise: patient.dailyExercise,
  };
});

const copyOfPatients = patients.map(patient => patient);

// console.log("result of map", noPersonalInfoList);

// We want to send an email to all patients over 50.

const emailsOfSeniorPatients = patients
  .filter(patient => patient.age > 50 && patient.gender === "f")
  .map(patient => patient.email);

console.log(emailsOfSeniorPatients, emailsOfSeniorPatients.length);
