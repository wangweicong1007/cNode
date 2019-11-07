import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class All extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    // 发请求
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics/?tab=good')
        .then(res=>res.json())
        .then(res=>{
            console.log(res.data);
            this.setState({data:res.data});
        })
    }

    Change=(page)=>{
        fetch("https://cnodejs.org/api/v1/topics/?tab=good&page="+page)
        .then(res=>res.json())
        .then(res=>{
            this.setState({data:res.data});
        })
    }
    
    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.data.map((item,idx)=>
                            <li className="all" key={idx}>
                                <img  src={item.author.avatar_url}/>
                                <span style={{fontSize:18}}>{item.reply_count}/</span>
                                <span>{item.visit_count}</span>
                                <Link to={'/topic/'+item.id}>{item.title}</Link>
                                <div>
                                    <img src={item.author.avatar_url}/>
                                    {item.last_reply_at.slice(0,10)}
                                </div>
                            </li>
                        )
                    }
                </ul>
                    <ul className="aLast" >
                       {
                            [1,2,3,4,5,6,7,8,9,10].map((item)=>{
                                return <li key={item} onClick={this.Change.bind(this,item)}>{item}</li>
                            })
                       }
                    </ul>
            </div>
        )
    }    
}
