import { combineReducers } from 'redux';
//combine reducer
import nativeRouter from '../nativeRouter/reducer';


const appReducer = combineReducers({
    nativeRouter
})


const rootReducer = (state, action)=>{
    //if you need clear store
    // if(action.type === 'CLEAR_STORE'){
    //     state = undefined
    // }
    return appReducer(state, action)
}

export default rootReducer;
