import './App.css';
import React,{Component} from 'react' 
import {connect} from 'react-redux'

class Posts extends Component
{
  constructor(props)
  {
    super(props)
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

    return(
      
      <div className = "App-Border-TodosAndPosts">
      Posts - User <input type = "button" value = "Add" /><br/>
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

export default connect(mapStateToProps)(Posts);