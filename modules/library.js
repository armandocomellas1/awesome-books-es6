//Containes contructor method of the books
export default function Library(title, author, countElemt) {
  this.title = title;
  this.author = author;
  this.countElemt = `elem_${countElemt}`;
}
