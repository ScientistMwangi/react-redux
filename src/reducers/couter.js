const  counter=(state=0,action)=>{
    switch(action.type){
        case'INCREMENT':
             return state+1;
        case'DECREMENT':
             return state-1;
        case 'IncrementBy5':
            return state+action.param;
        default:
            return state;

    }
};

export default counter;