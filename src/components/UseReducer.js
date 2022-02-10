const initialState = {
  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

// 1. Obviously way to work Reducers
const reducerIf = ( state, action ) => {

  if( action.type === 'ERROR' ){
    return {
      ...state,
      error: true,
      loading: false,
    };
  } else if ( action.type === 'CHECK'){
    return {
      ...state,
      loading: true,
    };
  } else {
    return {
      ...state,
    }
  }

}

// 2. Popular way to work Reducer
const reducerSwitch = ( state, actions ) => {

  switch( actions.type ){
    case 'ERROR': 
      return {
        ...state,
        error: true,
        loading: false,
      }
    case 'CHECK':
      return {
        ...state,
        loading: true,
      };
    default:
      return {
        ...state,
      }
  }

}


// 3. Juan's Favorite way to work Reducers
const reducerObj = ( state ) => ({

  'ERROR': {
    ...state,
    error: true,
    loading: false,
  }, 
  'CHECK': {
    ...state,
    loading: true,
  }, 

});

const reducer = (state, action ) => {

  if( reducerObj(state)[action.type] ){
    return reducerObj(state)[action.type];
  } else {
    return state;
  }
  
}