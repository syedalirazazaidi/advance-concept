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
    this.age = 28;
  }

  getName() {
    return this.name;
  }
}

const user = new User("John Doe");
console.log(user.getName()); // John Doe

// Designing an online booking system for a hotel. The system should allow users to search for available rooms, make reservations, and manage their bookings. The system should also provide an admin interface for hotel staff to manage room availability and view bookings.
// The system should be designed to handle a large number of concurrent users and should be scalable to accommodate future growth. The system should also be secure and protect user data. The system should be designed to be user-friendly and easy to navigate. The system should also provide a mobile-friendly interface for users to access the system on their smartphones and tablets. The system should also provide a reporting feature for hotel management to view booking statistics and trends. The system should also integrate with third-party payment gateways for processing payments. The system should also provide a customer support feature for users to contact hotel staff for assistance. The system should also provide a feedback feature for users to leave reviews and ratings for their stay. The system should also provide a loyalty program feature for returning customers. The system should also provide a marketing feature for hotel management to promote special offers and discounts. The system should also provide an analytics feature for hotel management to track user behavior and preferences.

class BookingSystem {
  roomNumber: number;
  startingDate: number;
  roomType: number;
  endDate: number;
  constructor(roomNumber, startingDate, roomType, endDate) {
    this.roomNumber = 0;
    this.startingDate = 0;
    this.roomType = 0;
    this.endDate = 0;
  }
  searchRooms() {
    // code to search for available rooms
  }

  makeReservation() {
    // code to make a reservation
  }

  manageBookings() {
    // code to manage bookings
  }
}
class AdminInterface {
  manageRoomAvailability() {
    // code to manage room availability
  }

  viewBookings() {
    // code to view bookings
  }
}
class UserInterface {
  searchRooms() {
    // code to search for available rooms
  }

  makeReservation() {
    // code to make a reservation
  }

  manageBookings() {
    // code to manage bookings
  }
}

// Open/Closed Principle (OCP)
// Software entities (classes, modules, functions, etc.)
//  should be open for extension but closed for modification.
//  This means that the behavior of a module can be extended
// without modifying its source code. This is achieved through
// abstraction and polymorphism.
// For example, if you have a class that
//  calculates the area of different shapes,
//  you can create a base class for shapes
// and then create subclasses for each specific shape.
// This way, you can add new shapes without modifying the existing code.a

class Shape {
  area(): number {
    throw new Error("Method not implemented.");
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  side: number;
  constructor(side: number) {
    super();
    this.side = side;
  }
  area(): number {
    return this.side * this.side;
  }
}

// plz write example open close principle for payement system
// class Payment {
//   pay(amount: number) {
//     throw new Error("Method not implemented.");
//   }
// }
// class CreditCardPayment extends Payment {
//   pay(amount: number) {
//     console.log(`Paid ${amount} using Credit Card`);
//   }
// }
// class PayPalPayment extends Payment {
//   pay(amount: number) {
//     console.log(`Paid ${amount} using PayPal`);
//   }
// }
// class PaymentProcessor {
//   processPayment(payment: Payment, amount: number) {
//     payment.pay(amount);
//   }
// }
// const paymentProcessor = new PaymentProcessor();
// const creditCardPayment = new CreditCardPayment();
// const payPalPayment = new PayPalPayment();


// 3 Liskov Substitution Principle (LSP)
// Subtypes must be substitutable for their base types without 
// altering the correctness of the program.
// This means that if a class is a subclass of another class,
//  it should be able to be used in place of the base class without any issues.
// This is important for polymorphism and code reuse.
// For example, if you have a class that calculates the area of different shapes,

//plz write example liskov substitution principle for payement system
class Payment {
  pay(amount: number) {
    throw new Error("Method not implemented.");
  }
}   

class CreditCardPayment extends Payment {
  pay(amount: number) {
    console.log(`Paid ${amount} using Credit Card`);
  }
}
class PayPalPayment extends Payment {
  pay(amount: number) {
    console.log(`Paid ${amount} using PayPal`);
  }
}
class PaymentProcessor {
  processPayment(payment: Payment, amount: number) {
    payment.pay(amount);
  }
}
const paymentProcessor = new PaymentProcessor();
const creditCardPayment = new CreditCardPayment();
console.log(creditCardPayment.pay(100)); // Paid 100 using Credit Card