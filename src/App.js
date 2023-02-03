import './App.css';
import React from 'react';
import Timetable from "./Components/Timetable.js"
import AddEvent from "./Components/AddEvent.js"
import { Alert, Dialog, TableCell, TableRow, Typography } from '@mui/material';
import { cloneDeep } from 'lodash';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: [],
      start: 0,
      end: 0,
      openDialog: false,
      events: {"1":[], "2":[], "3":[],"4":[],"5":[]}
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
    
    this.setState(state => {
      if (start < state.start || start > state.end || end > state.end || end < state.start || start > end) {
        return {openDialog: true};
      }
      const hrs = cloneDeep(state.hours);
      for (const entry of f) {
        if (days.includes(entry[0])) {
          for (let i = start; i <= end; i++) {
            const temp = <TableCell key={`row${i-state.start}col${entry[1]}`} align="left" sx={{bgcolor: color}} rowSpan={width}>
            <Typography variant='h5'>{f.get("title")}</Typography>
              <Typography variant="body1">{f.get("loc")}</Typography>
              <Typography variant="body1">{f.get("rem")}</Typography>
            </TableCell>;
            if (i === start) {
              hrs[i-state.start].props.children.splice(parseInt(entry[1]), 1, temp);
              continue;
            }
            hrs[i-state.start].props.children = hrs[i-state.start].props.children.filter(r =>
              r.key !== `row${i}col${entry[1]}`
            )
            // console.log(`row${i}col${entry[1]}`)
            // console.log(hrs[i-state.start].props.children); 
          }
        }
      }
      return {hours: hrs};
    })
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
          <TableCell sx={{width:"7%"}} key={i} className="timeCell">{i.toString().padStart(2,"0")}00hrs</TableCell>
        )
        
        for (let j = 0; j < 5; j++) {
          children.push(
            <TableCell id={`row${i}col${j+1}`} key={`row${i}col${j+1}`}></TableCell>
          )
        }

        //Create the tr with all the children td tags
        hours.push(
          <TableRow key={i} className="timeRow">
          {children}
          </TableRow>
        )
      }
      return {hours: hours};
    })
  }

  closeDialog = () => {
    this.setState({
      openDialog: false
    })
  }


  render() {
    return (
    <div className="App">
      <Dialog open={this.state.openDialog} onClose={this.closeDialog}>
        <Alert variant='outlined' severity='error' onClose={this.closeDialog}>Time is out of bounds</Alert>
      </Dialog>
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
