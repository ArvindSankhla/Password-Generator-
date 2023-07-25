const UpperSate = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerSate = "abcdefghijklmnopqrstuvwxyz";
const NumberSate = "1234567890";
const symbolSate = "~!@#$%^&*()_+/";

//selector
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const UpperInput = document.getElementById("upper-case");
const LowerInput = document.getElementById("lower-case");
const NumberInput = document.getElementById("numbers");
const SymbolInput = document.getElementById("symbols");

const getRandomData = (dataSate) => {
  return dataSate[Math.floor(Math.random() * dataSate.length)];
};
const generatePassword = (password = "") => {
  if (UpperInput.checked) {
    password += getRandomData(UpperSate);
  }
  if (LowerInput.checked) {
    password += getRandomData(LowerSate);
  }
  if (NumberInput.checked) {
    password += getRandomData(NumberSate);
  }
  if (SymbolInput.checked) {
    password += getRandomData(symbolSate);
  }
  if (password.length < totalChar.value) {
    return generatePassword(password);
  }
  passBox.innerText = truncateString(password, totalChar.value);
};
document.getElementById("btn").addEventListener("click", function () {
  generatePassword();
});
function truncateString(str, num) {
  if (str.length > num) {
    let substr = str.substring(0, num);
    return substr;
  } else {
    return str;
  }
}
