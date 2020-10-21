if (sessionStorage.getItem('isLoggedIn')) {
    const profile1 = JSON.parse(sessionStorage.getItem('profile-1'));
    const profile2 = JSON.parse(sessionStorage.getItem('profile-2'));
    $('input[name="Full Name"]').val(profile1['Full Name']);
    $('input[name="Gender"]').val(profile2['Gender']);
    $('input[name="Height"]').val(profile2['Height']);
    $('input[name="Weight"]').val(profile2['Weight']);
    $('input[name="Status"]').val(profile2['Status']);
} else {
    window.alert('You are not logged in!');
    window.location = 'SignIn.html';
}