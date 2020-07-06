import React from 'react'
import Paragraf from './Paragraf'
import Form from './Form'
class Content extends React.PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Form setName={this.props.setName} setNim={this.props.setNim}/>
                <Paragraf/>
                <p> Nim : {this.props.nim}</p>
                <p> Name : {this.props.name}</p>
                
            </div>
        )
    }
}
export default Content