class Student{
    constructor(firstname,lastname,age,rollno,sex){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.rollno=rollno;
        this.sex=sex;
    }
    getbirthyear=()=>{
        return 2022-this.age;
    }
    fullname=()=> `${this.firstname} ${this.lastname}`;

    eligibility= function(minAge){
        if(this.age < minAge) return 'he is not eligible';
        else return 'he is eligible';
    
    }
}



let student1= new Student('ashutosh','mishra',23,17043,'male');
let student2= new Student('Krishna','jaiswal',25,17034,'Male');
// function to check whose age is more
let {firstname,lastname}= student1.age>student2.age?student1:student2;
console.log(`${firstname} ${lastname}`);

// All the Answers
console.log(student1.getbirthyear());
console.log(student1.fullname());
console.log(student1.eligibility(24));
console.log(student2.eligibility(24));


