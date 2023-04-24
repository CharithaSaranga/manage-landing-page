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
