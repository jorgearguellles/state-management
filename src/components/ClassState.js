import React from 'react';
import {Loading } from './Loading';

const SecurityCode = 'paradigma';

class ClassState extends React.Component{
  // In this.props we can get all props passed and use it directly in the JSX
  // Example with name props. To use name pass by props, we write like this: {this.props.name}

  //State Management: 
  constructor(props){
    // When we want modify this in a Class and we want that the class extended keep working...use super();
    super(); 

    this.state = {
      value: '',
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

  componentDidUpdate(){
    console.log("Start Updating")

    if(!!this.state.loading){
      setTimeout(()=>{
        console.log("Start Validation")

        if( SecurityCode === this.state.value){
          this.setState({ error: false, loading: false})
        }else{
          this.setState({ error: true, loading: false})

        }
        console.log("End Validation")
      }, 1500 )
    }


    console.log("End Updating")

  }
  

  render(){
    return(
      <>
        <h2> Delete {this.props.name}</h2>
        <p>Please write the Security Code</p>

        { (this.state.error && !this.state.loading) && (<p>Error: The Security Code is wrong</p>)}

        { this.state.loading && <Loading />}

        <input 
          placeholder="Security code" 
          value={this.state.value}
          onChange={(event)=>{
            this.setState({ value: event.target.value })
          }}
        />
        <button
          onClick={()=>{this.setState({ loading: true })}}
        >Verify</button>
      </>
    )
  }
}

export {ClassState};
