import React from 'react';
import {Radio } from 'antd';
import BasicLayout from '../BasicLayout';
import './index.scss';

const RadioGroup = Radio.Group;

export default class LayoutSelector extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:"topb"
        }
    }
    
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      }
    
    render(){
        return(
            <div className="mainContainer">
                <div className="radioContainer">
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                    <Radio value="topb">Top Buttons</Radio>
                    <Radio value="topm">Top Menu</Radio>
                    <Radio value="side">SideBar</Radio>                    
                </RadioGroup>    
                </div>
                <BasicLayout history={this.props.history} type={this.state.value} />
            </div>
        )

    }    
}
