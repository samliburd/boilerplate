document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    
    // Get values from input boxes
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const capitalised = name.charAt(0).toUpperCase() + name.slice(1);
    const generatePassword = () => {
        const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const passwordLength = 14;
        let password = "";
        for (let i = 0; i <= passwordLength; i++) {
            let randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }
        return password
    }
    const tempPassword = generatePassword();
    // Set the text content of the div element
    document.getElementById("result").innerHTML = `
Hello ${capitalised},<br>
<br>
Apologies for the issues you have been having logging in. I have now updated your account and created a new temporary password. <br>
<br>
Please login on a fresh web browser using the access credentials shown below and amend your password to something more secure.<br>
<br>
<strong>Username:</strong> ${email}<br>
<strong>Temporary password:</strong> ${tempPassword}<br>
<br>
Kind Regards,<br>
Web team
`;
    document.querySelector(".wrapper").style.display = "flex"
});

// Copy text to clipboard
document.getElementById("copyButton").addEventListener("click", function () {
    const resultText = document.getElementById("result").textContent;

    // Create a temporary textarea element
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = resultText;
    document.body.appendChild(tempTextarea);

    // Select and copy the text
    tempTextarea.select();
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);

    // Optionally, provide feedback to the user
    //alert("Copied to clipboard: " + resultText);
});