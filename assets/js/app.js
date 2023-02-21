// const startBtn = document.getElementById("start")
// const captureBtn = document.getElementById("capture")
// const closeBtn = document.getElementById("close")
// const player = document.getElementById("player")
// const switchBtn = document.getElementById("switchCamera")
// const canvas = document.getElementById("canvas")
// const restart = document.getElementById("restart")

import {
  startBtn ,
  captureBtn ,
  closeBtn ,
  player ,
  switchBtn ,
  canvas ,
  restart ,
  mode
}from "./constants.js"

import{openCamera, closeCamera}from "./camera.js"

// let mode = "user"

switchBtn.addEventListener("click", () => {
   mode === "environment" ? "user" : "environment"
  player.classList.add("d-none")

  const tracks = player.srcObject.getVideoTracks()
  for (let i = 0; i < tracks.length; i++) {
    tracks[i].stop()
    
  }

  openCamera()
})
startBtn.addEventListener("click", () => {
  console.log("start button clicked")
  openCamera()

})
captureBtn.addEventListener("click", () => {
  console.log("capture button clicked")

  const preview = canvas.getContext("2d")
  preview.drawImage(player,0,0, canvas.height, canvas.width)

  canvas.classList.remove("d-none")
  player.classList.add("d-none")
  captureBtn.classList.add("d-none")
  restart.classList.remove("d-none")

})
closeBtn.addEventListener("click", () => {
  console.log("close button clicked")
  closeCamera()

})
restart.addEventListener("click", () => {
  closeCamera()
  openCamera()
})




