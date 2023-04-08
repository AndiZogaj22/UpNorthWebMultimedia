function openModal(src, alt) {
  // Get the modal element
  const modal = document.getElementById("modal");

  // Show the modal
  modal.style.display = "block";

  // Display the image and its alt text in the modal
  const modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = `
    <span class="close-btn" onclick="closeModal()">&times;</span>
    <img src="${src}" alt="${alt}">
    <p>${alt}</p>
  `;
}

function closeModal() {
  // Get the modal element
  const modal = document.getElementById("modal");

  // Hide the modal
  modal.style.display = "none";
}

// Add hover effect to images
const imageContainers = document.getElementsByClassName("image-container");
for (let i = 0; i < imageContainers.length; i++) {
  const imageContainer = imageContainers[i];
  const imageInfo = imageContainer.getElementsByClassName("image-info")[0];

  imageContainer.addEventListener("mouseover", () => {
    imageInfo.style.display = "block";
  });

  imageContainer.addEventListener("mouseout", () => {
    imageInfo.style.display = "none";
  });
}
