import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './Plants.scss';


import React from 'react'

const Chart = ({ weatherData }) => {
  const data = [
    {name: 'Jan1', high: weatherData.jan.janMax[0], low: weatherData.jan.janMin[0], mm: weatherData.jan.janMM},
    {name: '', high: weatherData.jan.janMax[1], low: weatherData.jan.janMin[1], mm: weatherData.jan.janMM},
    {name: '', high: weatherData.jan.janMax[2], low: weatherData.jan.janMin[2], mm: weatherData.jan.janMM},
    {name: '', high: weatherData.jan.janMax[3], low: weatherData.jan.janMin[3], mm: weatherData.jan.janMM},
    {name: 'Feb1', high: weatherData.feb.febMax[0], low: weatherData.feb.febMin[0], mm: weatherData.feb.febMM},
    {name: '', high: weatherData.feb.febMax[1], low: weatherData.feb.febMin[1], mm: weatherData.feb.febMM},
    {name: '', high: weatherData.feb.febMax[2], low: weatherData.feb.febMin[2], mm: weatherData.feb.febMM},
    {name: '', high: weatherData.feb.febMax[3], low: weatherData.feb.febMin[3], mm: weatherData.feb.febMM},
    {name: 'Mar1', high: weatherData.mar.marMax[0], low: weatherData.mar.marMin[0], mm: weatherData.mar.marMM},
    {name: '', high: weatherData.mar.marMax[1], low: weatherData.mar.marMin[1], mm: weatherData.mar.marMM},
    {name: '', high: weatherData.mar.marMax[2], low: weatherData.mar.marMin[2], mm: weatherData.mar.marMM},
    {name: '', high: weatherData.mar.marMax[3], low: weatherData.mar.marMin[3], mm: weatherData.mar.marMM},
    {name: 'Apr1', high: weatherData.apr.aprMax[0], low: weatherData.apr.aprMin[0], mm: weatherData.apr.aprMM},
    {name: '', high: weatherData.apr.aprMax[1], low: weatherData.apr.aprMin[1], mm: weatherData.apr.aprMM},
    {name: '', high: weatherData.apr.aprMax[2], low: weatherData.apr.aprMin[2], mm: weatherData.apr.aprMM},
    {name: '', high: weatherData.apr.aprMax[3], low: weatherData.apr.aprMin[3], mm: weatherData.apr.aprMM},
    {name: 'May1', high: weatherData.may.mayMax[0], low: weatherData.may.mayMin[0], mm: weatherData.may.mayMM},
    {name: '', high: weatherData.may.mayMax[1], low: weatherData.may.mayMin[1], mm: weatherData.may.mayMM},
    {name: '', high: weatherData.may.mayMax[2], low: weatherData.may.mayMin[2], mm: weatherData.may.mayMM},
    {name: '', high: weatherData.may.mayMax[3], low: weatherData.may.mayMin[3], mm: weatherData.may.mayMM},
    {name: 'Jun1', high: weatherData.jun.junMax[0], low: weatherData.jun.junMin[0], mm: weatherData.jun.junMM},
    {name: '', high: weatherData.jun.junMax[1], low: weatherData.jun.junMin[1], mm: weatherData.jun.junMM},
    {name: '', high: weatherData.jun.junMax[2], low: weatherData.jun.junMin[2], mm: weatherData.jun.junMM},
    {name: '', high: weatherData.jun.junMax[3], low: weatherData.jun.junMin[3], mm: weatherData.jun.junMM},
    {name: 'Jul1', high: weatherData.jul.julMax[0], low: weatherData.jul.julMin[0], mm: weatherData.jul.julMM},
    {name: '', high: weatherData.jul.julMax[1], low: weatherData.jul.julMin[1], mm: weatherData.jul.julMM},
    {name: '', high: weatherData.jul.julMax[2], low: weatherData.jul.julMin[2], mm: weatherData.jul.julMM},
    {name: '', high: weatherData.jul.julMax[3], low: weatherData.jul.julMin[3], mm: weatherData.jul.julMM},
    {name: 'Aug1', high: weatherData.aug.augMax[0], low: weatherData.aug.augMin[0], mm: weatherData.aug.augMM},
    {name: '', high: weatherData.aug.augMax[1], low: weatherData.aug.augMin[1], mm: weatherData.aug.augMM},
    {name: '', high: weatherData.aug.augMax[2], low: weatherData.aug.augMin[2], mm: weatherData.aug.augMM},
    {name: '', high: weatherData.aug.augMax[3], low: weatherData.aug.augMin[3], mm: weatherData.aug.augMM},
    {name: 'Sep1', high: weatherData.sep.sepMax[0], low: weatherData.sep.sepMin[0], mm: weatherData.sep.sepMM},
    {name: '', high: weatherData.sep.sepMax[1], low: weatherData.sep.sepMin[1], mm: weatherData.sep.sepMM},
    {name: '', high: weatherData.sep.sepMax[2], low: weatherData.sep.sepMin[2], mm: weatherData.sep.sepMM},
    {name: '', high: weatherData.sep.sepMax[3], low: weatherData.sep.sepMin[3], mm: weatherData.sep.sepMM},
    {name: 'Oct1', high: weatherData.oct.octMax[0], low: weatherData.oct.octMin[0], mm: weatherData.oct.octMM},
    {name: '', high: weatherData.oct.octMax[1], low: weatherData.oct.octMin[1], mm: weatherData.oct.octMM},
    {name: '', high: weatherData.oct.octMax[2], low: weatherData.oct.octMin[2], mm: weatherData.oct.octMM},
    {name: '', high: weatherData.oct.octMax[3], low: weatherData.oct.octMin[3], mm: weatherData.oct.octMM},
    {name: 'Nov1', high: weatherData.nov.novMax[0], low: weatherData.nov.novMin[0], mm: weatherData.nov.novMM},
    {name: '', high: weatherData.nov.novMax[1], low: weatherData.nov.novMin[1], mm: weatherData.nov.novMM},
    {name: '', high: weatherData.nov.novMax[2], low: weatherData.nov.novMin[2], mm: weatherData.nov.novMM},
    {name: '', high: weatherData.nov.novMax[3], low: weatherData.nov.novMin[3], mm: weatherData.nov.novMM},
    {name: 'Dec1', high: weatherData.dec.decMax[0], low: weatherData.dec.decMin[0], mm: weatherData.dec.decMM},
    {name: '', high: weatherData.dec.decMax[1], low: weatherData.dec.decMin[1], mm: weatherData.dec.decMM},
    {name: '', high: weatherData.dec.decMax[2], low: weatherData.dec.decMin[2], mm: weatherData.dec.decMM},
    {name: '', high: weatherData.dec.decMax[3], low: weatherData.dec.decMin[3], mm: weatherData.dec.decMM},
];


  return (
    <div className="chartContainer">
      <ResponsiveContainer >
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="high" stroke="#8884d8" />
          <Line type="monotone" dataKey="low" stroke="#8884d8" />
          <Line type="monotone" dataKey="mm" stroke="#74d7" />

          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
   

  )
}

export default Chart

