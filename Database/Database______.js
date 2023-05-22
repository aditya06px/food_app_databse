let Restaurants = [];
// swiggy_api_URL
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5203896&lng=73.8567005&page_type=DESKTOP_WEB_LISTING

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5203896&lng=73.8567005&restaurantId=3241&submitAction=ENTER


full_img_url = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/s7iaru1tltotpdqnk8fa"

main_img_url = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill" // / + cloudinaryImageId



Restaurants = [ 
    {
        "name": "Bedekar Restaurant",
        "id": "410476",
        "uuid": "82e23b48-b6bd-4ee0-9746-06737ec062b0",
        "city": "Pune",
        "area": "althan bhatar",
        "totalRatings": "100",
        "cloudinaryImageId": "s7iaru1tltotpdqnk8fa",
        "avgRating": "4.4",
        "isVeg": "false"
    },
    
    {
        "name": "Hotel Alisha",
        "id": "410481",
        "uuid": "82e23b48-b6bd-4ee0-9746-06737ec062b0",
        "city": "Pune",
        "area": "Althan Bhatar",
        "totalRatings": "120",
        "cloudinaryImageId": "ws0he1js9rxpfz4i55dh",
        "avgRating": "4.1",
        "isVeg": false
      },

      {
        "name": "Hotel Blue Pearl",
        "id": "410486",
        "uuid": "f5b67045-68c9-4f43-a7d4-46a4f6d5afca",
        "city": "Mumbai",
        "area": "Powai",
        "totalRatings": "90",
        "cloudinaryImageId": "i3wks8cgs0b01pf4cjlb",
        "avgRating": "4.3",
        "isVeg": true
      },

      {
        "name": "Hotel Crown Plaza",
        "id": "410491",
        "uuid": "73e5a6d7-4d2c-4f44-8ebe-1ad4489b7cc8",
        "city": "Bangalore",
        "area": "Indiranagar",
        "totalRatings": "150",
        "cloudinaryImageId": "eq4dawazc2vy6ciyzyr8",
        "avgRating": "4.6",
        "isVeg": false
      },

      {
        "name": "Hotel Diamond Palace",
        "id": "410496",
        "uuid": "0be4f412-64e9-4c78-9f4e-5eaa87d13d8b",
        "city": "Chennai",
        "area": "Anna Nagar",
        "totalRatings": "200",
        "cloudinaryImageId": "85c20ed30425350ac5ee96f10d5d1329",
        "avgRating": "4.5",
        "isVeg": true
      },

      {
        "name": "Hotel Emerald",
        "id": "410501",
        "uuid": "a4d7f3a9-72d3-4f53-92ac-d5270a6e689e",
        "city": "Delhi",
        "area": "Karol Bagh",
        "totalRatings": "180",
        "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
        "avgRating": "4.2",
        "isVeg": false
      },

      {
        "name": "Hotel Florence",
        "id": "410506",
        "uuid": "b9f3f5ac-7396-4803-9d24-8f4b3a1e612c",
        "city": "Kolkata",
        "area": "Park Street",
        "totalRatings": "210",
        "cloudinaryImageId": "trrrvf77euhtcmxlfevr",
        "avgRating": "4.8",
        "isVeg": true
      },

      {
        "name": "Hotel Gold Rush",
        "id": "410511",
        "uuid": "cde5ed82-6a71-4b52-9a97-bca7331f6f1d",
        "city": "Hyderabad",
        "area": "Madhapur",
        "totalRatings": "160",
        "cloudinaryImageId": "mivkobeovrifkpakyd4e",
        "avgRating": "4.4",
        "isVeg": false
      },

      {
        "name": "Hotel Ivory Tower",
        "id": "410516",
        "uuid": "1e6b17e6-62fb-4b7c-ba6d-d79231cc9e18",
        "city": "Jaipur",
        "area": "C Scheme",
        "totalRatings": "130",
        "cloudinaryImageId": "uqmhdd4bvsjwtytuhmwa",
        "avgRating": "4.0",
        "isVeg": true
      },

      {
        "name": "Hotel Jasmine",
        "id": "410521",
        "uuid": "9e17407a-882e-4682-8d07-22b03bb11ae6",
        "city": "Ahmedabad",
        "area": "Vastrapur",
        "totalRatings": "140",
        "cloudinaryImageId": "buh5wmzdi8varrcaok0t",
        "avgRating": "4.6",
        "isVeg": false
      },

      {
        "name": "Hotel Lavender",
        "id": "410526",
        "uuid": "df8da6b5-b795-45e3-9c29-5f4d7c3d17d5",
        "city": "Lucknow",
        "area": "Gomti Nagar",
        "totalRatings": "190",
        "cloudinaryImageId": "qodtra947y0ngmvexshf",
        "avgRating": "4.3",
        "isVeg": true
      },

      {
        "name": "Hotel Moonlight",
        "id": "410531",
        "uuid": "208b3ff0-6a95-4d89-9e7d-0d8153d26a3a",
        "city": "Chandigarh",
        "area": "Sector 17",
        "totalRatings": "110",
        "cloudinaryImageId": "ul9xzko9eliviajj2wft",
        "avgRating": "4.2",
        "isVeg": false
      },

      {
        "name": "Hotel Oasis",
        "id": "410536",
        "uuid": "be4625f1-8d62-4c82-b11c-2252b69b694d",
        "city": "Pune",
        "area": "Koregaon Park",
        "totalRatings": "200",
        "cloudinaryImageId": "f9ac2c765637d42a9802cf703ced07d8",
        "avgRating": "4.7",
        "isVeg": true
      },
      {
        "name": "Hotel Paradise",
        "id": "410541",
        "uuid": "4c2f5587-557a-4464-8eef-d6410b2a0f46",
        "city": "Mumbai",
        "area": "Bandra",
        "totalRatings": "170",
        "cloudinaryImageId": "chs0jbyj2osyqumr1wiu",
        "avgRating": "4.5",
        "isVeg": false
      },
      {
        "name": "Hotel Queen's Court",
        "id": "410546",
        "uuid": "262b83be-7a34-4225-9c36-6b8a8a2d6b89",
        "city": "Bangalore",
        "area": "Koramangala",
        "totalRatings": "230",
        "cloudinaryImageId": "uvltlhppkqfium1fpuay",
        "avgRating": "4.9",
        "isVeg": true
      },
      {
        "name": "Hotel Royal Palace",
        "id": "410551",
        "uuid": "fd1c69e5-56dd-43cc-8b46-ae73ad6f786f",
        "city": "Chennai",
        "area": "T Nagar",
        "totalRatings": "180",
        "cloudinaryImageId": "ws0he1js9rxpfz4i55dh",
        "avgRating": "4.3",
        "isVeg": false
      },
      {
        "name": "Hotel Sapphire",
        "id": "410556",
        "uuid": "0571265f-7557-4a6e-9906-457d3b2a5401",
        "city": "Delhi",
        "area": "Saket",
        "totalRatings": "200",
        "cloudinaryImageId": "nyp7yrzwc1dc2xqfkydk",
        "avgRating": "4.2",
        "isVeg": true
      },
      {
        "name": "Hotel Topaz",
        "id": "410561",
        "uuid": "04fb7f63-4bdf-4465-b482-04aaeb5d493c",
        "city": "Kolkata",
        "area": "Salt Lake City",
        "totalRatings": "150",
        "cloudinaryImageId": "spd3y5gok3vvwqulgmda",
        "avgRating": "4.7",
        "isVeg": false
      },
      {
        "name": "Hotel Utopia",
        "id": "410566",
        "uuid": "ed7db416-48b2-4dd2-8e9c-d1b7d61ea254",
        "city": "Hyderabad",
        "area": "Gachibowli",
        "totalRatings": "140",
        "cloudinaryImageId": "bvr70adr30ejyr5ua79k",
        "avgRating": "4.4",
        "isVeg": true
      }

]

Menus = 
[
  {"410476": 
  [
    {"menuId":"410476$01","name":"Malai Kofta","description":"Soft but crispy paneer koftas cooked in a delicious, aromatic, smooth and rich cashew based creamy gravy.","isVeg":false,"price":1900,"cloudinaryImageId":"bvr70adr30ejyr5ua79k","avgRating":"4.4"},
    
    {"menuId":"410476$02","name":"Butter Chicken","description":"Tender chicken cooked in a rich and creamy buttery tomato sauce.","isVeg":false,"price":2500,"cloudinaryImageId":"s7iaru1tltotpdqnk8fa","avgRating":"4.8"},
    
    {"menuId":"410476$03","name":"Chicken Biryani","description":"Aromatic basmati rice cooked with succulent chicken pieces and a blend of spices.","isVeg":false,"price":3000,"cloudinaryImageId":"85c20ed30425350ac5ee96f10d5d1329","avgRating":"4.6"},
    
    {"menuId":"410476$04","name":"Paneer Tikka","description":"Marinated paneer cubes grilled to perfection with a spicy and tangy flavor.","isVeg":true,"price":1800,"cloudinaryImageId":"eq4dawazc2vy6ciyzyr8","avgRating":"4.2"},
    
    {"menuId":"410476$05","name":"Veggie Pizza","description":"Thin crust pizza loaded with fresh vegetables and melted cheese.","isVeg":true,"price":2200,"cloudinaryImageId":"mivkobeovrifkpakyd4e","avgRating":"4.5"},
    
    {"menuId":"410476$06","name":"Chocolate Brownie","description":"Warm and gooey chocolate brownie served with a scoop of vanilla ice cream.","isVeg":true,"price":1200,"cloudinaryImageId":"i3wks8cgs0b01pf4cjlb","avgRating":"4.7"},
    
    {"menuId":"410476$07","name":"Margherita Pizza","description":"Classic pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves.","isVeg":true,"price":2000,"cloudinaryImageId":"chs0jbyj2osyqumr1wiu","avgRating":"4.3"},
    
    {"menuId":"410476$08","name":"Chicken Shawarma","description":"Tender chicken wrapped in a warm pita bread with garlic sauce and pickled vegetables.","isVeg":false,"price":2800,"cloudinaryImageId":"85c20ed30425350ac5ee96f10d5d1329","avgRating":"4.6"},
    
    {"menuId":"410476$09","name":"Vegetable Fried Rice","description":"Stir-fried rice with mixed vegetables and a hint of soy sauce.","isVeg":true,"price":1500,"cloudinaryImageId":"spd3y5gok3vvwqulgmda","avgRating":"4.2"},
    
    {"menuId":"410476$10","name":"Pasta Carbonara","description":"Creamy pasta tossed with crispy bacon, eggs, and Parmesan cheese.","isVeg":false,"price":2400,"cloudinaryImageId":"buh5wmzdi8varrcaok0t","avgRating":"4.7"}
  ]
  }, 
   {
    "410481" : 
    [
      {"menuId":"410481$01","name":"Malai Kofta","description":"Soft but crispy paneer koftas cooked in a delicious, aromatic, smooth and rich cashew based creamy gravy.","isVeg":false,"price":1900,"cloudinaryImageId":"spd3y5gok3vvwqulgmda","avgRating":"4.4"},
      
      {"menuId":"410481$02","name":"Paneer Tikka","description":"Marinated and grilled cottage cheese cubes served with mint chutney and salad.","isVeg":true,"price":1500,"cloudinaryImageId":"85c20ed30425350ac5ee96f10d5d1329","avgRating":"4.7"},
      
      {"menuId":"410481$03","name":"Butter Chicken","description":"Tender chicken cooked in a creamy tomato-based sauce, served with naan bread.","isVeg":false,"price":2200,"cloudinaryImageId":"nyp7yrzwc1dc2xqfkydk","avgRating":"4.6"},
      
      {"menuId":"410481$04","name":"Vegetable Biryani","description":"Fragrant basmati rice cooked with mixed vegetables, spices, and herbs, served with raita.","isVeg":true,"price":1800,"cloudinaryImageId":"nyp7yrzwc1dc2xqfkydk","avgRating":"4.2"},
      
      {"menuId":"410481$05","name":"Fish Curry","description":"Fresh fish simmered in a flavorful curry made with spices and coconut milk, served with steamed rice.","isVeg":false,"price":2500,"cloudinaryImageId":"s7iaru1tltotpdqnk8fa","avgRating":"4.8"},
      
      {"menuId":"410481$06","name":"Chole Bhature","description":"Spicy chickpea curry served with deep-fried bread, pickle, and yogurt.","isVeg":true,"price":1200,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":"4.5"},
      
      {"menuId":"410481$07","name":"Mutton Rogan Josh","description":"Tender mutton pieces cooked in a rich and aromatic gravy, flavored with traditional Indian spices.","isVeg":false,"price":2800,"cloudinaryImageId":"trrrvf77euhtcmxlfevr","avgRating":"4.9"},
      
      {"menuId":"410481$08","name":"Palak Paneer","description":"Cottage cheese cubes cooked in a spinach-based gravy, garnished with cream and served with naan.","isVeg":true,"price":1600,"cloudinaryImageId":"buh5wmzdi8varrcaok0t","avgRating":"4.3"},
      
      {"menuId":"410481$09","name":"Chicken Biryani","description":"Flavorful basmati rice cooked with tender chicken pieces, spices, and herbs, served with raita.","isVeg":false,"price":2300,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":"4.7"},
      
      {"menuId":"410481$10","name":"Veg Pulao","description":"Fragrant rice cooked with mixed vegetables and spices, served with raita.","isVeg":true,"price":1300,"cloudinaryImageId":"ws0he1js9rxpfz4i55dh","avgRating":"4.1"}
  ]
   },
   {
    "410486":
    [
      {"menuId":"410486$01","name":"Malai Kofta","description":"Soft but crispy paneer koftas cooked in a delicious, aromatic, smooth and rich cashew based creamy gravy.","isVeg":false,"price":1900,"cloudinaryImageId":"ul9xzko9eliviajj2wft","avgRating":"4.4"},
      
      {"menuId":"410486$02","name":"Paneer Tikka","description":"Marinated and grilled cottage cheese cubes served with mint chutney and salad.","isVeg":true,"price":1500,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":"4.7"},
      
      {"menuId":"410486$03","name":"Butter Chicken","description":"Tender chicken cooked in a creamy tomato-based sauce, served with naan bread.","isVeg":false,"price":2200,"cloudinaryImageId":"qodtra947y0ngmvexshf","avgRating":"4.6"},
      
      {"menuId":"410486$04","name":"Vegetable Biryani","description":"Fragrant basmati rice cooked with mixed vegetables, spices, and herbs, served with raita.","isVeg":true,"price":1800,"cloudinaryImageId":"ws0he1js9rxpfz4i55dh","avgRating":"4.2"},
      
      {"menuId":"410486$05","name":"Fish Curry","description":"Fresh fish simmered in a flavorful curry made with spices and coconut milk, served with steamed rice.","isVeg":false,"price":2500,"cloudinaryImageId":"nyp7yrzwc1dc2xqfkydk","avgRating":"4.8"},
      
      {"menuId":"410486$06","name":"Chole Bhature","description":"Spicy chickpea curry served with deep-fried bread, pickle, and yogurt.","isVeg":true,"price":1200,"cloudinaryImageId":"trrrvf77euhtcmxlfevr","avgRating":"4.5"},
      
  
      {"menuId":"410486$07","name":"Mutton Rogan Josh","description":"Tender mutton pieces cooked in a rich and aromatic gravy, flavored with traditional Indian spices.","isVeg":false,"price":2800,"cloudinaryImageId":"chs0jbyj2osyqumr1wiu","avgRating":"4.9"},
      
      {"menuId":"410486$08","name":"Palak Paneer","description":"Cottage cheese cubes cooked in a spinach-based gravy, garnished with cream and served with naan.","isVeg":true,"price":1600,"cloudinaryImageId":"eq4dawazc2vy6ciyzyr8","avgRating":"4.3"},
      
      {"menuId":"410486$09","name":"Chicken Biryani","description":"Flavorful basmati rice cooked with tender chicken pieces, spices, and herbs, served with raita.","isVeg":false,"price":2300,"cloudinaryImageId":"ws0he1js9rxpfz4i55dh","avgRating":"4.7"},
      
      {"menuId":"410486$10","name":"Veg Pulao","description":"Fragrant rice cooked with mixed vegetables and spices, served with raita.","isVeg":true,"price":1300,"cloudinaryImageId":"s7iaru1tltotpdqnk8fa","avgRating":"4.1"}
  ]
   },
   {
    "410491" : 
    [
      
      {"menuId":"410491$01","name":"Malai Kofta","description":"Soft but crispy paneer koftas cooked in a delicious, aromatic, smooth and rich cashew based creamy gravy.","isVeg":false,"price":1900,"cloudinaryImageId":"nyp7yrzwc1dc2xqfkydk","avgRating":"4.4"},
      
      {"menuId":"410491$02","name":"Paneer Tikka Masala","description":"Marinated cottage cheese cubes cooked in a spiced tomato and onion gravy.","isVeg":true,"price":1600,"cloudinaryImageId":"s7iaru1tltotpdqnk8fa","avgRating":"4.7"},
      
      {"menuId":"410491$03","name":"Butter Naan","description":"Soft and fluffy Indian bread made with refined flour, served with butter.","isVeg":true,"price":500,"cloudinaryImageId":"chs0jbyj2osyqumr1wiu","avgRating":"4.2"},
      
      {"menuId":"410491$04","name":"Vegetable Pulao","description":"Fragrant rice cooked with mixed vegetables and aromatic spices, served with raita.","isVeg":true,"price":1500,"cloudinaryImageId":"i3wks8cgs0b01pf4cjlb","avgRating":"4.6"},
      
      {"menuId":"410491$05","name":"Chicken Tikka","description":"Juicy and flavorful grilled chicken pieces marinated in spices, served with mint chutney.","isVeg":false,"price":2200,"cloudinaryImageId":"qodtra947y0ngmvexshf","avgRating":"4.8"},
      
      {"menuId":"410491$06","name":"Dal Makhani","description":"Creamy and rich lentil curry simmered with butter and spices, served with rice or naan.","isVeg":true,"price":1200,"cloudinaryImageId":"i3wks8cgs0b01pf4cjlb","avgRating":"4.3"},
      
      {"menuId":"410491$07","name":"Mutton Biryani","description":"Aromatic basmati rice cooked with tender mutton pieces, spices, and herbs, served with raita.","isVeg":false,"price":2500,"cloudinaryImageId":"uvltlhppkqfium1fpuay","avgRating":"4.9"},
      
      {"menuId":"410491$08","name":"Gulab Jamun","description":"Deep-fried milk-based dumplings soaked in sugar syrup, garnished with saffron and pistachios.","isVeg":true,"price":800,"cloudinaryImageId":"85c20ed30425350ac5ee96f10d5d1329","avgRating":"4.5"},
      
      {"menuId":"410491$09","name":"Fish Fry","description":"Crispy and spicy fried fish fillets marinated with Indian spices, served with mint chutney.","isVeg":false,"price":1800,"cloudinaryImageId":"bvr70adr30ejyr5ua79k","avgRating":"4.2"},
      
      {"menuId":"410491$10","name":"Veg Manchurian","description":"Deep-fried vegetable dumplings in a tangy and spicy Indo-Chinese sauce.","isVeg":true,"price":1400,"cloudinaryImageId":"mivkobeovrifkpakyd4e","avgRating":"4.6"}
  ]
   },
   {
    "410496" : 
    [
      
      {"menuId":"410496$01","name":"Malai Kofta","description":"Soft but crispy paneer koftas cooked in a delicious, aromatic, smooth and rich cashew based creamy gravy.","isVeg":false,"price":1900,"cloudinaryImageId":"ul9xzko9eliviajj2wft","avgRating":"4.4"},
      
      {"menuId":"410496$02","name":"Paneer Butter Masala","description":"Cottage cheese cooked in a creamy tomato and butter sauce, flavored with aromatic spices.","isVeg":true,"price":1700,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":"4.6"},
      
      {"menuId":"410496$03","name":"Butter Garlic Naan","description":"Naan bread topped with garlic and butter, baked to perfection.","isVeg":true,"price":600,"cloudinaryImageId":"chs0jbyj2osyqumr1wiu","avgRating":"4.3"},
      
      {"menuId":"410496$04","name":"Chole Bhature","description":"Spicy and tangy chickpea curry served with deep-fried bread, pickle, and yogurt.","isVeg":true,"price":1300,"cloudinaryImageId":"nyp7yrzwc1dc2xqfkydk","avgRating":"4.5"},
      
      {"menuId":"410496$05","name":"Chicken Tikka Masala","description":"Tender chicken tikka cooked in a spiced tomato and onion gravy, served with naan bread.","isVeg":false,"price":2200,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":"4.8"},
      
      {"menuId":"410496$06","name":"Dal Tadka","description":"Yellow lentils tempered with aromatic spices and garnished with cilantro.","isVeg":true,"price":1000,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":"4.2"},
      
      {"menuId":"410496$07","name":"Rajma Chawal","description":"Kidney beans cooked in a thick and flavorful gravy, served with steamed basmati rice.","isVeg":true,"price":1500,"cloudinaryImageId":"qodtra947y0ngmvexshf","avgRating":"4.4"},
      
      {"menuId":"410496$08","name":"Fish Curry","description":"Delicious fish cooked in a tangy and aromatic curry, served with steamed rice or naan bread.","isVeg":false,"price":2400,"cloudinaryImageId":"uvltlhppkqfium1fpuay","avgRating":"4.1"},
      
      {"menuId":"410496$09","name":"Vegetable Biryani","description":"Aromatic basmati rice cooked with mixed vegetables, spices, and saffron, served with raita.","isVeg":true,"price":1700,"cloudinaryImageId":"uvltlhppkqfium1fpuay","avgRating":"4.6"},
      
      {"menuId":"410496$10","name":"Gulab Jamun","description":"Deep-fried milk-based dumplings soaked in sugar syrup, garnished with saffron and pistachios.","isVeg":true,"price":800,"cloudinaryImageId":"bvr70adr30ejyr5ua79k","avgRating":"4.5"}
  ]
   },
   {
    "410501":
    [
      {"menuId":"410501$01","name":"Paneer Butter Masala","description":"Soft and creamy cottage cheese cubes cooked in a flavorful tomato and cashew nut gravy.","isVeg":true,"price":1800,"cloudinaryImageId":"i3wks8cgs0b01pf4cjlb","avgRating":"4.6"},
      
      {"menuId":"410501$02","name":"Chicken Biryani","description":"Fragrant basmati rice cooked with succulent chicken pieces, aromatic spices, and herbs.","isVeg":false,"price":2200,"cloudinaryImageId":"uvltlhppkqfium1fpuay","avgRating":"4.8"},
      
      {"menuId":"410501$03","name":"Prawn Curry","description":"Fresh and juicy prawns cooked in a spicy and tangy coconut-based curry.","isVeg":false,"price":2500,"cloudinaryImageId":"uqmhdd4bvsjwtytuhmwa","avgRating":"4.3"},
      
      {"menuId":"410501$04","name":"Vegetable Hakka Noodles","description":"Stir-fried noodles tossed with mixed vegetables, soy sauce, and aromatic spices.","isVeg":true,"price":1400,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":"4.2"},
      
      {"menuId":"410501$05","name":"Mutton Rogan Josh","description":"Tender mutton cooked in a rich and flavorful gravy with Kashmiri spices.","isVeg":false,"price":2600,"cloudinaryImageId":"85c20ed30425350ac5ee96f10d5d1329","avgRating":"4.7"},
      
      {"menuId":"410501$06","name":"Vegetable Biryani","description":"Aromatic basmati rice cooked with mixed vegetables, spices, and saffron, served with raita.","isVeg":true,"price":1700,"cloudinaryImageId":"bvr70adr30ejyr5ua79k","avgRating":"4.6"},
      
      {"menuId":"410501$07","name":"Chole Bhature","description":"Fluffy deep-fried bread served with spicy and tangy chickpea curry.","isVeg":true,"price":1500,"cloudinaryImageId":"85c20ed30425350ac5ee96f10d5d1329","avgRating":"4.4"},
      
      {"menuId":"410501$08","name":"Chicken Tikka Masala","description":"Grilled chicken tikka cooked in a creamy and flavorful tomato-based gravy.","isVeg":false,"price":2300,"cloudinaryImageId":"s7iaru1tltotpdqnk8fa","avgRating":"4.5"},
      
      {"menuId":"410501$09","name":"Dal Makhani","description":"Creamy lentils slow-cooked with butter, cream, and aromatic spices.","isVeg":true,"price":1400,"cloudinaryImageId":"ul9xzko9eliviajj2wft","avgRating":"4.3"},
      
      {"menuId":"410501$10","name":"Gulab Jamun","description":"Deep-fried milk-based dumplings soaked in sugar syrup, garnished with saffron and pistachios.","isVeg":true,"price":800,"cloudinaryImageId":"uvltlhppkqfium1fpuay","avgRating":"4.5"}
  ]
    
   },
   {
    "410506":
    [
      
      {"menuId":"410506$01","name":"Kaju kurma","description":"Soft but crispy paneer koftas cooked in a delicious, aromatic, smooth and rich cashew-based creamy gravy.","isVeg":false,"price":1900,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":4.4},
      
      {"menuId":"410506$02","name":"Butter Chicken","description":"Tender chicken cooked in a creamy and buttery tomato-based gravy, infused with aromatic spices.","isVeg":false,"price":2100,"cloudinaryImageId":"ul9xzko9eliviajj2wft","avgRating":4.5},
      
      {"menuId":"410506$03","name":"Palak Paneer","description":"Fresh spinach and cottage cheese cubes cooked in a flavorful blend of spices and cream.","isVeg":true,"price":1700,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":4.3},
      
      {"menuId":"410506$04","name":"Chicken Fried Rice","description":"Wok-tossed rice cooked with chicken, mixed vegetables, soy sauce, and aromatic spices.","isVeg":false,"price":1800,"cloudinaryImageId":"ee5f8e06b300efc07c9fe3f4df40dfc4","avgRating":4.2},
      
      {"menuId":"410506$05","name":"Rasmalai","description":"Soft and spongy cottage cheese dumplings soaked in sweetened milk, flavored with cardamom and saffron.","isVeg":true,"price":900,"cloudinaryImageId":"ee5f8e06b300efc07c9fe3f4df40dfc4","avgRating":4.6},
      
      {"menuId":"410506$06","name":"Vegetable Pulao","description":"Fragrant basmati rice cooked with assorted vegetables, aromatic spices, and garnished with fried onions.","isVeg":true,"price":1500,"cloudinaryImageId":"qodtra947y0ngmvexshf","avgRating":4.1},
      
      {"menuId":"410506$07","name":"Fish Curry","description":"Fresh fish simmered in a tangy and spicy coconut-based curry, infused with aromatic spices.","isVeg":false,"price":2400,"cloudinaryImageId":"spd3y5gok3vvwqulgmda","avgRating":4.3},
      
      {"menuId":"410506$08","name":"Gobi Manchurian","description":"Crispy cauliflower florets tossed in a spicy and tangy Indo-Chinese sauce.","isVeg":true,"price":1400,"cloudinaryImageId":"nyp7yrzwc1dc2xqfkydk","avgRating":4.2},
      
      {"menuId":"410506$09","name":"Mutton Biryani","description":"Flavorful basmati rice cooked with tender mutton pieces, aromatic spices, and saffron.","isVeg":false,"price":2500,"cloudinaryImageId":"eq4dawazc2vy6ciyzyr8","avgRating":4.7},
      
      {"menuId":"410506$10","name":"Fruit Salad","description":"Assorted fresh fruits served with a tangy and sweet dressing, garnished with mint leaves.","isVeg":true,"price":800,"cloudinaryImageId":"i3wks8cgs0b01pf4cjlb","avgRating":4.4}
  ]
     
   }, 
   {
    "410511": 
    [
      {"menuId":"410511$01","name":"Malai Kofta","description":"Soft but crispy paneer koftas cooked in a delicious, aromatic, smooth and rich cashew based creamy gravy.","isVeg":false,"price":2500,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":4.4},
      
      {"menuId":"410511$02","name":"Paneer Tikka","description":"Tandoori grilled paneer cubes marinated in a flavorful blend of spices and served with mint chutney.","isVeg":true,"price":2200,"cloudinaryImageId":"bvr70adr30ejyr5ua79k","avgRating":4.8},
      
      {"menuId":"410511$03","name":"Butter Chicken","description":"Tender chicken cooked in a rich and creamy tomato-based gravy, infused with aromatic spices.","isVeg":false,"price":2800,"cloudinaryImageId":"uvltlhppkqfium1fpuay","avgRating":4.2},
      
      {"menuId":"410511$04","name":"Palak Paneer","description":"Cottage cheese cubes cooked in a flavorful spinach gravy, seasoned with Indian spices.","isVeg":true,"price":1900,"cloudinaryImageId":"ee5f8e06b300efc07c9fe3f4df40dfc4","avgRating":4.6},
      
      {"menuId":"410511$05","name":"Chicken Biryani","description":"Fragrant basmati rice cooked with tender chicken pieces and a blend of aromatic spices.","isVeg":false,"price":2700,"cloudinaryImageId":"spd3y5gok3vvwqulgmda","avgRating":4.3},
      
      {"menuId":"410511$06","name":"Vegetable Pulao","description":"Flavorful rice cooked with a medley of colorful vegetables and aromatic spices.","isVeg":true,"price":2000,"cloudinaryImageId":"mivkobeovrifkpakyd4e","avgRating":4.0},
      
      {"menuId":"410511$07","name":"Gulab Jamun","description":"Deep-fried milk dumplings soaked in a sweet rose-flavored syrup, served warm.","isVeg":true,"price":1500,"cloudinaryImageId":"ws0he1js9rxpfz4i55dh","avgRating":4.5},
      
      {"menuId":"410511$08","name":"Pani Puri","description":"Crispy hollow puris filled with tangy tamarind water and a blend of spicy and savory chutneys.","isVeg":true,"price":1200,"cloudinaryImageId":"nyp7yrzwc1dc2xqfkydk","avgRating":4.1},
      
      {"menuId":"410511$09","name":"Tandoori Chicken","description":"Juicy chicken marinated in a blend of yogurt and spices, cooked to perfection in a tandoor oven.","isVeg":false,"price":2400,"cloudinaryImageId":"chs0jbyj2osyqumr1wiu","avgRating":4.7},
      
      {"menuId":"410511$10","name":"Mango Lassi","description":"A refreshing yogurt-based drink blended with ripe mangoes, offering a sweet and creamy delight.","isVeg":true,"price":1000,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":4.9}
    ]
   },
    {
      "410516" :
      [
      
        {"menuId":"410516$01","name":"Palak Paneer","description":"Cottage cheese cubes cooked in a flavorful spinach gravy, seasoned with Indian spices.","isVeg":false,"price":1900,"cloudinaryImageId":"s7iaru1tltotpdqnk8fa","avgRating":4.4},
        
        {"menuId":"410516$02","name":"Chicken Tikka Masala","description":"Chicken marinated in yogurt and spices, then cooked in a creamy tomato sauce.","isVeg":false,"price":2500,"cloudinaryImageId":"uvltlhppkqfium1fpuay","avgRating":4.5},
        
        {"menuId":"410516$03","name":"Dal Makhani","description":"A rich and creamy lentil curry, flavored with tomatoes, onions, and spices.","isVeg":true,"price":1500,"cloudinaryImageId":"85c20ed30425350ac5ee96f10d5d1329","avgRating":4.3},
        
        {"menuId":"410516$04","name":"Butter Chicken","description":"Chicken marinated in yogurt and spices, then cooked in a creamy tomato sauce with butter.","isVeg":false,"price":2200,"cloudinaryImageId":"nyp7yrzwc1dc2xqfkydk","avgRating":4.2},
        
        {"menuId":"410516$05","name":"Vegetable Biryani","description":"A rice dish cooked with vegetables, spices, and herbs.","isVeg":true,"price":1800,"cloudinaryImageId":"trrrvf77euhtcmxlfevr","avgRating":4.1},
        
        {"menuId":"410516$06","name":"Chicken Biryani","description":"A rice dish cooked with chicken, spices, and herbs.","isVeg":false,"price":2100,"cloudinaryImageId":"eq4dawazc2vy6ciyzyr8","avgRating":4.0},
        
        {"menuId":"410516$07","name":"Naan","description":"A flatbread made with leavened wheat flour, cooked in a tandoor oven.","isVeg":true,"price":500,"cloudinaryImageId":"spd3y5gok3vvwqulgmda","avgRating":4.4},
        
        {"menuId":"410516$08","name":"Roti","description":"A flatbread made with whole wheat flour, cooked on a tava.","isVeg":true,"price":400,"cloudinaryImageId":"ul9xzko9eliviajj2wft","avgRating":4.2},
        
        {"menuId":"410516$09","name":"Aloo Gobi","description":"A potato and cauliflower curry, flavored with tomatoes, onions, and spices.","isVeg":true,"price":1200,"cloudinaryImageId":"uqmhdd4bvsjwtytuhmwa","avgRating":4.2},
        
        {"menuId":"410516$10","name":"Samosa Chaat","description":"A savory snack made with fried samosas, potatoes, chickpeas, onions, tomatoes, and spices.","isVeg":true,"price":900,"cloudinaryImageId":"qodtra947y0ngmvexshf","avgRating":4.3}
    ],
     "410521": 
     [
      
      {"menuId":"410521$01","name":"Tandoori Chicken","description":"Juicy chicken marinated in a blend of yogurt and spices, cooked to perfection in a tandoor oven.","isVeg":false,"price":1900,"cloudinaryImageId":"uvltlhppkqfium1fpuay","avgRating":4.4},
      
      {"menuId":"410521$02","name":"Chicken Tikka Masala","description":"Chicken marinated in yogurt and spices, then cooked in a creamy tomato sauce.","isVeg":false,"price":2500,"cloudinaryImageId":"eq4dawazc2vy6ciyzyr8","avgRating":4.5},
      
      {"menuId":"410521$03","name":"Dal Makhani","description":"A rich and creamy lentil curry, flavored with tomatoes, onions, and spices.","isVeg":true,"price":1500,"cloudinaryImageId":"uqmhdd4bvsjwtytuhmwa","avgRating":4.3},
      
      {"menuId":"410521$04","name":"Butter Chicken","description":"Chicken marinated in yogurt and spices, then cooked in a creamy tomato sauce with butter.","isVeg":false,"price":2200,"cloudinaryImageId":"ee5f8e06b300efc07c9fe3f4df40dfc4","avgRating":4.2},
      
      {"menuId":"410521$05","name":"Vegetable Biryani","description":"A rice dish cooked with vegetables, spices, and herbs.","isVeg":true,"price":1800,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":4.1},
      
      {"menuId":"410521$06","name":"Chicken Biryani","description":"A rice dish cooked with chicken, spices, and herbs.","isVeg":false,"price":2100,"cloudinaryImageId":"mivkobeovrifkpakyd4e","avgRating":4.0},
      
      {"menuId":"410521$07","name":"Naan","description":"A flatbread made with leavened wheat flour, cooked in a tandoor oven.","isVeg":true,"price":500,"cloudinaryImageId":"ws0he1js9rxpfz4i55dh","avgRating":4.4},
      
      {"menuId":"410521$08","name":"Roti","description":"A flatbread made with whole wheat flour, cooked on a tava.","isVeg":true,"price":400,"cloudinaryImageId":"chs0jbyj2osyqumr1wiu","avgRating":4.4},
      
      {"menuId":"410521$09","name":"Aloo Gobi","description":"A potato and cauliflower curry, flavored with tomatoes, onions, and spices.","isVeg":true,"price":1200,"cloudinaryImageId":"buh5wmzdi8varrcaok0t","avgRating":4.2},
      
      {"menuId":"410521$10","name":"Samosa Chaat","description":"A savory snack made with fried samosas, potatoes, chickpeas, onions, tomatoes, and spices.","isVeg":true,"price":900,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":4.3}
  ]
    },
    {
      "410526":
      [
      
        {"menuId":"410526$01","name":"Dal Makhani","description":"A rich and creamy lentil curry, flavored with tomatoes, onions, and spices.","isVeg":true,"price":1500,"cloudinaryImageId":"i3wks8cgs0b01pf4cjlb","avgRating":4.0},
        
        {"menuId":"410526$02","name":"Chicken Tikka Masala","description":"Chicken marinated in yogurt and spices, then cooked in a creamy tomato sauce.","isVeg":false,"price":2000,"cloudinaryImageId":"uqmhdd4bvsjwtytuhmwa","avgRating":4.5},
        
        {"menuId":"410526$03","name":"Chicken Biryani","description":"A rice dish cooked with chicken, spices, and herbs.","isVeg":false,"price":2100,"cloudinaryImageId":"trrrvf77euhtcmxlfevr","avgRating":4.3},
        
        {"menuId":"410526$04","name":"Vegetable Biryani","description":"A rice dish cooked with vegetables, spices, and herbs.","isVeg":true,"price":1800,"cloudinaryImageId":"chs0jbyj2osyqumr1wiu","avgRating":4.1},
        
        {"menuId":"410526$05","name":"Naan","description":"A flatbread made with leavened wheat flour, cooked in a tandoor oven.","isVeg":true,"price":500,"cloudinaryImageId":"qodtra947y0ngmvexshf","avgRating":4.4},
        
        {"menuId":"410526$06","name":"Roti","description":"A flatbread made with whole wheat flour, cooked on a tava.","isVeg":true,"price":400,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":4.2},
        
        {"menuId":"410526$07","name":"Samosa Chaat","description":"A savory snack made with fried samosas, potatoes, chickpeas, onions, tomatoes, and spices.","isVeg":true,"price":900,"cloudinaryImageId":"ws0he1js9rxpfz4i55dh","avgRating":4.3},
        
        {"menuId":"410526$08","name":"Aloo Gobi","description":"A potato and cauliflower curry, flavored with tomatoes, onions, and spices.","isVeg":true,"price":1200,"cloudinaryImageId":"85c20ed30425350ac5ee96f10d5d1329","avgRating":4.3},
        
        {"menuId":"410526$09","name":"Paneer Tikka Masala","description":"Cottage cheese cubes marinated in yogurt and spices, then cooked in a creamy tomato sauce.","isVeg":true,"price":1900,"cloudinaryImageId":"eq4dawazc2vy6ciyzyr8","avgRating":4.4},
        
        {"menuId":"410526$10","name":"Palak Paneer","description":"Cottage cheese cubes cooked in a flavorful spinach gravy, seasoned with Indian spices.","isVeg":true,"price":1700,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":4.5}
    ]
    },
    {
      "410531" :
      [
      
        {"menuId":"410531$01","name":"Dal Makhani","description":"A rich and creamy lentil curry, flavored with tomatoes, onions, and spices.","isVeg":true,"price":1500,"cloudinaryImageId":"trrrvf77euhtcmxlfevr","avgRating":4.0},
        
        {"menuId":"410531$02","name":"Chicken Tikka Masala","description":"Chicken marinated in yogurt and spices, then cooked in a creamy tomato sauce.","isVeg":false,"price":2000,"cloudinaryImageId":"bvr70adr30ejyr5ua79k","avgRating":4.5},
        
        {"menuId":"410531$03","name":"Chicken Biryani","description":"A rice dish cooked with chicken, spices, and herbs.","isVeg":false,"price":2100,"cloudinaryImageId":"85c20ed30425350ac5ee96f10d5d1329","avgRating":4.3},
        
        {"menuId":"410531$04","name":"Vegetable Biryani","description":"A rice dish cooked with vegetables, spices, and herbs.","isVeg":true,"price":1800,"cloudinaryImageId":"trrrvf77euhtcmxlfevr","avgRating":4.1},
        
        {"menuId":"410531$05","name":"Naan","description":"A flatbread made with leavened wheat flour, cooked in a tandoor oven.","isVeg":true,"price":500,"cloudinaryImageId":"ul9xzko9eliviajj2wft","avgRating":4.4},
        
        {"menuId":"410531$06","name":"Roti","description":"A flatbread made with whole wheat flour, cooked on a tava.","isVeg":true,"price":400,"cloudinaryImageId":"nyp7yrzwc1dc2xqfkydk","avgRating":4.2},
        
        {"menuId":"410531$07","name":"Samosa Chaat","description":"A savory snack made with fried samosas, potatoes, chickpeas, onions, tomatoes, and spices.","isVeg":true,"price":900,"cloudinaryImageId":"bvr70adr30ejyr5ua79k","avgRating":4.3},
        
        {"menuId":"410531$08","name":"Aloo Gobi","description":"A potato and cauliflower curry, flavored with tomatoes, onions, and spices.","isVeg":true,"price":1200,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":4.3},
        
        {"menuId":"410531$09","name":"Palak Paneer","description":"Cottage cheese cubes cooked in a flavorful spinach gravy, seasoned with Indian spices.","isVeg":true,"price":1700,"cloudinaryImageId":"nyp7yrzwc1dc2xqfkydk","avgRating":4.5},
        
        {"menuId":"410531$10","name":"Chicken Tikka","description":"Chicken marinated in yogurt and spices, then grilled to perfection.","isVeg":false,"price":2500,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":4.4}
    ]
    },
  
    {
      "410536":
      [
      
        {"menuId":"410536$01","name":"Dal Makhani","description":"A rich and creamy lentil curry, flavored with tomatoes, onions, and spices.","isVeg":true,"price":1500,"cloudinaryImageId":"buh5wmzdi8varrcaok0t","avgRating":4},
        
        {"menuId":"410536$02","name":"Vegetable Pulao","description":"A rice dish cooked with vegetables, spices, and herbs.","isVeg":true,"price":1800,"cloudinaryImageId":"mivkobeovrifkpakyd4e","avgRating":4.5},
        
        {"menuId":"410536$03","name":"Vegetable Samosa Chaat","description":"A savory snack made with fried samosas, potatoes, chickpeas, onions, tomatoes, and spices.","isVeg":true,"price":900,"cloudinaryImageId":"mivkobeovrifkpakyd4e","avgRating":4.3},
        
        {"menuId":"410536$04","name":"Aloo Matar","description":"A potato and peas curry, flavored with tomatoes, onions, and spices.","isVeg":true,"price":1200,"cloudinaryImageId":"ws0he1js9rxpfz4i55dh","avgRating":4.1},
        
        {"menuId":"410536$05","name":"Chicken Tikka Masala","description":"Chicken marinated in yogurt and spices, then cooked in a creamy tomato sauce.","isVeg":false,"price":2000,"cloudinaryImageId":"nyp7yrzwc1dc2xqfkydk","avgRating":4.4},
        
        {"menuId":"410536$06","name":"Chicken Biryani","description":"A rice dish cooked with chicken, spices, and herbs.","isVeg":false,"price":2100,"cloudinaryImageId":"buh5wmzdi8varrcaok0t","avgRating":4.3},
        
        {"menuId":"410536$07","name":"Chicken Tikka","description":"Chicken marinated in yogurt and spices, then grilled to perfection.","isVeg":false,"price":2500,"cloudinaryImageId":"chs0jbyj2osyqumr1wiu","avgRating":4.4},
        
        {"menuId":"410536$08","name":"Lamb Rogan Josh","description":"Lamb cooked in a rich and creamy tomato sauce, flavored with spices.","isVeg":false,"price":2800,"cloudinaryImageId":"uvltlhppkqfium1fpuay","avgRating":4.4},
        
        {"menuId":"410536$09","name":"Fish Tikka Masala","description":"Fish marinated in yogurt and spices, then cooked in a creamy tomato sauce.","isVeg":false,"price":2300,"cloudinaryImageId":"chs0jbyj2osyqumr1wiu","avgRating":4.5},
        
        {"menuId":"410536$10","name":"Vegetable Manchurian","description":"A stir-fry of vegetables in a spicy sauce.","isVeg":true,"price":1600,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":4.3}
    ]
    },
    {
      "410541" :
      [
      
        {"menuId":"410541$01","name":"Dal Makhani","description":"A rich and creamy lentil curry, flavored with tomatoes, onions, and spices.","isVeg":true,"price":1500,"cloudinaryImageId":"eq4dawazc2vy6ciyzyr8","avgRating":4.0},
        
        {"menuId":"410541$02","name":"Vegetable Pulao","description":"A rice dish cooked with vegetables, spices, and herbs.","isVeg":true,"price":1800,"cloudinaryImageId":"85c20ed30425350ac5ee96f10d5d1329","avgRating":4.5},
        
        {"menuId":"410541$03","name":"Vegetable Samosa Chaat","description":"A savory snack made with fried samosas, potatoes, chickpeas, onions, tomatoes, and spices.","isVeg":true,"price":900,"cloudinaryImageId":"spd3y5gok3vvwqulgmda","avgRating":4.3},
        
        {"menuId":"410541$04","name":"Aloo Matar","description":"A potato and peas curry, flavored with tomatoes, onions, and spices.","isVeg":true,"price":1200,"cloudinaryImageId":"85c20ed30425350ac5ee96f10d5d1329","avgRating":4.1},
        
        {"menuId":"410541$05","name":"Chicken Tikka Masala","description":"Chicken marinated in yogurt and spices, then cooked in a creamy tomato sauce.","isVeg":false,"price":2000,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":4.4},
        
        {"menuId":"410541$06","name":"Chicken Biryani","description":"A rice dish cooked with chicken, spices, and herbs.","isVeg":false,"price":2100,"cloudinaryImageId":"qodtra947y0ngmvexshf","avgRating":4.3},
        
        {"menuId":"410541$07","name":"Chicken Tikka","description":"Chicken marinated in yogurt and spices, then grilled to perfection.","isVeg":false,"price":2500,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":4.4},
        
        {"menuId":"410541$08","name":"Lamb Rogan Josh","description":"Lamb cooked in a rich and creamy tomato sauce, flavored with spices.","isVeg":false,"price":2800,"cloudinaryImageId":"i3wks8cgs0b01pf4cjlb","avgRating":4.4},
        
        {"menuId":"410541$09","name":"Fish Tikka Masala","description":"Fish marinated in yogurt and spices, then cooked in a creamy tomato sauce.","isVeg":false,"price":2300,"cloudinaryImageId":"i3wks8cgs0b01pf4cjlb","avgRating":4.5},
        
        {"menuId":"410541$10","name":"Vegetable Manchurian","description":"A stir-fry of vegetables in a spicy sauce.","isVeg":true,"price":1600,"cloudinaryImageId":"bvr70adr30ejyr5ua79k","avgRating":4.3}
    ]
    },
    {
      "410546": 
      [
      
        {"menuId":"410546$01","name":"Dal Makhani","description":"A rich and creamy lentil curry, flavored with tomatoes, onions, and spices.","isVeg":true,"price":1500,"cloudinaryImageId":"qodtra947y0ngmvexshf","avgRating":"4.0"},
        
        {"menuId":"410546$02","name":"Vegetable Pulao","description":"A rice dish cooked with vegetables, spices, and herbs.","isVeg":true,"price":1800,"cloudinaryImageId":"ws0he1js9rxpfz4i55dh","avgRating":"4.5"},
        
        
        {"menuId":"410546$03","name":"Vegetable Samosa Chaat","description":" A savory snack made with fried samosas, potatoes, chickpeas, onions, tomatoes, and spices.","isVeg":true,"price":900,"cloudinaryImageId":"trrrvf77euhtcmxlfevr","avgRating":4.3},
        
        {"menuId":"410546$04","name":"Aloo Matar","description":"A potato and peas curry, flavored with tomatoes, onions, and spices.","isVeg":true,"price":1200,"cloudinaryImageId":"buh5wmzdi8varrcaok0t","avgRating":4.1},
        
        {"menuId":"410546$05","name":"Vegetable Biryani","description":"A rice dish cooked with vegetables, spices, and herbs.","isVeg":true,"price":1600,"cloudinaryImageId":"uqmhdd4bvsjwtytuhmwa","avgRating":4.3},
        
        {"menuId":"410546$06","name":"Vegetable Manchurian","description":"A stir-fry of vegetables in a spicy sauce.","isVeg":true,"price":1500,"cloudinaryImageId":"uqmhdd4bvsjwtytuhmwa","avgRating":4.3},
        
        {"menuId":"410546$07","name":"Paneer Tikka Masala","description":"Cottage cheese cubes cooked in a flavorful tomato gravy, seasoned with Indian spices.","isVeg":true,"price":1700,"cloudinaryImageId":"i3wks8cgs0b01pf4cjlb","avgRating":4.5},
        
        {"menuId":"410546$08","name":"Chicken Tikka","description":"Chicken marinated in yogurt and spices, then grilled to perfection.","isVeg":false,"price":2500,"cloudinaryImageId":"trrrvf77euhtcmxlfevr","avgRating":4.5},
        
        {"menuId":"410546$09","name":"Lamb Rogan Josh","description":"Lamb cooked in a rich and creamy tomato sauce, flavored with spices.","isVeg":false,"price":2800,"cloudinaryImageId":"eq4dawazc2vy6ciyzyr8","avgRating":4.4},
        
        {"menuId":"410546$10","name":"Fish Tikka Masala","description":"Fish marinated in yogurt and spices, then cooked in a creamy tomato sauce.","isVeg":false,"price":2300,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":4.5}
    ]
    },
    {
      "410551": 
      [
        {"menuId":"410551$01","name":"Chicken Tikka Masala","description":"A creamy and flavorful curry made with chicken marinated in yogurt and spices.","isVeg":false,"price":2500,"cloudinaryImageId":"ul9xzko9eliviajj2wft","avgRating":"4.5"},
        
        {"menuId":"410551$02","name":"Vegetable Biryani","description":"A flavorful rice dish made with vegetables, spices, and herbs.","isVeg":true,"price":1800,"cloudinaryImageId":"ws0he1js9rxpfz4i55dh","avgRating":"4.3"},
        
        {"menuId":"410551$03","name":"Chicken Fried Rice","description":"A classic Chinese dish made with rice, chicken, vegetables, and spices.","isVeg":false,"price":2000,"cloudinaryImageId":"bvr70adr30ejyr5ua79k","avgRating":"4.2"},
        
        {"menuId":"410551$04","name":"Mutton Rogan Josh","description":"A rich and flavorful curry made with mutton, tomatoes, and spices.","isVeg":false,"price":2800,"cloudinaryImageId":"ee5f8e06b300efc07c9fe3f4df40dfc4","avgRating":"4.1"},
        
        {"menuId":"410551$05","name":"Fish Tikka","description":"A succulent and flavorful dish made with fish marinated in yogurt and spices.","isVeg":false,"price":2200,"cloudinaryImageId":"ee5f8e06b300efc07c9fe3f4df40dfc4","avgRating":"4.0"},
        
        {"menuId":"410551$06","name":"Lamb Biryani","description":"A flavorful rice dish made with lamb, spices, and herbs.","isVeg":false,"price":2600,"cloudinaryImageId":"eq4dawazc2vy6ciyzyr8","avgRating":"3.9"},
        
        {"menuId":"410551$07","name":"Chicken Korma","description":"A rich and creamy curry made with chicken, yogurt, and spices.","isVeg":false,"price":2400,"cloudinaryImageId":"mivkobeovrifkpakyd4e","avgRating":"3.8"},
        
        {"menuId":"410551$08","name":"Vegetable Pakora","description":"A crispy and flavorful snack made with vegetables, spices, and batter.","isVeg":true,"price":1500,"cloudinaryImageId":"chs0jbyj2osyqumr1wiu","avgRating":"3.7"},
        
        {"menuId":"410551$09","name":"Samosa","description":"A crispy and flavorful snack made with potatoes, peas, and spices.","isVeg":true,"price":1000,"cloudinaryImageId":"ws0he1js9rxpfz4i55dh","avgRating":"3.7"},
        
        {"menuId":"410551$10","name":"Naan","description":"A soft and fluffy flatbread made with wheat flour, yeast, and water.","isVeg":true,"price":500,"cloudinaryImageId":"eq4dawazc2vy6ciyzyr8","avgRating":"3.6"}
    ]
    }
    ,
    {
      "410556":
      [
      
        {"menuId":"410556$01","name":"Dal Makhani","description":"A rich and creamy lentil curry, flavored with tomatoes, onions, and spices.","isVeg":false,"price":1900,"cloudinaryImageId":"eq4dawazc2vy6ciyzyr8","avgRating":"4.4"},
        
        {"menuId":"410556$02","name":"Chicken Tikka Masala","description":"A creamy and flavorful dish of chicken marinated in yogurt and spices, then cooked in a tomato-based sauce.","isVeg":false,"price":2500,"cloudinaryImageId":"85c20ed30425350ac5ee96f10d5d1329","avgRating":"4.5"},
        
        {"menuId":"410556$03","name":"Vegetable Biryani","description":"A flavorful rice dish made with vegetables, spices, and herbs.","isVeg":true,"price":2000,"cloudinaryImageId":"ws0he1js9rxpfz4i55dh","avgRating":"4.3"},
        
        {"menuId":"410556$04","name":"Chicken Fried Rice","description":"A classic Chinese dish of rice stir-fried with chicken, vegetables, and spices.","isVeg":false,"price":2200,"cloudinaryImageId":"eq4dawazc2vy6ciyzyr8","avgRating":"4.2"},
        
        {"menuId":"410556$05","name":"Manchurian Chicken","description":"A Chinese dish of chicken coated in a sweet and sour sauce.","isVeg":false,"price":1800,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":"4.1"},
        
        {"menuId":"410556$06","name":"Paneer Tikka Masala","description":"A creamy and flavorful dish of cottage cheese marinated in yogurt and spices, then cooked in a tomato-based sauce.","isVeg":true,"price":2300,"cloudinaryImageId":"buh5wmzdi8varrcaok0t","avgRating":"4.0"},
        
        {"menuId":"410556$07","name":"Fish Tikka Masala","description":"A creamy and flavorful dish of fish marinated in yogurt and spices, then cooked in a tomato-based sauce.","isVeg":false,"price":2600,"cloudinaryImageId":"i3wks8cgs0b01pf4cjlb","avgRating":"3.9"},
        
        {"menuId":"410556$08","name":"Lamb Rogan Josh","description":"A rich and flavorful dish of lamb cooked in a tomato-based sauce with spices.","isVeg":false,"price":2900,"cloudinaryImageId":"s7iaru1tltotpdqnk8fa","avgRating":"3.8"},
        
        {"menuId":"410556$09","name":"Chicken Korma","description":"A creamy and flavorful dish of chicken cooked in a yogurt-based sauce with spices.","isVeg":false,"price":2700,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":"3.8"},
    
        {"menuId":"410551$10","name":"Naan","description":"A soft and fluffy flatbread made with wheat flour, yeast, and water.","isVeg":true,"price":500,"cloudinaryImageId":"eq4dawazc2vy6ciyzyr8","avgRating":"3.6"}
     
    ]
    },
    {
      "410561":
      [
      
        {"menuId":"410556$01","name":"Fruit Salad","description":"A refreshing fruit salad made with fresh fruits, yogurt, and honey.","isVeg":true,"price":1200,"cloudinaryImageId":"chs0jbyj2osyqumr1wiu","avgRating":"4.3"},
        
        {"menuId":"410556$02","name":"Vegetable Soup","description":"A hearty and flavorful vegetable soup made with carrots, celery, potatoes, and tomatoes.","isVeg":true,"price":1500,"cloudinaryImageId":"uqmhdd4bvsjwtytuhmwa","avgRating":"4.5"},
        
        {"menuId":"410556$03","name":"Chicken Noodle Soup","description":"A classic chicken noodle soup made with chicken, noodles, carrots, celery, and potatoes.","isVeg":false,"price":1800,"cloudinaryImageId":"nyp7yrzwc1dc2xqfkydk","avgRating":"4.3"},
        
        {"menuId":"410556$04","name":"Tomato Soup","description":"A creamy and flavorful tomato soup made with fresh tomatoes, onions, and garlic.","isVeg":true,"price":1600,"cloudinaryImageId":"f9ac2c765637d42a9802cf703ced07d8","avgRating":"4.2"},
        
        {"menuId":"410556$05","name":"French Onion Soup","description":"A rich and flavorful French onion soup made with beef broth, onions, and Gruyère cheese.","isVeg":false,"price":2000,"cloudinaryImageId":"chs0jbyj2osyqumr1wiu","avgRating":"4.1"},
        
        {"menuId":"410556$06","name":"Minestrone Soup","description":"A hearty and flavorful minestrone soup made with beans, vegetables, and pasta.","isVeg":true,"price":1700,"cloudinaryImageId":"buh5wmzdi8varrcaok0t","avgRating":"4.0"},
        
        {"menuId":"410556$07","name":"Chicken Tortilla Soup","description":"A creamy and flavorful chicken tortilla soup made with chicken, tortilla chips, tomatoes, and cheese.","isVeg":false,"price":2100,"cloudinaryImageId":"i3wks8cgs0b01pf4cjlb","avgRating":"3.9"},
        
        {"menuId":"410556$08","name":"Black Bean Soup","description":"A hearty and flavorful black bean soup made with black beans, tomatoes, and spices.","isVeg":true,"price":1800,"cloudinaryImageId":"nyp7yrzwc1dc2xqfkydk","avgRating":"3.8"},
        
        {"menuId":"410556$09","name":"Tomato Basil Soup","description":"A creamy and flavorful tomato basil soup made with fresh tomatoes, basil, and cream.","isVeg":true,"price":1900,"cloudinaryImageId":"s7iaru1tltotpdqnk8fa","avgRating":"3.8"},
        
        {"menuId":"410556$10","name":"Pasta Salad","description":"A cold pasta salad made with pasta, vegetables, and a light dressing.","isVeg":true,"price":1500,"cloudinaryImageId":"trrrvf77euhtcmxlfevr","avgRating":"4.5"}
    ]
    },
    {
      "410566" :
      [
      
        {"menuId":"410566$01","name":"Fruit Salad","description":"A refreshing fruit salad made with fresh fruits, yogurt, and honey.","isVeg":true,"price":1200,"cloudinaryImageId":"ee5f8e06b300efc07c9fe3f4df40dfc4","avgRating":"4.3"},
        
        {"menuId":"410566$02","name":"Chicken Tikka Masala","description":"A creamy and flavorful dish of chicken marinated in yogurt and spices, then cooked in a tomato-based sauce.","isVeg":false,"price":2500,"cloudinaryImageId":"mivkobeovrifkpakyd4e","avgRating":"4.5"},
        
        {"menuId":"410566$03","name":"Vegetable Biryani","description":"A flavorful rice dish made with vegetables, spices, and herbs.","isVeg":true,"price":2000,"cloudinaryImageId":"buh5wmzdi8varrcaok0t","avgRating":"4.3"},
        
        
        {"menuId":"410566$04","name":"Chicken Fried Rice","description":"A classic Chinese dish of rice stir-fried with chicken, vegetables, and spices.","isVeg":false,"price":2200,"cloudinaryImageId":"chs0jbyj2osyqumr1wiu","avgRating":"4.2"},
        
        {"menuId":"410566$05","name":"Manchurian Chicken","description":"A Chinese dish of chicken coated in a sweet and sour sauce.","isVeg":false,"price":1800,"cloudinaryImageId":"chs0jbyj2osyqumr1wiu","avgRating":"4.1"},
        
        {"menuId":"410566$06","name":"Paneer Tikka Masala","description":"A creamy and flavorful dish of cottage cheese marinated in yogurt and spices, then cooked in a tomato-based sauce.","isVeg":true,"price":2300,"cloudinaryImageId":"nyp7yrzwc1dc2xqfkydk","avgRating":"4.0"},
        
        {"menuId":"410566$07","name":"Fish Tikka Masala","description":"A creamy and flavorful dish of fish marinated in yogurt and spices, then cooked in a tomato-based sauce.","isVeg":false,"price":2600,"cloudinaryImageId":"uvltlhppkqfium1fpuay","avgRating":"3.9"},
        
        {"menuId":"410566$08","name":"Lamb Rogan Josh","description":"A rich and flavorful dish of lamb cooked in a tomato-based sauce with spices.","isVeg":false,"price":2900,"cloudinaryImageId":"qodtra947y0ngmvexshf","avgRating":"3.8"},
        
        {"menuId":"410566$09","name":"Chicken Korma","description":"A creamy and flavorful dish of chicken cooked in a yogurt-based sauce with spices.","isVeg":false,"price":2700,"cloudinaryImageId":"uqmhdd4bvsjwtytuhmwa","avgRating":"3.8"},
        
        {"menuId":"410566$10","name":"Pasta Salad","description":"A cold pasta salad made with pasta, vegetables, and a light dressing.","isVeg":true,"price":1500,"cloudinaryImageId":"eq4dawazc2vy6ciyzyr8","avgRating":"4.5"}
    ]
    },
    {
      "410571":
      [
      
        {"menuId":"410571$01","name":"Chicken Tikka Masala","description":"A creamy and flavorful curry made with chicken marinated in yogurt and spices.","isVeg":false,"price":2500,"cloudinaryImageId":"eq4dawazc2vy6ciyzyr8","avgRating":"4.5"},
        
        {"menuId":"410571$02","name":"Chicken Tikka Masala","description":"A creamy and flavorful dish of chicken marinated in yogurt and spices, then cooked in a tomato-based sauce.","isVeg":false,"price":2500,"cloudinaryImageId":"qodtra947y0ngmvexshf","avgRating":"4.5"},
        
        {"menuId":"410571$03","name":"Vegetable Biryani","description":"A flavorful rice dish made with vegetables, spices, and herbs.","isVeg":true,"price":2000,"cloudinaryImageId":"ee5f8e06b300efc07c9fe3f4df40dfc4","avgRating":"4.3"},
        
        {"menuId":"410571$04","name":"Chicken Fried Rice","description":"A classic Chinese dish of rice stir-fried with chicken, vegetables, and spices.","isVeg":false,"price":2200,"cloudinaryImageId":"spd3y5gok3vvwqulgmda","avgRating":"4.2"},
        
        {"menuId":"410571$05","name":"Manchurian Chicken","description":"A Chinese dish of chicken coated in a sweet and sour sauce.","isVeg":false,"price":1800,"cloudinaryImageId":"mivkobeovrifkpakyd4e","avgRating":"4.1"},
        
        {"menuId":"410571$06","name":"Paneer Tikka Masala","description":"A creamy and flavorful dish of cottage cheese marinated in yogurt and spices, then cooked in a tomato-based sauce.","isVeg":true,"price":2300,"cloudinaryImageId":"ul9xzko9eliviajj2wft","avgRating":"4.0"},
        
        {"menuId":"410571$07","name":"Fish Tikka Masala","description":"A creamy and flavorful dish of fish marinated in yogurt and spices, then cooked in a tomato-based sauce.","isVeg":false,"price":2600,"cloudinaryImageId":"uqmhdd4bvsjwtytuhmwa","avgRating":"3.9"},
        
        {"menuId":"410571$08","name":"Lamb Rogan Josh","description":"A rich and flavorful dish of lamb cooked in a tomato-based sauce with spices.","isVeg":false,"price":2900,"cloudinaryImageId":"spd3y5gok3vvwqulgmda","avgRating":"3.8"},
        
        {"menuId":"410571$09","name":"Chicken Korma","description":"A creamy and flavorful dish of chicken cooked in a yogurt-based sauce with spices.","isVeg":false,"price":2700,"cloudinaryImageId":"85c20ed30425350ac5ee96f10d5d1329","avgRating":"3.8"},
        
        {"menuId":"410571$10","name":"Pasta Salad","description":"A cold pasta salad made with pasta, vegetables, and a light dressing.","isVeg":true,"price":1500,"cloudinaryImageId":"buh5wmzdi8varrcaok0t","avgRating":"4.5"}
    ]
    }
  ]


 module.exports = {
    Restaurants,
    Menus
 }  