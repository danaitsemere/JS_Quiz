//Initialize the CustomerOrder object with orderId,items (array of objects), status.
//calculate total order amount
// Return total
//process payment
// Wait for 2 seconds
// Change status to "paid.
//  Print orderId: Payment successful for Order,orderId.
class CustomerOrder {
  constructor(orderId, items, status = "pending") {
    this.orderId = orderId;
    this.items = items;
    this.status = status;
  }
  calculateTotal() {
    let total = 0;
    this.items.forEach(item => {
      total += item.quantity * item.price;
    });
    return total;
  }
  async processPayment() {

    await new Promise(resolve => setTimeout(resolve, 2000));
    this.status = "paid";
    console.log(`${this.orderId}: Payment successful for Order ${this.orderId} .`);
  }
}

// Initialize TeamMember object with name (string),role (string),tasks (array of task objects)
//complete a task for every task
// If task equals the given taskType:
// return task completed to true
//To check progress
// For every task in tasks
   //If task completed is false
     //Reject with "Pending tasks remaining"
  // If all tasks are completed
     //Resolve with "All tasks completed!"




class TeamMember {
  constructor(name, role, tasks) {
    this.name = name;
    this.role = role;
    this.tasks = tasks;
  }
}
TeamMember.prototype.completeTask = function (taskType) {
  const task = this.tasks.find(item => item.title === taskType);
  if (task) {
    task.completed = true;
  }
};
TeamMember.prototype.checkProgress = function () {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < this.tasks.length; i++) {
      if (!this.tasks[i].completed) {
        return reject("Pending tasks remaining");
      }
    }
    resolve("All tasks completed!");
  });
};

//initialize Candidate object with name (string), position (string),interviews (empty array)
// Schedule an interview
//Create newInterview with properties, date status = "pending"
  // Add newInterview to interviews array
// send confirmation,Wait for 1 second
// Return confirmation message
class Candidate {
  constructor(name, position) {
    this.name = name;
    this.position = position;
    this.interviews = [];
  }
  scheduleInterview(date) {
    const newInterview = { date: date, status: "pending" };
    this.interviews.push(newInterview);
  }
  async sendConfirmation() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const msg = `Interview confirmed with ${this.name}`;
        console.log(msg);
        resolve(msg);
      }, 1000);
    });
  }
}


//Initialize Course object with title (string),instructor (string),students (array of objects)
//update progress
//If found students where student name equals the given studentName, set student progress to the given value
//generate certificate
//Resolve with "Completed certificate for studentName"
// Else
// Reject with "Incomplete progress"

class Course {
  constructor(title, instructor, students) {
    this.title = title;
    this.instructor = instructor;
    this.students = students;
  }
  updateProgress(studentName, value) {
    const student = this.students.find(s => s.name === studentName);
    if (student) {
      student.progress = value;
    }
  }
  generateCertificate(studentName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const student = this.students.find(s => s.name === studentName);
        if (student && student.progress === 100) {
          resolve(`Completed certificate for ${studentName}`);
        } else {
          reject("Incomplete progress");
        }
      }, 0);
    });
  }
}
//initialize StockTracker object with watchlist (array of stock objects)
//update price
//For each stock in watchlist
//If stock symbol equals the given symbol:
// Set stock currentPrice to newPrice
//alerts
//  Find all stocks in watchlist where currentPrice >= threshold
//  If any stocks meet criteria:
// Resolve with triggered alerts
//  Else
// Reject with "No alerts triggered"

class StockTracker {
  constructor(watchlist) {
    this.watchlist = watchlist;
  }
   updatePrice(symbol, newPrice) {
    this.watchlist.forEach(stock => {
      if (stock.symbol === symbol) {
        stock.currentPrice = newPrice;
      }
    });
  }
  async checkAlerts() {
    return new Promise((resolve, reject) => {
      const alert = this.watchlist.filter(
        stock => stock.currentPrice >= stock.threshold
      );
      if (alert.length > 0) {
        resolve(triggered);
      } else {
        reject("No alerts triggered");
      }
    });
  }
}
