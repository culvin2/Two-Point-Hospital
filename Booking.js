const polyclinic = {
    "General Polyclinic": [
        "dr. Akbar Kurniawan, M.Kes",
        "dr. Mary Soen"
    ],
    "Dental Polyclinic": [
        "drg. Amelia Tandjung Sp.KG",
        "drg. M. Aditya Syahputra, Sp.KG"
    ],
    "Midwifery Polyclinic": [
        "ROBYANTO, dr ,Sp.OG",
        "DIAN INDAHWATI, SpOG"
    ],
    "Physiotherapy Polyclinic": [
        "Opifia Dian Wahyono, Sst.FT",
        "Agustin Setyawati, S.Tr.ST"
    ],
    "Laboratory": [
        // Masukin dokter baru di sini
    ]
};

$(document).ready(() => {
    if (sessionStorage.getItem('isLoggedIn')) {
        $('#select-poli').html('<option selected disabled hidden>Choose...</option>')
        for (let poli in polyclinic) {
            $('#select-poli').append('<option value="' + poli + '">' + poli + '</option>')
        }
    } else if (sessionStorage.getItem('profile-1') && sessionStorage.getItem('profile-2')) {
        window.alert('You are not logged in, please log in first');
        window.location = 'SignIn.html';
    } else {
        window.alert('You are not registered, please register first');
        window.location = 'SignUp.html';
    }
});

$('#select-poli').change(() => {
    const poli = $('#select-poli').val();
    const doctors = polyclinic[poli];

    $('#select-doctor').html('<option selected disabled hidden>Choose...</option>')
    doctors.forEach(doctor => {
        $('#select-doctor').append('<option value="' + doctor + '">' + doctor + '</option>')
    });
});

$('#booking-button').click(() => {
    const form = $('form#booking-form').serializeArray();
    let bookingData = {};

    form.forEach(data => {
        bookingData[data.name] = data.value;
    });

    sessionStorage.setItem('booking-data', JSON.stringify(bookingData));
    window.location = 'InfoBooking.html';
});