import React, { Component } from 'react';
import { enableScreens } from 'react-native-screens';
import Router from './src/config/routers';

enableScreens();
class App extends Component {
    render() {
        return (
            <Router />
        );
    }
}

export default App;