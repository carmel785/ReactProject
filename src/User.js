import './App.css';
import React,{Component} from 'react' 
import axios from 'axios'
class Users extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {street: "", city: "", zipcode: ""}
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
        Name: <input type = "text" placeholder = {this.props.allUsers.name} /><br/>
        Email: <input type = "text" placeholder = {this.props.allUsers.email} /><br/><br/>
        <input type = "button" value= "Other Data" style={{backgroundColor: "grey"}} onMouseOver = {() => this.mouseOver(this.props.allUsers)} />
        {this.showDetails()}
        <input type = "button" value= "Update" />
        <input type = "button" value= "Delete" />
      </div>
      
    )
  }
}

export default Users;