import React from 'react';

import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';

import './App.css';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">

      <CounterTwo />

      {/* <CounterOne /> */}

      {/* <UserContext.Provider value={'Basit Maqsood'}>
        <ChannelContext.Provider value={'Faisal Hafeez'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
    </div>
  );
}

export default App;
