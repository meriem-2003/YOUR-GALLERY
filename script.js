let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector("span");

// Add click event listeners to all images
images.forEach((img) => {
  img.addEventListener("click", () => {
    // Pass the correct image source to the modal
    openModal(img.src);
  });
});

// Add click event listener to close the modal
close.addEventListener("click", () => {
  wrapper.style.display = "none";
});

// Function to open the modal and set the full image source
function openModal(pic) {
  console.log("Opening image:", pic); // Debugging: log the image source
  wrapper.style.display = "flex";
  imgWrapper.src = pic; // Set the image source dynamically
}
