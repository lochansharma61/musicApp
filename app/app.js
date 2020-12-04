import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './stack';
import store from './store';
import { SafeAreaView } from 'react-navigation';


class Root extends Component {

  
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <App />
        </SafeAreaView>
      </Provider>
    );
  }
}

export default Root;
