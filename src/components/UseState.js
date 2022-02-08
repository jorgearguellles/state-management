import React from 'react';

const UseState = ( { name } ) => {

  //State Management: Individual State and Declarative way
  const [error, setError ] = React.useState(true);

  return(
    <>
      <h2> Delete {name}</h2>
      <p>Please write the Security Code</p>

      { error && <p>Error: The Security Code is wrong</p>}

      <input placeholder="Security code" />
      <button
        onClick={()=>setError(!error)}
      >Verify</button>
    </>
  )
};

export {UseState}
