"use strict";
// official
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
// 1
const namber = (n = getRandomInt(4, 100)) => {
  for (let i = n - 1; i > 0; i--) {
    n += i;
  }
  return n;
};
// 2
class Student {
  constructor(firstName, lastName, { phome, eMail } = contacts, university) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.contacts = contacts;
    this.university = university;
    this.faculty = faculty;
    this.department = department;
  }
}

class University {
  constructor({
    faculty: {
      facultyName,
      department: { departmentName, headOfDepartment },
      department,
    },
  } = facultys) {
    this.facultys = facultys;
  }
}
// 3
function arreys(len = getRandomInt(5, 100)) {
  // official
  const arr = [];
  const arr32 = [];
  const arr33 = [];
  const arr34 = [];
  let colZero = 0;
  // 3.1
  for (let i = 0; i < len; i++) {
    arr.push(getRandomInt(-20, 20));
  }
  // 3.2
  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) {
      arr32.push(arr[i]);
    }
  }
  // 3.3
  for (let i = 0; i < len; i++) {
    if (arr[i] % 2 === 0) {
      arr33.push(arr[i]);
    }
  }
  // 3.4;3.5
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      arr34.push(i);
      colZero++;
    }
  }
  // return
  return [arr, arr32, arr33, arr34, colZero];
}
// 4
class Book {
  constructor(author, title, yearOfPublishing, publishingHouse) {
    this.author = author;
    this.title = title;
    this.yearOfPublishing = new Date(yearOfPublishing);
    this.publishingHouse = publishingHouse;
  }
}
class EBook extends Book {
  constructor(
    author,
    title,
    yearOfPublishing,
    publishingHouse,
    format,
    electronicNumber
  ) {
    super(author, title, yearOfPublishing, publishingHouse);
    this.format = format;
    this.electronicNumber = electronicNumber;
  }
}
// 5
function FizzBuzz(nam = getRandomInt(5, 100)) {
  for (let i = 1; i <= nam; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
