const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();
const cors = require('cors');

const restaurants = [
  {
    name: 'Waffle House',
    price: '$',
    rating: '4',
    categories: ['diner', 'breakfast']
  },
  {
    name: 'Huddle House',
    price: '$',
    rating: '1',
    categories: ['diner', 'breakfast']
  },
  {
    name: 'International House of Pancakes',
    price: '$$',
    rating: '2',
    categories: ['casual', 'breakfast']
  },
  {
    name: 'White Castle',
    price: '$',
    rating: '4',
    categories: ['fast food', 'burgers']
  },
  {
    name: 'Rookery',
    price: '$$',
    rating: '3',
    categories: ['burgers', 'casual', 'american']
  },
  {
    name: 'Dove Tail',
    price: '$$$',
    rating: '3',
    categories: ['upscale', 'american']
  },
  {
    name: 'El Sombrero',
    price: '$$',
    rating: '2',
    categories: ['mexican', 'casual']
  },
  {
    name: "Elizabeth's",
    price: '$$$',
    rating: '5',
    categories: ['upscale', 'seafood']
  },
  {
    name: 'Pink House',
    price: '$$$',
    rating: '3',
    categories: ['upscale', 'seafood']
  },
  {
    name: 'Burger King',
    price: '$',
    rating: '2',
    categories: ['fast food', 'burgers']
  },
  {
    name: 'Krystal',
    price: '$',
    rating: '3',
    categories: ['fast food', 'burgers']
  },
  {
    name: 'McDonalds',
    price: '$',
    rating: '2',
    categories: ['fast food', 'burgers']
  },
  {
    name: 'Chik-fil-a',
    price: '$',
    rating: '3',
    categories: ['fast food']
  },
  {
    name: "Zaxby's",
    price: '$',
    rating: '4',
    categories: ['fast food']
  },
  {
    name: 'Go Vegetarian',
    price: '$',
    rating: '4',
    categories: ['casual', 'southern', 'american', 'vegan']
  },
  {
    name: 'Herban Fix',
    price: '$$$',
    rating: '5',
    categories: ['asian', 'upscale', 'vegan']
  },
  {
    name: 'Chicago Diner',
    price: '$$',
    rating: '5',
    categories: ['casual', 'american', 'vegan']
  },
  {
    name: 'Sweet Hut',
    price: '$$',
    rating: '4',
    categories: ['casual', 'coffee', 'dessert', 'asian']
  },
  {
    name: 'Mexikosher',
    price: '$$',
    rating: '5',
    categories: ['casual', 'mexican', 'kosher']
  },
  {
    name: 'Le Bernardin',
    price: '$$$',
    rating: '5',
    categories: ['upscale', 'seafood', 'french']
  },
  {
    name: 'Bezoria',
    price: '$$',
    rating: '2',
    categories: ['casual', 'halal', 'middle eastern']
  },
  {
    name: 'Baraka Sharwarma',
    price: '$',
    rating: '3',
    categories: ['halal', 'middle eastern']
  },
  {
    name: 'Taj',
    price: '$$',
    rating: '5',
    categories: ['casual', 'indian']
  },
  {
    name: 'Tin Drum',
    price: '$',
    rating: '5',
    categories: ['casual', 'asian']
  }
]

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/api/restaurants', function (req, res) {
  res.json(restaurants);
});


app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});