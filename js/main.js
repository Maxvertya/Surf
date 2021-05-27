///////// гласные буквы
const string = "Привет! Как дела?";

const vowels = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"]

const getVowels = string =>{
  let extractedVowels = ""

  for( let i = 0; i < string.length; i++){
    const currentLetter = string[i];
    if(vowels.includes(currentLetter)){
      extractedVowels = extractedVowels + currentLetter
    }
  }
  return extractedVowels
}

console.log(getVowels(string));


/////// salary
const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}];
  
  const getWorthyWorkers = workers =>{
  
   const WorthyWorkers = [];
   
   for(let i = 0; i < workers.length; i++){
   const currentWorker = workers[i];
   
   
   if(currentWorker.salary > 1000){
   WorthyWorkers.push(currentWorker.name);
   }
   }
   
   
   return WorthyWorkers
  }
  
  
  
  console.log(getWorthyWorkers(workers))


  ////////// фильтрация строки
  const path = "/users/download/index.html"

const isHtml = path =>{

const requiredEx = ".html"

const pathex = path.slice(-5)

if(requiredEx == pathex){
return true
} else{
return false
}
}    
 console.log(isHtml(path))


 //// slider
 const items = document.querySelector("#items");
 const leftbtn = document.querySelector("#left");
 const rightbtn = document.querySelector("#right");
 const computedstyle = getComputedStyle(items);
 


 rightbtn.addEventListener('click', function(e){
   e.preventDefault();
   let currentright = parseInt(computedstyle.right);

   if(currentright < 500){
     items.style.right = `${currentright + 100}px`
   }
  
});

leftbtn.addEventListener('click', function(e){
  e.preventDefault();
   let currentright = parseInt(computedstyle.right);

   if(currentright > 0){
     items.style.right = `${currentright - 100}px`
   }
  
});



/////////// array
const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = num => {
  return num % 2 === 0;
}

const filterArray = ( arrayToFilter, filterFn ) => {
  const filteredArray = [];

  arrayToFilter.forEach(num => {
    if (filterFn(num)) {
      filteredArray.push(num);
    }
  })

  return filteredArray;
}

console.log(filterArray(mixedArray, isEven));




