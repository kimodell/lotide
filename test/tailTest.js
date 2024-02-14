const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
assertEqual(result.length, 2);

const words2 = ["no", "soup", "for", "you"] ;
const result2 = tail(words2);
assertEqual(result2.length, 3);

const words3 = ["one", "year"] ;
const result3 = tail(words3);
assertEqual(result3.length, 1);