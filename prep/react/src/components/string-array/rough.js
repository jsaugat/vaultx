const uniqueWords = (para) => {
  return [...new Set(para.split(" ").map((word) => word.toLowerCase()))];
};

console.log(uniqueWords("hello is Hello"));
