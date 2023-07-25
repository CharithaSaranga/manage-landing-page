$(".autoplay").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true, // Enable dots
  appendDots: $(".dots-container"), // Specify the container for the dots
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20px",
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true, // Enable dots for responsive settings
        appendDots: $(".dots-container-responsive"), // Specify the container for the dots in responsive settings
      },
    },
  ],
});
$(document).ready(function () {
  $("#form-btn").on("click", function () {
    const email = $("#email-input").val().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      $(".error-message").text("Please enter an email address.");
      $(".error-message").show();
    } else if (!emailRegex.test(email)) {
      $(".error-message").text("Please enter a valid email address.");
      $(".error-message").show();
    } else {
      // Here, you can add code to submit the form or perform any other action.
      // For example, you might want to use AJAX to send the form data to the server.
      // If the form submission is successful, you can display a success message.
      $(".error-message").hide();
      alert("Form submitted successfully!");
    }
  });
});
