import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Grid,
  Container,
} from '@mui/material';

const EventForm = () => {
  const [eventType, setEventType] = useState('');
  const [eventDetails, setEventDetails] = useState('');
  const [blessingType, setBlessingType] = useState('');

  const handleEventTypeChange = (e) => {
    setEventType(e.target.value);
    setEventDetails('');
  };

  const handleEventDetailsChange = (e) => {
    setEventDetails(e.target.value);
  };

  const handleBlessingTypeChange = (e) => {
    setBlessingType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data (e.g., send it to a server)
    console.log('Form submitted:', { eventType, eventDetails, blessingType });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="eventTypeLabel">Select type of event</InputLabel>
              <Select
                labelId="eventTypeLabel"
                id="eventType"
                value={eventType}
                label="Select type of event"
                onChange={handleEventTypeChange}
                required
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="birthday">Birthday</MenuItem>
                <MenuItem value="marriage">Marriage</MenuItem>
                <MenuItem value="barMitzvah">Bar Mitzvah</MenuItem>
                <MenuItem value="batMitzvah">Bat Mitzvah</MenuItem>
                <MenuItem value="weddingAnniversary">Wedding Anniversary</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {eventType === 'birthday' && (
            <Grid item xs={12} sm={6}>
              <TextField
                label="Choose an age"
                type="number"
                fullWidth
                value={eventDetails}
                onChange={handleEventDetailsChange}
                required
              />
            </Grid>
          )}

          {['marriage', 'barMitzvah', 'batMitzvah'].includes(eventType) && (
            <Grid item xs={12} sm={6}>
              <TextField
                label="Select the date"
                type="date"
                fullWidth
                value={eventDetails}
                onChange={handleEventDetailsChange}
                required
              />
            </Grid>
          )}

          {eventType === 'weddingAnniversary' && (
            <Grid item xs={12} sm={6}>
              <TextField
                label="Choose number of years of marriage"
                type="number"
                fullWidth
                value={eventDetails}
                onChange={handleEventDetailsChange}
                required
              />
            </Grid>
          )}

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="blessingTypeLabel">Select type of blessing</InputLabel>
              <Select
                labelId="blessingTypeLabel"
                id="blessingType"
                value={blessingType}
                label="Select type of blessing"
                onChange={handleBlessingTypeChange}
                required
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="entertaining">Entertaining</MenuItem>
                <MenuItem value="serious">Serious</MenuItem>
                <MenuItem value="romantic">Romantic</MenuItem>
                <MenuItem value="liver">Liver</MenuItem>
                <MenuItem value="official">Official</MenuItem>
                <MenuItem value="myFriend">My Friend</MenuItem>
                <MenuItem value="sisterhood">Sisterhood</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="secondary" // Use a Material-UI color for secondary (e.g., red)
              style={{ backgroundColor: '#ff3366' }} // Heart color
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default EventForm;
