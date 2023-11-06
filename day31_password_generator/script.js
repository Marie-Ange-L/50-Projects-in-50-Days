const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");
const resultMessageEl = document.getElementById("resultMessage");

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
	const textarea = document.createElement("textarea");
	const finalPassword = resultEl.innerText;
	if (!finalPassword) {
		return;
	}

	textarea.value = finalPassword;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	textarea.remove();
	resultMessageEl.textContent = "Password  copied to clipboard !";
});

generateEl.addEventListener("click", () => {
	const length = +lengthEl.value; //the + converts to number (instead of string)
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;

	const password = generatePassword(
		hasLower,
		hasUpper,
		hasNumber,
		hasSymbol,
		length
	);
	const finalPassword = shufflePassword(password);

	resultEl.innerText = finalPassword;
	resultMessageEl.textContent = "";
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = "";
	const typesCount = lower + upper + number + symbol;
	const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(
		(item) => Object.values(item)[0] // filter removes false values from array
	);
	if (typesCount === 0) {
		return "";
	}

	for (let index = 0; index < length; index += typesCount) {
		typesArray.forEach((type) => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}

	return generatedPassword;
}

function shufflePassword(generatedPassword) {
	const array = generatedPassword.split("");
	array.sort(() => Math.random() - 0.5);
	return array.join("");
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = "!@#$%^&*(){}[]=<>/,.";
	return symbols[Math.floor(Math.random() * symbols.length)];
}
