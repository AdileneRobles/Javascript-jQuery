let jsonIn =
`
 [
     {"carId" : 123},
     {"carId" : 456},
     {"carId" : 789}
 ]
`;
let carIds =JSON.parse(jsonIn);
//console.log(carIds);
console.log(JSON.stringify(carIds))