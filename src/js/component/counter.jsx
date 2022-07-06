import React from 'react';

export default function Counter(props){
    const number = props.number || 0;
    const digits = number.toString().split("").reverse();


    
    
    
    
    return <div className="Container">
        <div className="Box"><h1><i className="fas fa-clock"></i></h1></div>
        <div className="Box"><h1>{digits.length>5 ? digits[5]: 0}</h1></div>
        <div className="Box"><h1>{digits.length>4 ? digits[4]: 0}</h1></div>
        <div className="Box"><h1>{digits.length>3 ? digits[3]: 0}</h1></div>
        <div className="Box"><h1>{digits.length>2 ? digits[2]: 0}</h1></div>
        <div className="Box"><h1>{digits.length>1 ? digits[1]: 0}</h1></div>
        <div className="Box"><h1>{digits[0]}</h1></div>
    </div>
}


// the long form verson 
// 
//    digit1=props.number
// } else if (props.number < 100){
 //   const digits = props.number.toString().split("")
 //   digit1=digits[1];
  //  digit2=digits[0];
  //  

//    } else if (props.number <1000){
 //   const digits = props.number.toString().split("")
 //   digit1=digits[2];
 //   digit2=digits[1];
 //   digit3=digits[0];

 //} else if (props.number <10000){
  //  const digits = props.number.toString().split("")
  //  digit1=digits[3];
  //  digit2=digits[2];
  //  digit3=digits[1];
  //  digit4=digits[0];
 //  }
//else if (props.number < 100000){
  //  const digits = props.number.toString().split("")
   // digit1=digits[4];
// digit2=digits[3];
 //   digit3=digits[2];
 //   digit4=digits[1];
 //   digit5=digits[0]
//} 
//else if (props.number < 1000000){
  //  const digits = props.number.toString().split("")
 //   digit1=digits[5];
 //   digit2=digits[4];
  //  digit3=digits[3];
  //  digit4=digits[2];
  //  digit5=digits[1];
 //   digit6=digits[0];
