const slider = document.getElementById('slider');
const foregroundImg = document.querySelector('.foreground-img');
const sliderButton = document.querySelector('.slider-button');

slider.addEventListener('input', (e) => {
  const sliderPos = e.target.value;

  // Update the width of the foreground image
  foregroundImg.style.width = `${sliderPos}%`;

  // Update the position of the slider button
  sliderButton.style.left = `calc(${sliderPos}% - 18px)`;
});

slider.addEventListener('change', (e) => {
  const sliderPos = e.target.value;

  foregroundImg.style.width = `${sliderPos}%`;
  sliderButton.style.left = `calc(${sliderPos}% - 18px)`;
});
