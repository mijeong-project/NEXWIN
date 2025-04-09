// 햄버거메뉴
$(document).ready(function () {
    // 햄버거 버튼 클릭 시 열고 닫기
    $('.menu-trigger').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('active');
      $('.mobile-nav').toggleClass('active');
    });
  
    // 모바일 메뉴 내 링크 클릭 시 메뉴 닫기
    $('.mobile-nav a').on('click', function () {
      $('.mobile-nav').removeClass('active');        // 메뉴 숨기기
      $('.menu-trigger').removeClass('active');      // X자 → 햄버거 복귀
    });
  });
  
  

// 상단메뉴고정
$(function () {
    $(document).ready(function () {

        var scrollOffset = $('.scroll-menu').offset();

        $(window).scroll(function () {
            if ($(document).scrollTop() > scrollOffset.top) {
                $('.scroll-menu').addClass('scroll-fixed');
            }
            else {
                $('.scroll-menu').removeClass('scroll-fixed');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('on');
        } else {
          entry.target.classList.remove('on');
        }
      });
    }, {
      threshold: 0.3,
    });
  
    const boxElList = document.querySelectorAll('.highlight, .highlight2');
    boxElList.forEach((el) => {
      io.observe(el);
    });
  });
  

// 슬라이드
// Swiper 슬라이더 초기화
function initSwiper() {
    return new Swiper(".mySwiper", {
      loop: true,
      centeredSlides: true,
      spaceBetween: 30,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      effect: "coverflow",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
      },
  
      // ✅ 반응형 슬라이드 수 지정
      slidesPerView: window.innerWidth <= 860 ? 3 : 5,
    });
  }
  
  // 최초 실행
  let swiper = initSwiper();
  
  // ✅ 창 크기 변경 시 반응형 적용
  window.addEventListener("resize", () => {
    if (swiper) swiper.destroy(true, true); // 기존 인스턴스 제거
    swiper = initSwiper(); // 새로 초기화
  });
  
  
  
  AOS.init({
    duration: 1000,  // AOS 애니메이션 속도 (ms)
    offset: window.innerWidth < 768 ? 50 : 120  // 모바일에서는 조금 더 위에서 작동
  });
  