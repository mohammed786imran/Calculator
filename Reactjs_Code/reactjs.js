function Calculator(){
  const [calc,setcalc] =React.useState({
    current:"0",
    total:"0",
    isinitial:true,
    preop:""
  });
  function handlenumber(value){
    let newvalue=value;
    if(!calc.isinitial)
    newvalue=calc.current + value;
    setcalc({current: newvalue, total:calc.total, isinitial:false, preop:calc.preop});
  }
  function handleoperator(value){
    const total=docalculation();
    
    setcalc({current: total.toString(), total:total.toString(), isinitial:true, preop:value});
  }
  function docalculation(){
    let total=parseInt(calc.total);
    switch(calc.preop){
        case"+":
      total += parseInt(calc.current);
        break;
         case"-":
      total -= parseInt(calc.current);
        break;
         case"*":
      total *= parseInt(calc.current);
        break;
         case"/":
      total /= parseInt(calc.current);
        break;
      default:
        total = parseInt(calc.current);
    }
    return total;
  }
    function renderdisplay(){
      return calc.current;
  }
  function handleclear(){
  setcalc({
     current:"0",
    total:"0",
    isinitial:true,
    preop:""
  });
  }
        return (
<div className="Calculator">
<div className="display">{renderdisplay()}</div>
<CalcButton value="7" onClick={handlenumber}/>
<CalcButton value="8" onClick={handlenumber}/>         
<CalcButton value="9" onClick={handlenumber}/>
<CalcButton className="operator" value="/" onClick={handleoperator}/>
            
<CalcButton value="4" onClick={handlenumber}/>
<CalcButton value="5" onClick={handlenumber}/>
<CalcButton value="6" onClick={handlenumber}/>
<CalcButton className="operator" value="*" onClick={handleoperator}/>
            
<CalcButton value="1" onClick={handlenumber}/>
<CalcButton value="2" onClick={handlenumber}/>
<CalcButton value="3" onClick={handlenumber}/>
<CalcButton className="operator" value="-" onClick={handleoperator}/>
            
<CalcButton value="C" onClick={handleclear}/>
<CalcButton value="0" onClick={handlenumber}/>
<CalcButton value="=" onClick={handleoperator}/>
<CalcButton className="operator" value="+" onClick={handleoperator}/>
            </div>
)
}
function CalcButton(props){
 return <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
     }
ReactDOM.render(<div className="app-container"><Calculator/></div>,document.getElementById("root"));