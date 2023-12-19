let copy_year = document.getElementById("copy-year")

let swiper =new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

const time =()=>{
  const year = new Date().getFullYear();
  copy_year.innerHTML= year
};
time();