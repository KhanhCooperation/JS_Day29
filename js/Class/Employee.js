class Employee extends Person{
    constructor(wDay,sDay){
        super();
        this.WorkingDay=wDay;
        this.DaySalary=sDay;
    }
    getWorkingDay(){
        return this.WorkingDay;
    }
    getDaySalary(){
        return this.DaySalary;
    }
}