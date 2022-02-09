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
        } else {
          setLoading(false);
          setError(true);
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

      { loading && <p>Loading...</p>}

      { error && <p>Error: The Security Code is wrong</p>}

      <input 
        placeholder="Security code" 
        // type="password"
        // minlength="9" 
        // required
        value={value}
        onChange={(event)=>{
          setValue(event.target.value)
        }}
      />
      <button
        onClick={()=>{
          setLoading(true)
          setError(false)
        }}
      >Verify</button>
    </>
  )
};

export {UseState}
