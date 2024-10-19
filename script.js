var swiperS = new Swiper(".mySwiper-s", {
    effect: "cards",
    grabCursor: true,
    on: {
      slideChange: function () {
        // Get the active slide index
        const activeIndex = swiperS.activeIndex; // This gives you the active slide's index (starting from 0)
  
        // Get the active slide element
        const activeSlide = swiperS.slides[activeIndex];
  
        // Fetch the data attributes from the active slide
        const contentName = activeSlide.getAttribute('data-name');
        const contentDetails = activeSlide.getAttribute('data-details');
  
        // Update the service name and details in the DOM
        document.getElementById('content-name').innerHTML = `<span class="text-[#336cfb]">${contentName.split(' ')[0]}</span> ${contentName.split(' ').slice(1).join(' ')}`;
        document.getElementById('details').textContent = contentDetails;
  
      }
    }
  });