const {GoogleGenAI} = require('@google/genai');

const ai = new GoogleGenAI({apikey:"AIzaSyA2ICef9bIB8j_nFEDeqySHLirvUqFD1O8"});

async function main(msg){
    const response = await ai.models.generateContent({
        model:"gemini-2.0-flash",
        contents: msg
    });

    return response.text;
}

// take weather
async function getWeather(location)
{
    for(const {city,date} of location)
    {
        if(date.toLowerCase()==='today')
        {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=a3e3cfeb68234763976164523251401&q=${city}`);
            const data = await response.json();
        }
    }
}