
function addBook() {
    const bookName = document.getElementById("bookName").value.trim();
    const author = document.getElementById("author").value.trim();

    if (bookName === "") {
        alert("Please enter the book name!");
        return;
    }

    const li = document.createElement("li");

    if (author === "") {
        li.textContent = bookName + " - Author not specified";
    } else {
        li.textContent = bookName + " - " + author;
    }

    document.getElementById("bookList").appendChild(li);

    document.getElementById("bookName").value = "";
    document.getElementById("author").value = "";
}
