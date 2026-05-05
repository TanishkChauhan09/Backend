const fs = require('fs');

const restaurant = [];
const images = ["First","Second","third","fourth","fifth","sixth","seventh","Eigth","nine","tenth"]
const rest_name  = [  "The Gourmet Haven",
    "Savor Bistro",
    "Urban Eats",
    "Coastal Delight",
    "Spice Symphony",
    "The Hungry Fork",
    "Golden Palate",
    "Rustic Table",
    "Fusion Fiesta",
    "Harvest Kitchen",
    "Firewood Grill",
    "The Pasta Bowl",
    "Sweet & Savory",
    "Ocean's Catch",
    "Brick Oven Bliss",
    "Herb Garden Café",
    "Taco Trail",
    "Skyline Diner",
    "Sunset Taverna",
    "Midtown Munchies"]
const foodTypes = [
        "Italian",
        "Chinese",
        "Mexican",
        "Indian",
        "Japanese",
        "Mediterranean",
        "Thai",
        "American",
        "French",
        "Korean"];
const delhiLocations = [
            "Connaught Place",
            "Chandni Chowk",
            "Hauz Khas",
            "Karol Bagh",
            "Lajpat Nagar",
            "Saket",
            "Greater Kailash",
            "Rajouri Garden",
            "Vasant Kunj",
            "Dilli Haat"
          ];        


for(let i=0;i<100;i++)
{
    const obj = {};
    obj["image"] = images[Math.floor(Math.random()*10)];
    obj["name"] = rest_name[Math.floor(Math.random()*20)];
    obj["rating"] = Math.floor(Math.random()*5+1);
    obj["food_type"] = foodTypes[Math.floor(Math.random()*10)];
    obj["price_for_two"] =Math.floor(Math.random()*2401+100);   // 100-2500(max-min+1)+min
    obj["location"] = delhiLocations[Math.floor(Math.random()*10)];
    obj["distance"] = Math.floor(Math.random()*10+1);
    obj["offers"] = Math.floor(Math.random()*30);
    obj["alcohol"] = Math.random() > 0.7;
    obj["restaurant_open_time"] = Math.floor(Math.random()*24);
    obj["restaurant_close_time"] = (obj["restaurant_open_time"]+12)%24;

    restaurant.push(obj);
     
}    

// iss se jo dummy data create hua hai kya usko baar baar generate krta rahoon ya direct array me store kra loon 
// toh iske liye hme isko json format me convert krna hota hai
console.log(restaurant);

// Array convert into JSON(Homework)

const jsonData = JSON.stringify(restaurant, null, 4);  
fs.writeFileSync('arrayData.json', jsonData, 'utf8');

