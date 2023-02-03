import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, FormGroup, TextField } from '@mui/material';
import React from 'react';
import { exportComponentAsJPEG } from 'react-component-export-image';

export default class AddEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };
    }

    openModal = () => {
        this.setState({
            modal: true
        })
    }
    closeModal = () => {
        this.setState({
            modal: false
        })
    }
    render() {
        return (
            <div>
            <Box component="span" m={1} display="flex" justifyContent="space-between" alignItems="center">
                <Button sx={{m:1}} variant="contained" onClick={this.openModal}>Add events</Button>
                {/* Need fix */}
                <Button sx={{m:1}} variant="contained">Export timetable</Button>
            </Box>
                <Dialog open={this.state.modal} onClose={this.closeModal}>
                    <form onSubmit={this.props.addEvent} autoComplete="off">
                        <DialogTitle>Add events to timetable</DialogTitle>
                            <DialogContent>
                                <FormGroup row={true}>
                                    <FormControlLabel value="1" control={<Checkbox value="1" name="Mon"/>} label="Mon" labelPlacement='top'/>
                                    <FormControlLabel value="2" control={<Checkbox value="2" name="Tue"/>} label="Tue" labelPlacement='top'/>
                                    <FormControlLabel value="3" control={<Checkbox value="3" name="Wed"/>} label="Wed" labelPlacement='top'/>
                                    <FormControlLabel value="4" control={<Checkbox value="4" name="Thu"/>} label="Thu" labelPlacement='top'/>
                                    <FormControlLabel value="5" control={<Checkbox value="5" name="Fri"/>} label="Fri" labelPlacement='top'/>
                                </FormGroup><br/>

                                <FormGroup row={false} sx={{"& .MuiTextField-root":{my:0.5}}}>
                                    <TextField variant="outlined" id="title" name="title" label='Title'/>
                                    <TextField variant="outlined" id="start" name="start" label='Start time'/>
                                    <TextField variant="outlined" id="end" name="end" label='End time'/>
                                    <TextField variant="outlined" id="loc" name="loc" label='Location'/>
                                    <TextField variant="outlined" id="rem" name="rem" label='Remarks (Optional)'/>
                                    <input style={{backgroundColor:"rgba(255, 255, 255, 0.12)"}} type="color" id="color" name="color" defaultValue="#FFFFFF"></input>
                                </FormGroup>
                        </DialogContent>
                        <DialogActions>
                            <Button type='submit' onClick={this.closeModal} variant="contained">Add</Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        )
    }
}

