import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';

export default class Sign extends Component {
    render() {
        return (
            <div className="sign">
                <header className='header'>主页/登录</header>
                <div className="one">
                    <p>用户名</p><input type='text' />
                    <br/>
                    <p>&nbsp;&nbsp;&nbsp;密码</p>  <input type='text' />
                </div>
                <button className="button1"><Link to='/home'>登录</Link></button>
                <button className="button2"><Link to='/home'>通过GitHub登录</Link></button>
                忘记密码了？
            </div>
        )
    }
}
