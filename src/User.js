import './App.css';
import React,{Component} from 'react' 
import axios from 'axios'
class Users extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {name: "", email: "", street: "", city: "", zipcode: ""}
  }

 

  mouseOver(allUsers)
  {
    this.setState({street: allUsers.address.street})
    this.setState({city: allUsers.address.city})
    this.setState({zipcode: allUsers.address.zipcode})
  
    // // console.log(allUsers.name)
  }
  showDetails()
  {
    if(this.state.street !== "")
    {
      return <div className = "App-Border-User-onMouse">
      Street: <input type = "text" placeholder = {this.state.street} /><br/>
      City: <input type = "text" placeholder = {this.state.city} /> <br/>
      Zip Code: <input type = "text" placeholder = {this.state.zipcode} /> <br/>
    </div>
    }
    
  }

  handleUpdate()
  {
    let chganges = {
      "name" : this.state.name,
      "email" : this.state.email,
    }
    //updating a specific field in the users json:
    axios.patch("https://jsonplaceholder.typicode.com/users/"+this.props.allUsers.id, chganges)
    .then(resp => console.log(resp.data))
  }


  handleDelete()
  {
    axios.delete("https://jsonplaceholder.typicode.com/users/"+this.props.allUsers.id)
    .then(resp => console.log(resp.data))
  }

  render()
  {
    // console.log(this.props.isRed)
    let borderColor = ""
    if(this.props.isRed === true)
    {
      borderColor = "App-Border-User-Red"
    }
    else{
      borderColor = "App-Border-User-Green"
    }
    

    return(
      
      <div className = {borderColor}>
        Id: {this.props.allUsers.id}<br/>
        Name: <input type = "text" placeholder = {this.props.allUsers.name} 
              onChange = {(e)=> this.setState({name: e.target.value})}/><br/>
        
        Email: <input type = "text" placeholder = {this.props.allUsers.email} 
              onChange = {(e)=> this.setState({email: e.target.value})}/><br/><br/>

        <input type = "button" value= "Other Data" style={{backgroundColor: "grey"}} onMouseOver = {() => this.mouseOver(this.props.allUsers)} />
        {this.showDetails()}
        <input type = "button" value= "Update" onClick = {this.handleUpdate.bind(this)}/>
        <input type = "button" value= "Delete" onClick = {this.handleDelete.bind(this)}/>
      </div>
      
    )
  }
}

export default Users;