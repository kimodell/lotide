const tail = function(words) {
  if (words.length > 0) {
    return words.slice(1);
  } else {
    return [];
  }
};

module.exports = tail;

