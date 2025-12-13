// async function getWeather(city) {
//     try{
//         let apikey = "cbfce3cd3d1bf7ed0f37c8c2052e4448";

//         let raw = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
//         );

//         if(!raw.ok){
//             throw new Error("City not found, try something else.");
//         }

//         let realdata = await raw.json();

//         // Kelvin to Celsius
//         let tempCelsius = realdata.main.temp - 273.15;

//         if (tempCelsius < 10){
//             console.warn("Too Cold out there...");
//         } else if (tempCelsius > 40) {
//             console.warn("Too Hot out there...");
//         } else {
//             console.log("Weather is normal 👍");
//         }

//         console.log(`City: ${realdata.name}`);
//         console.log(`Temperature: ${tempCelsius.toFixed(2)} °C`);
//     } catch(err) {
//         console.error(err.message);
//     }
// };
// getWeather("leh");
// getWeather("bhopal");
// getWeather("london");
// getWeather("California");
// getWeather("Creek");

const users = [
    "akarsh@male.com",
    "tauseef@male.com",
    "abdur@male.com",
];

function sendEmail(email) {
    return new Promise((resolve, reject) => {
        let time = Math.floor(Math.random() * 5);
        setTimeout(() => {
            let probability = Math.floor(Math.random() * 10);
            if (probability <= 5) resolve(`Email sent to ${email}`);
            else reject(`Email failed for ${email}`);
        }, time * 1000);
    });
};

function sendEmails(userList) {
    let allresponses = userList.map(function (email) {
        return sendEmail(email)
            .then(function (data) {
                console.log(data);
            })
            .catch(function (err) {
                console.log(err);
            });
    });

    console.log(allresponses);
};
sendEmails(users);
