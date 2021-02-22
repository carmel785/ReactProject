import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react' 
import Users from './Users'

class App extends Component
{
  constructor()
  {
    super()
  }

  render()
  {
    return(
      <div className="App">
         
        <h1>Users Management App</h1>
        <Users/>

      </div>
    )
  }
}

export default App;