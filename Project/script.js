document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            var username = document.getElementById('username').value;
            var profilePhoto = document.getElementById('profile-photo').files[0];

   
            var reader = new FileReader();
            reader.onloadend = function() {
                localStorage.setItem('username', username);
                localStorage.setItem('profilePhoto', reader.result);
                window.location.href = 'index.html';
            }
            reader.readAsDataURL(profilePhoto);
        });
    }

    
    var profileName = document.getElementById('profile-name');
    var profileImage = document.getElementById('profile-image');
    if (profileName && profileImage) {
        var username = localStorage.getItem('username');
        var profilePhoto = localStorage.getItem('profilePhoto');
        if (username) {
            profileName.textContent = username;
        }
        if (profilePhoto) {
            profileImage.src = profilePhoto;
        }
    }
});