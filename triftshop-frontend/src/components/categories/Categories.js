const categories = [
    {
      name: 'Women',
      groups: [
        { label: 'Clothing', options: ['T-shirt', 'Shorts', 'Jumpers', 'Suits', 'Skirts', 'Sweaters', 'Dresses', 'Skorts', 'Jumpsuits', 'Blouses', 'Cardigans', 'Tank Tops', 'Blazers', 'Pants', 'Leggings', 'Jackets', 'Coats'] },
        { label: 'Shoes', options: ['Boots', 'Sandals', 'Heels', 'Sneakers', 'Flats', 'Loafers', 'Wedges', 'Slippers'] },
        { label: 'Beauty & Care', options: ['Face Creams', 'Shampoo', 'Conditioners', 'Hair Masks', 'Body Lotion', 'Perfume', 'Makeup', 'Nail Care'] },
        { label: 'Fashion Accessories', options: ['Jewelry', 'Sunglasses', 'Hats', 'Scarves', 'Belts', 'Watches', 'Hair Accessories', 'Gloves', 'Wallets', 'Headbands', 'Ties & Bow Ties'] },
        { label: 'Bags', options: ['Handbags', 'Tote Bags', 'Clutch Bags', 'Backpacks', 'Crossbody Bags', 'Shoulder Bags', 'Duffel Bags', 'Sling Bags', 'Laptop Bags', 'Beach Bags', 'Messenger Bags'] },
      ],
    },
    {
      name: 'Men',
      subCatgroupsegories: [
        { label: 'Clothing', options: ['Suits', 'Jacket', 'T-shirts', 'Shirts', 'Jeans', 'Shorts', 'Sweaters', 'Blazers', 'Pants', 'Jumpers', 'Hoodies', 'Trousers', 'Vests', 'Coats', 'Chinos'] },
        { label: 'Shoes', options: ['Boots', 'Sneakers', 'Flats', 'Slippers'] },
        { label: 'Men Care', options: ['Shaving Cream', 'Aftershave', 'Face Wash', 'Shampoo', 'Conditioners', 'Hair Gel', 'Beard Oil', 'Perfume', 'Deodorants', 'Body Lotion', 'Face Creams'] },
        { label: 'Watches', options: ['Analog Watches', 'Digital Watches', 'Smart Watches', 'Chronograph Watches', 'Luxury Watches', 'Diving Watches', 'Sports Watches', 'Fashion Watches', 'Leather Strap Watches', 'Metal Strap Watches', 'Wooden Watches', 'Pocket Watches'] },
        { label: 'Bags', options: ['Leather Bags', 'Messenger Bags', 'Backpacks', 'Laptop Bags', 'Travel Bags'] },
        { label: 'Men Accessories', options: ['Belts', 'Hats', 'Sunglasses', 'Wallets', 'Cufflinks', 'Necklaces', 'Bracelets'] },
        { label: 'Ties & Bow Ties', options: ['Silk Ties', 'Linen Ties', 'Bow Ties', 'Pre-Tied Bow Ties', 'Pocket Squares', 'Tie Bars', 'Ascot Ties', 'Clip-On Ties', 'Knit Ties', 'Designer Ties', 'Slim Ties', 'Patterned Ties'] },
      ],
    },
    {
      name: 'Children',
      groups: [
        { label: 'Clothing', options: ['Dresses', 'Skirts', 'T-shirts', 'Jackets', 'Tops', 'Pants', 'Shorts', 'Sweaters', 'Overalls'] },
        { label: 'Shoes', options: ['Sneakers', 'Boots', 'Sandals', 'Slippers', 'Dress Shoes', 'Rain Boots'] },
        { label: 'Accessories', options: ['Hats', 'Gloves', 'Scarves', 'Bags', 'Headbands', 'Sunglasses', 'Belts', 'Watches'] },
        { label: 'Toys', options: ['Educational Toys', 'Building Blocks', 'Action Figures', 'Dolls', 'Playsets', 'Stuffed Animals', 'Cars & Vehicles', 'Musical Toys'] },
        { label: 'Sleepwear', options: ['Pajamas', 'Onesies', 'Sleep Shorts', 'Nightgowns', 'Robes'] },
        { label: 'Baby Care', options: ['Diapers', 'Baby Lotion', 'Baby Wipes', 'Baby Bottles', 'Pacifiers', 'Swaddles', 'Cribs', 'Car Seats'] },
        { label: 'Sportswear', options: ['Sports Shoes', 'T-shirts', 'Leggings', 'Tracksuits', 'Gym Bags', 'Hoodies'] },
      ],
    },
    {
      name: 'House',
      groups: [
        { label: 'Kitchenware', options: ['Plates', 'Mugs', 'Glassware', 'Cutlery', 'Cookware', 'Utensils'] },
        { label: 'Furniture', options: ['Sofas', 'Chairs', 'Tables', 'Beds', 'Storage', 'Shelving Units'] },
        { label: 'Lighting', options: ['Lamps', 'Ceiling Lights', 'LED Lights', 'Wall Sconces', 'Chandeliers'] },
        { label: 'Storage & Organization', options: ['Bins & Baskets', 'Closets & Wardrobes', 'Shelves', 'Drawer Organizers', 'Hooks & Hangers'] },
        { label: 'Gardening & Plants', options: ['Planters', 'Outdoor Furniture', 'Garden Tools', 'Artificial Plants', 'Indoor Plants', 'Pots'] },
        { label: 'Cleaning Supplies', options: ['Cleaning Tools', 'Laundry Detergent', 'Mops & Brooms', 'Disinfectants', 'Vacuum Cleaners'] },
        { label: 'Wall Art & Mirrors', options: ['Posters', 'Paintings', 'Framed Art', 'Mirrors', 'Wall Decals'] },
      ],
    },
    {
      name: 'Pets',
      groups: [
        { label: 'Pet Clothing', options: ['Dresses', 'Jackets', 'T-Shirts', 'Sweaters', 'Raincoats', 'Hoodies'] },
        { label: 'Pet Toys', options: ['Chew Toys', 'Plush Toys', 'Balls', 'Interactive Toys', 'Catnip Toys'] },
        { label: 'Pet Accessories', options: ['Collars', 'Leashes', 'Harnesses', 'Bowties', 'Bandanas', 'Pet Tags'] },
        { label: 'Pet Beds & Furniture', options: ['Dog Beds', 'Cat Trees', 'Pet Mats', 'Pet Cushions', 'Pet Sofas'] },
        { label: 'Pet Grooming', options: ['Brushes', 'Shampoos', 'Nail Clippers', 'Grooming Gloves', 'Pet Hair Dryers'] },
        { label: 'Pet Food & Treats', options: ['Dog Food', 'Cat Food', 'Treats', 'Supplements'] },
        { label: 'Pet Health', options: ['Flea & Tick Treatment', 'Vitamins', 'First Aid Kits', 'Supplements'] },
        { label: 'Pet Travel', options: ['Carriers', 'Travel Beds', 'Travel Bowls', 'Pet Seat Covers'] },
        { label: 'Pet Training', options: ['Training Collars', 'Training Pads', 'Pet Clickers', 'Training Treats'] },
      ],
    },
  ];
  