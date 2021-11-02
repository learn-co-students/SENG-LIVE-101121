export const books = [
    {
      id: 1,
      title: "Eloquent JavaScript: A Modern Introduction to Programming",
      author: "Marjin Haverbeke",
      genre: "technical",
      liked: true,
    
      reviews: [
        {
         user_id: 1,
          content: "Good book, but not great for new coders"
        }
      ]
    },
    {
      id: 2,
      title: "JavaScript & JQuery: Interactive Front-End Web Development",
     author: "Jon Duckett",
      genre: "technical",
      liked: true,
      image: "https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX258_BO1,204,203,200_.jpg",
      price: 15,
      reviews: [
        {
         user_id: 15,
          content: "good way to learn JQuery"
        }
      ]
    },
    {
      id: 4,
      title: "JavaScript: The Definitive Guide",
     author: "David Flanagan",
      genre: "technical",
      liked: false,
      image: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      price: 13,
      reviews: [
        {
         user_id: 44,
          content: "Great intro to js book"
        },
        {
         user_id: 350,
          content: "It really is the Definitive guide"
        }
      ]
    },
    {
      id: 5,
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      genre: "technical",
      liked: true,
      image: "https://learning.oreilly.com/library/cover/9780596517748/250w/",
      price: 10,
      reviews: [
        {
         user_id: 4,
          content: "I disagree with everything in this book"
        },
        {
         user_id: 350,
          content: "This is the only js book you need"
        }
      ]
    },
    {
      id: 6,
      title: "Learning React: Functional Web Development with React and Redux",
     author: " Alex Banks and Eve Porcello",
      genre: "technical",
      liked: false,
      image: "https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      price: 34,
      reviews: [
        {
         user_id: 99,
          content: "Good deep dive into react"
        }
      ]
    }
  ]
export const genres = [
    "Horror",
    "Technical",
    "Fantasy",
    "Sci-fi",
    "Non-Fiction",
    "Fiction",
    "Mystery",
    "Biography"
  ]
