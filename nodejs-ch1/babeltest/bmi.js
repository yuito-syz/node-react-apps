class BMI {
    constructor(height, weight) {
        this.heigtht = this.heigtht
        this.weight = weight
        this.bmi = this.calc()
    }
    calc() {
        const heightM = this.heigtht / 100
        return this.weight / (heightM ** 2)
    }
    print() {
        let res = '普通'
        if (this.bmi >= 25) res = '肥満'
        else if (this.bmi >= 18.5) res = '普通'
        else res = '痩せ'
        console.log('BMI=', this.bmi, res)
    }
}

const bmi = new BMI(160, 60)
bmi.print()