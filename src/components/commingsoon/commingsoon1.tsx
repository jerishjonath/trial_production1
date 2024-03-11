import $ from 'jquery'; // Import jQuery

// Copy your JavaScript code here
$(function () {
  var ntf_btn = $("#ntf-btn"),
    ntf_area = $("#ntf-area"),
    ntf_form_cover = $("#ntf-form-cover"),
    submit_btn = $("#submit-btn"),
    email_inp = $("#email-inp"),
    f_msg = $("#f-msg");

  function isValidEmail() {
    var email = email_inp.val().trim();
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  function checkEmail() {
    if (isValidEmail()) {
      submit_btn.addClass("valid");
      submit_btn.removeAttr("disabled");
    } else {
      submit_btn.removeClass("valid");
      submit_btn.attr("disabled", "disabled");
    }
  }

  function resetForm() {
    email_inp.removeAttr("class");
    email_inp.val("_");
    email_inp.val("");
    submit_btn.removeAttr("class");
    submit_btn.attr("disabled", "disabled");
    f_msg.removeAttr("class");

    email_inp.off("keyup");
    submit_btn.off("click");

    setTimeout(function () {
      ntf_btn.removeAttr("class");
    }, 600);
  }

  function hideInputForm() {
    ntf_form_cover.removeAttr("class");
    ntf_area.removeAttr("class");
  }

  function submitForm(e: Event) {
    if (isValidEmail()) {
      e.preventDefault();
      hideInputForm();
      ntf_btn.addClass("inactive");
      f_msg.addClass("active");
      setTimeout(function () {
        resetForm();
      }, 2000);
    }
  }

  function collapseForm() {
    console.log(email_inp.val()); // Log the value of email_inp.val()
    if (email_inp.val() && email_inp.val().trim().length > 0) return false;
    else {
      hideInputForm();
      ntf_btn.addClass("inactive");
      setTimeout(function () {
        ntf_btn.removeAttr("class");
        resetForm();
      }, 100);
    }
  }
  

  ntf_btn.click(function () {
    ntf_area.addClass("active");

    setTimeout(function () {
      ntf_form_cover.addClass("active");

      setTimeout(function () {
        email_inp.focus();
        submit_btn.addClass("active");

        email_inp.on("keyup", checkEmail);

        submit_btn.on("click", submitForm);
      }, 210);
    }, 200);
  });

  ntf_area.click(function (event) {
    event.stopPropagation();
  });

  $(window).click(function () {
    collapseForm();
  });
});