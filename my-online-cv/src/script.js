function increaseTextSize() {
    document.body.style.fontSize = '150%'; // we are increasing text size by 50%
}

function decreaseTextSize() {
    document.body.style.fontSize = '100%'; // resetting text size to normal
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
   function validateForm() {
 let x = document.forms["myForm"]["fname"].value;
 
     var correctEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            //var address = document.getElementById[email].value;
            if (correctEmail.test(x) == false) 
            {
                alert('Not an email');
                return (false);
            }
 }