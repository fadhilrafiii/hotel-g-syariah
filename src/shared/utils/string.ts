export const isMatch = (string: string, keyword: string) => {
  const regex = new RegExp(keyword, "gi");
  return regex.test(string);
};
