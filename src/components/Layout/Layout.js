import React from 'react';

import Aux from '../../hoc/Auxx';
import classes from './Layout.css';

const layout = ( props ) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children} 
            {/* <div>build control and burger come from this</div> */}
        </main>
    </Aux>
);

export default layout;