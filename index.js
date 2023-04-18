let list = document.querySelectorAll(".nav li");
function active() {
  list.forEach((i) => i.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((i) => i.addEventListener("click", active));
let menuToggle = document.querySelector(".menuToggle");
let header = document.querySelector("header");
menuToggle.onclick = function () {
  header.classList.toggle("active");
};

// 위로 올리는 버튼
var backToTop = () => {
  // Scroll | button show/hide
  window.addEventListener("scroll", () => {
    if (document.querySelector("html").scrollTop > 100) {
      document.getElementById("go-top").style.display = "block";
    } else {
      document.getElementById("go-top").style.display = "none";
    }
  });
  // back to top
  document.getElementById("go-top").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
};
backToTop();

// 스크롤 했을때 나타나는 코드
let observer = new IntersectionObserver((e) => {
  e.forEach((박스) => {
    if (박스.isIntersecting) {
      박스.target.style.opacity = 1;
    }
  });
});
let home = document.querySelectorAll(".test");
observer.observe(home[0]);
observer.observe(home[1]);
observer.observe(home[2]);
