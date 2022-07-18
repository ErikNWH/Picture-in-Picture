const videoElement = document.getElementById('video');
const button = document.getElementById('start');

//  Prompt the user to select Media steam
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in picture
  await videoElement.requestPictureInPicture();
  // reset button
  button.disabled = false;
});

// On Load
selectMediaStream();
