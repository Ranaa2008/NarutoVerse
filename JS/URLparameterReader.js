const keyValues = window.location.search;
const urlParams = new URLSearchParams(keyValues);
const name = urlParams.get('name');
const password = urlParams.get('password');
console.log(`name - ${name}`);
console.log(`age - ${password}`);