const interaction = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  },
  {
    root: null, // 뷰포트를 보이는 영역으로 설정 (gsap scrollTrigger의 trigger라고 생각)
    rootMargin: "0px",
    threshold: 1, // 요소가 100퍼센트 다 보일 때 콜백 함수 실행
  }
);

const boxes = document.querySelectorAll(".box-item");

boxes.forEach((item) => {
  interaction.observe(item);
});
