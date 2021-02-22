import './App.css';
import React,{Component} from 'react' 
import axios from 'axios'
import User from './User'
class Users extends Component
{
  constructor()
  {
    super()
    this.state = {users: [], todos: []}
  }

  async componentDidMount() {
    // your source code to load initial data
    var users = await axios.get("https://jsonplaceholder.typicode.com/users")
    this.setState({users: users.data})

    var todos = await axios.get("https://jsonplaceholder.typicode.com/todos")
    this.setState({todos: todos.data})
}


  find = (e) =>
  {
    let arr = []
    this.state.users.forEach(x=>
      {
        if(x.name.startsWith(e.target.value))
        {
          console.log(x)
          console.log(e.target.value)
          arr.push(x)
        }
      })
    this.setState({users: arr})
  }

  render()
  {
    let isRed = false
    let itemsU = this.state.users.map((item,index)=>
    {
    let countRed = 0
      this.state.todos.forEach(t=>
        {
          if(t.userId === index)
          {
            if(t.completed === false)
            {
              countRed += 1
              // console.log(t)

            }
          }
        })
      if(countRed>0)
        {
          isRed = true 
        }
      return <User key = {index} allUsers = {item} isRed = {isRed}/>
    })
    
    
    return(
      <div className = "App-Border">
        Search <input type = "text" onChange = {this.find}/>
        <input type = "button" value= "Add" />
        {itemsU}
      </div>
      
    )
  }
}

export default Users;