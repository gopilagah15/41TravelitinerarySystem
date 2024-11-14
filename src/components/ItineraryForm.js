import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ItineraryForm = ({ addItinerary }) => {
    const [activity, setActivity] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addItinerary({ activity, date, time, location, notes });
        setActivity('');
        setDate(new Date());
        setTime('');
        setLocation('');
        setNotes('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Activity:</label>
                <input type="text" value={activity} onChange={(e) => setActivity(e.target.value)} required />
            </div>
            <div>
                <label>Date:</label>
                <DatePicker selected={date} onChange={(date) => setDate(date)} />
            </div>
            <div>
                <label>Time:</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
            <div>
                <label>Location:</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div>
                <label>Notes:</label>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
            </div>
            <button type="submit">Add Activity</button>
        </form>
    );
};

export default ItineraryForm;
