

const initialState={
    counter:0,
    results:[]
}

const Reducer=(state=initialState,action)=>{
switch(action.type){
    case 'INCREMENT':
        const newState=Object.assign({},state);
        newState.counter=state.counter+1;
        return newState;
     case 'DECREMENT':   
     return{
         ...state,
        counter:state.counter-1
    }

    case 'ADDITION':
        return{
            ...state,
            counter:state.counter+action.value
        }
    case 'SUBSTRACT':
        return{
            ...state,
            counter:state.counter-action.value
        }

        case 'STORE_RESULT':
            return{
                ...state,
                results:state.results.concat({id:new Date(),value:state.counter})
            }

            case 'DELETE_RESULT':
              /*const id=2;
              const newArray=[...state.results];
              newArray.splice(id,1);*/

              const updatedArray=state.results.filter(result=>result.id!==action.resultElId);
            return{
           ...state,
           results:updatedArray
            }


}


return state;
};


export default Reducer;