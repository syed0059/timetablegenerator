import React from 'react';

export default class AddEvent extends React.Component {

    render() {
        return (
            <div>
                <label>
                Add events to timetable
                    <form onSubmit={this.props.addEvent} autoComplete="off">
                    <label>
                    Mon <input type="checkbox" id="Mon" name="Mon" value="1"/>
                    </label>
                    <label>
                    Tue <input type="checkbox" id="Tue" name="Tue" value="2"/>
                    </label>
                    <label>
                    Wed <input type="checkbox" id="Wed" name="Wed" value="3"/>
                    </label>
                    <label>
                    Thu <input type="checkbox" id="Thu" name="Thu" value="4"/>
                    </label>
                    <label>
                    Fri <input type="checkbox" id="Fri" name="Fri" value="5"/>
                    </label><br/>
                    <label>
                    Start time <input type="text" id="start" name="start"></input>
                    </label><br/>
                    <label>
                    End time <input type="text" id="end" name="end"></input>
                    </label>
                    <label>
                    Tag colour <input type="color" id="color" name="color"></input>
                    </label>
                    <br/>
                    <input type='submit'/>
                    </form>
                </label>
            </div>
        )
    }
}

