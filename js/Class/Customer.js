class Customer extends Person {
    constructor(cty, bill, rate) {
        super(ten, addr, id, email);
        this.TenCty = cty;
        this.hoaDon = bill;
        this.danhGia = rate;
    }
    getCty() {
        return this.TenCty;
    }
    getHDon() {
        return this.hoaDon;
    }
    getdanhGia() {
        return this.danhGia;
    }
}