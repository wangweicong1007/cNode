import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import All from './Home/All';
import Share from './Home/Share';
import Qask from './Home/Qask';
import Essence from './Home/Essence';
export default class Home extends Component {
    render() {
        // 获取路径信息
        let {url}= this.props.match
        // console.log(this.props);
        return (
            <div className="home"> 
                <header> 
                    <Link to={url+'/all'}>全部</Link>
                    <Link to={url+'/essence'}>精华</Link>
                    <Link to={url+'/share'}>分享</Link>
                    <Link to={url+'/qask'}>问答</Link>
                </header>
                <div>
                    {/* <Route path='/home' component={All} /> */}
                    <Route path={`${url}/all`} component={All} />
                    <Route path={`${url}/qask`} component={Qask} />
                    <Route path={`${url}/share`} component={Share}/>
                    <Route path={`${url}/essence`} component={Essence}/>
                </div>
            </div>
        )
    }
}