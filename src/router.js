import React from "react";
import Page1 from './components/Page1'
import Page2 from './components/Page2'

import { Actions, Scene, ActionConst } from 'react-native-router-flux';

export default Actions.create(
    <Scene key='root'>
        <Scene key='lists' tabs={true} hideNavBar type=      {ActionConst.REPLACE}>
            <Scene key='Page1' title='Page1' component={Page1} ></Scene>
            <Scene key='Page2' title='Page2' component={Page2} ></Scene>
        </Scene>
    </Scene>
);
