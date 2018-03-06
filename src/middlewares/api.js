import {START, FAIL, SUCCESS} from '../const'
export default store => next => action => {
   const {callAPI, type, ...rest} = action;
   if(!callAPI) {
       return next(action);
   }
   next({
       ...rest,
        type: type + START
   });
        fetch(callAPI)
        .then(res => res.json())
        .then((response) => next({...rest, type: type + SUCCESS, response})); 
 
} 