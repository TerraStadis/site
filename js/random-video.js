const videoElement = document.getElementById("bg-video");

const videos = [
  "videos/Happppy.mp4",
  "videos/Перекрас для Никиты.mp4",
  "videos/главный алмазик итого 3.mp4",
  "videos/Нави.mp4",
  "videos/Лайкер и Гавер.mp4",
  "videos/МАШИНА ВДРЕБЕЗГИ.mp4",
  "videos/отпуска нет ультракалл.mp4",
  "videos/когда алмы вернёш.mp4",
  "videos/Frostpunk.mp4"
];

const randomIndex = Math.floor(Math.random() * videos.length);
videoElement.src = videos[randomIndex];
