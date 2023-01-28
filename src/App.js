import './App.css';
import React from 'react';
import Timetable from "./Components/Timetable.js"
import Container from "./Components/Container.js"
import AddEvent from "./Components/AddEvent.js"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: [],
      start: 0,
      end: 0,
      events: {1:[], 2:[], 3:[], 4:[], 5:[], "1c":[], "2c":[], "3c":[], "4c":[], "5c":[]}
    }
  }

  addEvent = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const start = parseInt(f.get("start"));
    const end = parseInt(f.get("end"));
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

    if (start < this.state.start || start > this.state.end || end > this.state.end || end < this.state.start || start > end) {
      alert("Event time out of bounds")
      return;
    }
    const events = {...this.state.events};
    for (const entry of f) {
      if (days.includes(entry[0])) {
        for (let i = start; i <= end; i++) {
          if (events[parseInt(entry[1])].includes(i)) {
            continue;
          }
          events[parseInt(entry[1])].push(i);
          events[`${entry[1]}c`].push(f.get("color"));
        }
      }
    }
    this.setState({
      events: events
    }, this.setHours)

    e.target.reset();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: parseInt(event.target.value)
    }, this.setHours)
  }

  setHours = () => {
    this.setState((state) => {
      const hours = [];
      for (let i = state.start; i <= state.end; i++) {

        //Create the children <td> tags
        const children = [];
        children.push(
          <td key={i} className="timeCell">{i.toString().padStart(2,"0")}00hrs</td>
        )
        

        //TODO fix the colour issue
        for (let j = 0; j < 5; j++) {
          children.push(
            <td id={`row${i}col${j+1}`} 
              key={`row ${i} col ${j+1}`} 
              style={ this.state.events[j+1] && this.state.events[j+1].includes(i) 
              ? {backgroundColor: this.state.events[`${j+1}c`][this.state.events[j+1].indexOf(i)]} : null}></td>
          )
        }

        //Create the tr with all the children td tags
        hours.push(
          <tr key={i} className="timeRow">
          {children}
          </tr>
        )
      }
      return {hours: hours};
    })
  }


  render() {
    return (
    <div className="App">
      <Timetable 
        handleChange = {this.handleChange.bind(this)}
        hours = {this.state.hours}
        start = {this.state.start}
        end = {this.state.end}
        events = {this.state.events}
      />
      <AddEvent
        addEvent = {this.addEvent.bind(this)}
        hours = {this.state.hours}
        start = {this.state.start}
        end = {this.state.end}
        events = {this.state.events}
      />
    </div>
    );
  }
}
