class Users{
    static count;
    static{
        Users.count=0;
    }
    constructor(name,email,password,date){
        this.Username=name;
        this.email=email;
        this.password=password;
        this.validTill=date;
        Users.count=Users.count+1;
    }
    static registeredUsers=function(){
        return Users.count;
    }
    membershipsvalidtill=function(){
        return new Date(this.validTill);
    }
}
class Membership extends Users{
    constructor(name,email,password,date,plan){
        super(name,email,password,date);
        this.validTill=plan=='standard'?new Date().setMonth(date.getMonth()+1):new Date().setMonth(date.getMonth()+12);
    }

}
let MemberDate=new Date();
let usr1=new Users('Ashutosh','ashu@email.com','password',MemberDate);
console.log(Users.registeredUsers());

let usr3=new Membership('Aman','aman@email.com','1234594',MemberDate,'standard');
let usr4=new Membership('Rohit','rohit@email.com','1452345',MemberDate,'Yearly');
console.log(usr3.membershipsvalidtill());
console.log(usr4.membershipsvalidtill());
console.log(usr1.membershipsvalidtill());

console.log(Users.registeredUsers());

// Memberships plan



