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

//파트너 슬라이드
// const partnerTotalWidth = document.querySelector('body')
const partnerTotalWidth = document.body.offsetWidth;
const partners = document.querySelector('.partners ul');
const partnerSlides = partners.querySelectorAll('li');
const partnerSlideWidth = partnerTotalWidth/partnerSlides.length;

//파트너 각 슬라이드 너비 지정
for(let slide of partnerSlides){
  slide.style.width = partnerSlideWidth+'px';
}
//복사본 생성
/*
a.innerHTML = B //a요소에 b를 html태그로 생성, 기존 내용제거 B 내용으로 교체
let a = b.innerHTML  //B의 내용을 HTML태그로 변수명 A에 할당.

//문자열 특정 문자 교체
let x = a.replace(b,c)  //a에서 b를 c로 교체
*/
let slideHTML = partners.innerHTML;
console.log(slideHTML);
let clonedSlides = slideHTML.replace(/<li/g,'<li class="clone"');
console.log(clonedSlides);
partners.innerHTML = clonedSlides+slideHTML;

//리스트 전체가 배치되도록 부모너비 변경
partners.style.width = partnerTotalWidth * 2 + 'px';

//파트너 슬라이드 이동
let partnerLeft = 0;
function movePartners(){
  // partnerLeft = partnerLeft -2;
  partnerLeft -= 2;
  partners.style.left = partnerLeft+'px';
  //requestAnimationFrame 함수
  //requestAnimationFrame(함수)  //함수의 내용 애니메이션 변경
  requestAnimationFrame(movePartners); //movePartners함수내에서 재실행
}
requestAnimationFrame(movePartners); //movePartners함수의 내용 애니메이션 변경