const loginKeyValues = window.location.search;
const loginUrlParams = new URLSearchParams(loginKeyValues);
const loginEmail = loginUrlParams.get('loginEmail');
const loginPassword = loginUrlParams.get('loginPassword');
let loginHTML = `
        <h1>Login Page Parameters</h1>
        <p>Email - ${loginEmail}</p>
        <p>Password - ${loginPassword}</p>
`;
document.querySelector('.displayLoginHtmlParameter').innerHTML = loginHTML;

const regKeyValues = window.location.search;
const regUrlParams = new URLSearchParams(regKeyValues);
const regName = regUrlParams.get('regName')
const regAge = regUrlParams.get('regAge')
const regEmail = regUrlParams.get('regEmail')
const regPassword = regUrlParams.get('regPassword')
const regConfirmPassword = regUrlParams.get('regConfirmPassword')
const regPhoneNumber = regUrlParams.get('regPhoneNumber')
const regDate = regUrlParams.get('regDate')

let regHTML = `
        <h1>Register Page Parameters</h1>
        <p>Name - ${regName}</p>
        <p>Age - ${regAge}</p>
        <p>Email - ${regEmail}</p>
        <p>Password - ${regPassword}</p>
        <p>Confirm Password - ${regConfirmPassword}</p>
        <p>Phone Number - ${regPhoneNumber}</p>
        <p>Date - ${regDate}</p>
`;

document.querySelector('.displayRegHtmlParameter').innerHTML = regHTML;

