import './App.css';
import React,{Component} from 'react' 
import {connect} from 'react-redux'
class Todos extends Component
{
  constructor(props)
  {
    super(props)
  }


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

    return(
      
      <div className = "App-Border-TodosAndPosts">
      Todos - User {this.props.data.userId} <input type = "button" value = "Add" /><br/>
      <div className = "App-Border-TodosAndPosts-Inner">
        {items}
      </div>
       

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