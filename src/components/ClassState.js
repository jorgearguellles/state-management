import React from 'react';
import {Loading } from './Loading';

class ClassState extends React.Component{
  // In this.props we can get all props passed and use it directly in the JSX
  // Example with name props. To use name pass by props, we write like this: {this.props.name}

  //State Management: 
  constructor(props){
    // When we want modify this in a Class and we want that the class extended keep working...use super();
    super(); 

    this.state = {
      error: false,
      loading: false,
    }

  }

  // UNSAFE_componentWillMount(){
  //   console.log('componentWillMount')
  // }

  // componentWillUnmount(){
  //   console.log('componentWillUnmount')

  // }

  componentDidMount(){
    console.log('componentDidMount - ClassState')

  }
  

  render(){
    return(
      <>
        <h2> Delete {this.props.name}</h2>
        <p>Please write the Security Code</p>

        { this.state.loading && <Loading />}


        { this.state.error && <p>Error: The Security Code is wrong</p>}

        <input placeholder="Security code" />
        <button
          onClick={()=>{this.setState({ loading: true })}}
        >Verify</button>
      </>
    )
  }
}

export {ClassState};
