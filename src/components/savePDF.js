import jsPDF from 'jspdf';

export const savePDF = (itineraries) => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("Travel Itinerary", 10, 10);

    itineraries.forEach((item, index) => {
        doc.text(`Activity: ${item.activity}`, 10, 20 + index * 10);
        doc.text(`Date: ${item.date.toLocaleDateString()}`, 10, 25 + index * 10);
        doc.text(`Time: ${item.time}`, 10, 30 + index * 10);
        doc.text(`Location: ${item.location}`, 10, 35 + index * 10);
        doc.text(`Notes: ${item.notes}`, 10, 40 + index * 10);
    });

    doc.save("itinerary.pdf");
};
