let books = [
  {id: '1', title: 'To Kill a Mockingbird', pages: "281"},
  {id: '2', title: '1984', pages: "328"},
  {id: '3', title: 'Pride and Prejudice', pages: "279"},
  {id: '4', title: 'The Great Gatsby', pages: "180"},
  {id: '5', title: "Harry Potter and the Sorcerer's Stone", pages: "309"},
]
let authors = [
  {id: '1', name: 'Harper Lee', verified: true, bookId:"1"},
  {id: '2', name: 'George Orwell', verified: false, bookId:"2"},
  {id: '3', name: 'Jane Austen', verified: true, bookId:"3"},
  {id: '4', name: 'F. Scott Fitzgerald', verified: true, bookId:"4"},
  {id: '5', name: 'J.K. Rowling', verified: false, bookId:"5"}
]
let reviews = [
  {id: '1', rating: 9, content: 'lorem ipsum', authorId: '1', bookId: '2'},
  {id: '2', rating: 10, content: 'lorem ipsum', authorId: '2', bookId: '1'},
  {id: '3', rating: 7, content: 'lorem ipsum', authorId: '3', bookId: '3'},
  {id: '4', rating: 5, content: 'lorem ipsum', authorId: '5', bookId: '4'},
  {id: '5', rating: 8, content: 'lorem ipsum', authorId: '2', bookId: '5'},
  {id: '6', rating: 7, content: 'lorem ipsum', authorId: '4', bookId: '2'},
  {id: '7', rating: 10, content: 'lorem ipsum', authorId: '3', bookId: '1'},
]
export default { books, authors, reviews }