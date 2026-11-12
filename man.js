<script>
function login(){
    let user = document.getElementById("username");
    let pass = document.getElementById("password");
    let userError = document.getElementById("userError");
    let passError = document.getElementById("passError");

    let valid = true;

    // Username 
    if(user.value.trim() === ""){
        userError.style.display = "block";
        user.classList.add("input-error");
        valid = false;
    }else{
        userError.style.display = "none";
        user.classList.remove("input-error");
    }

    // Password 
    if(pass.value.trim() === ""){
        passError.style.display = "block";
        pass.classList.add("input-error");
        valid = false;
    }else{
        passError.style.display = "none";
        pass.classList.remove("input-error");
    }

    
    if(valid){
        window.open("https://sites.google.com/view/other-app-mr-r/home", "_blank");
  
}
}
</script>