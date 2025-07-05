let user ='shantanu'// global function 
 function greet(u)
 {
    let num =(5); // local function 
    console.log(num);
    return `hello ${u}`

    
 }

 //console.log("the value of num " + num);  // will show error because it is a local function
 let str = greet(user)
 console.log(str);
 

 