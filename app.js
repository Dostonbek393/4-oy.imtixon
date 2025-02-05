/*Array1.
n natural soni berilgan. 3 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel3(n) nomli funksiya tuzing.
 📥 Input: getLevel3(5)
 📤 Output: [3, 9, 27, 81, 243]*/

/*function getLevel3(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(3 ** (i + 1));
  }
  return result;
}
console.log(getLevel3(5));*/

/*Array2.
n natural soni va X, Y butun sonlari berilgan (n > 2).
a[0] = X, a[1] = Y.
Qolgan elementlari esa o‘zidan oldingi ikki element yig‘indisiga teng bo‘lgan massivni hosil qiling va chiqarib bering.
📥 Input: n = 6, X = 1, Y = 2
 📤 Output: [1, 2, 3, 5, 8, 13]*/

/*function son(n) {
  let result = [1, 2];
  for (let i = 2; i < n; i++) {
    result.push(i + i);
  }
  return result;
}
console.log(son(6, 1, 2));*/

/*Array3.
n ta elementdan tashkil topgan massiv berilgan.
Massivning faqat toq indeksdagi elementlari teskari tartibda chiqarilsin.
📥 Input: [4, 5, 7, 8, 6, 9]
 📤 Output: [9, 8, 5]*/

/*function son(arr) {
  let result = [];
  for (let i = arr.length; i > 0; i--) {
    if (i % 2 == 1) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(son([4, 5, 7, 8, 6, 9]));*/

/*Array4.
n ta elementdan tashkil topgan massiv berilgan.
Massivda eng kichik va eng katta elementlar joylashgan indekslar yig‘indisi aniqlansin.
📥 Input: [10, 5, 3, 8, 1, 6, 9]
 📤 Output: 4 (1 eng kichik, 9 eng katta, indekslari 4 va 0, 4+0=4)*/

/*function son(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max, min };
}
console.log(son([10, 5, 3, 8, 1, 6, 9]));
console.log(0 + 4);*/

/*Array5.
n ta elementdan tashkil topgan massiv berilgan.
Massivning juft indeksdagi elementlari va toq indeksdagi elementlarini alohida massiv qilib chiqaring.
📥 Input: [4, 5, 7, 8, 6, 9]
 📤 Output:
 Juft indekslilar: [4, 7, 6]
 Toq indekslilar: [5, 8, 9]*/

/*function son(arr) {
  let result = [];
  let content = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      result.push(arr[i]);
    }
    if (i % 2 != 0) {
      content.push(arr[i]);
    }
  }
  return { content, result };
}
console.log(son([4, 5, 7, 8, 6, 9]));*/

/*Array6.
n ta elementdan tashkil topgan massiv berilgan.
Massivda eng ko‘p uchragan element va uning soni topilsin.
📥 Input: [2, 3, 2, 5, 3, 3, 7, 2, 3]
 📤 Output: Eng ko‘p uchragan element: 3, Uchrash soni: 4*/

/*function son(arr) {
  let result = [0];
  let contain = 1;
  for (let i = 0; i < arr.length; i++) {
    let counter = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++;
      }
    }
    if (counter > contain) {
      contain = counter;
      result = arr[i];
    }
  }
  return { result, contain };
}
console.log(son([2, 3, 2, 5, 3, 3, 7, 2, 3]));*/

/*Array7.
n ta elementdan tashkil topgan massiv va R butun soni berilgan.
Massiv elementlari orasidan R soniga eng uzoq son topilsin.
📥 Input: arr = [10, 15, 2, 30, 18], R = 12
 📤 Output: 30 (12 ga eng uzoq son 30 (farqi 18))*/

/*function son(arr, R) {
  let result = [0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
}
console.log(son([10, 15, 2, 30, 18], 12));*/

/*Array8.
n ta elementdan tashkil topgan massiv berilgan.
Massivni ikkiga ajrating:
Birinchi yarmi o‘zidan katta bo‘lgan elementlarni
Ikkinchi yarmi o‘zidan kichik bo‘lgan elementlarni chiqarib bering.
📥 Input: [7, 3, 9, 1, 8, 2, 4]
 📤 Output:
 Birinchi yarmi katta: [7, 9, 8]
 Ikkinchi yarmi kichik: [3, 1, 2, 4]*/

/*function son(arr) {
  let result = [];
  let counter = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 7) {
      result.push(arr[i]);
    }
    if (arr[i] < 7) {
      counter.push(arr[i]);
    }
  }
  return { result, counter };
}
console.log(son([7, 3, 9, 1, 8, 2, 4]));*/

/*Array9.
n ta elementdan tashkil topgan massiv berilgan.
Massivning barcha elementlarini ikkita nusxada chiqaruvchi programma tuzing.
📥 Input: [1, 2, 3, 4]
 📤 Output: [1, 1, 2, 2, 3, 3, 4, 4]*/

/*function son(arr) {
  let result = [];
  for (let i = 1; i <= arr.length; i++) {
    result.push(i, i);
  }
  return result;
}
console.log(son([1, 2, 3, 4]));*/

/*Array10.
n ta elementdan tashkil topgan massiv berilgan.
Massivning oxiridan boshlab har bir ikkinchi elementni chiqaruvchi programma tuzing.
📥 Input: [4, 5, 7, 8, 6, 9, 10, 15]
 📤 Output: [15, 9, 8, 5]*/

/*function son(arr) {
  let result = [];
  for (let i = arr.length + 1; i > 0; i -= 2) {
    result.push(arr[i]);
  }
  return result;
}
console.log(son([4, 5, 7, 8, 6, 9, 10, 15]));*/
