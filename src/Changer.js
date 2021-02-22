import React,{Component} from 'react'
import {connect} from 'react-redux'

class Changer extends Component
{
    constructor()
    {
        super()
    }

    increment = () =>
    {
        this.props.dispatch({
                                type: 'INCREMENT',
                                payload : 3
        })
    }

    decrement = () =>
    {
    this.props.dispatch({
                          type : 'DECREMENT',
                          payload : 2
                        });
    }


    render()
    {
    return (
      <div>
            <h3>Counter Changer</h3>
            <input type="button" value="+" onClick={this.increment} />
            <input type="button" value="-" onClick={this.decrement} />
      </div>
     )
    }

}


export default connect()(Changer);