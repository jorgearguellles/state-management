import React from 'react';

const UseState = ( { name } ) => {

  //State Management: Individual State and Declarative way
  const [error, setError ] = React.useState(true);
  const [loading, setLoading ] = React.useState(false);

  React.useEffect( ()=>{
    console.log("Starting Effect");

    if(loading){
      setTimeout( ()=>{
        console.log("Start Validating")
        setLoading(false);
        console.log("End Validating")
      }, 3000);
    }

    console.log("Ending Effect");
  }, [loading]);

  return(
    <>
      <h2> Delete {name}</h2>
      <p>Please write the Security Code</p>

      { loading && <p>Loading...</p>}

      { error && <p>Error: The Security Code is wrong</p>}

      <input placeholder="Security code" />
      <button
        onClick={()=>setLoading(true)}
      >Verify</button>
    </>
  )
};

export {UseState}
