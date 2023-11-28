
const container = document. querySelector(".container"),
 qrInput = container.querySelector(".form input"),
 genereitebtn = container.querySelector(".form button"), 
 qrImage = document.querySelector(".qr-code .img"),
qrContainer = document.querySelector(".qr-code")



 genereitebtn.addEventListener("click", ()=>{
   let qrValue = qrInput.value;
   if (!qrValue) {
     alert("Incira uma url ou o texto para gerar o QR code!")    
     return
   }
   genereitebtn.innerText = "Gerando QR code..."
  
   
   qrImage.src =`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`
   
   qrImage.addEventListener("load" ,()=>{
        genereitebtn.innerText = "gerar QR code<"
        qrContainer.classList.add("active")
   })

})

qrInput.addEventListener("keyup", ()=>{
    if (!qrInput.value) {

        container.classList.remove("active")
        
    }
})