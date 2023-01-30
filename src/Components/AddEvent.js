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
                    <input type="text" id="title" name="title" placeholder='Title'></input>
                    <br/>
                    <input type="text" id="start" name="start" placeholder='Start time'></input>
                    <br/>
                    <input type="text" id="end" name="end" placeholder='End time'></input>
                    <br/>
                    <input type="text" id="loc" name="loc" placeholder='Location'></input>
                    <br/>
                    <input type="text" id="rem" name="rem" placeholder='Remarks (Optional)'></input>
                    <br/>
                    <label>Tag colour </label>
                    <input type="color" id="color" name="color" defaultValue="#FFFFFF"></input>
                    <br/>
                    <input type='submit'/>
                    </form>
                </label>
            </div>
        )
    }
}

