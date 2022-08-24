const container = document.getElementById("container");
const title = document.getElementById("title");
container.style.border = "5px solid red";
container.addEventListener("click", (eo) => {
  //   sw
  switch (eo.target.className) {
    case "btn btn-primary":
      title.innerHTML = "primary";
      break;
    case "btn btn-secondary":
      title.innerHTML = "secondary";
      break;
    case "btn btn-success":
      title.innerHTML = "success";
      break;
    case "btn btn-danger":
      title.innerHTML = "danger";
      break;
    case "btn btn-warning":
      title.innerHTML = "warning";
      break;
    case "btn btn-info":
      title.innerHTML = "info";
      break;
    case "btn btn-light":
      title.innerHTML = "light";
      break;
    case "btn btn-dark":
      title.innerHTML = "dark";
      break;

    default:
      title.innerHTML = "Error";
      break;
  }

  //   if (eo.target.className == "btn btn-primary") {
  //     title.innerHTML = "primary";
  //   } else if (eo.target.className == "btn btn-secondary") {
  //     title.innerHTML = "secondary";
  //   } else if (eo.target.className == "btn btn-success") {
  //     title.innerHTML = "success";
  //   } else if (eo.target.className == "btn btn-danger") {
  //     title.innerHTML = "danger";
  //   } else if (eo.target.className == "btn btn-warning") {
  //     title.innerHTML = "warning";
  //   } else if (eo.target.className == "btn btn-info") {
  //     title.innerHTML = "info";
  //   } else if (eo.target.className == "btn btn-light") {
  //     title.innerHTML = "light";
  //   } else if (eo.target.className == "btn btn-dark") {
  //     title.innerHTML = "dark";
  //   }
});
