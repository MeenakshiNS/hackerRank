/*
 Write a JavaScript program to display the reading status
  (i.e. display book name, author name and reading status) 
  of the following books.

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
*/

var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

// let [author,title,readingStatus] = library
// console.log(author,title,readingStatus);

for (let i = 0; i < library.length; i++) {
  console.log(
    `${i + 1}) Name of the Book is ${library[i].title} written by ${
      library[i].author
    } and your  reading status is ${library[i].readingStatus}`
  );
}
