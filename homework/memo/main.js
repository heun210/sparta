const postBox = document.querySelector(".btn");

/* function onClick() {
  alert("안녕!");
}

postBox.addEventListener("click", onClick); */

postBox.addEventListener("click", () => {
  let count = 1;
  if (count % 2 == 0) {
    alert("짝짝짝!");
  } else {
    alert("홀홀홀!");
  }
  alert("안녕!");
});
