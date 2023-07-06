class Student extends Person {
  constructor(ten, addr, id, email, toan, ly, hoa) {
    super(ten, addr, id, email); // Call the Person class constructor with the required parameters
    this.toan = toan;
    this.ly = ly;
    this.hoa = hoa;
  }

  getToan() {
    return this.toan;
  }

  getLy() {
    return this.ly;
  }

  getHoa() {
    return this.hoa;
  }
}

