class Student extends Person {
    constructor(toan, ly, hoa){
        super();
        this.toan = toan;
        this.ly=ly;
        this.hoa=hoa;
    }
    getToan(){
        return this.toan;
    }
    getLy(){
        return this.ly;
    }
    getHoa(){
        return this.hoa;
    }

}