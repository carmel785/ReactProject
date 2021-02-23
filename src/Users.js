import './App.css';
import React,{Component} from 'react' 
import axios from 'axios'
import User from './User'
class Users extends Component
{
  constructor()
  {
    super()
    this.state = {users: [], todos: [], posts: [], addClicked: false}
  }

  async componentDidMount() {
    // your source code to load initial data
    var users = await axios.get("https://jsonplaceholder.typicode.com/users")
    this.setState({users: users.data})

    var todos = await axios.get("https://jsonplaceholder.typicode.com/todos")
    this.setState({todos: todos.data})

    var posts = await axios.get("https://jsonplaceholder.typicode.com/posts")
    this.setState({posts: posts.data})

}


  find = (e) =>
  {
    let arr = []
    this.state.users.forEach(x=>
      {
        if(x.name.startsWith(e.target.value))
        {
          arr.push(x)
        }
      })
    this.setState({users: arr})
  }

  //on Add click it shows the add component it must be async for change the state in the same time it change
  async addUser()
  {
    await this.setState({addClicked: true})
    this.props.callback(this.state.addClicked)
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
            }
          }
        })
      if(countRed>0)
        {
          isRed = true 
        }

        let userTodos = this.state.todos.filter(x=> x.userId === index+1)
        let userPosts = this.state.posts.filter(x=> x.userId === index+1)

      return <User key = {index} allUsers = {item} isRed = {isRed} todos = {userTodos} posts = {userPosts}/>
    })
    
    
    return(
      <div className = "App-Border">
        Search <input type = "text" onChange = {this.find}/>
        <input type = "button" value= "Add" onClick = {(()=> this.addUser())}/>
        {itemsU}
      </div>
      
    )
  }
}

export default Users;