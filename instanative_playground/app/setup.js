
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

// import App from './App';
import LoginScreen from "./containers/login/LoginScreen";
import store from './redux/configureStore';


function setup() {

  class Root extends PureComponent {

    render() {
      return (
        <Provider store={store}>
          <LoginScreen />
        </Provider>
      );
    }
  }

  return Root;
}

export default setup;
