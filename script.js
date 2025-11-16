document.addEventListener('DOMContentLoaded', () => {
  const products = [
    // Hoodie
    {
      name: 'Valour Performance Hoodie',
      price: '18.000 BHD',
      images: ['images/ZZdwEWWXUyZzuFH8Zg1Sb.jpeg'], // hoodie image (Aston Martin hoodie you uploaded)
      desc: '80% Cotton, 20% Polyester. Soft & breathable hoodie.'
    },

    // T-Shirt
    {
      name: 'Breathable T-Shirt',
      price: '12.000 BHD',
      images: ['images/8w5qGAqwKskrzm7Zr6cXi.jpeg'], // beige shirt (The Rune Grip Club)
      desc: 'Lightweight cotton T-shirt for gym and daily wear.'
    },

    // Cap
    {
      name: 'Casual Cap',
      price: '4.500 BHD',
      images: ['images/GJvewvfFCfgGocirdKeHh.jpeg'], // person with jacket/bike used as cap placeholder
      desc: 'Comfortable sports cap with adjustable strap.'
    },

    // Athletic Pants
    {
      name: 'Athletic Pants',
      price: '15.000 BHD',
      images: ['images/Xq9kTrXRtFf8J8P3Pzfrn.jpeg'], // backpack image used as pants placeholder (change if you have pants photo)
      desc: 'Stretchy pants for workouts and jogging.'
    },

    // Backpack
    {
      name: 'Backpack Sport',
      price: '28.000 BHD',
      images: ['images/Xq9kTrXRtFf8J8P3Pzfrn.jpeg'], // actual backpack image
      desc: 'Durable backpack with multiple compartments.'
    },

    // Sport Watch
