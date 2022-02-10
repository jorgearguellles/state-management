import React from 'react';

const SecurityCode = 'paradigma';

const UseReducer = ( { name } ) => {

  //State Management: Individual State and Declarative way
  const [state, dispatch] = React.useReducer( reducer, initialState);

  // Action Create: Declarative by Dispatch
  const onConfirm = () => {
    dispatch({ type: actionTypes.CONFIRM });
  };

  const onError = () => {
    dispatch({ type: actionTypes.ERROR });
  };

  const onWrite = ( { target: { value } } ) => {
    dispatch({ type: actionTypes.WRITE, payload: value });
  };

  const onCheck = () => {
    dispatch({ type: actionTypes.CHECK });
  };

  const onDelete = () => {
    dispatch({ type: actionTypes.DELETE });
  };

  const onReset = () => {
    dispatch({ type: actionTypes.RESET });
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
          onChange={ onWrite }
        />
        <button
          onClick={ onCheck }
        >Verify</button>
      </>
    )
  } else if( state.confirmed && !state.deleted){
    return(
      <>
        <h1>¿Are you sure?</h1>

        <button
          onClick={ onDelete }
        >Yes, I'm sure</button>
        <button
          onClick={ onReset }
        >No, I want comeback</button>
      </>
    );
  } else {
    return(
      <>
        <p>Deleted successfully !</p>

        <button
          onClick={ onReset }
        >Re Start</button>
      </>
    );
  }
};

const initialState = {
  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};


const actionTypes = {
  CONFIRM: 'CONFIRM',
  ERROR: 'ERROR',
  CHECK: 'CHECK',
  DELETE: 'DELETE',
  RESET: 'RESET',
  WRITE: 'WRITE',
}

const reducerObj = ( state, payload ) => ({

  [actionTypes.ERROR]: {
    ...state,
    error: true,
    loading: false,
  }, 
  [actionTypes.CHECK]: {
    ...state,
    loading: true,
  }, 
  [actionTypes.CONFIRM]: {
    ...state,
      loading: false,
      error: false,
      confirmed: true,
  },
  [actionTypes.DELETE]:{
    ...state,
      deleted: true,
  },
  [actionTypes.RESET]: {
    ...state,
      confirmed: false,
      deleted: false,
      value: '',
  },
  [actionTypes.WRITE]: {
    ...state,
    value: payload,
  }
});

const reducer = (state, action ) => {

  if( reducerObj(state)[action.type] ){
    return reducerObj(state, action.payload )[action.type];
  } else {
    return state;
  }

}


export {UseReducer}
