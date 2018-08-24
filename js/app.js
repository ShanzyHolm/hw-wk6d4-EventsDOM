document.addEventListener('DOMContentLoaded', () => {
  const readingForm = document.querySelector('#new-item-form');
  readingForm.addEventListener('submit', handleReadingFormSubmit);

  const deleteButton = document.querySelector('#delete-button');
  deleteButton.addEventListener('click', handleDelete);
})

const handleReadingFormSubmit = function(event) {
  event.preventDefault();

  const titles = event.target.title.value
  const authors = event.target.author.value
  const categories = event.target.category.value

  const newReadingListItem = document.createElement("li");

  newReadingListItem.textContent = `Title: ${titles}, Author: ${authors}, Category: ${categories}`;

  const readingList = document.querySelector("#reading-list");
  newReadingListItem.classList.add("book");

  readingList.appendChild(newReadingListItem);

  const readingForm = document.querySelector('#new-item-form');
  readingForm.reset()
  console.log(event);
}

const handleDelete = function(event) {
  var result = confirm("Do you really want to delete this list?");
  if (result ==true){
    const readingList = document.querySelector("#reading-list");
    readingList.remove();
  }
}




// var readingList = document.getElementsByClassName("book").removeChild;
// // readingList.removeChild(readingList);

// del.addEventListener('click', function(){ x.parentNode.removeChild(x); })

// console.log(event);
//
//
//     const newReadingListItem = document.createElement("li");
//     const titles = event.target.title.value
//
//     const authors = event.target.author//.value
//     const categories = event.target.category.value
//
//     newReadingListItem.textContent = `Title: ${titles}, Author: ${authors}, Category: ${categories}`;
//
//     const readingList = document.querySelector("#reading-list");
//     newReadingListItem.classList.add("book");
//
//     readingList.appendChild(newReadingListItem);
//   }
