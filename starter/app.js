const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
  ]
  alert(patientList);
  
let command = prompt('Choose one: update, delete, add, reorder');
let secondCommand;
let thirdCommand;
let indexitem;
let indexitem2;
console.log(command);
//this line above, can command be reassigned?

//function name(add) {
  //add / 1
  // add * 2 / 2
  // newSum = add * 2
  //add  = prompt('please enter a Patient name');

//}
  
if (command === 'add') {
  secondCommand = prompt('please enter a Patient name');
  console.log('second command', secondCommand);
  console.log('patient list', patientList);
  patientList.push(secondCommand)
  console.log('patient list after add', patientList);
  alert(patientList);
  }
  // to delete find the indexOf the string 
   // remove from array with the  splice method array.splice(startDelete, howManyToDelete)
   else if (command === 'delete') {
   secondCommand = prompt('please enter a Patient name');
   console.log('second command', secondCommand);
   indexitem = patientList.indexOf(secondCommand);
   console.log('indexitem', indexitem);
  patientList.splice(indexitem, 1);
  console.log('patient list after splice', patientList);
  alert(patientList);
  }

  //update item in pateint list//
  else if (command === 'update') {
  secondCommand = prompt('please enter a Patient name to update');
  console.log('Item to update', secondCommand);
  indexitem = patientList.indexOf(secondCommand);
  console.log('indexitem', indexitem)
  thirdCommand = prompt('please enter a new update');
  console.log('New update', thirdCommand);
  patientList[indexitem]=thirdCommand;
  console.log('patient list after update', patientList);
  alert(patientList);
  }

  //reorder items in patient list//
  else if (command === 'reorder') {
    secondCommand = prompt('please enter a Patient name to reduce priority');
    console.log('Item to update', secondCommand);
    indexitem = patientList.indexOf(secondCommand);
    console.log('indexitem', indexitem)
    thirdCommand = prompt('please enter a patient name to increase priority');
    console.log('New update', thirdCommand);
    indexitem2 = patientList.indexOf(thirdCommand);
    console.log('indexitem', indexitem2);
    for (let i = 0; i < patientList.length; i++) {
      
      if (patientList[i]=== secondCommand) {
    indexitem = i; }
    else if (patientList[i]=== thirdCommand) {
      indexitem2 = i;
    }
  }
  const temp = patientList[indexitem2];
  



    // patientList.splice(indexitem2, 0, patientList.splice(indexitem, 1)[0]);
    console.log('patient list after update', patientList);
    alert(patientList); }//
  

  
    else {
    // message to say that the user input an invalid response
  }
  