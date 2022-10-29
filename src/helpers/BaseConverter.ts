// Convert str from "from" base to base10, then convert it from base10 to "to" base
export const convertBase = (str: string, from: string, to: string) => base10ToOutput(inputToBase10(str, from), to)

const inputToBase10 = (str: string, base: string) => {
    let [power, x] = [str.length, 0];

	// For each char of the string, adds index of char * baseLength^(power-1)
	// This is a base conversion formula, a bit complex to explain
	// To understand it, see https://www.youtube.com/watch?v=aeLLTOHZnIc
    str.split('').forEach(char => x += base.indexOf(char) * base.length ** --power)

    return x
}

function base10ToOutput(n: number, base: string)
{
	let [i, str] = [1, ""];

	// Get the greatest power of base.length less than n
	while(n > base.length ** i) i++;

	// Exponent also determinates final string length
	// Iterating while i != 0 ensures that string will have the expected length
	while(i--)
	{
		// Same formula as convertToBase10
		str += base[Math.floor(n/base.length**i)]
		n %= base.length**i;
	}
	return str
}