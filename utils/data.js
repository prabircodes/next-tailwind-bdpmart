import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Prabir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Partha',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Potato',
      slug: 'potato',
      category: 'Vegetables',
      image: '/images/potato.webp',
      price: 40,
      brand: 'Fresh',
      rating: '4.5',
      numReviews: 8,
      countInStock: 20,
      description: 'Firm fresh potatos',
    },
    {
      name: 'Banana',
      slug: 'banana',
      category: 'Fruits',
      image: '/images/banana.webp',
      price: 40,
      brand: 'Fresh',
      rating: '4.5',
      numReviews: 8,
      countInStock: 20,
      description: 'Firm fresh potatos',
    },
    {
      name: 'Brinjal Small',
      slug: 'brinjal-small',
      category: 'Fruits',
      image: '/images/brinjal-small.webp',
      price: 40,
      brand: 'Fresh',
      rating: '4.5',
      numReviews: 8,
      countInStock: 20,
      description: 'Firm fresh potatos',
    },
    {
      name: 'Dates',
      slug: 'dates',
      category: 'Dry Fruits',
      image: '/images/dates.webp',
      price: 40,
      brand: 'Fresh',
      rating: '4.5',
      numReviews: 8,
      countInStock: 20,
      description: 'Firm fresh potatos',
    },
    {
      name: 'Green Chillies',
      slug: 'green-chillies',
      category: 'Vegetables',
      image: '/images/GreenChilli.webp',
      price: 40,
      brand: 'Fresh',
      rating: '4.5',
      numReviews: 8,
      countInStock: 20,
      description: 'Firm fresh potatos',
    },
    {
      name: 'Ladies Finger',
      slug: 'ladies-finger',
      category: 'Vegetables',
      image: '/images/LadiesFinger.webp',
      price: 40,
      brand: 'Fresh',
      rating: '4.5',
      numReviews: 8,
      countInStock: 20,
      description: 'Firm fresh potatos',
    },
    {
      name: 'Mutton',
      slug: 'mutton',
      category: 'Meat',
      image: '/images/mutton.webp',
      price: 40,
      brand: 'Fresh',
      rating: '4.5',
      numReviews: 8,
      countInStock: 20,
      description: 'Firm fresh potatos',
    },
    {
      name: 'Pabda Fish',
      slug: 'pabda-fish',
      category: 'Fish',
      image: '/images/pabda.webp',
      price: 40,
      brand: 'Fresh',
      rating: '4.5',
      numReviews: 8,
      countInStock: 20,
      description: 'Firm fresh potatos',
    },
    {
      name: 'Raw Papaya',
      slug: 'raw-papaya',
      category: 'Vegetables',
      image: '/images/rawPapaya.webp',
      price: 40,
      brand: 'Fresh',
      rating: '4.5',
      numReviews: 8,
      countInStock: 20,
      description: 'Firm fresh potatos',
    },
    {
      name: 'Rohu Fish',
      slug: 'rohu-fish',
      category: 'Vegetables',
      image: '/images/rohu.webp',
      price: 40,
      brand: 'Fresh',
      rating: '4.5',
      numReviews: 8,
      countInStock: 20,
      description: 'Firm fresh potatos',
    },
  ],
}

export default data
