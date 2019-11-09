import React, {useState, useEffect} from 'react';
import {Bar, Line} from 'react-chartjs-2';




const Graph = props => {

    const [countData, setCountData] = useState({})

    useEffect(  () => {

        setCountData({
            data: {
                labels: [props.chartData.labels],
                datasets: [
                    {
                        label: props.chartData.label,
                        backgroundColor: "rgba(225, 0, 225, 0.75)",
                        data: props.chartData.map(el => [el.datasets.data])
                    },
                    
                ]
            },
        });
        
        
        }, [])


    console.log(props.chartData)


        return(
            // <div className="graph-styling" style={{ position: "relative", width: 450, height: 450}}>
            //     {props.chartData.map((n, index) => {
            //         return <Bar 
            //                     key={index} 
            //                     data={n} 
            //                     options={{
            //                         responsive: true,
            //                         scales: {
            //                             yAxes: [{
            //                                 ticks: {
            //                                   beginAtZero: true,
            //                                   min: 0,
            //                                   max: 100,
            //                                   stepSize: 1
            //                               }
            //                           }]
            //                       }
            
            //                     }}
            //                 />;
            //     })}
            // </div>
            <div className="graph-styling" style={{ position: "relative", width: 450, height: 450}}>
                <h3 style={{ textAlign: "center"}}>ScoreBoard</h3>
                <Line
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
                    data={countData.data}
                    />
            </div>
        )
}

export default Graph;