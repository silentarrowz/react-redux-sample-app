import React from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'antd';

export default class TopMenu extends React.Component {
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

  render() {
    return (
        <Menu                               
        theme="light"   
        selectedKeys={[this.state.current]}  
        onClick={this.handleClick}  
        mode="horizontal"         
        >
            <Menu.Item key="1"  >                
            <Link to='/animals'>  <span className='links' >  Animals</span></Link>
            </Menu.Item>
            <Menu.Item key="2" >                
            <Link to='/fruits'>   <span className='links'>  Fruits and Vegetables</span></Link>
            </Menu.Item>   
        </Menu>
    );
  }
}