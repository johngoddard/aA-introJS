function Student(fname, lname){
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
}


Student.prototype.name = function(){
  return `${this.fname} ${this.lname}`;
};


Student.prototype.enroll = function(course) {
  if (this.courses.indexOf(course) === -1 && !this.hasConflict(course)) {
    this.courses.push(course);
    course.students.push(this);
  }else {
    console.log("There is an enrollment conflict!");
  }
};

Student.prototype.hasConflict = function(course){
  if(this.courses.length === 0){
    return false;
  }else{
    let conflict = false;
    this.courses.forEach(function(enrollment){
      if(enrollment.conflictsWith(course)){
        conflict = true;
      }
    });
    return conflict;
  }
};

Student.prototype.courseLoad = function(){
  let result = {};
  this.courses.forEach(function(course){
    if (result[course.dept] === undefined) {
      result[course.dept] = course.credits;
    } else {
      result[course.dept] += course.credits;
    }
  });
  return result;
};

function Course(name, dept, credits, time, days) {
  this.name = name;
  this.dept = dept;
  this.credits = credits;
  this.time = time;
  this.days = days;
  this.students = [];
}

Course.prototype.addStudent = function(student) {
  student.enroll(this);
};

Course.prototype.conflictsWith = function(course){
  let conflict = false;

  if (this.time !== course.time) {
    return false;
  }

  this.days.forEach(function(day) {
    if (course.days.indexOf(day) !== -1) {
      conflict = true;
    }
  });

  return conflict;
};


let s1 = new Student("Markov", "Smith");
let c1 = new Course("Math 101", "Math", 4, 9, ["mon"]);
let c2 = new Course("Math 102", "Math", 3, 9, ["mon"]);

console.log(c1.conflictsWith(c2));

c1.addStudent(s1);
c2.addStudent(s1);
//
//
// console.log(s1.courseLoad());
console.log(s1.courses);
// console.log(c1.students);
