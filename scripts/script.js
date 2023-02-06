const images = document.querySelectorAll(".img a");
let imageSelect = document.querySelectorAll(".img");

const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const qtyEl = document.getElementById("quantity");

let imgId = 1;

images.forEach((img) => {
  img.addEventListener("click", (e) => {
    e.preventDefault();
    imgId = img.dataset.id;

    imageSelect.forEach((img) => {
      img.classList.remove("active");
    });
    img.parentElement.classList.add("active");
    moveImage();
  });
});

function moveImage() {
  const imgWidth = document.querySelector(
    ".main-img img:first-child"
  ).clientWidth;
  let width = (imgId - 1) * imgWidth;

  document.querySelector(
    ".main-img"
  ).style.transform = `translateX(${-width}px)`;
}

minusBtn.addEventListener("click", () => {
  let qty = parseInt(qtyEl.value);
  if (qty > 0) {
    qty--;
    qtyEl.value = qty;
  }
});
plusBtn.addEventListener("click", () => {
  let qty = parseInt(qtyEl.value);
  if (qty > 0) {
    qty++;
    qtyEl.value = qty;
  }
});
