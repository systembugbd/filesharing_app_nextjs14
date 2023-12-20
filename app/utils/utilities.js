export const trucateFileName = (string = "", maxLength = 15, file) => {
  return string.length > maxLength
    ? `${string.substring(0, maxLength)}…${file?.type.split("/")[1]}`
    : string; // demo the
};
