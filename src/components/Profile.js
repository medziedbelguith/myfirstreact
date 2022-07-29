import React,{Component} from 'react';
export default class Profile extends Component {
    handleClick=()=>{
        this.props.history.push('/details/Houssem bejaoui')
    }
  render() {
   return(
   <div>Welcome to Profile Page <button onClick={this.handleClick}>Click</button></div>
   );
}
}