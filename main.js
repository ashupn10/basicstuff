function myfunction(){
    const form=document.getElementById("form1");
    let name=form.elements["fname"].value;
    let email=form.elements["email"].value;
    let mobile=form.elements["mobile"].value;
    let date=form.elements["date"].value;
    let time=form.elements["time"].value;
    console.log(`my name is ${name} Email: ${email} Mobile: ${mobile} date:${date} time:${time}`);
}