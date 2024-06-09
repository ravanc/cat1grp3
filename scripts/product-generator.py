import json
import random

def generate_product(product_id):
    categories = {
        "food": [
            "Organic Apple", "Vegan Protein Bar", "Gluten-Free Bread",
            "Almond Milk", "Organic Honey", "Vegan Cheese",
            "Organic Granola", "Chia Seeds", "Coconut Oil", "Quinoa"
        ],
        "home-appliances": [
            "Energy Efficient Refrigerator", "Solar Powered Lamp", "Eco-Friendly Blender",
            "Water Saving Dishwasher", "Low Energy Washing Machine", "Solar Water Heater",
            "Recycled Material Toaster", "Energy Star Air Conditioner", "Eco Kettle", "Recycled Plastic Vacuum Cleaner"
        ],
        "kids": [
            "Organic Cotton Onesie", "Eco-Friendly Wooden Toy", "BPA-Free Baby Bottle",
            "Reusable Cloth Diaper", "Non-Toxic Crayons", "Organic Cotton Blanket",
            "Biodegradable Baby Wipes", "Wooden Building Blocks", "Eco-Friendly Puzzle", "Recycled Plastic Toy Car"
        ],
        "men-fashion": [
            "Organic Cotton T-Shirt", "Recycled Polyester Jacket", "Eco-Friendly Sneakers",
            "Bamboo Sunglasses", "Organic Cotton Jeans", "Hemp Hat",
            "Recycled Material Wallet", "Eco-Friendly Watch", "Organic Cotton Socks", "Recycled Plastic Belt"
        ],
        "women-fashion": [
            "Organic Cotton Dress", "Recycled Polyester Handbag", "Eco-Friendly Sandals",
            "Bamboo Earrings", "Organic Cotton Leggings", "Hemp Scarf",
            "Recycled Material Purse", "Eco-Friendly Necklace", "Organic Cotton Bra", "Recycled Plastic Sunglasses"
        ]
    }
    
    image_sources = {
        "food": [
            "assets/images/products/organic_apple.jpg", "assets/images/products/vegan_protein_bar.jpg", "assets/images/products/gluten_free_bread.jpg",
            "assets/images/products/almond_milk.jpg", "assets/images/products/organic_honey.jpg", "assets/images/products/vegan_cheese.jpg",
            "assets/images/products/organic_granola.jpg", "assets/images/products/chia_seeds.jpg", "assets/images/products/coconut_oil.jpg", "assets/images/products/quinoa.jpg"
        ],
        "home-appliances": [
            "assets/images/products/energy_efficient_refrigerator.jpg", "assets/images/products/solar_powered_lamp.jpg", "assets/images/products/eco_friendly_blender.jpg",
            "assets/images/products/water_saving_dishwasher.jpg", "assets/images/products/low_energy_washing_machine.jpg", "assets/images/products/solar_water_heater.jpg",
            "assets/images/products/recycled_material_toaster.jpg", "assets/images/products/energy_star_air_conditioner.jpg", "assets/images/products/eco_kettle.jpg", "assets/images/products/recycled_plastic_vacuum_cleaner.jpg"
        ],
        "kids": [
            "assets/images/products/organic_cotton_onesie.jpg", "assets/images/products/eco_friendly_wooden_toy.jpg", "assets/images/products/bpa_free_baby_bottle.jpg",
            "assets/images/products/reusable_cloth_diaper.jpg", "assets/images/products/non_toxic_crayons.jpg", "assets/images/products/organic_cotton_blanket.jpg",
            "assets/images/products/biodegradable_baby_wipes.jpg", "assets/images/products/wooden_building_blocks.jpg", "assets/images/products/eco_friendly_puzzle.jpg", "assets/images/products/recycled_plastic_toy_car.jpg"
        ],
        "men-fashion": [
            "assets/images/products/organic_cotton_tshirt.jpg", "assets/images/products/recycled_polyester_jacket.jpg", "assets/images/products/eco_friendly_sneakers.jpg",
            "assets/images/products/bamboo_sunglasses.jpg", "assets/images/products/organic_cotton_jeans.jpg", "assets/images/products/hemp_hat.jpg",
            "assets/images/products/recycled_material_wallet.jpg", "assets/images/products/eco_friendly_watch.jpg", "assets/images/products/organic_cotton_socks.jpg", "assets/images/products/recycled_plastic_belt.jpg"
        ],
        "women-fashion": [
            "assets/images/products/organic_cotton_dress.jpg", "assets/images/products/recycled_polyester_handbag.jpg", "assets/images/products/eco_friendly_sandals.jpg",
            "assets/images/products/bamboo_earrings.jpg", "assets/images/products/organic_cotton_leggings.jpg", "assets/images/products/hemp_scarf.jpg",
            "assets/images/products/recycled_material_purse.jpg", "assets/images/products/eco_friendly_necklace.jpg", "assets/images/products/organic_cotton_bra.jpg", "assets/images/products/recycled_plastic_sunglasses.jpg"
        ]
    }
    
    category = random.choice(list(categories.keys()))
    product_name = random.choice(categories[category])
    image_source = random.choice(image_sources[category])
    
    return {
        "productId": product_id,
        "productName": product_name,
        "imageSource": image_source,
        "ecoRating": round(random.uniform(1.0, 5.0), 1),
        "userRating": round(random.uniform(1.0, 5.0), 1),
        "category": category
    }

products = [generate_product(i) for i in range(1, 101)]

with open('../constants/products.json', 'w') as f:
    json.dump(products, f, indent=2)