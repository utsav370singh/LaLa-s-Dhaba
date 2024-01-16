function sentOTP(){
    const email= document.getElementById('email');
    const otpverify= document.getElementsByClassName('otpverify')[0];

    let otp_val= Math.floor(Math.random() * 10000);
    let emailbody= `<h2> Your OTP is </h2> ${otp_val}`
    Email.send({
        SecureToken : "ffde6be9-0fe2-4843-87e6-75f194ce8a0c ",
        To : email.value,
        From : "suman995030@gmail.com",
        Subject : "Email OTP using js",
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



