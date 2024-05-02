document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('task-1-button-1').addEventListener('click', function () {
        const user = {
            name: 'Mango',
            age: 20,
            hobby: 'html',
            premium: true,
        };
        const updateUserInfo = function (user) {
            user.hobby = 'skydiving';
            user.premium = false;
            user.mood = 'happy';
            for (const [key, value] of Object.entries(user)) {
                alert(`${key}: ${value}`);
            }

        };
        updateUserInfo(user);
    });
});