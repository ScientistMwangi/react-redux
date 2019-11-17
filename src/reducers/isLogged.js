const isLogged=(state=false,action)=>{
    switch(action.type){
        case'IS_SIGNED_IN':
            return !state;
        default:
            return state;
    }
}

export default isLogged;