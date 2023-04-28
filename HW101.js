

let books = [
 [1 , 'Start with why'    ,  'Simon Sinek'          , 80    ,13 ]  // [ id , book title , aurthor , price , quantity]
,[2 , 'But how do it know',  'J. Clark Scott'       ,59.9   ,22]   
,[3 , 'Clean Code'        ,  'Robert Cecil Martin'  ,50     ,5]
,[4 , 'Zero to One'       ,  'Peter Thiel'          ,45     ,12]
,[5 ,'You don\'t know JS' ,  'Kyle Simpson'         ,39.9   ,9]
];
console.table(books); //to see what its look like
console.log(`------------------------------------------------------------------------------`);

function SId(id) {        //search by id
    for (let i = 0; i < books.length; i++) {
      if (books[i][0] === id) {
        return books[i];
      }
    }
    return null; 
  }

  function title(titl) {      //search by title
    for (let i = 0; i < books.length; i++) {
      if (books[i][1] === titl) {
        return books[i];
      }
    }
    return null; 
  }
  function aurthor(AT) {      //search by author
    for (let i = 0; i < books.length; i++) {
      if (books[i][2] === AT) {
        return books[i];
      }
    }
    return null; 
  }
function sell(name,amount,balance){        //Bill      
for (let i = 0; i < books.length; i++) {
    if (balance >= books[i][3] && books[i][1] == name && amount<=books[i][4]) {
        console.log(` Thanks for buying `);
        books[i][4] = books [i][4] - amount;
        console.log(`------------------------------------------------------------------------------`);
    }
  }
}
console.log(sell('Clean Code' , 2 , 500));
console.log(SId(2));
console.log(title('Clean Code'));
console.log(aurthor('Simon Sinek'));
console.table(books);
