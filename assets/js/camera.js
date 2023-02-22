import {
  startBtn ,
  captureBtn ,
  closeBtn ,
  player ,
  switchBtn ,
  canvas ,
  restart ,
  getMode,
  changeMode
}from "./constants.js"


export const closeCamera = () => {
  console.log(player.srcObject.getVideoTracks())
  const tracks = player.srcObject.getVideoTracks()
  for (let i = 0; i < tracks.length; i++) {
    tracks[i].stop()
    
  }

  restart.classList.add("d-none")
  canvas.classList.add("d-none")
  switchBtn.classList.add("d-none")
  captureBtn.classList.add("d-none")
  closeBtn.classList.add("d-none")
  startBtn.classList.remove("d-none")
  player.classList.add("d-none")
}


export  const openCamera = async() => {
  
  // handleCamera Start
  if (navigator.mediaDevices) {
    document.getElementById("loader").innerHTML = `
    Opening Camera <div class="spinner-border text-dark"></div>`


    startBtn.setAttribute("disabled", true)

    try {
      const x = await navigator.mediaDevices.getUserMedia({
     video: {
      facingMode: getMode()
     },
    
     })
    player.srcObject = x
    } catch (error) {
      console.log(error);
    }

    document.getElementById("loader").innerHTML = ""
    startBtn.removeAttribute("disabled")
    
  } else {
    console.error("mediaDevices Not Supported");
  }


  // handleCamera end
  

  // player.srcObject = ""
  // player.setAttribute("src", "./video_2022-10-26_11-31-11.mp4")
  

  switchBtn.classList.remove("d-none")
  captureBtn.classList.remove("d-none")
  closeBtn.classList.remove("d-none")
  startBtn.classList.add("d-none")
  player.classList.remove("d-none")
}
