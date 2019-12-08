
const animalReducer = (state = {list:[],loading:true} , action) => {
    console.log('action is : ',action);
    switch(action.type){
        case 'ANIMALS':
            let newState = {list:action.payload,loading:false}
            return newState;
        default:
            return state;    
    }
}


export default animalReducer;