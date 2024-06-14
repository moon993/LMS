document.addEventListener("DOMContentLoaded", function () {
    let loginbtn = document.querySelector("#loginbtn");
    let input = document.querySelector("#userid");
    let checkbox = document.querySelector("#checkbox");

    // Check if there are saved login credentials
    var savedUserid = $.cookie('userid');

    if (savedUserid) {
        input.value = savedUserid;
        checkbox.checked = true;
    }

    function check() {
        var userid = $("#userid").val();
        if (checkbox.checked) {
            $.cookie('userid', userid, { expires: 7 });
        } else {
            $.removeCookie('userid');
        }
    }

    // Call the check function when the login button is clicked
    loginbtn.addEventListener("click", function () {
        check();
        console.log("User ID: " + $("#userid").val());
    });
});
