import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react' 
import Users from './Users'
import Todos from './Todos'
import Posts from './Posts'
class App extends Component
{
  constructor()
  {
    super()
  }

  render()
  {
    return(
      <div className = "App">
        <Users/>
        <div className = "App2">
          <Todos/>
          <Posts/>
        </div>
        
      </div>
    )
  }
}

export default App;