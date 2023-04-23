 
 var numberOfStudents=0
 var students=[]

 function addStudent(){
    numberOfStudents++
    return numberOfStudents
 }

 function getNumberOfStudents(){
return numberOfStudents
 }


 function addStudent(name){
     students.push(name)
   students.length=numberOfStudents;
     return numberOfStudents
 }

 addStudents("ahmed");
 addStudents("wassim");
 addStudents("youssef");
 addStudents("wajdi");
 addStudents("karim");

 students=['ahmed', 'wassim', 'youssef', 'wajdi', 'karim']

 function clearStudents(){
    numberOfStudents=0
    students=[]
 }

 function createFullName(firstName,lastName){
    fullName=firstName+' '+lastName
    return fullName
 }
 
 addStudent(createFullName(firstName,lastName))

function getStudentByInitials(name,char){  // this function take two params "name " and "char" using toLowerCase method ,then using for loop .
    name=name.toLowerCase();
    char=char.toLowerCase();
    for (var i=0;i<name.length;i++){
        if (name.charAt(i)===char){
            if (i===0){
                return true 
            }
            else return false 
        }
    }

}
getStudentByInitials("wassim","W")  //===> true

function isFullName (name){
 var str=name.split('')
    if (str.length!==2){
        return false 
    }
    for ( var i=0;i<str.length;i++){
        var str=str[i];
        if (str[0]!==str[0].toUppercase()|| str.slice(1)!==str.slice(1)){
            return false 
        }
    }
    return true 

}

function getStudentsByInitials(students,char){
    var array=[];
    var i=0
    while(i < students.length){
if (students[i].firstName.charAt(0)===char){
    array.push(students[i])
}
i++
 }
 return arr 
}

function getStudentsByInitials(char1,char2){
    var array=[]
    for (var i=0;array.length;i++){
        var fName=students[i].fullName
        if (isFullName(fName)){
            var firstName=fName.split('')[0]
            var lastName=fName.split('')[1]
          if(firstName[O]===char1 && lastName[0]===char2){
            array.push(students[i]);
          } 
        }
    }
    return array 
}


function createStudent(firstName, lastName, email, age ,education){
    var student={

        firstName:firstName,
         lastName:lastName,
         email:email,
         age: age,
         education: education,
         fullName:function(){
            return student.firstName +" "+ student.lastName
         }
    }
    return student 

}

var me = createStudent("wassim", "jaziri", "jazirrw8@gmail.com", 26 ,"master degree")

function addSkills(student,skillsArray){
    student.skills=skillsArray;

}


  function addSkills(student, skillsArr) {
    if (!student.skills) {
      student.skills = skillsArr;
    } else {
      skillsArr.forEach(skill => {  //The forEach() method executes a provided function once for each array element and is called with the following arguments " n3aytlha "
        
        if (!student.skills.includes(skill)) { // The includes() method determines whether an array includes a certain value among its entries."mawjoud ou non "
          student.skills.push(skill);
        }
      });
    }
}

function addStudent(student){
    students.push(student);
  return students  
}
function removeStudent(firstName, students) {
    for (let i = 0; i < students.length; i++) {
      if (students[i].firstName === firstName) {
        students.splice(i, 1);
        return true
      }
    }
    return false
  }
  
  