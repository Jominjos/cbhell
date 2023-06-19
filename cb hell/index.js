let pp=10;


const countt = function (pp,cb1=(bb1,cb2=(bb2,cb3=(bb3,cb4=(bb4,cb5=(bb5,cb6=(bb6,cb7=(bb7,cb8=(bb8,cb9=(bb9,cb10=(bb10,cb11=()=>{


})=>{
   
   console.log(bb10);
    pp--;
    

    setTimeout(() => {
        if(pp>0) {countt(pp)
            document.getElementById("happy").innerHTML=pp;
        }
        else {
            document.getElementById("happy").innerHTML="HAPPY INDEPENDENCE DAY";
        }
       
    }, 1000);
   

})=>{
   
    cb10(pp)


})=>{
    
    cb9(pp)


})=>{

    cb8(pp)


})=>{
 
    cb7(pp)

})=>{

    cb6(pp)

})=>{
 
    cb5(pp)

})=>{
 
    cb4(pp)

})=>{
  
    cb3(pp)
})=>{
  
    cb2(pp)
}) {

    cb1(pp)
}

countt(pp);














