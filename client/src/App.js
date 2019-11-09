import React from 'react';
import './App.css';

import PlayerList from "./components/PlayerList"

class App extends React.Component {

  state = {
    data: []
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(res => {
        console.log(
          "ca: App.js: App: componentDidMount: fetch: then: res: ",
          res
        );
        this.setState({
          data: res,
        });
      })
      .catch(err => {
        console.log(
          "bk: index.js: App: componentDidMount: fetch: catch: err: ",
          err
        );
      });
  }





  render() {
    return (
      <div>
        <PlayerList data={this.state.data}/>
      </div>
    );
  }
}

export default App;
