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

  //Functions by Declarative paradigm 
  const onConfirm = () => {
    setState({
      ...state,
      loading: false,
      error: false,
      confirmed: true,
    })
  };

  const onError = () => {
    setState({
      ...state,
      error: true,
      loading: false,
    })
  };

  const onWrite = ( newValue ) => {
    setState({ 
      ...state,
      value: newValue
    })
  };

  const onCheck = () => {
    setState({ 
      ...state,
      loading: true,
    });
  };

  const onDelete = () => {
    setState({
      ...state,
      deleted: true,
    });
  };

  const onReset = () => {
    setState({
      ...state,
      confirmed: false,
      deleted: false,
      value: '',
    })
  };

  React.useEffect( ()=>{
    console.log("Starting Effect");

    if(state.loading){
      setTimeout( ()=>{
        console.log("Start Validating")

        if( state.value === SecurityCode ){
          onConfirm();
        } else {
          onError();
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
            onWrite(event.target.value);
          }}
        />
        <button
          onClick={ ()=>{
            onCheck();
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
            onDelete();
          }}
        >Yes, I'm sure</button>
        <button
          onClick={ ()=>{
            onReset();
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
            onReset();
          }}
        >Re Start</button>
      </>
    );
  }
};

export {UseState}
