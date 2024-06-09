const ProductSchema = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://example.com/product.schema.json",
    "title": "Product",
    "description": "A product from Ecopick's catalog",
    "type": "object",
    "properties": {
      "productId": {
        "description": "The unique identifier for a product",
        "type": "integer"
      },
      "productName": {
        "description": "Name of the product",
        "type": "string"
      },
      "imageSource": {
        "description": "If offline, filepath within \"$PROJECT_ROOT/assets/images/products\". If online, url",
        "type": "string"
      },
      "ecoRating": {
        "description": "Eco Rating out of 5.0",
        "type": "float"
      },
      "userRating": {
        "description": "User Rating out of 5.0",
        "type": "float"
      },
      "category": {
        "description": "One of the five: food, home-appliances, kids, men-fashion, women-fashion",
        "type": "string"
      },
    }
  }

export const Products = [
  {
    "productId": 1,
    "productName": "Recycled Plastic Toy Car",
    "imageSource": "assets/images/products/eco_friendly_puzzle.jpg",
    "ecoRating": 4.9,
    "userRating": 3.7,
    "category": "kids"
  },
  {
    "productId": 2,
    "productName": "Coconut Oil",
    "imageSource": "assets/images/products/quinoa.jpg",
    "ecoRating": 1.9,
    "userRating": 3.4,
    "category": "food"
  },
  {
    "productId": 3,
    "productName": "Organic Honey",
    "imageSource": "assets/images/products/organic_honey.jpg",
    "ecoRating": 1.4,
    "userRating": 2.8,
    "category": "food"
  },
  {
    "productId": 4,
    "productName": "Hemp Scarf",
    "imageSource": "assets/images/products/recycled_polyester_handbag.jpg",
    "ecoRating": 4.3,
    "userRating": 4.1,
    "category": "women-fashion"
  },
  {
    "productId": 5,
    "productName": "Chia Seeds",
    "imageSource": "assets/images/products/gluten_free_bread.jpg",
    "ecoRating": 4.6,
    "userRating": 4.7,
    "category": "food"
  },
  {
    "productId": 6,
    "productName": "Organic Cotton T-Shirt",
    "imageSource": "assets/images/products/organic_cotton_socks.jpg",
    "ecoRating": 4.0,
    "userRating": 4.7,
    "category": "men-fashion"
  },
  {
    "productId": 7,
    "productName": "Eco-Friendly Necklace",
    "imageSource": "assets/images/products/eco_friendly_necklace.jpg",
    "ecoRating": 4.0,
    "userRating": 3.7,
    "category": "women-fashion"
  },
  {
    "productId": 8,
    "productName": "Organic Cotton Blanket",
    "imageSource": "assets/images/products/non_toxic_crayons.jpg",
    "ecoRating": 2.6,
    "userRating": 4.7,
    "category": "kids"
  },
  {
    "productId": 9,
    "productName": "Organic Cotton T-Shirt",
    "imageSource": "assets/images/products/organic_cotton_jeans.jpg",
    "ecoRating": 3.0,
    "userRating": 1.5,
    "category": "men-fashion"
  },
  {
    "productId": 10,
    "productName": "Non-Toxic Crayons",
    "imageSource": "assets/images/products/bpa_free_baby_bottle.jpg",
    "ecoRating": 1.7,
    "userRating": 2.8,
    "category": "kids"
  },
  {
    "productId": 11,
    "productName": "Recycled Plastic Vacuum Cleaner",
    "imageSource": "assets/images/products/solar_water_heater.jpg",
    "ecoRating": 2.8,
    "userRating": 2.9,
    "category": "home-appliances"
  },
  {
    "productId": 12,
    "productName": "Eco-Friendly Watch",
    "imageSource": "assets/images/products/organic_cotton_jeans.jpg",
    "ecoRating": 4.4,
    "userRating": 1.2,
    "category": "men-fashion"
  },
  {
    "productId": 13,
    "productName": "Solar Powered Lamp",
    "imageSource": "assets/images/products/solar_powered_lamp.jpg",
    "ecoRating": 5.0,
    "userRating": 4.0,
    "category": "home-appliances"
  },
  {
    "productId": 14,
    "productName": "Eco-Friendly Blender",
    "imageSource": "assets/images/products/low_energy_washing_machine.jpg",
    "ecoRating": 2.4,
    "userRating": 3.1,
    "category": "home-appliances"
  },
  {
    "productId": 15,
    "productName": "Vegan Protein Bar",
    "imageSource": "assets/images/products/vegan_protein_bar.jpg",
    "ecoRating": 1.9,
    "userRating": 4.0,
    "category": "food"
  },
  {
    "productId": 16,
    "productName": "Solar Water Heater",
    "imageSource": "assets/images/products/water_saving_dishwasher.jpg",
    "ecoRating": 2.4,
    "userRating": 3.1,
    "category": "home-appliances"
  },
  {
    "productId": 17,
    "productName": "Recycled Plastic Vacuum Cleaner",
    "imageSource": "assets/images/products/eco_friendly_blender.jpg",
    "ecoRating": 3.3,
    "userRating": 3.2,
    "category": "home-appliances"
  },
  {
    "productId": 18,
    "productName": "Organic Apple",
    "imageSource": "assets/images/products/chia_seeds.jpg",
    "ecoRating": 3.9,
    "userRating": 3.0,
    "category": "food"
  },
  {
    "productId": 19,
    "productName": "Organic Honey",
    "imageSource": "assets/images/products/coconut_oil.jpg",
    "ecoRating": 3.4,
    "userRating": 2.3,
    "category": "food"
  },
  {
    "productId": 20,
    "productName": "Non-Toxic Crayons",
    "imageSource": "assets/images/products/bpa_free_baby_bottle.jpg",
    "ecoRating": 3.1,
    "userRating": 2.7,
    "category": "kids"
  },
  {
    "productId": 21,
    "productName": "Eco-Friendly Necklace",
    "imageSource": "assets/images/products/bamboo_earrings.jpg",
    "ecoRating": 1.7,
    "userRating": 3.3,
    "category": "women-fashion"
  },
  {
    "productId": 22,
    "productName": "Recycled Material Purse",
    "imageSource": "assets/images/products/organic_cotton_bra.jpg",
    "ecoRating": 3.1,
    "userRating": 1.7,
    "category": "women-fashion"
  },
  {
    "productId": 23,
    "productName": "Vegan Protein Bar",
    "imageSource": "assets/images/products/vegan_protein_bar.jpg",
    "ecoRating": 1.4,
    "userRating": 2.7,
    "category": "food"
  },
  {
    "productId": 24,
    "productName": "Organic Apple",
    "imageSource": "assets/images/products/vegan_protein_bar.jpg",
    "ecoRating": 4.8,
    "userRating": 2.1,
    "category": "food"
  },
  {
    "productId": 25,
    "productName": "Energy Star Air Conditioner",
    "imageSource": "assets/images/products/energy_star_air_conditioner.jpg",
    "ecoRating": 4.2,
    "userRating": 2.6,
    "category": "home-appliances"
  },
  {
    "productId": 26,
    "productName": "Solar Water Heater",
    "imageSource": "assets/images/products/energy_efficient_refrigerator.jpg",
    "ecoRating": 2.1,
    "userRating": 3.5,
    "category": "home-appliances"
  },
  {
    "productId": 27,
    "productName": "Organic Honey",
    "imageSource": "assets/images/products/organic_apple.jpg",
    "ecoRating": 4.8,
    "userRating": 4.1,
    "category": "food"
  },
  {
    "productId": 28,
    "productName": "Solar Powered Lamp",
    "imageSource": "assets/images/products/energy_efficient_refrigerator.jpg",
    "ecoRating": 2.6,
    "userRating": 2.4,
    "category": "home-appliances"
  },
  {
    "productId": 29,
    "productName": "Recycled Plastic Belt",
    "imageSource": "assets/images/products/eco_friendly_watch.jpg",
    "ecoRating": 2.3,
    "userRating": 4.5,
    "category": "men-fashion"
  },
  {
    "productId": 30,
    "productName": "Recycled Polyester Handbag",
    "imageSource": "assets/images/products/bamboo_earrings.jpg",
    "ecoRating": 4.8,
    "userRating": 3.3,
    "category": "women-fashion"
  },
  {
    "productId": 31,
    "productName": "Organic Honey",
    "imageSource": "assets/images/products/organic_honey.jpg",
    "ecoRating": 1.3,
    "userRating": 1.6,
    "category": "food"
  },
  {
    "productId": 32,
    "productName": "Hemp Hat",
    "imageSource": "assets/images/products/eco_friendly_watch.jpg",
    "ecoRating": 4.9,
    "userRating": 4.3,
    "category": "men-fashion"
  },
  {
    "productId": 33,
    "productName": "Eco-Friendly Puzzle",
    "imageSource": "assets/images/products/eco_friendly_puzzle.jpg",
    "ecoRating": 1.7,
    "userRating": 1.1,
    "category": "kids"
  },
  {
    "productId": 34,
    "productName": "Eco-Friendly Watch",
    "imageSource": "assets/images/products/recycled_material_wallet.jpg",
    "ecoRating": 2.5,
    "userRating": 4.2,
    "category": "men-fashion"
  },
  {
    "productId": 35,
    "productName": "Gluten-Free Bread",
    "imageSource": "assets/images/products/quinoa.jpg",
    "ecoRating": 4.9,
    "userRating": 1.0,
    "category": "food"
  },
  {
    "productId": 36,
    "productName": "Bamboo Earrings",
    "imageSource": "assets/images/products/hemp_scarf.jpg",
    "ecoRating": 3.5,
    "userRating": 4.9,
    "category": "women-fashion"
  },
  {
    "productId": 37,
    "productName": "Organic Cotton Leggings",
    "imageSource": "assets/images/products/organic_cotton_leggings.jpg",
    "ecoRating": 1.2,
    "userRating": 3.0,
    "category": "women-fashion"
  },
  {
    "productId": 38,
    "productName": "Eco-Friendly Blender",
    "imageSource": "assets/images/products/recycled_material_toaster.jpg",
    "ecoRating": 2.5,
    "userRating": 5.0,
    "category": "home-appliances"
  },
  {
    "productId": 39,
    "productName": "Recycled Polyester Handbag",
    "imageSource": "assets/images/products/organic_cotton_dress.jpg",
    "ecoRating": 5.0,
    "userRating": 3.0,
    "category": "women-fashion"
  },
  {
    "productId": 40,
    "productName": "Organic Cotton Leggings",
    "imageSource": "assets/images/products/organic_cotton_bra.jpg",
    "ecoRating": 3.0,
    "userRating": 4.9,
    "category": "women-fashion"
  },
  {
    "productId": 41,
    "productName": "Almond Milk",
    "imageSource": "assets/images/products/almond_milk.jpg",
    "ecoRating": 3.5,
    "userRating": 3.8,
    "category": "food"
  },
  {
    "productId": 42,
    "productName": "Eco-Friendly Necklace",
    "imageSource": "assets/images/products/hemp_scarf.jpg",
    "ecoRating": 1.2,
    "userRating": 1.8,
    "category": "women-fashion"
  },
  {
    "productId": 43,
    "productName": "Organic Cotton Dress",
    "imageSource": "assets/images/products/organic_cotton_dress.jpg",
    "ecoRating": 2.5,
    "userRating": 4.4,
    "category": "women-fashion"
  },
  {
    "productId": 44,
    "productName": "Organic Cotton Onesie",
    "imageSource": "assets/images/products/reusable_cloth_diaper.jpg",
    "ecoRating": 3.9,
    "userRating": 3.8,
    "category": "kids"
  },
  {
    "productId": 45,
    "productName": "Recycled Plastic Vacuum Cleaner",
    "imageSource": "assets/images/products/eco_friendly_blender.jpg",
    "ecoRating": 4.3,
    "userRating": 1.9,
    "category": "home-appliances"
  },
  {
    "productId": 46,
    "productName": "Solar Powered Lamp",
    "imageSource": "assets/images/products/low_energy_washing_machine.jpg",
    "ecoRating": 3.1,
    "userRating": 1.6,
    "category": "home-appliances"
  },
  {
    "productId": 47,
    "productName": "Almond Milk",
    "imageSource": "assets/images/products/almond_milk.jpg",
    "ecoRating": 4.1,
    "userRating": 4.1,
    "category": "food"
  },
  {
    "productId": 48,
    "productName": "Recycled Material Purse",
    "imageSource": "assets/images/products/organic_cotton_dress.jpg",
    "ecoRating": 4.4,
    "userRating": 3.8,
    "category": "women-fashion"
  },
  {
    "productId": 49,
    "productName": "Organic Cotton T-Shirt",
    "imageSource": "assets/images/products/recycled_material_wallet.jpg",
    "ecoRating": 1.6,
    "userRating": 1.5,
    "category": "men-fashion"
  },
  {
    "productId": 50,
    "productName": "Eco-Friendly Watch",
    "imageSource": "assets/images/products/eco_friendly_watch.jpg",
    "ecoRating": 1.8,
    "userRating": 4.5,
    "category": "men-fashion"
  },
  {
    "productId": 51,
    "productName": "Recycled Plastic Sunglasses",
    "imageSource": "assets/images/products/recycled_polyester_handbag.jpg",
    "ecoRating": 2.3,
    "userRating": 4.6,
    "category": "women-fashion"
  },
  {
    "productId": 52,
    "productName": "Eco-Friendly Wooden Toy",
    "imageSource": "assets/images/products/organic_cotton_onesie.jpg",
    "ecoRating": 3.6,
    "userRating": 2.8,
    "category": "kids"
  },
  {
    "productId": 53,
    "productName": "Wooden Building Blocks",
    "imageSource": "assets/images/products/biodegradable_baby_wipes.jpg",
    "ecoRating": 3.1,
    "userRating": 1.3,
    "category": "kids"
  },
  {
    "productId": 54,
    "productName": "Eco-Friendly Blender",
    "imageSource": "assets/images/products/eco_kettle.jpg",
    "ecoRating": 2.0,
    "userRating": 1.2,
    "category": "home-appliances"
  },
  {
    "productId": 55,
    "productName": "Organic Apple",
    "imageSource": "assets/images/products/vegan_cheese.jpg",
    "ecoRating": 3.8,
    "userRating": 1.4,
    "category": "food"
  },
  {
    "productId": 56,
    "productName": "Organic Cotton Jeans",
    "imageSource": "assets/images/products/organic_cotton_jeans.jpg",
    "ecoRating": 2.7,
    "userRating": 2.5,
    "category": "men-fashion"
  },
  {
    "productId": 57,
    "productName": "Reusable Cloth Diaper",
    "imageSource": "assets/images/products/recycled_plastic_toy_car.jpg",
    "ecoRating": 2.1,
    "userRating": 3.3,
    "category": "kids"
  },
  {
    "productId": 58,
    "productName": "Organic Honey",
    "imageSource": "assets/images/products/organic_apple.jpg",
    "ecoRating": 3.9,
    "userRating": 3.3,
    "category": "food"
  },
  {
    "productId": 59,
    "productName": "Low Energy Washing Machine",
    "imageSource": "assets/images/products/solar_powered_lamp.jpg",
    "ecoRating": 1.9,
    "userRating": 3.6,
    "category": "home-appliances"
  },
  {
    "productId": 60,
    "productName": "Eco-Friendly Watch",
    "imageSource": "assets/images/products/eco_friendly_watch.jpg",
    "ecoRating": 4.1,
    "userRating": 4.1,
    "category": "men-fashion"
  },
  {
    "productId": 61,
    "productName": "Organic Granola",
    "imageSource": "assets/images/products/gluten_free_bread.jpg",
    "ecoRating": 3.6,
    "userRating": 3.0,
    "category": "food"
  },
  {
    "productId": 62,
    "productName": "Vegan Protein Bar",
    "imageSource": "assets/images/products/vegan_protein_bar.jpg",
    "ecoRating": 1.1,
    "userRating": 1.7,
    "category": "food"
  },
  {
    "productId": 63,
    "productName": "Quinoa",
    "imageSource": "assets/images/products/almond_milk.jpg",
    "ecoRating": 1.6,
    "userRating": 4.8,
    "category": "food"
  },
  {
    "productId": 64,
    "productName": "Chia Seeds",
    "imageSource": "assets/images/products/gluten_free_bread.jpg",
    "ecoRating": 4.1,
    "userRating": 2.1,
    "category": "food"
  },
  {
    "productId": 65,
    "productName": "Vegan Cheese",
    "imageSource": "assets/images/products/organic_apple.jpg",
    "ecoRating": 3.2,
    "userRating": 1.7,
    "category": "food"
  },
  {
    "productId": 66,
    "productName": "Recycled Plastic Belt",
    "imageSource": "assets/images/products/eco_friendly_sneakers.jpg",
    "ecoRating": 2.8,
    "userRating": 2.4,
    "category": "men-fashion"
  },
  {
    "productId": 67,
    "productName": "Wooden Building Blocks",
    "imageSource": "assets/images/products/organic_cotton_blanket.jpg",
    "ecoRating": 4.4,
    "userRating": 3.7,
    "category": "kids"
  },
  {
    "productId": 68,
    "productName": "Organic Cotton Dress",
    "imageSource": "assets/images/products/organic_cotton_bra.jpg",
    "ecoRating": 2.2,
    "userRating": 4.6,
    "category": "women-fashion"
  },
  {
    "productId": 69,
    "productName": "Coconut Oil",
    "imageSource": "assets/images/products/organic_apple.jpg",
    "ecoRating": 2.9,
    "userRating": 3.9,
    "category": "food"
  },
  {
    "productId": 70,
    "productName": "Organic Cotton Dress",
    "imageSource": "assets/images/products/recycled_material_purse.jpg",
    "ecoRating": 3.6,
    "userRating": 4.9,
    "category": "women-fashion"
  },
  {
    "productId": 71,
    "productName": "Organic Cotton Onesie",
    "imageSource": "assets/images/products/non_toxic_crayons.jpg",
    "ecoRating": 3.4,
    "userRating": 4.6,
    "category": "kids"
  },
  {
    "productId": 72,
    "productName": "Water Saving Dishwasher",
    "imageSource": "assets/images/products/solar_water_heater.jpg",
    "ecoRating": 3.3,
    "userRating": 1.9,
    "category": "home-appliances"
  },
  {
    "productId": 73,
    "productName": "Recycled Material Wallet",
    "imageSource": "assets/images/products/recycled_plastic_belt.jpg",
    "ecoRating": 4.7,
    "userRating": 4.7,
    "category": "men-fashion"
  },
  {
    "productId": 74,
    "productName": "Vegan Protein Bar",
    "imageSource": "assets/images/products/almond_milk.jpg",
    "ecoRating": 3.4,
    "userRating": 4.7,
    "category": "food"
  },
  {
    "productId": 75,
    "productName": "Recycled Plastic Belt",
    "imageSource": "assets/images/products/organic_cotton_tshirt.jpg",
    "ecoRating": 3.4,
    "userRating": 3.5,
    "category": "men-fashion"
  },
  {
    "productId": 76,
    "productName": "Organic Apple",
    "imageSource": "assets/images/products/chia_seeds.jpg",
    "ecoRating": 3.5,
    "userRating": 4.3,
    "category": "food"
  },
  {
    "productId": 77,
    "productName": "Recycled Polyester Handbag",
    "imageSource": "assets/images/products/organic_cotton_bra.jpg",
    "ecoRating": 1.1,
    "userRating": 3.7,
    "category": "women-fashion"
  },
  {
    "productId": 78,
    "productName": "Energy Star Air Conditioner",
    "imageSource": "assets/images/products/recycled_material_toaster.jpg",
    "ecoRating": 3.5,
    "userRating": 1.1,
    "category": "home-appliances"
  },
  {
    "productId": 79,
    "productName": "Organic Cotton Leggings",
    "imageSource": "assets/images/products/organic_cotton_dress.jpg",
    "ecoRating": 3.8,
    "userRating": 3.3,
    "category": "women-fashion"
  },
  {
    "productId": 80,
    "productName": "Recycled Plastic Belt",
    "imageSource": "assets/images/products/recycled_polyester_jacket.jpg",
    "ecoRating": 2.0,
    "userRating": 3.0,
    "category": "men-fashion"
  },
  {
    "productId": 81,
    "productName": "Recycled Material Wallet",
    "imageSource": "assets/images/products/organic_cotton_socks.jpg",
    "ecoRating": 1.1,
    "userRating": 4.2,
    "category": "men-fashion"
  },
  {
    "productId": 82,
    "productName": "Solar Water Heater",
    "imageSource": "assets/images/products/eco_kettle.jpg",
    "ecoRating": 2.1,
    "userRating": 3.5,
    "category": "home-appliances"
  },
  {
    "productId": 83,
    "productName": "Eco-Friendly Puzzle",
    "imageSource": "assets/images/products/organic_cotton_blanket.jpg",
    "ecoRating": 1.9,
    "userRating": 3.7,
    "category": "kids"
  },
  {
    "productId": 84,
    "productName": "Recycled Plastic Toy Car",
    "imageSource": "assets/images/products/non_toxic_crayons.jpg",
    "ecoRating": 1.3,
    "userRating": 3.5,
    "category": "kids"
  },
  {
    "productId": 85,
    "productName": "Recycled Plastic Toy Car",
    "imageSource": "assets/images/products/eco_friendly_puzzle.jpg",
    "ecoRating": 2.1,
    "userRating": 2.2,
    "category": "kids"
  },
  {
    "productId": 86,
    "productName": "Eco-Friendly Sandals",
    "imageSource": "assets/images/products/organic_cotton_leggings.jpg",
    "ecoRating": 4.3,
    "userRating": 4.5,
    "category": "women-fashion"
  },
  {
    "productId": 87,
    "productName": "Recycled Material Toaster",
    "imageSource": "assets/images/products/solar_powered_lamp.jpg",
    "ecoRating": 4.8,
    "userRating": 3.6,
    "category": "home-appliances"
  },
  {
    "productId": 88,
    "productName": "Solar Powered Lamp",
    "imageSource": "assets/images/products/recycled_material_toaster.jpg",
    "ecoRating": 2.3,
    "userRating": 1.7,
    "category": "home-appliances"
  },
  {
    "productId": 89,
    "productName": "Recycled Plastic Sunglasses",
    "imageSource": "assets/images/products/eco_friendly_necklace.jpg",
    "ecoRating": 1.5,
    "userRating": 1.1,
    "category": "women-fashion"
  },
  {
    "productId": 90,
    "productName": "Chia Seeds",
    "imageSource": "assets/images/products/gluten_free_bread.jpg",
    "ecoRating": 3.4,
    "userRating": 3.8,
    "category": "food"
  },
  {
    "productId": 91,
    "productName": "Eco-Friendly Blender",
    "imageSource": "assets/images/products/low_energy_washing_machine.jpg",
    "ecoRating": 1.5,
    "userRating": 1.9,
    "category": "home-appliances"
  },
  {
    "productId": 92,
    "productName": "Eco-Friendly Watch",
    "imageSource": "assets/images/products/organic_cotton_tshirt.jpg",
    "ecoRating": 4.5,
    "userRating": 3.9,
    "category": "men-fashion"
  },
  {
    "productId": 93,
    "productName": "Energy Star Air Conditioner",
    "imageSource": "assets/images/products/recycled_plastic_vacuum_cleaner.jpg",
    "ecoRating": 4.4,
    "userRating": 1.3,
    "category": "home-appliances"
  },
  {
    "productId": 94,
    "productName": "Energy Efficient Refrigerator",
    "imageSource": "assets/images/products/recycled_material_toaster.jpg",
    "ecoRating": 4.8,
    "userRating": 1.8,
    "category": "home-appliances"
  },
  {
    "productId": 95,
    "productName": "Eco-Friendly Puzzle",
    "imageSource": "assets/images/products/non_toxic_crayons.jpg",
    "ecoRating": 3.7,
    "userRating": 1.2,
    "category": "kids"
  },
  {
    "productId": 96,
    "productName": "Biodegradable Baby Wipes",
    "imageSource": "assets/images/products/organic_cotton_blanket.jpg",
    "ecoRating": 3.5,
    "userRating": 2.9,
    "category": "kids"
  },
  {
    "productId": 97,
    "productName": "Recycled Material Wallet",
    "imageSource": "assets/images/products/recycled_polyester_jacket.jpg",
    "ecoRating": 1.5,
    "userRating": 4.5,
    "category": "men-fashion"
  },
  {
    "productId": 98,
    "productName": "Solar Powered Lamp",
    "imageSource": "assets/images/products/solar_powered_lamp.jpg",
    "ecoRating": 2.2,
    "userRating": 2.5,
    "category": "home-appliances"
  },
  {
    "productId": 99,
    "productName": "Eco-Friendly Necklace",
    "imageSource": "assets/images/products/organic_cotton_bra.jpg",
    "ecoRating": 1.7,
    "userRating": 4.3,
    "category": "women-fashion"
  },
  {
    "productId": 100,
    "productName": "Vegan Protein Bar",
    "imageSource": "assets/images/products/organic_honey.jpg",
    "ecoRating": 3.3,
    "userRating": 1.1,
    "category": "food"
  }
]