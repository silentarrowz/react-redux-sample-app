import {getRequest} from '../utils/network-call';

export const getFruitData = () =>  {
    return (dispatch) => {
        let url =  process.env.REACT_APP_BASE_URL+'/fruitveg';
        getRequest(url,
                (res)=>{           
                dispatch({ 
                    type: 'FRUITS',
                    payload:res   
                    });           
            },
            (err)=>console.log(err)); 
            }   
}