import React from 'react';

const ItineraryList = ({ itineraries }) => {
    return (
        <div>
            <h2>Itinerary</h2>
            <ul>
                {itineraries.map((item, index) => (
                    <li key={index}>
                        <strong>Activity:</strong> {item.activity} <br />
                        <strong>Date:</strong> {item.date.toLocaleDateString()} <br />
                        <strong>Time:</strong> {item.time} <br />
                        <strong>Location:</strong> {item.location} <br />
                        <strong>Notes:</strong> {item.notes}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItineraryList;
