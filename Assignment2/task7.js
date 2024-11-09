function checkVowelOrConsonant() {
    const char = document.getElementById("char").value.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    
    if (char.length === 1 && /^[a-zA-Z]$/.test(char)) {
        const result = vowels.includes(char) ? "Vowel" : "Consonant";
        
        document.getElementById("ooutput").innerText = result;
    } else {
        document.getElementById("ooutput").innerText = "Please enter a single letter.";
    }
}