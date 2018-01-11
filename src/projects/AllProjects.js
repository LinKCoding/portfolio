const AllProjects = [
  {
    title: "Scite (Science-Note)",
    image: "scite-thumbnail.png",
    description: "Scite was made with students in mind. Users can browse through various articles and create a scite using their personal note editor, lexicon, and dictionary to help guide them along. They can always go back and check their old notes and lexicon collection and edit them.",
    languages:["JavaScript", "React", "Draft.js", "Redux", "Ruby on Rails", "PostgreSQL"],
    icons: [
      {
        link: "https://github.com/LinKCoding/scite-frontend",
        name: "github square"
      },
      {
        link: "https://scite.herokuapp.com/",
        name: "external square"
      }
    ]
  },
  {
    title: "Re-Find",
    image: "reFind-thumbnail.png",
    description: "Re-Find is a search engine that filters recipes based on ingredients. Users can filted based on a selection of common allergens provided; they also have the option of including custom allergies. After deciding on a dish they would want to eat, results will populate with dishes safe for consumption.",
    languages: "JavaScript", "Ruby", "Ruby on Rails", "MySQLite"
    icons: [
      {
        link: "https://github.com/LinKCoding/js-allergies-frontend",
        name: "github square"},
      {
        link: "https://github.com/LinKCoding/js-allergies-backend",
        name: "github"
      }
    ]
  },
  {
    title: "Kofetcher"
    image: "kofetcher-thumbnail.png"
    description: "Kofetcher was inspired by the food delivery and tech integration services like grubhub. It explores a niche venue of delivering coffee to users from their shop of choice. Users will post an order with a set gratuity and another group of users (Fetchers), can accept this request. Users and fetchers are matched based on location and the delivery status is updated between the two parties."
    languages: ["Ruby", "Ruby on Rails", "MySQLite"]
    icons: [
      {
        link: "https://github.com/LinKCoding/kofetch",
        name: "github square"
      },
    ]
  },
  {
    title:"IMDB Clone"
    image: "imdbClone-thumbnail.png"
    description: "  IMDB clone is exactly like it sounds. However, instead of a complete website, it is a CLI application which allows users to research through a database containing 5,000 movie titles. With a twist of humor, users can search through titles, ratings, and even get recommendations based on year released and a rating threshold."
    languages: ["Ruby", "MySQLite"]
    icons: [{link: "https://github.com/LinKCoding/imdb-clone", name: "github square"}]
  }
]

export default AllProjects

//template for later
// {
//   title:
//   image:
//   description:
//   languages:
//   icons:
// }
