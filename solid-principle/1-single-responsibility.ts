//solid principle
// 1. Single Responsibility Principle (SRP)
// 2. Open/Closed Principle (OCP)
// 3. Liskov Substitution Principle (LSP)
// 4. Interface Segregation Principle (ISP)
// 5. Dependency Inversion Principle (DIP)

// 1. Single Responsibility Principle (SRP)

// A class should have one, and only one, reason to change. This means that a class should have only one job or responsibility.
// If a class has more than one responsibility, it becomes coupled. Changes to one responsibility may affect the other responsibilities. This makes the code more difficult to maintain and understand.

class User {
  name: string;
  age: number;
  constructor(name) {
    this.name = name;
    this.age = 28
  }

  getName() {
    return this.name;
  }
}

const user = new User("John Doe");
console.log(user.getName()); // John Doe