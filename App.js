import React, { Component } from 'react'
import Header from './Components/Header'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from './Container/Home';
import Start from './Container/Start';
import Api from './Container/Api';
import About from './Container/About';
import Detail from './Container/Home/Detail';
import Right from './Container/Right';
import Sign from './Components/Sign';
export default class app extends Component {
    render() {
        return (
            <Router>
                {/* 黑框 */}
                <div>
                    <Header/>
                    {/* 中间大块 */}
                    <div className='content'>
                        <div className='left'>
                            {/* 基本配置 */}
                            {/* 4个页面 */}
                            {/* home可以成文件夹，不够文件夹在加sub子文件夹放css，js */}
                        <Route path='/home' component={Home} />
                        <Route path='/start' component={Start} />
                        <Route path='/api' component={Api} />
                        <Route path='/about' component={About} />
                        <Route path='/topic/:id' component={Detail}/>
                        <Route path='/sign' component={Sign} />
                        </div>
                        <div className='right'>
                            <div className='one'>
                                <Right/>
                            </div>
                            <div className='two'></div>
                        </div>
                    </div>
                </div>
            </Router>
     
        )
    }
}

