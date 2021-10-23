// create element
const elementCreate = (el, id = "", isi = "") => {
  const out = document.createElement(el);
  if (el == "br") {
    return out;
  } else if (el == "label") {
    out.setAttribute("id", id);
    out.innerHTML = isi;
    return out;
  } else if (el == "output") {
    out.setAttribute("id", id);
    return out;
  }
};

const cekElement = () => {
  if (document.querySelector(".output").children.length <= 0) {
    document
      .querySelector(".output")
      .append(
        ...[
          elementCreate("label", "nama", "Nama :"),
          elementCreate("output", "nama"),
          elementCreate("br"),
          elementCreate("label", "email", "Email :"),
          elementCreate("output", "email"),
          elementCreate("br"),
          elementCreate("label", "jenis-kelamin", "Jenis Kelamin :"),
          elementCreate("output", "jenis-kelamin"),
          elementCreate("br"),
          elementCreate("label", "agama", "Agama :"),
          elementCreate("output", "agama"),
          elementCreate("br"),
          elementCreate("label", "alamat", "alamat :"),
          elementCreate("output", "alamat"),
        ]
      );
    document.querySelector("output#jenis-kelamin").innerHTML =
      document.querySelector('input[type="radio"]:checked').value;
    const s = document.querySelector("select#agama");
    for (let i = 0; i < s.options.length; i++) {
      if (s.options[i].selected) {
        document.querySelector("output#agama").innerHTML = s.options[i].value;
      }
    }
  }
};
// create element or display
const display = (e, id) => {
  cekElement();
  document.querySelector(`output#${id}`).innerHTML = e.target.value;
};
// display if submit click and event submit only
const displaySubmit = (id, el) => {
  document.querySelector(`output#${id}`).innerHTML =
    document.querySelector(el).value;
};
// Event
// input nama
document
  .querySelector("input#nama")
  .addEventListener("input", (e) => display(e, "nama"));
// input email
document
  .querySelector("input#email")
  .addEventListener("input", (e) => display(e, "email"));
// input radio
document.querySelectorAll('input[type="radio"]').forEach((element) => {
  element.addEventListener("change", (e) => display(e, "jenis-kelamin"));
});
// input select
document
  .querySelector("select#agama")
  .addEventListener("change", (e) => display(e, "agama"));
//   input textarea
document
  .querySelector("textarea#alamat")
  .addEventListener("input", (e) => display(e, "alamat"));

// if event submit only
document.querySelector("button#submit").addEventListener("click", (e) => {
  cekElement();
  displaySubmit("nama", "input#nama");
  displaySubmit("email", "input#email");
  displaySubmit("jenis-kelamin", 'input[type="radio"]:checked');
  displaySubmit("agama", "select#agama");
  displaySubmit("alamat", "textarea#alamat");
});
