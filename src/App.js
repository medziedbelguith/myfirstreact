import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Link,Route,Switch,NavLink } from 'react-router-dom';
/* import Home from './Home' */
import React,{Component} from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Details from './components/Details'
import Profile from './components/Profile'
class App extends Component {
 
 /*  constructor(props){
    super(props)
    this.state={
    country:""
    }
  } */
  /* handleColorred=(e)=>{
    e.preventDefault();
    this.setState({
      className:'red'
    })
  }
  handleColorgreen=(e)=>{
    e.preventDefault();
    this.setState({
      className:'green'
    })
  } */
  /* handlecheck=(e)=>{
    if(e.target.name=="Tunisia" && e.target.checked==true){
      this.setState({
        tunisie:"tunisia"
      })
    }
    if(e.target.name=="Algerie" && e.target.checked==true){
      this.setState({
        algerie:"algerie"
      })
    }
    if(e.target.name=="Tunisia" && e.target.checked==false){
      this.setState({
        tunisie:undefined
      })
    }
    if(e.target.name=="Algerie" && e.target.checked==false){
      this.setState({
        algerie:undefined
      })
    }

  } */
/*   handleselect=(e)=>{
    this.setState({
      country:e.target.value
    })
    console.log(e.target.value)
  } */
  render(){
    return (
    <BrowserRouter>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about" style={{marginLeft:"12px"}}>About</NavLink>
    <NavLink to="/contact" style={{marginLeft:"12px"}}>Contact</NavLink>
    <NavLink to="/details/profile" style={{marginLeft:"12px"}}>Profile</NavLink>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/details/profile" exact component={Profile} />
    <Route path="/details/:name" exact component={(props) => <Details {...props}  />} />
    </Switch>
    </BrowserRouter>
  );
  }
}

export default App;
