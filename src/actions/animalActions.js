import {getRequest} from '../utils/network-call';

export const getAnimalData = () =>  {
    return (dispatch) => {
    let url =  process.env.REACT_APP_BASE_URL+'/animals';
    console.log('url : ',url);
    getRequest(url,
            (res)=>{           
            dispatch({ 
                type: 'ANIMALS',
                payload:res   
                });           
        },
        (err)=>console.log(err)); 
        }   
}