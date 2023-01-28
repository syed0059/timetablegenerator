import React from 'react';


let days = []; 
["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].forEach(
  (day) => {
    days.push(
      <th key={day} value={day} className="day">{day}</th>
    )
  } 
);

const range = [];
    for (let i = 0; i <= 23; i++) {
      range.push(
        <option key={i} value={i}>{i.toString().padStart(2,"0")}00Hrs</option>
      )
    }

export default class Timetable extends React.Component {

  render() {
    return(
      <div>
        <h1>Time Table</h1>

        <label>
          Start of day:&nbsp;
          <select onChange={this.props.handleChange} name="start" value={this.props.start}>
            {range}
          </select>
        </label>
        <br/>
        <label>
          End of day:&nbsp;
          <select onChange={this.props.handleChange} name="end" value={this.props.end}>
            {range}
          </select>
        </label>


        <table id='table'>
          <thead id="thead">
            <tr>
              <th key="time" className='day'>Time</th>
              {days}
            </tr>
          </thead>

          <tbody id="tbody">
            {this.props.hours}
          </tbody>
        </table>
      </div>
    );
  }
}