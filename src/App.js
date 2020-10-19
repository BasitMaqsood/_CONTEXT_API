import React from 'react';

import ComponentC from './components/ComponentC';

import './App.css';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Basit Maqsood'}>
        <ChannelContext.Provider value={'Faisal Hafeez'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
