import {START, FAIL, SUCCESS} from '../const'
export default store => next => action => {
   const {callAPI, type} = action;
   if(!callAPI) {
       return next(action);
   }
   next({
        type: type + START
   });
   setTimeout(
       () => {
              fetch(callAPI)
        .then(res => res.json())
            .then(response => next({type: type + SUCCESS, response})); 
       }, 5000
   )
 
}