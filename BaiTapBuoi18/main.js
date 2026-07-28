// const student = {
//   name: "hoang",
//   parent: {
//     name: "bo hoang",
//   },
// };

// const mentor = { ...student };

// mentor.name = "bang";
// mentor.parent.name = "bo bang";

// console.log(student);
// console.log(mentor);

// console.log(student.name);
// console.log(student.parent.name);

// const student = {
//   name: "hoang",
//   parent: {
//     name: "bo hoang",
//   },
// };

// const mentor = JSON.parse(JSON.stringify(student));

// mentor.parent.name = "bo bang";

// console.log(student);
// console.log(mentor);
const students = [{ name: "a" }, { name: "b" }];

const newStudents = [...students];

// newStudents[0].name = "z";
// console.log(students === newStudents);
// console.log(students);
// console.log(newStudents);

const user = {
  name: "hoang",
  address: {
    city: "HN",
    location: {
      lat: 123,
    },
  },
};

const newUser = { ...user };

newUser.address.location.lat = 999;

console.log(user.address.location.lat);
