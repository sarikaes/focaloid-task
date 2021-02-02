class employee {
    employess = []
    constructor(...males) {
        // this.males=males
        // this.females=females
        // this.females2=females2
        for (let i of males) {
            let a = JSON.parse(i)
            this.employess = this.employess.concat(a)
        }
    }
    sortfn() {

        console.log("Combined array:", this.employess)

        let sort = this.employess.sort(function (a, b) {
            return new Date(a.DOB) - new Date(b.DOB);
        });
        console.log("Sorted array", sort)

    }
    eighteenfn() {
        let arr1 = this.employess.filter(function (a) {
            let today = new Date();
            var birthDate = new Date(a.DOB);
            let age = today.getFullYear() - birthDate.getFullYear();
            return age > 18

        })
        for (let i of arr1) {
            console.log(i.user_name)
        }



    }


}

let males = [{ "name": "Jishnu", "last_name": "Vishwanath", "user_name": "neolivz", "DOB": "20-JAN-1984", "Place": "Thodupuzha" }, { "name": "Binoy", "last_name": "John", "user_name": "carnage", "DOB": "07-APR-1997", "Place": "Ernakulam" }, { "name": "Graph", "last_name": "Overflow", "user_name": "graphOverflow", "DOB": "16-DEC-1993", "Place": "Ernakulam" }, { "name": "Shiniyas", "last_name": "Khan", "user_name": "shan", "DOB": "17-NOV-2001", "Place": "Ernakulam" }]
let females = [{ "name": "Gauri", "last_name": "Kumar", "user_name": "lilwolf", "DOB": "18-AUG-1994", "Place": "Alappuzha" }, { "name": "Smita", "last_name": "Sen", "user_name": "roho", "DOB": "02-JAN-2000", "Place": "Ernakulam" }]
let females2 = [{ "name": "Smita", "last_name": "Sen", "user_name": "roho", "DOB": "02-JAN-2000", "Place": "Ernakulam" }]
let male = JSON.stringify(males)
let female = JSON.stringify(females)
let female2 = JSON.stringify(females2)

let obj = new employee(male, female, female2);
obj.sortfn()
obj.eighteenfn()

