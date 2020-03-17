
import React, { Component } from 'react';
import Routes from './routes';

import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AutomationStudioContext from './React-Automation-Studio/components/SystemComponents/AutomationStudioContext';
import { blue, indigo, pink, red, green, cyan, lime } from '@material-ui/core/colors';
import io from 'socket.io-client';
import { PyEpicsServerURL } from './utils/consts';

let socket = io(PyEpicsServerURL, { transports: ['websocket'], })


let themeStyle = 'dark';
class App extends Component {
  constructor(props) {
    super(props);

    let theme = createMuiTheme({
      palette: {
        type: themeStyle,
        primary: themeStyle == 'dark' ? cyan : indigo,
        secondary: pink,
        error: pink,
        action: green,
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,



      },
      lightLineColors: ['#12939A', '#79C7E3', '#1A3177', '#FF9833', '#EF5D28'],
      darkLineColors: ['#ff9800', '#f44336', '#9c27b0', '#3f51b5', '#e91e63'],
      typography: {
        useNextVariants: true,
        fontFamily: [

          'Roboto',


        ].join(','),
      },
    });


    this.updateLocalVariable = (name, data) => {
      let system = this.state.system;
      let localVariables = system.localVariables;

      localVariables[name] = data;
      system.localVariables = localVariables
      this.setState({
        system: system,

      });
    };

    let localVariables = {};
    let system = { socket: socket, localVariables: localVariables, updateLocalVariable: this.updateLocalVariable, enableProbe: true, styleGuideRedirect: true }
    this.state = {
      theme: theme,
      system: system,
      redirectToLoginPage: false,
      Authenticated: false,
      AuthenticationFailed: false,
    }
    this.handleConnect = this.handleConnect.bind(this);
    this.handleClientAuthorisation = this.handleClientAuthorisation.bind(this);
  }


  handleConnect() {
    console.log("soceket connected")
    let jwt = JSON.parse(localStorage.getItem('jwt'));
    if (jwt) {
      let socket = this.state.system.socket;
      socket.emit('AuthoriseClient', jwt);
    }
  }

  handleClientAuthorisation(msg) {
    this.setState({ 'Authorised': msg.successful, 'AuthorisationFailed': msg.successful !== true });
  }

  componentDidMount() {
    let jwt = JSON.parse(localStorage.getItem('jwt'));
    if (jwt) {
      this.setState({ 'redirectToLoginPage': false });
      let socket = this.state.system.socket;
      socket.on('connect', this.handleConnect);
      socket.on('clientAuthorisation', this.handleClientAuthorisation);
    }
  }

  componentWillUnmount() {
    console.log('unmounted')
    let socket = this.state.system.socket;
    socket.removeListener('connect', this.handleConnect);
    socket.removeListener('clientAuthorisation', this.handleClientAuthorisation);
  }

  render() {
    return (
      <AutomationStudioContext.Provider value={this.state.system}>
        <MuiThemeProvider theme={this.state.theme}>
          <CssBaseline />
          <Routes limitRoutes={false}>
            {/*<Routes limitRoutes={this.state.AuthenticationFailed}/>*/}
          </Routes>
        </MuiThemeProvider>
      </AutomationStudioContext.Provider>
    );
  }
}


export default App;
