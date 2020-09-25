import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if(selectedDate2.getFullYear() < selectedDate.getFullYear()){
        alert("Not Valid");
    }
    else if(selectedDate2.getMonth() < selectedDate.getMonth()){
        alert("Not Valid");
    }
    else if(selectedDate2.getDate() < selectedDate.getDate()){
        alert("Not Valid");
    }
  };
  const [selectedDate2, setSelectedDate2] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange2 = (date) => {
      console.log(setSelectedDate)
      console.log(typeof(selectedDate2.getDate()))
    setSelectedDate2(date);
    if(selectedDate2.getFullYear() < selectedDate.getFullYear()){
        alert("Not Valid");
    }
    else if(selectedDate2.getMonth() < selectedDate.getMonth()){
        alert("Not Valid");
    }
    else if(selectedDate2.getDate() < selectedDate.getDate()){
        alert("Not Valid");
    }
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          style={{width: "40%"}}
          margin="normal"
          id="date-picker-dialog"
          label="From"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="To"
          style={{width: "40%", float:"right"}}
          format="MM/dd/yyyy"
          value={selectedDate2}
          onChange={handleDateChange2}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}