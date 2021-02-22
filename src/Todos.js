import './App.css';
import React,{Component} from 'react' 
import {connect} from 'react-redux'
class Todos extends Component
{
  constructor(props)
  {
    super(props)
  }

  render()
  {


    let items = this.props.data.todos.map((item,index)=>
    {
      return  <div key = {index} className = "App-Border-TodosAndPosts-Inner">
      Title: {item.title}<br/><br/>
      Completed: {item.completed.toString()}<br/>
    </div>

    })


    return(
      
      <div className = "App-Border-TodosAndPosts">
      Todos - User <input type = "button" value = "Add" /><br/>
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