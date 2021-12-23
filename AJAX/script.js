const buatxhr = () => {
  if (window.ActiveXObject) {
    return new ActiveXObject("Microsoft.XMLHTTP");
  } else if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  }
};

const getJudul = (url) => {
  return new Promise((resolve, reject) => {
    const request = buatxhr();
    request.open("GET", url);
    request.onreadystatechange = () => {
      if (request.status == 404) {
        reject("Url Error");
      }
      if (request.readyState == 4 && request.status == 200) {
        resolve(JSON.parse(request.response));
      }
    };
    request.onerror = () => {
      reject("Server Error");
    };
    request.send(null);
  });
};
const showJudul = async () => {
  let html = "";
  try {
    const response = await getJudul("http://localhost:3000/artikel");
    response.map((item) => {
      html += `
      <li>${item.judul}</li>
      `;
    });
    document.querySelector("ul#judul-berita").innerHTML = html;
  } catch (error) {
    alert(error);
  }
};
const deleteArtikel = (url) => {
  const request = buatxhr();
  request.open("DELETE", url);
  request.onreadystatechange = () => {
    if (request.readyState == 4 && request.status == 200) {
      showJudul("http://localhost:3000/artikel");
    }
  };
  request.send(null);
};
const sendData = (judul, desc) => {
  return new Promise((resolve, reject) => {
    const xhr = buatxhr();
    const param = `judul=${encodeURI(judul)}&desc=${encodeURI(desc)}`;
    xhr.open("POST", "http://localhost:3000/artikel");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 201) {
          resolve(JSON.parse(xhr.response));
        } else if (xhr.status == 404) {
          reject("404 Not Found");
        }
      }
    };
    xhr.onerror = () => {
      reject("Server Error");
    };
    xhr.send(param);
  });
};
showJudul("http://localhost:3000/artikel");

document.addEventListener("click", (e) => {
  if (e.target.nodeName == "BUTTON" && e.target.id == "delete") {
    e.preventDefault();
    const id = e.target.dataset.id;
    deleteArtikel(`http://localhost:3000/artikel/${id}`);
  }
});

const putData = (judul, desc) => {};

document.querySelector("form#forms").addEventListener("submit", async (e) => {
  e.preventDefault();
  const judul = document.querySelector("#judul").value;
  const desc = document.querySelector("#desc").value;
  try {
    const res = await sendData(judul, desc);
    alert(`Data ${res.judul} Berhasil Added`);
    showJudul("http://localhost:3000/artikel");
  } catch (error) {
    alert(error);
  }
});

const getData = async (url) => {
  try {
    const res = await fetch(url);
    const response = await res.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
