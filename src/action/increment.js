export const Increment=()=>{
        return {type:'INCREMENT'};
};

export const IncrementBy5=(number)=>{
    return{
        type:'IncrementBy5',
        param:number
    };
};