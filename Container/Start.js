import React, { Component } from 'react'

export default class Start extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    // 发请求
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics/')
        .then(res=>res.json())
        .then(res=>{
            console.log(res.data);
            this.setState({data:res.data});
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.data.map((item)=>(
                        <div style={{width:800,overflow:'hidden',marginTop:15}} dangerouslySetInnerHTML={{__html:item.title}} key={item}></div>
                    ))
                }
            </div>
        )
    }
}
