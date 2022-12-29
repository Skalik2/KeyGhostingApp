const btns = document.querySelectorAll(".btn");

document.addEventListener("keydown", function (e) {
  if (e.repeat) {
    return;
  }
  e.preventDefault();
  for (let i = 0; i < btns.length; i++) {
    if (btns[i].classList.contains(e.code)) {
      if (btns[i].classList.contains("dark")) {
        btns[i].classList.add("light");
        btns[i].classList.remove("dark");
      } else {
        btns[i].classList.add("dark");
        btns[i].classList.remove("light");
      }
    }
  }
});

document.addEventListener("keyup", function (e) {
  e.preventDefault();
  for (let i = 0; i < btns.length; i++) {
    if (btns[i].classList.contains(e.code)) {
      if (btns[i].classList.contains("dark")) {
        btns[i].classList.add("light");
        btns[i].classList.remove("dark");
      } else {
        btns[i].classList.add("dark");
        btns[i].classList.remove("light");
      }
    }
  }
});
