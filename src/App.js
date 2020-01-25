import React from 'react';
import './App.css';
import AuthContainer from './components/AuthContainer';
import RegistrationContainer from './components/RegistrationContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers' 

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div>
        <AuthContainer/>
        <RegistrationContainer />
      </div>
    </Provider>
  );
}

export default App;
