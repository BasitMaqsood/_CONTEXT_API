import React, { useContext } from 'react';
import { UserContext, ChannelContext } from '../App';

const ComponentE = () => {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    return (<div>
        <h3>  In Component E</h3>
        User Context Value {user} Channel context value {channel}
    </div>);
}

export default ComponentE;