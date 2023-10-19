//animate little plane guide :)
let planePath;

function updatePlanePath() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 768) {
    planePath = {
      curviness: 1,
      autoRotate: true,
      values: [
        { x: window.innerWidth - 300, y: 1.1 * window.innerHeight },
        { x: window.innerWidth - window.innerWidth * 4/5, y: window.innerHeight },
        { x: 900, y: 1140 },
        { x: 500, y: 100 },
        { x: 300, y: -60 },
        { x: 200, y: -105 },
        // { x: 600, y: 90 },
        // { x: 700, y: -160 },
        // { x: 900, y: 200 },
        // { x: 800, y: 250 },
        // { x: window.innerWidth, y: window.innerHeight - 100 },
      ],
    };
  } else {
    planePath = {
      curviness: 1,
      autoRotate: true,
      values: [
        { x: 130, y: -140 },
        { x: 50, y: 80 },
        { x: 210, y: -50 },
        { x: 180, y: 10 },
        { x: 220, y: 130 },
        { x: -30, y: -230 },
        { x: 250, y: -160 },
        { x: 170, y: 300 },
        { x: window.innerWidth/2, y: 650 },
      ],
    };
  }
}

updatePlanePath();

window.addEventListener("resize", updatePlanePath);

const deathTween = new TimelineLite();

deathTween.add(
  TweenLite.to(".plane", 1, {
    bezier: planePath,
    ease: Power1.easeOut,
  })
);

const controll = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
  triggerElement: ".plane-animation",
  duration: 3000,
  triggerHook: 0,
})

.setTween(deathTween)
// .setPin(".plane-animation")
.addTo(controll);
//animate little plane guide :)

//gallery animation
const galleries = document.querySelectorAll('.gallery');
const overlay = document.getElementById('overlay');
const popupGallery = document.getElementById('popup-gallery');
const popupImage = document.getElementById('popup-image');
const saleInfo = document.getElementById('sale-info');
const placeInfo = document.getElementById('place-info');
const closePopup = document.getElementById('close-popup');
const body = document.body;

galleries.forEach((gallery, index) => {
    gallery.addEventListener('click', () => {
        // Show the overlay
        overlay.style.display = 'block';
        // Show the popup gallery
        popupGallery.style.display = 'block';
        // Set the image source for the popup image
        const backgroundImage = getComputedStyle(gallery).backgroundImage;
        const imageURL = backgroundImage.slice(5, -2); // Remove 'url("' and '")' from the string
        popupImage.src = imageURL;

        // Extract and display the sale and place info
        const sale = gallery.querySelector('.sale strong').textContent;
        saleInfo.textContent = sale;

        const place = gallery.querySelector('.place strong').textContent;
        placeInfo.textContent = place;

        // Hide the scroll by setting overflow to hidden
        body.style.overflow = 'hidden';
    });
});

closePopup.addEventListener('click', (e) => {
  if (closePopup.getAttribute('href') === '#') {
      overlay.style.display = 'none';
      popupGallery.style.display = 'none';

      // Clear the sale and place info
      saleInfo.textContent = '';
      placeInfo.textContent = '';

      // Revert the scroll behavior to normal
      body.style.overflow = 'auto';    
  }
  if (e.target !== closePopup) {
      // Close the popup
      overlay.style.display = 'none';
      popupGallery.style.display = 'none';

      // Clear the sale and place info
      saleInfo.textContent = '';
      placeInfo.textContent = '';

      // Revert the scroll behavior to normal
      body.style.overflow = 'auto';
  }
});

overlay.addEventListener('click', () => {
    // Hide the overlay and popup gallery when overlay is clicked
    overlay.style.display = 'none';
    popupGallery.style.display = 'none';

    // Clear the sale and place info
    saleInfo.textContent = '';
    placeInfo.textContent = '';

    // Revert the scroll behavior to normal
    body.style.overflow = 'auto';
});
//gallery animation

//input type date
$(function () {
  $("#datepicker").datepicker();
}); 
//input type date