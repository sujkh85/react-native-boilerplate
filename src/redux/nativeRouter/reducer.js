import { ActionConst } from 'react-native-router-flux';

export default function (state = {
    scene:null,
    text:'change zone'
}, action) {
    let nextState = state
    switch (action.type) {
        case ActionConst.FOCUS:
            return Object.assign({}, state, {
                scene: action.scene
            });
        case "text":
            return Object.assign({}, state, {
                text: action.value
            });
        default:
            nextState = state;
            return nextState
    }
}
