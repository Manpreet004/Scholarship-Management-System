const dropArea = document.querySelector(".drop_box"),
  button = dropArea.querySelector("button"),
  dragText = dropArea.querySelector("header"),
  input = dropArea.querySelector("input");
let file;
var filename;

button.onclick = () => {
  input.click();
};

input.addEventListener("change", function (e) {
  var fileName = e.target.files[0].name;
  let filedata = `
    <form action="" method="post">
    <div class="form1">
    <h4>${fileName}</h4>
    
    <button class="btn btn-primary">Upload</button>
    </div>
    </form>`;
  dropArea.innerHTML = filedata;
});
