import React from 'react'

function InputForm(props) {
  const {label,errorMessag,isValid,minWidth,maxWidth,customer,type,value,options,list,...inputProps}=props;
  const renderInput=()=>
  {


     let content;

      if(type==='checkbox')
        {

       content= <><input type={type} name={props.name}   checked={(value)? value:'' } {...inputProps} />
       <label htmlFor={props.name}>{label}</label> </>
        }
       else if(type==='select')
       {
       content= <React.Fragment><label htmlFor={props.name}>{label}</label> <select  type={type} name={props.name}  value={(value)? value:props.list[0].name }  {...inputProps} >
          {props.list.map((c,index)=><option key={index} value={c.name}>{c.name}</option>) }   
        </select></React.Fragment>
       }
       else
       content= <React.Fragment><label htmlFor={props.name}>{label}</label> <input type={type} name={props.name}  value={(value)? value:'' } {...inputProps} /></React.Fragment>

           
      return content
  }

  return (
    <div className='input-holder'>
         { renderInput()}
        {!isValid&&  <span className={isValid.toString()}>{errorMessag}</span>}
      
    </div>
  )
}

export default InputForm
