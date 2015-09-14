import React from 'react'
import Component from './component.js'


const normal = {
    blue: '#509EE3',
    green: '#9CC177',
    purple: '#A989C5',
    red: '#EF8C8C',
    yellow: '#EF8C8C',
};

const saturated = {
    blue: '#2D86D4',
    green: '#84BB4C',
    purple: '#885AB1',
    red: '#ED6E6E',
    yellow: '#F9CF48',
};

const desaturated = {
    blue: '#72AFE5',
    green: '#A8C987',
    purple: '#B8A2CC',
    red: '#EEA5A5',
    yellow: '#F7D97B',
};

class App extends React.Component {
    render() {
        return (
          <div>
          <h3>Normal</h3>
          <Component colors={normal} />
          <h3>Saturated</h3>
          <Component colors={saturated} />
          <h3>Desaturated</h3>
          <Component colors={desaturated} />
          </div>
        )

    }
}

export default App
