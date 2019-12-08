import React from 'react';
import classNames from 'classnames';
import {Router, Route} from "react-router-dom";
import { Layout } from 'antd';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import { ContainerQuery } from 'react-container-query';
import BaseRoute from '../../Component/BaseRoute';
import Sidebar from '../../Common/Sidebar';
import TopButtons from '../../Common/TopButtons';
import TopMenu from '../../Common/TopMenu';
import './index.scss';

const { Content } = Layout;


const query = {
    'screen-xs': {
      maxWidth: 575,
    },
    'screen-sm': {
      minWidth: 576,
      maxWidth: 767,
    },
    'screen-md': {
      minWidth: 768,
      maxWidth: 991,
    },
    'screen-lg': {
      minWidth: 992,
      maxWidth: 1199,
    },
    'screen-xl': {
      minWidth: 1200,
    },
  };


let isMobile;
enquireScreen(b => {
  isMobile = b;
});

export default class BasicLayout extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            isMobile
        }
    }

    componentDidMount(){
      this.enquireHandler = enquireScreen(mobile => {
        this.setState({
          isMobile: mobile,
        });
      });
    }

    componentWillUnmount() {
      unenquireScreen(this.enquireHandler);
    }


    render(){
      let type = this.props.type;
      let whichLayout =  <TopButtons history={this.props.history} isMobile={this.state.isMobile} />;
      if(this.props.type === 'topm'){
        whichLayout = <TopMenu history={this.props.history} isMobile={this.state.isMobile}/>;
      }else if(this.props.type === 'side'){
        whichLayout =  <Sidebar history={this.props.history} isMobile={this.state.isMobile}/>;
      }
      let layout = (  
                <Layout>        
                  {whichLayout}
                  <Layout style={{overflow:'hidden'}}>                
                    <Content className="contentStyle" style={{ padding: '0 5px', marginTop: 14,position:'relative',display:'inline-block' }}>
                      <Router pathname={this.props.path} history={this.props.history} >
                        <Route path='/' component={BaseRoute} />               
                      </Router>             
                    </Content>
                  </Layout> 
                </Layout>);
      return(
          <ContainerQuery query={query}>
          {params => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>
      )
    }
}

