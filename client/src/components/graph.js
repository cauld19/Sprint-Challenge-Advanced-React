import React, {useState, useEffect} from 'react';
import {Bar, Line} from 'react-chartjs-2';




const Graph = props => {

    // const [countData, setCountData] = useState({})

    console.log(props.chartData)


        return(
            <div className="graph-styling" style={{ position: "relative", width: 450, height: 450}}>
                {props.chartData.map((n, index) => {
                    return <Bar 
                                key={index} 
                                data={n} 
                                options={{
                                    responsive: true,
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                              beginAtZero: true,
                                              min: 0,
                                              max: 100,
                                              stepSize: 1
                                          }
                                      }]
                                  }
            
                                }}
                            />;
                })}
            </div>
        )
}

export default Graph;