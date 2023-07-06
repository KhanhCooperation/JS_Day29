class Employee extends Person {
  constructor(ten, addr, id, email, wDay, sDay) {
    super(ten, addr, id, email);
    this.WorkingDay = wDay;
    this.DaySalary = sDay;
  }
  getWorkingDay() {
    return this.WorkingDay;
  }
  getDaySalary() {
    return this.DaySalary;
  }
}
