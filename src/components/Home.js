import React,{Component} from 'react';
import axios from "axios"
export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            products:[],
            newproduct:{
                name:"ifinixp90",
                price:"450$",
                UserId:"5"
            },
            x:50
        }
    }
    componentDidMount()
    {
    console.log("componentDidMount")
    axios.get('http://localhost:4040/products').then((response)=>this.setState({products:response.data}))
    //axios.post('http://localhost:4040/createproduct',this.state.newproduct).then(response=>console.log(response)) 
  //  axios.delete('http://localhost:4040/product/'+this.state.x).then((response)=>console.log(response.data))
  //axios.patch('http://localhost:4040/product/'+this.state.x,this.state.newproduct).then((response)=>console.log(response.data))
    }
    handleName=(e)=>{
    this.setState({
        product:{
            ...this.state.product,
            name:e.target.value
        }
    })
    }
/*     handleDescription=(e)=>{
        this.setState({
            product:{
                ...this.state.product,
                description:e.target.value
            }
        })
        
    } */
    handlePrice=(e)=>{
        this.setState({
            product:{
                ...this.state.product,
                price:e.target.value
            }
        })
    }

    handleId=(e)=>{
        this.setState({
            product:{
                ...this.state.product,
                UserId:e.target.value
            }
        })
    }
    handleSubmit=async(e)=>{
      e.preventDefault()
      console.log(this.state.product)
      await axios.post('http://localhost:4040/createproduct',this.state.product).then(response=>console.log(response)) 
      axios.get('http://localhost:4040/products').then((response)=>this.setState({products:response.data})) 
    }
  

  render() {
    console.log("render")
   return(
   <div>
    <h1>Welcome to Home Page</h1>
    {this.state.products.map((item,index)=>
    <ul key={index}>
      <li>{item.name}</li>  
      <li>{item.price}</li>
    </ul>
    )}
    Title:<input type="text" onChange={this.handleName}/>
    Price:<input type="text" onChange={this.handlePrice}/>
    UserId:<input type="text" onChange={this.handleId}/>
    <button onClick={this.handleSubmit}>Send</button>
    </div>
   );
}
}
