import './App.css';
import React,{Component} from 'react' 
import axios from 'axios'
class AddUser extends Component
{
  constructor()
  {
    super()
    this.state = {name: "", email: ""}
  }


  handleCancel()
  {
    this.props.callback(false)
  }

  addNewUser()
  {
    let user = {
      name: this.state.name,
      email: this.state.email
    }
    axios.post("https://jsonplaceholder.typicode.com/users", user)
      .then(resp => console.log(resp))
  }

  render()
  {
    
    return(
      <div>
        Add New User
        <div className = "App-Border-TodosAndPosts-Inner"><br/>
          Name: <input type = "text" onChange = {(e) => this.setState({name: e.target.value})}/><br/><br/>
          Email: <input type = "text" onChange = {(e) => this.setState({email: e.target.value})}/><br/><br/>
          <button onClick = {()=> this.handleCancel()}>Cancel</button>
          <button onClick = {() => this.addNewUser()}>Add</button>

        </div>
      </div>
      
    )
  }
}


export default AddUser;