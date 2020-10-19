import React from 'react';

import { UserContext, ChannelContext } from '../App';


const ComponentF = () => {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return (
                                            <div>
                                                <h3>In Component F  </h3>
                                                User Context Value {user} Channel context value {channel}
                                            </div>
                                        )
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    );
}

export default ComponentF;