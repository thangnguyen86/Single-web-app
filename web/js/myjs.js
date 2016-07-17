$(document).ready(function () {

    //Login validation
    $("#loginForm").validate({
        focusCleanup: true,
        rules: {
            loginname: {
                required: true
            },
            loginpass: 'required',
        },
        messages: {
            loginname: {
                required: "Enter your username",
             
            },
            loginpass: 'Enter your password',
        },
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });


    //Register form validation
    $('#regForm').validate({
        focusCleanup: true,
        rules: {
            fname:'required',
            lname:'required',
            username:{
                required: true,
                minlength: 6,
            },
            passwordReg:{
                required: true,
                minlength:7,
                pwcheck: true,
                pwcheck2:true,             
            },
            confPass:{
                required: true,
                equalTo: '#passwordReg'
            },
            emailReg:{
                required: true,
                email:true
            },
        },
        messages: {
            fname: "Please input your first name",
            lname: "Please input your last name",
            username: {
                required: "Please provide valid username",
                minlength:"Username has at least 6 characters"
            },
            passwordReg: {
                required: "Please input your password",
                minlength: "Require at least 7 characters",
                pwcheck: "Password must has a number",
                pwcheck2: "Password must has an uppcase letter"
            },
            confPass: {
                required: "Please input your confirm password",
                equalTo: "Password did not match"
            },
            emailReg: {
                required: "Please input your email",
                email: "Please provide valid email"
            },
        },
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    $.validator.addMethod('pwcheck', function (value) {
        return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value)// consist of only these
                && /[\d]/.test(value) //has a digit
    });
    $.validator.addMethod('pwcheck2', function (value) {
        return /[A-Z]/.test(value) //has a uppercase letter

    });
    //Create map for contact page
  
});