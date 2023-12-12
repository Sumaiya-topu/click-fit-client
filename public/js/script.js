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
