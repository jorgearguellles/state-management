import React from 'react';

const SecurityCode = 'paradigma';

const UseState = ( { name } ) => {

  //State Management: Individual State and Declarative way
  const [state, setState] = React.useState({
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  })

  console.log(state)

  React.useEffect( ()=>{
    console.log("Starting Effect");

    if(state.loading){
      setTimeout( ()=>{
        console.log("Start Validating")

        if( state.value === SecurityCode ){
          setState({
            ...state,
            loading: false,
            error: false,
            confirmed: true,

          })
        } else {
          setState({
            ...state,
            error: true,
            loading: false,
          })
        } 

        console.log("End Validating")
      }, 1500);
    }

    console.log("Ending Effect");
  }, [state.loading]);

  if( !state.deleted && !state.confirmed ){
    return(
      <>
        <h2> Delete {name}</h2>
        <p>Please write the Security Code</p>
  
        { (state.error && !state.loading) && (<p>Error: The Security Code is wrong</p>)}
  
        { state.loading && (<p>Loading...</p>) }
  
        <input 
          placeholder="Security code" 
          value={state.value}
          onChange={(event)=>{
            setState({ 
              ...state,
              value: event.target.value
            })
          }}
        />
        <button
          onClick={ ()=>{
            setState({ 
              ...state,
              loading: true,
            });
          }}
        >Verify</button>
      </>
    )
  } else if( state.confirmed && !state.deleted){
    return(
      <>
        <h1>¿Are you sure?</h1>

        <button
          onClick={ ()=>{
            setState({
              ...state,
              deleted: true,
            });
          }}
        >Yes, I'm sure</button>
        <button
          onClick={ ()=>{
            setState({
              ...state,
              confirmed: false,
              value: '',
            })
          }}
        >No, I want comeback</button>
      </>
    );
  } else {
    return(
      <>
        <p>Deleted successfully !</p>

        <button
          onClick={ ()=>{
            setState({
              ...state,
              confirmed: false,
              deleted: false,
              value: '',
            })
          }}
        >Re Start</button>
      </>
    );
  }
};

export {UseState}
