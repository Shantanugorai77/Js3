let num=1;
function show(){
    console.log("hello",num);
    num++;
    if (num<= 4999)
        show();
    
}
show()