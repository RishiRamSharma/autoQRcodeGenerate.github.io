const wrapper = document.querySelector(".wrapper"),
qrInput= wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button");
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
     let qrValue= qrInput.value;
     if(!qrValue) return;
     generateBtn.innerText= "Generateing QR Code..";

   qrImg.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
   qrImg.addEventListener("load",()=> {
   wrapper.classList.add("active");
   generateBtn.innerText= "Generate QR Code";

});
});
qrInput.addEventListener("keyup",()=>{
     if(!qrInput.value){
          wrapper.classList.remove("active");
     }
});

const imgs = [];
imgs[1]='img1.jpg';
imgs[2]='img2.jpg';
imgs[3]='img3.jpg';
imgs[4]='img4.jpg';
imgs[5]='img5.jpg';
imgs[6]='img6.jpg';
imgs[7]='img7.jpg';
imgs[8]='img8.jpg';
imgs[9]='img9.jpg';
imgs[0]='img10.jpg';
window.onload = function() {
     const random = Math.floor(Math.random()*imgs.length);
     document.body.style.backgroundImage = `url(${imgs[random]})`;
}
function myconfirm() {
     alert("This QR code generator application is used to share our information quickly. Through this, we can share any lengthy link of a webpage or text data (nearly 90 words) through mobile or another scanner device.Simply write a text or paste any link in input box. The QR Code Generator automatically generate the QR Code of that link/ text.Now click on the green button.It auto generate the QR Code.Now scan this QR and you can see the inputs data in your mobile or other device.");



}
