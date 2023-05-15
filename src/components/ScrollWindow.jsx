export function ScrollWindow(elem) {
  let element = document.getElementById(elem);

  console.log(element);

  element.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "center",
  });
}
