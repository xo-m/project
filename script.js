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
    {
      name: 'Sport Watch',
      price: '55.000 BHD',
      images: ['images/KZsyaAvHHwiHeLmZLYzCv.jpeg'], // watch close-up
      desc: 'Water-resistant sports watch with timer features.'
    }
  ];

  const productGrid = document.getElementById('productGrid');
  const modal = document.getElementById('quickViewModal');
  const modalBody = document.getElementById('modalBody');
  const closeModal = document.getElementById('closeModal');

  // clear any existing content (if re-running)
  productGrid.innerHTML = '';

  // populate grid
  products.forEach((p,i)=>{
    const card = document.createElement('div');
    card.className='product-card';
    card.innerHTML = `
      <img src='${p.images[0]}' alt='${p.name}' />
      <div class='info'>
        <h3>${p.name}</h3>
        <div class='price'>${p.price}</div>
        <button data-index='${i}' class='quick-view'>Quick View</button>
      </div>
    `;
    productGrid.appendChild(card);
  });

  // delegate click for quick view (works for dynamic content)
  productGrid.addEventListener('click', (e)=>{
    const btn = e.target.closest('.quick-view');
    if(!btn) return;
    const index = btn.getAttribute('data-index');
    const prod = products[index];
    let imagesHtml = prod.images.map(img => `<img src='${img}' alt='${prod.name}' />`).join('');
    modalBody.innerHTML = `${imagesHtml}<h2>${prod.name}</h2><div class='price'>${prod.price}</div><p>${prod.desc}</p><button class='btn-primary'>Add to Cart</button>`;
    modal.style.display='flex';
    modal.setAttribute('aria-hidden','false');
  });

  // close modal
  closeModal.addEventListener('click', close);
  modal.addEventListener('click', (e)=>{ if(e.target === modal) close(); });
  function close(){ modal.style.display='none'; modal.setAttribute('aria-hidden','true'); }
});
