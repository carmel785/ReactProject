import './App.css';
import React,{Component} from 'react' 
import {connect} from 'react-redux'

class Posts extends Component
{
  constructor(props)
  {
    super(props)
  }

  checkIdClicked()
    {
      if(this.props.data.userId !== "")
      {
        return true
      }
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
        Posts - User {this.props.data.userId} <input type = "button" value = "Add" /><br/>
        <div className = "App-Border-TodosAndPosts-Inner">
          {items}
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