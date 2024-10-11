# Movie App

You can see your favorite movies in the project, research movies and add your favorite movies to favorites.

## Features

- Reviewing popular movies with slider in the main page
- Search for movies
- Examine the movie you want in detail
- Add the movie to your favorites and find it there whenever you want

## Used Technologies

**Backend:** Node, Express, MongoDb, The Movie DB API

**Sunucu:** React, TailwindCss, Vite, React Icons, React Slick

## API Usage

```bash
 movie_detail -> https://api.themoviedb.org/3/movie/<movie.id>
```

```bash
 popular_movies -> https://api.themoviedb.org/3/movie/popular
```

```bash
 search -> https://api.themoviedb.org/3/search/movie?query=<search_text>
```

```bash
 trending -> https://api.themoviedb.org/3/trending/all/day?query=<day>
```

| Parametre | Açıklama                |
| :-------- | :------------------------- |
| `movie_detail` | Get single movie detail |
| `popular_movies` | Get popular movies |
| `search` | Get search movie or series |
| `trending` | Get trending movies for in day |

## Screenshots

![movie_home](https://github.com/user-attachments/assets/ad7071da-5829-401f-be75-c5fc0fb593ab)

![movie_search](https://github.com/user-attachments/assets/d55fdf05-b097-4419-b140-7984058964b5)

![movie_fav](https://github.com/user-attachments/assets/0d7891f9-ec6c-4e6a-bc53-b6a0378916c5)

![movie_popup](https://github.com/user-attachments/assets/3bc6a015-5450-4d3e-b5a5-05d075dc7a8e)

## Run

Clone the project

```bash
  git clone https://github.com/dilsad-erdogan/Movie_App.git
```

- BackEnd
Go to project directory
```bash
  cd backend
```
Run the project
```bash
  node index.js
```

- FrontEnd
Go to project directory
```bash
  cd frontend
```
Run the project
```bash
  npm run dev
```

## Support and Feedback

If you want any question or give any feedback, please contact me at: [@Dilşad Rukiye Erdoğan](https://www.linkedin.com/in/dilşad-erdoğan-089547221/)
