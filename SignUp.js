$('#next-button').click(() => {
    const data = $('form#Feedback').serializeArray();
    let profile1 = {};
    data.forEach(singleData => {
        profile1[singleData.name] = singleData.value;
    });

    sessionStorage.setItem('profile-1', JSON.stringify(profile1));

    window.location = 'SignUp2.html';
});

$('#signup-button').click(() => {
    const data = $('form#Feedback').serializeArray();
    let profile2 = {};
    data.forEach(singleData => {
        profile2[singleData.name] = singleData.value;
    });

    sessionStorage.setItem('profile-2', JSON.stringify(profile2));
    sessionStorage.removeItem('isLoggedIn');

    window.alert('Successfully registered');

    window.location = 'SignIn.html';
});