import React, { Component } from 'react'

export default class Detail extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/'+this.props.location.pathname)
        .then(res=>res.json())
        .then(res=>{
            // console.log(res.data);
            this.setState({data:res.data});
        })
    }
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
        )
    }
}
