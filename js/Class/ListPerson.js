//  *add Student
//Todo:  onlick => lấy id từ form => bỏ vào constructor => add vào list => JSON render
class ListPerson {
  constructor() {
    this.students = [];
    this.employees = [];
    this.customers = [];
  }
  getStudentList() {
    return this.students;
  }
  getEmployeesList() {
    return this.employees;
  }
  getCustomerList() {
    return this.customers;
  }

  addStudent(student) {
    this.students.push(student);
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }
}
