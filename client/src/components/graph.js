import React, {useState, useEffect} from 'react';
import {Bar, Line} from 'react-chartjs-2';

const Graph = props => {

    const [countData, setCountData] = useState({})

    console.log(props.labelData)



    useEffect(  () => {

        setCountData({
            data: {
                labels: props.labelData,
                datasets: [
                    {
                        label: "Player searches",
                        data: props.searchesData,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 0.2)'
                    },
                ]
            },
        });
        
        
        }, [props.searchesData, props.labelData])



        return(
            <div>
                <div className="graph-styling" >
                    <h3 style={{ textAlign: "center"}}>Data</h3>
                    <Line
                        options={{
                            responsive: true,
                            scales: {
                                yAxes: [{
                                    scaleLabel: {
                                    display: true,
                                    labelString: '# of searches'
                                }
                            }],
                            xAxes: [{
                                    scaleLabel: {
                                    display: true,
                                    labelString: 'Player name'
                                }
                            }],
                        }

                        }}
                        data={countData.data}
                        />
                </div>
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
            </div>
            
        )
}


export default Graph;