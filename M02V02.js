//input
const rawApiData = [
    { id: 1, productName: "Wireless Bluetooth Headphones", category: "Electronics", price: 49.99, rating: 4.5, stock: 120 },
    { id: 2, productName: "Running Shoes", category: "Footwear", price: 69.99, rating: 4.2, stock: 80 },
    { id: 3, productName: "Stainless Steel Water Bottle", category: "Accessories", price: 15.99, rating: 4.7, stock: 200 },
    { id: 4, productName: "Smartwatch Pro X", category: "Electronics", price: 129.99, rating: 4.3, stock: 65 },
    { id: 5, productName: "Cotton T-Shirt", category: "Clothing", price: 12.5, rating: 4.1, stock: 150 },
    { id: 6, productName: "Gaming Mouse RGB", category: "Electronics", price: 35.0, rating: 4.6, stock: 95 },
    { id: 7, productName: "Yoga Mat", category: "Fitness", price: 25.0, rating: 4.8, stock: 70 },
    { id: 8, productName: "Backpack 25L", category: "Accessories", price: 39.99, rating: 4.4, stock: 90 },
    { id: 9, productName: "LED Desk Lamp", category: "Home & Living", price: 22.75, rating: 4.5, stock: 110 },
    { id: 10, productName: "Noise Cancelling Earbuds", category: "Electronics", price: 89.99, rating: 4.6, stock: 55 },
    { id: 11, productName: "Fitness Tracker Band", category: "Fitness", price: 49.99, rating: 4.3, stock: 100 },
    { id: 12, productName: "Casual Sneakers", category: "Footwear", price: 59.99, rating: 4.1, stock: 140 },
    { id: 13, productName: "Scented Candle Set", category: "Home & Living", price: 18.99, rating: 4.8, stock: 200 },
    { id: 14, productName: "Wireless Keyboard", category: "Electronics", price: 29.99, rating: 4.2, stock: 85 },
    { id: 15, productName: "Hiking Backpack 40L", category: "Accessories", price: 79.99, rating: 4.7, stock: 60 },
    { id: 16, productName: "Leather Wallet", category: "Accessories", price: 19.99, rating: 4.5, stock: 180 },
    { id: 17, productName: "Cotton Hoodie", category: "Clothing", price: 34.99, rating: 4.4, stock: 90 },
    { id: 18, productName: "Digital Alarm Clock", category: "Home & Living", price: 16.99, rating: 4.3, stock: 130 },
    { id: 19, productName: "Portable Power Bank", category: "Electronics", price: 24.99, rating: 4.5, stock: 200 },
    { id: 20, productName: "Electric Kettle", category: "Home & Living", price: 32.99, rating: 4.4, stock: 110 },
    { id: 21, productName: "Men’s Leather Belt", category: "Accessories", price: 22.99, rating: 4.2, stock: 150 },
    { id: 22, productName: "Smart LED Bulb", category: "Electronics", price: 14.99, rating: 4.6, stock: 300 },
    { id: 23, productName: "Casual Jeans", category: "Clothing", price: 29.99, rating: 4.3, stock: 100 },
    { id: 24, productName: "Foam Roller", category: "Fitness", price: 19.99, rating: 4.8, stock: 75 },
    { id: 25, productName: "Waterproof Phone Case", category: "Accessories", price: 12.99, rating: 4.4, stock: 200 },
    { id: 26, productName: "Electric Toothbrush", category: "Home & Living", price: 45.99, rating: 4.7, stock: 60 },
    { id: 27, productName: "Sports Watch", category: "Fitness", price: 59.99, rating: 4.5, stock: 80 },
    { id: 28, productName: "Laptop Cooling Pad", category: "Electronics", price: 27.99, rating: 4.2, stock: 120 },
    { id: 29, productName: "Wool Scarf", category: "Clothing", price: 17.99, rating: 4.6, stock: 140 },
    { id: 30, productName: "Travel Adapter", category: "Accessories", price: 14.49, rating: 4.5, stock: 160 },
    { id: 31, productName: "Portable Speaker", category: "Electronics", price: 55.0, rating: 4.7, stock: 85 },
    { id: 32, productName: "Desk Organizer", category: "Home & Living", price: 21.5, rating: 4.3, stock: 100 },
    { id: 33, productName: "Stainless Steel Lunch Box", category: "Home & Living", price: 25.99, rating: 4.4, stock: 150 },
    { id: 34, productName: "Bluetooth Car Charger", category: "Electronics", price: 19.99, rating: 4.5, stock: 130 },
    { id: 35, productName: "Slim Fit Shirt", category: "Clothing", price: 28.99, rating: 4.2, stock: 115 },
    { id: 36, productName: "Resistance Bands", category: "Fitness", price: 15.5, rating: 4.8, stock: 200 },
    { id: 37, productName: "Bean Bag Cover", category: "Home & Living", price: 44.99, rating: 4.3, stock: 75 },
    { id: 38, productName: "Smart Plug", category: "Electronics", price: 24.99, rating: 4.6, stock: 180 },
    { id: 39, productName: "Graphic T-Shirt", category: "Clothing", price: 14.99, rating: 4.4, stock: 130 },
    { id: 40, productName: "Camping Tent 2P", category: "Accessories", price: 89.99, rating: 4.7, stock: 50 },
    { id: 41, productName: "Foam Pillow", category: "Home & Living", price: 18.99, rating: 4.5, stock: 200 },
    { id: 42, productName: "Wireless Charger Pad", category: "Electronics", price: 29.5, rating: 4.6, stock: 90 },
    { id: 43, productName: "Sports Cap", category: "Clothing", price: 11.99, rating: 4.2, stock: 140 },
    { id: 44, productName: "Jump Rope", category: "Fitness", price: 9.99, rating: 4.7, stock: 210 },
    { id: 45, productName: "Table Lamp", category: "Home & Living", price: 27.99, rating: 4.4, stock: 95 },
    { id: 46, productName: "Laptop Sleeve", category: "Accessories", price: 23.99, rating: 4.5, stock: 120 },
    { id: 47, productName: "Bluetooth Soundbar", category: "Electronics", price: 75.99, rating: 4.6, stock: 70 },
    { id: 48, productName: "Cotton Shorts", category: "Clothing", price: 19.49, rating: 4.3, stock: 150 },
    { id: 49, productName: "Adjustable Dumbbells", category: "Fitness", price: 99.99, rating: 4.8, stock: 45 },
    { id: 50, productName: "Wall Clock", category: "Home & Living", price: 24.99, rating: 4.5, stock: 100 }
  ];
  


//out put => [ { name: "phone", { name: "Smart watch   "}}];

//* Process
//* filter => Electronics
//* sort by => rating
//* slice => top 3
//* map => transform object shape

const topElectronicsProducts = rawApiData.filter(item => item.category === "Electronics").sort((a,b)=> b.rating - a.rating).slice(0,3).map(item => {
    return { name: item.productName, rating: item.rating}
});

console.log(topElectronicsProducts);

