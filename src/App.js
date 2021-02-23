import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react' 
import Users from './Users'
import Todos from './Todos'
import Posts from './Posts'
import AddUser from './AddUser'
class App extends Component
{
  constructor()
  {
    super()
    this.state = {addClicked: false}
  }

  render()
  {
    return(
      <div className = "App">
        <Users callback = {x=> this.setState({addClicked: x})} />
       
        {this.state.addClicked ? <AddUser callback = {x=> this.setState({addClicked: x})}/> 
        : <div className = "App2">
        <Todos/>
        <Posts/>
      </div> }
        
        
      </div>
    )
  }
}

export default App;