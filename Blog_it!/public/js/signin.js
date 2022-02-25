
$(document).ready(
  () => {
    $("#signinForm").submit(
      () => {

        var email = $('input[id="email1"]').val();
        var password = $('input[id="password1"]').val();

        if (email == "" || password == "") {
          alert("Email & Password Required!!!");
          console.log("blank form please fill...")
        }
        else {

          $.ajax({
            url: " http://localhost:3000/users",
            method: "GET",
            data: {
              email: email,
              password: password,
            },
            dataType: "json",
            success: (x) => {
              for (i = 0; i < x.length; i++) {
                if (email == x[i].email && password == x[i].password) {
                  alert(email + " Logged In !!!");
                  window.location = "/html/profile.html";
                  console.log(x);
                }
                else {
                  alert("Wrong Username or password");
                  console.log("Wrong Username or password");
                }
              }
            },
            error: (err) => {
              alert("Error: " + err);

            },
          });
        }
      });
  });
