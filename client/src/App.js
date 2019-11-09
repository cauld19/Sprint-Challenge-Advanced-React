import React from 'react';
import './App.css';

import PlayerList from "./components/PlayerList"

import Nav from "./components/Nav";
import Graph from "./components/graph"


class App extends React.Component {

  state = {
    data: [],
    chartData:[]
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(res => {
        const x = res;
        let chartData = [];
        x.forEach(element => {
          chartData.push({
            labels: [element.name],
            datasets: [{ label: "Player", data: [element.searches],  }]
          });
        });
        this.setState({ chartData, data: res });
      });
  }

  




  render() {
    return (
      <div>
        <div>
          <Nav />
          <PlayerList data={this.state.data}/>
          <Graph chartData={this.state.chartData}/>
        </div>
      </div>
    );
  }
}

export default App;
