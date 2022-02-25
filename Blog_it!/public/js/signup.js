$(document).ready(
     () => {
        $('#signupForm').submit(
            () => {
                var fname = $('input[id="fname"]').val();
                var lname = $('input[id="lname"]').val();
                var email = $('input[id="email3"]').val();
                var password = $('input[id="password3"]').val();
                var confpassword = $('input[id="cpassword3"]').val();

                if (fname == '' || lname == '' || email == '' || password == '' || confpassword == '') {
                    alert("All Fields are Required!!!");
                    console.log("blank form please fill...")
                }
                else {
                    if (password == confpassword && password != "") {
                        $.ajax ({
                            url: " http://localhost:3000/users",
                            method: "POST",
                            data: {
                                "name": fname,
                                "email": email,
                                "password": password,
                            },
                            // data: users,
                            dataType: "json",
                            success: (x) => {

                                window.location = "../index.html";
                                alert("Hi "+ name + ", Thanks for registering Blogspot !!!");
                                console.log(x);

                            },
                            error: (err) => {
                                alert("Error: " + err);
                            }
                        });
                    }
                    else {
                        alert("Password does not match !!!");
                    }
                }
            }

        )

    })

    $(document).ready(
        () => {
           $('#signupForm_home').submit(
               () => {
                   var fname = $('input[id="fname"]').val();
                   var lname = $('input[id="lname"]').val();
                   var email = $('input[id="email3"]').val();
                   var password = $('input[id="password3"]').val();
                   var confpassword = $('input[id="cpassword3"]').val();
   
                   if (fname == '' || lname == '' || email == '' || password == '' || confpassword == '') {
                       alert("All Fields are Required!!!");
                       console.log("blank form please fill...")
                   }
                   else {
                       if (password == confpassword && password != "") {
                           $.ajax ({
                               url: " http://localhost:3000/users",
                               method: "POST",
                               data: {
                                   "name": fname,
                                   "email": email,
                                   "password": password,
                               },
                               // data: users,
                               dataType: "json",
                               success: (x) => {
   
                                   window.location = "../index.html";
                                   alert("Hi "+ name + ", Thanks for registering Blogspot !!!");
                                   console.log(x);
   
                               },
                               error: (err) => {
                                   alert("Error: " + err);
                               }
                           });
                       }
                       else {
                           alert("Password does not match !!!");
                       }
                   }
               }
   
           )
   
       })