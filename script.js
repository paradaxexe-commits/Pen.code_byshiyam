// 🔥 START CODING
function startCoding() {
  document.getElementById("editors").style.display = "flex";
  document.getElementById("startScreen").style.display = "none";
  renderFiles();
  showDefaultScreen();
}

// ▶ RUN CODE
function runCode() {
  let html = document.getElementById("html").value;
  let css = document.getElementById("css").value;
  let js = document.getElementById("js").value;

  document.getElementById("output").srcdoc = `
    <html>
    <head>
      <style>${css}</style>
    </head>
    <body>
      ${html}
      <script>${js}<\/script>
    </body>
    </html>
  `;
}

// 📁 FILE SYSTEM
let files = {
  "index.html": "<h1>Hello Shiyam 🔥</h1>",
  "style.css": "body{background:black;color:white}",
  "script.js": "console.log('Hello Shiyam');"
};

let currentFile = "";

// 🔄 SHOW FILES
function renderFiles() {
  let list = document.getElementById("fileList");
  list.innerHTML = "";

  for (let file in files) {
    let li = document.createElement("li");
    li.innerText = file;

    li.onclick = () => {
      currentFile = file;
      loadFile();
      highlightFile(li);
    };

    list.appendChild(li);
  }
}

// 🎯 HIGHLIGHT SELECTED FILE
function highlightFile(selected) {
  let items = document.querySelectorAll("#fileList li");
  items.forEach(i => i.style.background = "#222");

  selected.style.background = "#00c853";
}

// 📂 LOAD FILE
function loadFile() {
  if (currentFile.endsWith(".html")) {
    document.getElementById("html").value = files[currentFile];
  }
  if (currentFile.endsWith(".css")) {
    document.getElementById("css").value = files[currentFile];
  }
  if (currentFile.endsWith(".js")) {
    document.getElementById("js").value = files[currentFile];
  }
}

// ➕ NEW FILE
function newFile() {
  let name = prompt("Enter file name (example: test.js):");
  if (!name) return;

  files[name] = "";
  renderFiles();
}

// 💾 SAVE FILE
function saveFile() {
  if (!currentFile) {
    alert("Select a file first ⚠️");
    return;
  }

  if (currentFile.endsWith(".html")) {
    files[currentFile] = document.getElementById("html").value;
  }
  if (currentFile.endsWith(".css")) {
    files[currentFile] = document.getElementById("css").value;
  }
  if (currentFile.endsWith(".js")) {
    files[currentFile] = document.getElementById("js").value;
  }

  alert("Saved ✅");
}

// ✏ RENAME FILE
function renameFile() {
  if (!currentFile) {
    alert("Select a file first ⚠️");
    return;
  }

  let newName = prompt("Enter new file name:");
  if (!newName) return;

  files[newName] = files[currentFile];
  delete files[currentFile];

  currentFile = newName;
  renderFiles();
}

// 🌈 DEFAULT OUTPUT SCREEN
function showDefaultScreen() {
  document.getElementById("output").srcdoc = `
    <html>
    <body style="
      margin:0;
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      background:linear-gradient(135deg,#0f2027,#203a43,#2c5364);
      color:white;
      font-family:sans-serif;
    ">
      <div style="text-align:center;">
        <h1>🚀 Shiyam Pen Code</h1>
        <p>Click ▶ Run to see output</p>
      </div>
    </body>
    </html>
  `;
}

// 🔄 INIT
function initFiles() {
  renderFiles();
}