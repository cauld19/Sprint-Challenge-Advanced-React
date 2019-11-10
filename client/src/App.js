import React from 'react';
import './App.css';

import PlayerList from "./components/PlayerList"

import Nav from "./components/Nav";
import Graph from "./components/graph"


class App extends React.Component {

  state = {
    data: [],
    chartData:[],
    labelData: [],
    searchesData: []
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(res => {
        const x = res;
        
        let chartData = [];
        let labelData = [];
        let searchesData = [];
        x.forEach(element => {
          chartData.push({
            labels: [element.name],
            datasets: [{ label: "Player", data: [element.searches],  }]
          });
          labelData.push(element.name)
          searchesData.push(element.searches)
        });
        this.setState({ chartData, labelData, searchesData, data: res });
      });
  }

  
  yAxisSearch = () => {
    this.state.searchesData.forEach(el => el += 10)
  }



  render() {
    return (
      <div>
        <div>
          <Nav />
          <PlayerList data={this.state.data}/>
          <Graph chartData={this.state.chartData} labelData={this.state.labelData} searchesData={this.state.searchesData}/>
        </div>
      </div>
    );
  }
}

export default App;
