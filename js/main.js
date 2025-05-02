const book_a_trip = document.querySelector(".book_a_trip");
const book_a_trip_OST = book_a_trip.offsetTop;
const book_a_trip_height = book_a_trip.offsetHeight;

const ongoing_percent = document.querySelector(".ongoing .percent");
const ongoing_bar = document.querySelector(".ongoing .bar");

const testimonialList = document.querySelectorAll(".testimonials ul li");
const testimonial_pager = document.querySelectorAll(".testimonials .pager a");
const testimonial_upBtn = document.querySelector(".pagination .up");
const testimonial_downBtn = document.querySelector(".pagination .down");
let testimonialIndex = 0;


window.addEventListener("scroll", function () {
  if (window.scrollY - 300 > book_a_trip_OST - book_a_trip_height) {
    if(book_a_trip.classList.contains("active") == false) {
      book_a_trip.classList.add("active");
      startNumberAnimation();
    }
  } 
});
function startNumberAnimation() {
  let start = 0;
  let end = Number(ongoing_bar.getAttribute('data-rate'));
  setInterval(() => {
    if (start < end) {
      start++;
      ongoing_percent.innerText = start + "%";
      ongoing_bar.style.width = start + "%";
    } else {
      clearInterval(this);
    }
  }, 100);
}

testimonial_pager.forEach((pager, index) => {
  pager.addEventListener("click", function (e) {
    e.preventDefault();
    changeTestimonial(index);
  });
});

testimonial_downBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (testimonialIndex < testimonialList.length - 1) {
    testimonialIndex++;
  } else {
    testimonialIndex = 0;
  }
  changeTestimonial(testimonialIndex);
});
testimonial_upBtn.addEventListener('click',()=>{
  if(testimonialIndex > 0){
    testimonialIndex--;
  } else{
    testimonialIndex = testimonialList.length - 1
  }
  changeTestimonial(testimonialIndex);
});

function changeTestimonial(idx){
    //모든 페이저에서 active 클래스 제거
    testimonial_pager.forEach((item) => {
      item.classList.remove("active");
    });
    //클릭한 페이저에 active 클래스 추가
    testimonial_pager[idx].classList.add("active");

    testimonialList.forEach((item) => {
      item.classList.remove("active");
    });
    testimonialList[idx].classList.add("active");
    testimonialIndex = idx;
}