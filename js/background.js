// 랜덤 백그라운드 이미지의 행렬 형성
// Math.random과 Math.floor 기능을 통해 행렬 순번 랜더마이즈
// 핵심기능: array에서 랜덤한 숫자를 얻어 숫자에 따른 이미지를 body에 추가함

const body = document.querySelector(".container");
const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${chosenImage}`;

document.body.appendChild(bgimage);
