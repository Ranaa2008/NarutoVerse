const keyValues = window.location.search;
const urlParams = new URLSearchParams(keyValues);
const email = urlParams.get('email');
const password = urlParams.get('password');

const loginhtml = `
<h1 class="loginHeading">Login Parameters</h1>
        <p>Email - ${email}</p>
        <p>Password - ${password}</p>
`;

document.querySelector('.displayLoginHtmlParameter').innerHTML = loginhtml;