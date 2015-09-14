import React from 'react'
import { Harmonizer } from 'color-harmony'

class Component extends React.Component {
    constructor() {
      super();
      this.state = {
          scheme: 'analogous'
      };
    }
    genColors() {
        let colors = []
        let h = new Harmonizer;
        for(var key in this.props.colors) {
          colors.push(h.harmonizeAll(this.props.colors[key])[this.state.scheme])
        }
        return colors
    }

    setScheme(e) {
      console.log(e)
      this.setState({
          scheme: e.target.value

      })
    }

    genPicker() {
      let h = new Harmonizer;
      let harmony = h.harmonizeAll('#000')
      let options = []
      for(var key in harmony) {
          options.push(key)
      }
      return options
    }

    render() {
        return (
          <div style={{marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '20px'}}>
          <div style={{marginBottom: '50px'}}>
            <select value={this.state.scheme} onChange={(scheme) => this.setScheme(scheme)}>
              {
                this.genPicker().map((option, index) => {
                  return (<option key={index} value={option}>{option}</option>)
                })
              }
            </select>
            </div>
            <div>
            {this.genColors().map((carray) => {
              return carray.map((c) => {
                return (<div style={{width: '40px', height: '40px', backgroundColor: c.toString(), display: 'inline-block'}}></div>)
              })
            })}
            </div>
          </div>
      )
    }
}

export default Component
