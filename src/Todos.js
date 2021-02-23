import './App.css';
import React,{Component} from 'react' 
import {connect} from 'react-redux'
import axios from 'axios'
class Todos extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {add: false, newTodoTitle: ""}
  }

  checkIdClicked()
  {
    if(this.props.data.userId !== "")
    {
      return true
    }
  }

    //if the user clicked on Mark completed Button
    change(indexPass)
    {
      this.props.data.todos.forEach((item,index)=>
        {
          if(index === indexPass)
          {
            item.completed = true
            this.forceUpdate() // rerendering
          }
        })
    }

    addTodo()
    {
      let newTodo = {
        userId: this.props.data.userId,
        Title: this.state.newTodoTitle,
        completed: false
      }

      axios.post("https://jsonplaceholder.typicode.com/todos", newTodo)
      .then(resp=> console.log(resp))
    }


  render()
  {
    
    let items = this.props.data.todos.map((item,index)=>
    {
      return  <div key = {index} className = "App-Border-TodosAndPosts-Inner">
      Title: {item.title}<br/><br/>
      Completed: {item.completed.toString()}
      {item.completed ? '' : <button onClick = {() => this.change(index)}>Mark Completed</button>}<br/>
    </div>
    })

    let checkClicked = this.checkIdClicked()

    return(
      <div className = "App-Border-TodosAndPosts">
      {checkClicked ? <div>
        Todos - User {this.props.data.userId} <input type = "button" value = "Add" onClick = {() => this.setState({add: true})}/><br/>
        <div className = "App-Border-TodosAndPosts-Inner">
        {this.state.add ? <div className = "App-Border-TodosAndPosts-Inner"> 
        Title: <input type = "text" onChange = {(e)=> this.setState({newTodoTitle: e.target.value})}/><br/>
        <button onClick = {() => this.setState({add: false})}>Cancel</button>
        <button onClick = {()=> this.addTodo()}>Add</button>
          </div> : items} <br/>
        </div>

        </div>
         : ""}
      
       

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

export default connect(mapStateToProps)(Todos);