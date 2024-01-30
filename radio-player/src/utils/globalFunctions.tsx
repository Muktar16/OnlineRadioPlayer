export const getFirstWord = (sentence:string) => {
    const words = sentence.includes(',') ? sentence.split(',') : sentence.split(' ');
    return words[0] || null;
}