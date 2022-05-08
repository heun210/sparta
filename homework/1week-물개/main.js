const btn = document.querySelector(".btn");
$(document).ready(() => {
  getRate();
});

function getRate() {
  $.ajax({
    type: "GET",
    url: "http://spartacodingclub.shop/sparta_api/rate",
    data: {},
    success: function (response) {
      let nowRate = response["rate"];
      $("#price").text(nowRate);
    },
  });
}

function onClick() {
  alert("주문이 완료되었습니다");
}

btn.addEventListener("click", onClick);
