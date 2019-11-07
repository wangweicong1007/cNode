import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';

export default class Right extends Component {
    render() {
        return (
            <div>
                <p style={{fontSize:18}}>CNode：Node.js专业中文社区</p>
                <p>您可以 登录 或 注册 , 也可以</p>
                <button className='button'><Link to='/home'>通过GitHub登录</Link></button>
            </div>
        )
    }
}
