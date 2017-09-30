$(function () {
    var APP_ID = 'j5Tf2NDHk8XHfCFMn94eQyGb-gzGzoHsz';
    var APP_KEY = 'IrqsopdH9J2lb3As3rqQaqTw';

    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });

    // 注册功能
    let signUpForm = document.querySelector('form[name=sign-up]')
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault()

        // 新建 AVUser 对象实例
        var user = new AV.User();
        // 设置用户名
        user.setUsername(signUpForm.username.value);
        // 设置密码
        user.setPassword(signUpForm.password.value);
        // 设置邮箱
        user.setEmail(signUpForm.email.value);
        user.signUp().then(function (loginedUser) {
            console.log(loginedUser);
            window.location.reload();
            alert("注册成功");
        }, function (error) {
            console.log(error)
        });
    })

    // 登录功能
    let logInForm = document.querySelector('form[name=log-in]');
    console.log(logInForm);
    logInForm.addEventListener('submit', (event) => {
        event.preventDefault();
        var username = logInForm.username.value;
        var password = logInForm.password.value;
        AV.User.logIn(username, password).then(function (loginedUser) {
            console.log(loginedUser);
            window.location.reload();
            alert("登录成功");
        }, function (error) {
            console.log(error);
            switch (error.code) {
                case 210:
                    alert("密码错误");
                case 211:
                    alert("用户名不存在");
            }
        });
    })


    $(".create").click(function () {
        console.log("click")
        $(".log-in").addClass("disabled")
        $(".create").addClass("disabled")
        $(".sign-up").removeClass("disabled")
    })
    $(".login").click(function () {
        console.log("click")
        $(".log-in").removeClass("disabled")
        $(".create").removeClass("disabled")
        $(".sign-up").addClass("disabled")
    })
})