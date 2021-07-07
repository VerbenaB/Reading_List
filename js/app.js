document.addEventListener("DOMContentLoaded", () => {
  const handleFormSubmit = function (event) {
    event.preventDefault();

    const bookList = document.querySelector("#reading-list");

    const newBook = document.createElement("li");
    newBook.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`;
    bookList.appendChild(newBook);

    form.reset();
  };

  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmit);
  const newButton = document.createElement("button");
  newButton.textContent = "Delete";
  const body = document.querySelector("body");
  body.appendChild(newButton);

  const handleDeleteSubmit = function (event) {};
});
