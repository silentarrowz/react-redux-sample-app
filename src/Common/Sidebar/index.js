import React from 'react';
import { Router,Link } from "react-router-dom";
import {Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import './index.scss';

const { Sider } = Layout;

export default class Sidebar extends React.PureComponent{   
    constructor(props){
        super(props);
        this.state={
            current:'1'
        }
    }

    componentDidMount(){
        let path = this.props.history.location.pathname;
        if(path === '/fruits'){
            this.setState({
                current:'2'
            })
        }
    }

    
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
        }
  

    render(){
        console.log('location path : ',this.props.history.location.pathname);
        let path = this.props.history.location.pathname;
        return(
        <Sider
        width={this.props.isMobile?80:200}   
        >
            <div className='logo' key="logo">
            Task
            </div>
            <Router pathname={this.props.path} history={this.props.history}>
                <Menu                               
                theme="light"   
                selectedKeys={[this.state.current]}  
                onClick={this.handleClick}           
                >
                    <Menu.Item key="1"  >                
                    <Link to='/animals'>  <span className='links' >  Animals</span></Link>
                    </Menu.Item>
                    <Menu.Item key="2" >                
                    <Link to='/fruits'>   <span className='links'>  Fruits and Vegetables</span></Link>
                    </Menu.Item>   
                </Menu>
            </Router>
        </Sider>    
        )
    }
}