const themeButton = document.getElementById("myButton2");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "Light Theme";
  } else {
    themeButton.textContent = "Dark Theme";
  }
});

// Declare notesArray outside of any function
const notesArray = [
  { title: "Note One", body: "This is my first note" },
  { title: "Note Two", body: "This is my second note" },
];

// Get the necessary DOM elements
const sidebar = document.getElementById("ul_dot");
const noteList = sidebar.querySelector("li");
const newNoteButton = document.getElementById("new-note-button");
const saveButton = document.getElementById("save-button");
const cancelButton = document.getElementById("cancel-button");
const editor = document.getElementById("editor");
const textArea = document.querySelector("textarea");

// Add event listener to the "New Note" button
newNoteButton.addEventListener("click", () => {
  if (editor.style.display === "none") {
    // Show the editor and toolbar
    editor.style.display = "block";
    newNoteButton.style.display = "none";
    saveButton.style.display = "block";
    cancelButton.style.display = "block";
    // Clear the text area
    textArea.value = "";
  }
});

// Add event listener to the "Save" button
saveButton.addEventListener("click", () => {
  // Show a prompt to get the note title
  const title = prompt("Enter a title for your note:");
  if (title) {
    // Add a new note object to the notesArray
    notesArray.push({ title: title, body: textArea.value });
    // Add a new list item to the sidebar
    const listItem = document.createElement("li");
    listItem.textContent = title;
    noteList.appendChild(listItem);
  }
});

// Add event listener to the "Cancel" button
cancelButton.addEventListener("click", () => {
  // Hide the editor and toolbar
  editor.style.display = "none";
  newNoteButton.style.display = "block";
  saveButton.style.display = "none";
  cancelButton.style.display = "none";
});

sidebar.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    const title = event.target.textContent;
    const note = notesArray.find((note) => note.title === title);
    if (note) {
      textArea.value = note.body;
      newNoteButton.click();
    }
  }
});
