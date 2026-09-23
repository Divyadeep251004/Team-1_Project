function getShortestWord(sentence: string): string {
    const cleanSentence = sentence.trim().replace(/[^\w\s]/g, "");
    const words = cleanSentence.split(/\s+/);

    if (cleanSentence === "") {
        return "";
    }

    return words.reduce((shortest, current) => {
        return current.length < shortest.length ? current : shortest;
    }, words[0]);
}

const input = prompt("Enter a sentence:") || "";

const result = getShortestWord(input);

if (result) {
    console.log(`Shortest word: "${result}" (Length: ${result.length})`);
} else {
    console.log("No valid words entered.");
}