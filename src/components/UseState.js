import React from 'react';

const SecurityCode = 'paradigma';

const UseState = ( { name } ) => {

  //State Management: Individual State and Declarative way
  const [value, setValue ] = React.useState('');
  const [error, setError ] = React.useState(false);
  const [loading, setLoading ] = React.useState(false);

  console.log(value)
  

  React.useEffect( ()=>{
    console.log("Starting Effect");

    if(loading){
      setTimeout( ()=>{
        console.log("Start Validating")

        if(value === SecurityCode){
          setLoading(false);
          setError(false);
        } else {
          setError(true);
          setLoading(false);
        } 

        console.log("End Validating")
      }, 1500);
    }

    console.log("Ending Effect");
  }, [loading]);

  return(
    <>
      <h2> Delete {name}</h2>
      <p>Please write the Security Code</p>

      { (error && !loading) && (<p>Error: The Security Code is wrong</p>)}

      { loading && (<p>Loading...</p>) }

      <input 
        placeholder="Security code" 
        value={value}
        onChange={(event)=>{
          setValue(event.target.value)
        }}
      />
      <button
        onClick={()=>setLoading(true)}
      >Verify</button>
    </>
  )
};

export {UseState}
