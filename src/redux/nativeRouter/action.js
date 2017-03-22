export function changeText(text){
    return (dispatch, getState)=>{
        dispatch({
            type:'text',
            value:text
        })
    }
}
