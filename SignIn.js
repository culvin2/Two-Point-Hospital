$.notifyDefaults({
    element: "body",
    allow_dismiss: true,
    placement: {
        from: "top",
        align: "center"
    },
    z_index: 3000,
    delay: 5000,
    animate: {
        enter: 'animate__fadeInDown',
        exit: 'animate__fadeOutUp'
    },
    template: `
        <div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} animate__animated animate__faster" role="alert">
            <button type="button" aria-hidden="true" class="close" data-notify="dismiss">x</button>
            <span data-notify="icon"></span>
            <span data-notify="title">{1}</span>
            <span data-notify="message">{2}</span>
            <div class="progress" data-notify="progressbar">
                <div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
            </div>
        </div>`
});

$('#signin-button').click(() => {
    const profile = JSON.parse(sessionStorage.getItem('profile-1'));
    console.log(profile);

    const inputEmail = $('input[name="email"]').val();
    const inputPassword = $('input[name="password"]').val();

    if (profile.Email == inputEmail) {
        if (profile.Password == inputPassword) {
            sessionStorage.setItem('isLoggedIn', true);
            window.alert('Successfully logged in');
            window.location = 'Main.html';
        } else {
            $.notify({
                title: 'Wrong password',
                message: ''
            }, {
                type: 'danger'
            });
        }
    } else {
        $.notify({
            title: 'Email is not registered',
            message: ''
        }, {
            type: 'danger'
        });
    }

});