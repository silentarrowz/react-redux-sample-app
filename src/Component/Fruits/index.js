import React, {Component } from 'react';
import { List, Card, Skeleton } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {getFruitData} from '../../actions/fruitActions';
import ImageModal from '../ImageModal';

class Fruits extends Component{
    constructor(props){
        super(props);
        this.state = {            
            showModal:false
        }
    }
    
    componentDidMount(){
        this.props.getFruitData();
    }

    openModal = (item,e) => {
        e.preventDefault();       
        this.setState({
            showModal:true,
            item
        });
    }

    closeModal = () => {
        this.setState({
            showModal:false
        });
    }


    render(){
        console.log('fruit props : ',this.props);
        return(
            <div>
            <List
               grid={{
               gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3,
               }}
               dataSource={this.props.fruitList}
               renderItem={item => (
               <List.Item>
                  {this.props.loading?
                   <Skeleton />:
                   <Card             
                   hoverable 
                   bordered={true}              
                   title={item.Title}
                   cover={<img className='cardImage' onClick={(e)=> this.openModal(item,e)} alt="example" src={item.ImageURLs.Thumb} />}
                   > 
                 <div className='cardContent'>
                           <p className='title'> <span>Family :</span> <span>{item.Family}</span></p><br/>
                           <p className='description'> <span> {item.Description}</span></p>
                            </div>
                 </Card>}
                  
                
               </List.Item>
               )}
           />
           {this.state.showModal?<ImageModal item={this.state.item} closeModal={this.closeModal} showModal={this.state.showModal} />:null}
       </div>    
        )
    }
}

const mapStateToProps = (state) => {
    return{
        fruitList:state.fruits.list,
        loading:state.fruits.loading
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        getFruitData
    },
    dispatch
);

export default connect(mapStateToProps,mapDispatchToProps)(Fruits);