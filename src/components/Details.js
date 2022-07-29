import React,{Component} from 'react';
export default class Details extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    console.log(this.props.match.params.id)
   return(
   <div>Welcome to Details Page{this.props.match.params.id} {this.props.match.params.name}</div>
   );
}
}