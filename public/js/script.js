// Your existing uploadImage function
const uploadImage = () => {
  const input = document.getElementById("imageInput");
  const file = input.files[0];
  console.log("i am here");
  if (!file) {
    alert("Please select an image file.");
    return;
  }

  const formData = new FormData();
  formData.append("upload_images", file);

  fetch("http://localhost:5000/api/v1/upload/image-upload", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Image upload failed.");
      }
      return response.json();
    })
    .then((data) => {
      alert("Image uploaded successfully.");
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
};

// Function to handle image drop
function handleDrop(event) {
  event.preventDefault();
  event.stopPropagation();

  // Remove the dragover style class
  dropArea.classList.remove("dragover");

  // Get the file from the drop event
  const file = event.dataTransfer.files[0];

  // Update the file input with the dropped file
  const fileInput = document.getElementById("imageInput");
  fileInput.files = event.dataTransfer.files;

  // Call the image upload function
  uploadImage();
}

// Function to handle drag over
function handleDragOver(event) {
  event.preventDefault();
  event.stopPropagation();

  // Add the dragover style class
  dropArea.classList.add("dragover");
}

// Function to handle drag leave
function handleDragLeave(event) {
  event.preventDefault();
  event.stopPropagation();

  // Remove the dragover style class
  dropArea.classList.remove("dragover");
}

// Set up event listeners for drag and drop
const dropArea = document.getElementById("dropArea");
dropArea.addEventListener("dragover", handleDragOver);
dropArea.addEventListener("dragleave", handleDragLeave);
dropArea.addEventListener("drop", handleDrop);

// Function to fetch content from Numbers API and update the page
function fetchNumbersApiContent() {
  $.ajax({
    url: "http://numbersapi.com/1/30/date?json",
    type: "GET",
    dataType: "json",
    success: function (data) {
      console.log(data);
      // Update the content on the page
      $("#numbersApiContent").html("<p>" + data.text + "</p>");
    },
    error: function (error) {
      console.error("Error fetching content from Numbers API", error);
      // Optionally, handle error display on the page
      $("#numbersApiContent").html(
        "<p>Error fetching content from Numbers API</p>"
      );
    },
  });
}

// Call the function when the page is loaded
$(document).ready(function () {
  fetchNumbersApiContent();
});

function fetchNumbersApiContent2() {
  $.ajax({
    url: "http://numbersapi.com/1/30/date?json",
    type: "GET",
    dataType: "json",
    success: function (data) {
      console.log(data);
      // Update the content on the page
      $("#numbersApiContent2").html("<p>" + data.text + "</p>");
    },
    error: function (error) {
      console.error("Error fetching content from Numbers API", error);
      // Optionally, handle error display on the page
      $("#numbersApiContent2").html(
        "<p>Error fetching content from Numbers API</p>"
      );
    },
  });
}
// Call the function when the page is loaded
$(document).ready(function () {
  fetchNumbersApiContent2();
});
