import React, {useState, useEffect} from 'react';
import {Bar, Line} from 'react-chartjs-2';




const Graph = props => {

    // const [countData, setCountData] = useState({})

    console.log(props.chartData)


        return(
            <div className="chart">
                {props.chartData.map((n, index) => {
                    return <Bar key={index} data={n} />;
                })}
            </div>
        )
}

export default Graph;