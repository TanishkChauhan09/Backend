// document.getElementById('dobForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     // Get the user's inputs
//     const firstName = document.getElementById('name').value;
//     const surname = document.getElementById('surname').value;
//     const date = parseInt(document.getElementById('date').value);
//     const month = parseInt(document.getElementById('month').value);
//     const year = parseInt(document.getElementById('year').value);

//     // Validate input
//     if (isNaN(date) || isNaN(month) || isNaN(year) || date < 1 || date > 31 || month < 1 || month > 12 || year < 1900 || year > new Date().getFullYear()) {
//         alert("Please enter a valid date, month, and year.");
//         return;
//     }

//     // Zodiac sign logic based on birth date
//     const zodiacSigns = [
//         { name: "Capricorn", end: [1, 19] },
//         { name: "Aquarius", end: [2, 18] },
//         { name: "Pisces", end: [3, 20] },
//         { name: "Aries", end: [4, 19] },
//         { name: "Taurus", end: [5, 20] },
//         { name: "Gemini", end: [6, 20] },
//         { name: "Cancer", end: [7, 22] },
//         { name: "Leo", end: [8, 22] },
//         { name: "Virgo", end: [9, 22] },
//         { name: "Libra", end: [10, 22] },
//         { name: "Scorpio", end: [11, 21] },
//         { name: "Sagittarius", end: [12, 21] }
//     ];

//     let zodiac;
//     if (month < zodiacSigns[0].end[0] || (month === zodiacSigns[0].end[0] && date <= zodiacSigns[0].end[1])) {
//         zodiac = zodiacSigns[0].name;
//     } else {
//         for (let i = 1; i < zodiacSigns.length; i++) {
//             if (month < zodiacSigns[i].end[0] || (month === zodiacSigns[i].end[0] && date <= zodiacSigns[i].end[1])) {
//                 zodiac = zodiacSigns[i].name;
//                 break;
//             }
//         }
//     }

//     // Generate a personalized astrological message
//     let message = "";
//     switch(zodiac) {
//         case "Aries":
//             message = "You are a natural leader, full of energy and ambition. Your determination can take you far!";
//             break;
//         case "Taurus":
//             message = "You are known for your stability and reliability. Once you set your sights on a goal, there's no turning back.";
//             break;
//         case "Gemini":
//             message = "You are curious, communicative, and versatile. Your adaptability is one of your greatest strengths.";
//             break;
//         case "Cancer":
//             message = "You are intuitive, nurturing, and deeply connected to your emotions. Your family and home are your sanctuary.";
//             break;
//         case "Leo":
//             message = "You are a charismatic leader with a flair for drama. Your creativity and confidence shine brightly.";
//             break;
//         case "Virgo":
//             message = "You are practical, detail-oriented, and always striving for perfection. Your organizational skills are top-notch.";
//             break;
//         case "Libra":
//             message = "You are a lover of beauty and harmony. Your diplomatic nature helps you connect with others easily.";
//             break;
//         case "Scorpio":
//             message = "You are intense, passionate, and unafraid to dive deep into life's mysteries. Your strength lies in your resilience.";
//             break;
//         case "Sagittarius":
//             message = "You are adventurous, optimistic, and always seeking new knowledge. Your curiosity knows no bounds.";
//             break;
//         case "Capricorn":
//             message = "You are ambitious, disciplined, and have a strong sense of responsibility. Your focus and hard work will lead you to success.";
//             break;
//         case "Aquarius":
//             message = "You are an innovative thinker with a strong sense of individuality. Your ideas can shape the future.";
//             break;
//         case "Pisces":
//             message = "You are compassionate, artistic, and deeply empathetic. Your imagination and creativity are limitless.";
//             break;
//         default:
//             message = "You are one-of-a-kind!";
//     }

//     // Display result
//     const resultDiv = document.getElementById('result');
//     resultDiv.innerHTML = `
//         <h2>${firstName} ${surname}, your Zodiac sign is ${zodiac}</h2>
//         <p><strong>Your astrological message:</strong> ${message}</p>
//     `;
// });

// ***********************************************************************logic by self****************************
// based on month
    const zodiacSigns = ["Capricorn","Aquarius","Pisces","Aries","Taurus","Gemini",
    "Cancer","Leo","Virgo","Libra", "Scorpio", "Sagittarius"];

// based on date
    const compliments = [
    "You have an amazing smile.",
    "Your kindness is truly inspiring.",
    "You're incredibly talented.",
    "You make the world a better place.",
    "You have a heart of gold.",
    "Your sense of humor is unmatched.",
    "You're such a good listener.",
    "You radiate positive energy.",
    "You are so creative and imaginative.",
    "Your determination is admirable.",
    "You're so thoughtful and considerate.",
    "You have great taste in everything.",
    "You're a true original.",
    "You're always so helpful and generous.",
    "You light up the room with your presence.",
    "Your confidence is contagious.",
    "You're a great friend and companion.",
    "Your style is impeccable.",
    "You always know how to make people feel special.",
    "You're incredibly intelligent.",
    "Your passion is inspiring.",
    "You're a great problem solver.",
    "You bring out the best in people.",
    "You have such a warm and welcoming personality.",
    "You're a great role model.",
    "You have a beautiful soul.",
    "You're always so full of energy.",
    "Your laughter is contagious.",
    "You're incredibly hardworking.",
    "You make everything better just by being there.",
    "You inspire others to be their best selves."
]
// size 20
const victim_compliments = [
    "You always put others first, even when it's not appreciated.",
    "You have such a big heart, but it seems like others don't notice.",
    "You do so much for everyone, and it's sad that it's not always reciprocated.",
    "You're always there for people, even when they don't return the favor.",
    "You give so much of yourself, but it feels like you're left with nothing in return.",
    "You care deeply for others, yet they often take you for granted.",
    "You always try to help, but it's like people don't see your effort.",
    "You're so selfless, yet it seems like others don't acknowledge it.",
    "You always go out of your way for others, but it's rarely recognized.",
    "You do so much for people, and yet they don't appreciate it the way you deserve.",
    "You deserve so much more for all the good you do for others.",
    "You give endlessly, and it's painful that not everyone gives back.",
    "You make so many sacrifices for others, but it's like nobody notices.",
    "You always try to lift others up, but sometimes you get left behind.",
    "You're always the first to help, but people don't always return the favor.",
    "You have such a generous spirit, yet it feels like others never notice.",
    "You do your best for others, but it's hard when you're not shown the same kindness.",
    "You put everyone before yourself, and sometimes it feels like nobody does the same for you.",
    "You show so much love and care, but it seems like you're often overlooked.",
    "You give so much, but it often feels like you don't get what you truly deserve."
]

// size 30
const recommendations = [
    "Feed the street dogs to help those in need.",
    "Volunteer at a local shelter or food bank to give back to your community.",
    "Start a gratitude journal to focus on the positive things in life.",
    "Take time to meditate daily for mental clarity and peace.",
    "Practice kindness by helping someone without expecting anything in return.",
    "Donate clothes or items you no longer need to those less fortunate.",
    "Take up a hobby or learn a new skill to keep your mind active and engaged.",
    "Spend more time outdoors to connect with nature and improve your well-being.",
    "Exercise regularly to keep your body healthy and strong.",
    "Read more books to expand your knowledge and stimulate your mind.",
    "Connect with an old friend or family member you haven't spoken to in a while.",
    "Take small steps every day toward achieving your goals.",
    "Practice mindfulness to stay in the present moment and reduce stress.",
    "Start a composting routine to reduce waste and help the environment.",
    "Create a budget to better manage your finances and plan for the future.",
    "Take regular breaks from screens to reduce eye strain and improve focus.",
    "Join a community group or club to meet new people and build connections.",
    "Adopt a plant or garden to improve your home and the environment.",
    "Volunteer to mentor someone in your field of expertise.",
    "Practice random acts of kindness to brighten someone's day.",
    "Cook a meal for someone who is going through a tough time.",
    "Support local businesses to help boost your local economy.",
    "Take a break from social media to focus on real-life relationships.",
    "Start a sustainable lifestyle by reducing single-use plastics.",
    "Work on building your self-confidence by focusing on your strengths.",
    "Learn how to manage stress with healthy coping mechanisms like deep breathing.",
    "Take part in a charity run or walk to raise money for a good cause.",
    "Encourage others to adopt healthier habits to create a supportive environment.",
    "Spend time with children or elderly people to bring joy into their lives.",
    "Engage in daily self-care routines to nurture your body and mind."
]

// size 20
const predictions = [
  "you'll strike gold with that game-changing idea!",
  "your small investment will bloom into a fortune!",
  "your side hustle will explode into a thriving empire!",
  "In just 6 months, you'll land the deal that turns you into a crorepati!",
  "Next year, you'll be laughing all the way to the bank after a big win!",
  "your creativity will have you swimming in riches!",
  "You'll wake up tomorrow and find out your business just hit it big!",
  "your passion project will skyrocket to the top!",
  "With a little luck and a lot of hustle, you'll be a crorepati in 1 year!",
  "The universe is aligning, and in 3 years, you'll be living your dream life!",
  "Your big break is coming, and in 5 years, you'll be a millionaire!",
  " your investments will grow faster than you can count!",
  "That risky move will pay off, and in 2 years, you'll be rolling in cash!",
  " you'll be on a yacht, wondering how it all happened so fast!",
  "Within the next 3 years, your wild idea will become the next big thing!",
  "your passion will turn into a multi-crore empire!",
  "Hold tight—your financial breakthrough is coming in 6 months!",
  "In 2 years, your life will change forever thanks to your smart decisions!",
  "your name will be on everyone's lips—crorepati vibes only!",
  "your hard work will pay off with a massive payday!"
];

const form = document.getElementById('dobForm');
form .addEventListener('submit',(event)=>{
    event.preventDefault();
    // console.log("Submitted");

    const Name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    
    // console.log(Name,surname);
    const day = Number(document.getElementById('date').value);
    const month = Number(document.getElementById('month').value);
    const year = Number(document.getElementById('year').value);

    // console.log(Name,surname,day,month,year);

    const result = document.getElementById('result');
    
    const first_message = `Hello ${Name} ${surname}.`;
    const second_message = `Your Zodiac sign is ${zodiacSigns[month-1]}`
    const third_message = compliments[day-1];

    let index = Math.floor(Math.random()*20);
    const fourth_messsage = victim_compliments[index];

    index = (Name.length * surname.length * year)%30;
    const fifth_message = recommendations[index];

    index = (day*month*year)%20;
    const sixth_message = predictions[index];

    console.log(sixth_message);
    result.innerText = `${first_message} ${second_message}. ${third_message} ${fourth_messsage} Our recommendation for you is ${fifth_message} Your future prediction is ${sixth_message}`;
})   

