//* Grouping and Aggregation data example

const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

// TODO initiate empty object
// check if the response already exist or not
// if it exist then increment the count
// if not exist then initialize with 1

const count = surveyResponses.reduce((table, response)=>{
    console.log(table, " : ", response);
//    if(table[response]){
//      table[response] = table[response] + 1;
//    }else{
//      table[response] = 1;
//    }

table[response] = (table[response] || 0) + 1;
return table;

}, {});

console.log(count);

//? Output
// { A: 5, C: 3, B: 5, D: 1 }