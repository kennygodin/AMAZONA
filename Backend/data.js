import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Kenechukwu',
      email: 'admin@kenechukwu.com',
      password: bcrypt.hashSync('kenechukwu'),
      isAdmin: true,
    },
    {
      name: 'Godwin',
      email: 'viviangodin30@gmail.com',
      password: bcrypt.hashSync('viviangodin'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Adidas Fit shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 7,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-slim-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality pant',
    },
  ],
};

export default data;
