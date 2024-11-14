import React, { useState } from 'react'; 
import { savePDF } from './components/savePDF';
import ItineraryList from './components/ItineraryList';
import ItineraryForm from './components/ItineraryForm';
const App = () => {
    const [itineraries, setItineraries] = useState([]);

    const addItinerary = (itinerary) => {
        setItineraries([...itineraries, itinerary]);
    };

    return (
        <div>
            <h1>Travel Itinerary Planner</h1>
            <ItineraryForm addItinerary={addItinerary} />
            <ItineraryList itineraries={itineraries} />
            <button onClick={() => savePDF(itineraries)}>Download PDF</button>
        </div>
    );
};

export default App;
