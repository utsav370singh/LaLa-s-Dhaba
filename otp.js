function sentOTP(){
    const email= document.getElementById('email');
    const otpverify= document.getElementsByClassName('otpverify')[0];

    let otp_val= Math.floor(Math.random() * 10000);
    let emailbody= `<h2> Your OTP is </h2> ${otp_val}`
    Email.send({
        SecureToken : "d245c4d5-5d5f-4e3e-9013-73a81f19fef6 ",
        To : email.value,
        From : "utsavsingh265@gmail.com",
        Subject : "your otp for lala-cart is",
        Body : emailbody,
    }).then(
       message =>{
        if(message==="OK"){
            alert("OTP sent to your email " + email.value)

            otpverify.style.display = "flex";
            const otp_inp= document.getElementById('otp_inp');
            const otp_btn= document.getElementById('otp_btn');

            otp_btn.addEventListener('click', () => {
                if(otp_inp.value == otp_val){
                    alert("Email address verified...");
                    location.href= 'main2.html';
                }
                else{
                    alert("Invalid OTP");
                }
            })
        }
       }
    );
}



