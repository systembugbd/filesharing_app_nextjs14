export const GenerateString = () => {
  const character =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  let result = "";
  for (let i = 0; i < 10; i++) {
    result += character.charAt(Math.floor(Math.random() * character.length));
  }
  return result;
};
