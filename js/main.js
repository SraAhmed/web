// //let and const its mean varible
// // console.log(typeof getID);
// const header = document.querySelector(".myHeader");
// const section = document.getElementById("sec");
// const div = document.getElementById("mydiv");
// const title = document.createElement("h1");
// // header.remove(); حذف العناصر

// //section.prepend(title); //تم شرحه في الاكسل
// // div.prepend(title);

// // title.classList.add("mb");
// // title.innerText = "Hello, this is JS ";
// const fn = () => {}; //nfn

const dis = document.querySelector(".dis");
const tit = document.querySelector(".bigcon");
const count = document.getElementsByClassName("container")[0];
const buy = document.querySelectorAll(".js-buy");
const body = document.getElementById("body");
const darkmode = document.getElementById("mode");
const addpro = document.getElementById("pro");
const procontainer = document.getElementById("procontainer");

// to add new product into html
addpro.addEventListener("click", (eo) => {
  const newproduct = `<div class="mycard" class="card" style="width: 18rem">
  <img
    style="border-radius: 15px"
    src="photo_2021-12-30_09-13-22.jpg"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <a id="buy"  href="#" class=" js-buy btn btn-primary">Go somewhere</a>
  </div>
</div>`;
  procontainer.innerHTML += newproduct;
});

// when you click in "buy" button on procontainer
procontainer.addEventListener("click", (eo) => {
  if (eo.target.className == " js-buy btn btn-primary") {
    tit.style.display = "block";
    count.style.display = "block";
    dis.style.display = "none";
  }
});

// when you click in buy button
// buy.forEach((currentItem) => {
//   currentItem.addEventListener("click", (eo) => {
//     tit.style.display = "block";
//     count.style.display = "block";
//     dis.style.display = "none";
//   });
// });

// to hide "yes" botton and display "done"
count.addEventListener("click", (eo) => {
  count.style.display = "none";
  dis.style.display = "block";
  setTimeout(() => {
    tit.style.display = "none";
  }, 3000);
});

// to change mode light to dark
darkmode.addEventListener("click", (eo) => {
  body.classList.toggle("dark");
});
