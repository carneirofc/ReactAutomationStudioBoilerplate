
console.log('process.env', process.env);
let port;
if (typeof process.env.REACT_APP_PyEpicsServerPORT === 'undefined') {
  port = 5000;
} else {
  port = process.env.REACT_APP_PyEpicsServerPORT;
}

let pvServerBASEURL;
if (typeof process.env.REACT_APP_PyEpicsServerBASEURL === 'undefined') {
  pvServerBASEURL = "http://127.0.0.1";
} else {
  pvServerBASEURL = process.env.REACT_APP_PyEpicsServerBASEURL;
}

let pvServerNamespace;
if (typeof process.env.REACT_APP_PyEpicsServerNamespace === 'undefined') {
  pvServerNamespace = "pvServer";
} else {
  pvServerNamespace = process.env.REACT_APP_PyEpicsServerNamespace;
}

let PyEpicsServerURL = pvServerBASEURL + ":" + port + "/" + pvServerNamespace;
export {PyEpicsServerURL};
