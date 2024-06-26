// code your solution here
function saturdayFun(activity = "roller-skate") {
  console.log(`This Saturday, I want to ${activity}!`);
  return `This Saturday, I want to ${activity}!`;
}
// saturdayFun();
function mondayWork(activity = "go to the office") {
  console.log(`This Monday, I will ${activity}.`);
  return `This Monday, I will ${activity}.`;
}
// mondayWork();
let wrapAdjective = function (wrappingFlair = "*") {
  function statement(adjective = "special") {
    return `You are ${wrappingFlair}${adjective}${wrappingFlair}!`;
  }
  return statement;
};
wrapAdjective()();
