# State Management in React.js

In the course we will work in a Security Codes Projects

## What is a State

State is:
- data that change by user interaction.
- data property and handle it by the component owner.

## Independents and complex States

- Simples or Independents State
- Complex State: Always we need to use in Classes Components


## ¿What is a Reducer?

- The Reducer is a tool allows us to declare all the possible states of our application to be able to work with them declaratively way.
- the useReducer hook let us State management by declarative way

The Reducer need two principal objects:
1. Compound State: Is a literal Object where all our App States will live like object attributes
2. Actions: Are trigger allows us move of one State to another State and have two props:
    - Action Type: What is a _key name_ to find the new State and then update the App State. 
    - Payload: Is Optional but is important when we work dynamic States.
![work flow](./src/img/reducer-work-flow.png)
![work flow](./src/img/reducer-type.png)
![work flow](./src/img/reducer-type-payloadA.png)
![work flow](./src/img/reducer-type-payloadB.png)


## 3 wayt to write Reducers functions

```js
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

```


## Derivate States

A derivate State is create from States before created
 

