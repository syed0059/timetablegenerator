import './App.css';
import React from 'react';
import Timetable from "./Components/Timetable.js"
import AddEvent from "./Components/AddEvent.js"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: [],
      start: 0,
      end: 0,
    }
  }

  addEvent = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const start = parseInt(f.get("start"));
    const end = parseInt(f.get("end"));
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    const width = end-start+1;
    const color = f.get("color");
    console.log(color);
    if (start < this.state.start || start > this.state.end || end > this.state.end || end < this.state.start || start > end) {
      alert("Event time out of bounds")
      return;
    }
    for (const entry of f) {
      console.log(entry);
      if (days.includes(entry[0])) {
        for (let i = start; i <= end; i++) {
          if (i === start) {
            const main = document.createElement("td");
            main.rowSpan = width;
            main.style.backgroundColor = color;

            const title = document.createElement("div");
            title.style.fontWeight = "bold";
            title.append(`${f.get("title")}`);
            main.append(title);

            main.append(document.createElement("br"));

            const loc = document.createElement('div');
            loc.append(`${f.get('loc')}`);
            main.append(loc);

            if (f.get("rem") !== "") {
              main.append(document.createElement("br"));
              const rem = document.createElement('div');
              rem.append(`${f.get("rem")}`);
              main.append(rem);
            }

            document.getElementById(`row${i}col${entry[1]}`).insertAdjacentElement("afterend", main);
          }
          document.getElementById(`row${i}col${entry[1]}`).remove();
        }
      }
    }
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
        
        for (let j = 0; j < 5; j++) {
          children.push(
            <td id={`row${i}col${j+1}`} key={`row ${i} col ${j+1}`}></td>
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
      />
      <AddEvent
        addEvent = {this.addEvent.bind(this)}
        hours = {this.state.hours}
        start = {this.state.start}
        end = {this.state.end}
      />
    </div>
    );
  }
}
