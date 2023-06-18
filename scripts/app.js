const getFormValues = () => {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    return { email, capitalized };
};

const generatePassword = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars[randomNumber];
    }
    return password;
};

const setResultText = ({ email, capitalized, tempPassword }) => {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Hello ${capitalized},<br>
<br>
Apologies for the issues you have been having logging in. I have now updated your account and created a new temporary password.<br>
Please login on a fresh web browser using the access credentials shown below and amend your password to something more secure.<br>
<br>
<strong>Username:</strong> ${email}<br>
<strong>Temporary password:</strong> ${tempPassword}<br>
<br>
Kind Regards,<br>
Web team`;
    document.querySelector(".wrapper").style.display = "flex";
};

const copyToClipboard = (text) => {
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = text;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
};

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const { email, capitalized } = getFormValues();
    const tempPassword = generatePassword();

    setResultText({ email, capitalized, tempPassword });
});

document.getElementById("copyButton").addEventListener("click", function () {
    const resultText = document.getElementById("result").textContent;
    copyToClipboard(resultText);
});
