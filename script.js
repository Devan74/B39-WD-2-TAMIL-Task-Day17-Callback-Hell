 

var a=document.createElement("div");
console.log(a);

    
    a.innerHTML=10;
    setTimeout(()=>{
        a.innerHTML=9;
        setTimeout(()=>{
            a.innerHTML=8;
            setTimeout(()=>{
                a.innerHTML=7;
                setTimeout(()=>{
                    a.innerHTML=6;
                    setTimeout(()=>{
                        a.innerHTML=5;
                        setTimeout(()=>{
                            a.innerHTML=4;
                            setTimeout(()=>{
                                a.innerHTML=3;
                                setTimeout(()=>{
                                    a.innerHTML=2;
                                    setTimeout(()=>{
                                    a.innerHTML=1;
                                        setTimeout(()=>{
                                            a.innerHTML= "Happy Independence Day";
                                            setTimeout(()=>{
                                                a.innerHTML= `<img src="https://i.pinimg.com/736x/20/a4/19/20a41923ee055cfb809caf3e7e8a0d83.jpg">`;
                                            },1000)

                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
    document.body.append(a);

   