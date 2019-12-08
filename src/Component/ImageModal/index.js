import React, {Component, Fragment } from 'react';
import { Modal,Button } from 'antd';


export default class ImageModal extends Component{

    render(){
        const item = this.props.item;
        return(
            <Modal
            title="High Definition Image"
            visible={this.props.showModal}            
            onCancel={this.props.closeModal}
            footer={[ <Button key="submit" type="primary" onClick={this.props.closeModal}>
            Close
          </Button>]}
            >
           <img style={{width:'100%'}} src={item.ImageURLs.FullSize} alt='fullsize' />
           <div>
               <h3>{item.Title}</h3>
               {item.Description}
           </div>
            </Modal>
        )
    }
}