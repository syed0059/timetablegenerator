import { Button, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import { exportComponentAsJPEG } from 'react-component-export-image';

let days = []; 
["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].forEach(
  (day) => {
    days.push(
      <TableCell sx={{textAlign:"center"}} key={day} value={day} className="day">{day}</TableCell>
    )
  } 
);

const range = [];
    for (let i = 0; i <= 23; i += 0.5) {
      if (i - Math.floor(i) === 0.5) {
        range.push(
          <MenuItem key={i} value={i}>{Math.floor(i).toString().padStart(2,"0")}30Hrs</MenuItem>
        )
        continue;
      }
      range.push(
        <MenuItem key={i} value={i}>{i.toString().padStart(2,"0")}00Hrs</MenuItem>
      )
    }

export default class Timetable extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  render() {
    return(
      <div>
        <Typography variant='h1'>Time Table Generator</Typography>

        <div style={{display:"flex"}}>
          <FormControl>
            <InputLabel id="start_label_id">Start of day</InputLabel>
            <Select sx={{m:1.5}} onChange={this.props.handleChange} name="start" value={this.props.start} labelId="start_label_id" label="Start of day">
              {range}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="end_label_id">End of day</InputLabel>
            <Select sx={{m:1.5}} onChange={this.props.handleChange} name="end" value={this.props.end} labelId="end_label_id" label="End of day">
              {range}
            </Select>
          </FormControl>
        </div>

        <TableContainer ref={this.ref} component={Paper} sx={{ ml:"auto", mr:"auto"}}>
          <Table id="table" align="center">
            <TableHead id="thead">
              <TableRow>
                <TableCell sx={{textAlign:"center"}} key="time" className='day'>Time</TableCell>
                {days}
              </TableRow>
            </TableHead>

            <TableBody id="tbody">
              {this.props.hours}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant='contained' sx={{float:"right", m:1}} onClick={() => {exportComponentAsJPEG(this.ref, "timetable")}}>Export</Button>
      </div>
    );
  }
}