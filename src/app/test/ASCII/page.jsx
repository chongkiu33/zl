// "use client"
// import { useEffect } from 'react';
// import p5 from 'p5';

// const Ascii = () => {
//   useEffect(() => {
//     const asciiChar = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,^`'. ";
//     let video;
//     let vidw = 64; // 视频宽度
//     let vidh = 48; // 视频高度
//     let scl = 24; // 缩放比例
//     let w, h;

//     const sketch = (p) => {
//       p.setup = () => {
//         p.createCanvas(vidw * scl, vidh * scl);
//         video = p.createCapture(p.VIDEO);
//         video.hide(); 
//         video.size(vidw, vidh);
//         w = p.width / video.width;
//         h = p.height / video.height;
//       };

//       p.draw = () => {
//         p.background(255);
//         video.loadPixels();

//         for (let i = 0; i < video.width; i++) {
//           for (let j = 0; j < video.height; j++) {
//             let pixelIndex = (i + j * video.width) * 4;
//             let r = video.pixels[pixelIndex + 0];
//             let g = video.pixels[pixelIndex + 1];
//             let b = video.pixels[pixelIndex + 2];

//             let bright = (r + g + b) / 3;
//             let tIndex = p.floor(p.map(bright, 0, 255, 0, asciiChar.length));

//             let x = i * w + w / 2;
//             let y = j * h + h / 2;
//             let t = asciiChar.charAt(tIndex);
//             p.stroke(255);
//             p.textSize(w);
//             p.textAlign(p.CENTER, p.CENTER);
//             p.text(t, x, y);
//           }
//         }
//       };

//       p.windowResized = () => {
//         p.resizeCanvas(vidw * scl, vidh * scl);
//       };
//     };

//     const p5Instance = new p5(sketch);

//     // 清理函数
//     return () => {
//       p5Instance.remove(); // 清理 p5 实例
//       if (video) {
//         video.stop();
//         video.remove();
//       }
//     };
//   }, []);

//   return null; // 不需要返回其他内容
// };

// export default Ascii;

