import React, { Component } from 'react';
import styles from './core/styles';
import routes from './core/navigation';
import resolver from './core/di';

import {
  View,
  Text,
  ToolbarAndroid,
  Navigator,
  ToastAndroid
} from 'react-native'


import Login from './components/Login';
import Loader from './components/Loader';
import Main from './components/Main';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.userService = resolver.get('userService');

    this.state = {
       loggedIn: false,
       loading: true
    };
  }

  componentDidMount() {

      if (this.userService.isLoggedIn()) {
        this.setState({ loggedIn:true,loading:false });
      } else {
        this.userService.cookieAuth().then((loggedIn) => {
           console.log(loggedIn);
           this.setState({ loggedIn:loggedIn, loading:false });
        });
      }

  }

  render() {

    let component = <Loader/>;

    if (!this.state.loading) {
       component = this.state.loggedIn ? <Main onLogout={this.onLogout.bind(this)} /> :
            <Login beforeLogin={()=> this.setState({loggedIn:false,loading:true})} onLogin={this.onLogin.bind(this)} />;
    }

    return component;
  }

  onLogout() {
    this.setState({ loggedIn:false,loading:false });
  }

  onLogin(success) {
    this.setState({ loggedIn:success,loading:false });
  }

}
