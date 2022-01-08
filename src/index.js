module.exports = function toReadable (s) {
  let dig = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  let ten = ['','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let twen = ['','ten','twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

 s = s.toString();
 let l = s.length;
 let end1 = s.slice(-1);
 let end2 = s.slice(-2);  
 
 let digit = dig[s[l - 1]];
 let teen = ten[end2 - 10];
 let dec = twen[s[l - 2]];
 let hund = dig[s[l - 3]] + ' hundred';

 if (l == 1) result = digit; // 1
 
 if (l == 2) result = teen; // 15  
 if (l == 2 && end2 > 19) result = dec + ' ' + digit; // 25
 if (l == 2 && end1 == 0) result = dec; // 20
 
 if (l == 3) {
 if (end2 == 0) result = hund; // 100
 if (end1 == 0 && s[l - 2] != 0) result = (hund + ' ' + dec); // 120
 if (end1 < 10 && end1 > 0) result = (hund + ' ' + digit); // 105
 if (end2 < 20 && end2 > 10 ) result = (hund + ' ' + teen); // 115
 if (end2 > 19 && end1 != 0) result = (hund + ' ' + dec + ' ' + digit); // 125
 }

  return result;
}

