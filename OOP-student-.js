
function Student (){
    var stud={}
    stud.students=[]
    stud.student=student,
    stud.removeProp= removeProp,
    stud. getTheLength = getTheLength,
    stud.addStudentProp=addStudentProp
    return stud
}

var student=function(name,sclass,rollon){

    return {
        name:name,
        sclass:sclass,
        rollon:rollon,
    }
}

var addStudentProp=function(){

 return this.students.push(this.student);

}

var removeProp =function(){

 delete this.student.studentProp.rollon

 return this.student
 

}

var getTheLength=function(){

return Object.keys(this.student).length    

}

