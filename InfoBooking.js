$(document).ready(() => {
    const bookingData = JSON.parse(sessionStorage.getItem('booking-data'));
    if (bookingData.purpose && bookingData.polyclinic && bookingData.doctor && bookingData.date && bookingData.time) {
        $('#doctor').val(bookingData.doctor);
        $('#purpose').val(bookingData.purpose);
        $('#polyclinic').val(bookingData.polyclinic);

        const date = new Date(bookingData.date);
        let time = '';
        time += date.getDate() + '/';
        time += date.getMonth() + 1 + '/';
        time += date.getFullYear() + ', ';
        time += bookingData.time;
        $('#time').val(time);
    } else {
        window.location = 'Booking.html';
    }
});

$('#confirm-button').click(() => {
    sessionStorage.removeItem('booking-data');
    window.location = 'Queue.html'
});