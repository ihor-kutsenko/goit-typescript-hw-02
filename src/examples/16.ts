// Спроєктуйте інтерфейс StudentData з полями name, studentID та major.
// Створіть клас Student, який реалізує цей інтерфейс і має метод introduce(), де студент представляється.

interface StudentData {
  name: string;
  studentID: number;
  major: string;
}

class Student implements StudentData {
  constructor(
    public name: string,
    public studentID: number,
    public major: string
  ) {}

  introduce() {
    console.log(
      `Hello, my name is ${this.name}. My student ID is ${this.studentID} and I study ${this.major}.`
    );
  }
}
