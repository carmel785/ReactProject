import './App.css';
import React,{Component} from 'react' 
import {connect} from 'react-redux'
import axios from 'axios'

class Posts extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {add: false, newTitle: "", newBody: ""}
  }

  checkIdClicked()
    {
      if(this.props.data.userId !== "")
      {
        return true
      }
    }

    addTodo()
    {
      let newPost = {
        Title: this.state.newTitle,
        Body: this.state.newBody
      }

      axios.post("https://jsonplaceholder.typicode.com/posts", newPost)
      .then(resp=> console.log(resp))
    }


  render()
  {
    let items = this.props.data.posts.map((item,index)=>
    {
      return  <div key = {index} className = "App-Border-TodosAndPosts-Inner">
      Title: {item.title}<br/><br/>
      Body: {item.body}<br/>
    </div>

    })

    let checkClicked = this.checkIdClicked()

    return(
      
      <div className = "App-Border-TodosAndPosts">
      {checkClicked ?
      <div>
        Posts - User {this.props.data.userId} <input type = "button" value = "Add" onClick = {() => this.setState({add: true})}/><br/>
        <div className = "App-Border-TodosAndPosts-Inner">
        {this.state.add ? <div className = "App-Border-TodosAndPosts-Inner"> 
        Title: <input type = "text" onChange = {(e)=> this.setState({newTitle: e.target.value})}/><br/>
        Body: <input type = "text" onChange = {(e)=> this.setState({newBody: e.target.value})}/><br/>
        <button onClick = {() => this.setState({add: false})}>Cancel</button>
        <button onClick = {()=> this.addTodo()}>Add</button>
          </div> : items} <br/>
        </div>
      </div>: ""}
      
      </div>
      
    )
  }
}
const mapStateToProps = (state) =>
{
  return {
    data: state
  }
}

export default connect(mapStateToProps)(Posts);