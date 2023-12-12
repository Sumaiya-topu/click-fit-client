const uploadImage = () => {
  const input = document.getElementById("imageInput");
  const file = input.files[0];

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

// Function to fetch content from Numbers API and update the page
// const fetchNumbersApiContent = () => {
//   $.ajax({
//     url: "http://numbersapi.com/1/30/date?json",
//     type: "GET",
//     dataType: "json",
//     success: function (data) {
//       // Update the content on the page
//       $("#numbersApiContent").html("<p>" + data.text + "</p>");
//     },
//     error: function (error) {
//       console.error("Error fetching content from Numbers API", error);
//       // Optionally, handle error display on the page
//       $("#numbersApiContent").html(
//         "<p>Error fetching content from Numbers API</p>"
//       );
//     },
//   });
// };

// // Call the function when the page is loaded
// $(document).ready(function () {
//   fetchNumbersApiContent();
// });
