var information = {
    planets: {
        earth: {
            Radius: [6378, '6,378 km'],
            Mass: [5.97237 * 10 ** 24, '5.97237 x 10^24 kg'],
            MeanTemperature: [15, '15 C'],
            OrbitalPeriod: [365, '365 days'],
            SurfaceGravity: [9.807, '9.807 m/s']
        },
        jupiter: {
            Radius: [71492, '71,492 km'],
            Mass: [1.8986 * 10 ** 27, '1.8986 x 10^27'],
            MeanTemperature: [-108, '-108'],
            OrbitalPeriod: [4332, '4,332'],
            SurfaceGravity: [24.79, '24.79']
        },
        
        mars: { 
            Radius: [3396, '3,396 km'], 
            Mass: [6.4171 * 10 ** 23, '6.4171 x 10^23 kg'], 
            MeanTemperature: [-55, '-55 C'], 
            OrbitalPeriod: [687, '687 days'], 
            SurfaceGravity: [3.71, '3.71 m/s']
        },
        
        mercury: {
            Radius: [2439.7, '2,439.7 km'],
            Mass: [3.301 * 10 ** 23, '3.301 x 10^23 kg'],
            MeanTemperature: [310, '310 C'],
            OrbitalPeriod: [87.969, '87.969 days'],
            SurfaceGravity: [3.7, '3.7 m/s']
        },
      
        saturn: { 
            Radius: [60268, '60,268 km'], 
            Mass: [5.6836 * 10 ** 26, '5.6836 x 10^26 kg'], 
            MeanTemperature: [-178, '-178 C'], 
            OrbitalPeriod: [10759, '10,759 days'], 
            SurfaceGravity: [10.44, '10.44 m/s']
        },
        
        uranus: { 
            Radius: [25559, '25,559 km'], 
            Mass: [8.6810 * 10 ** 25, '8.6810 x 10^25 kg'], 
            MeanTemperature: [-212, '-212 C'], 
            OrbitalPeriod: [30688, '30,688 days'], 
            SurfaceGravity: [8.69, '8.69 m/s']
        },
        
         venus: { 
            Radius: [6051, '6,051 km'], 
            Mass: [4.8675 * 10 ** 24, '4.8675 x 10^24 kg'], 
            MeanTemperature: [462, '462 C'], 
            OrbitalPeriod: [243, '243 days'], 
            SurfaceGravity: [8.87, '8.87 m/s']
        },
        
         sun: { 
            Radius: [695700, '695,700 km'], 
            Mass: [1.98855 * 10 ** 30, '1.98855 x 10^30 kg'], 
            MeanTemperature: [5600, '5,600 C'], 
            OrbitalPeriod: [0, 'N/A'], 
            SurfaceGravity: [274, '274 m/s']
        },
        
      
          neptune: { 
           Radius: [24764, '24,764 km'], 
           Mass: [1.0243 * 10 ** 26, '1.0243 x 10^26 kg'], 
           MeanTemperature: [-214, '-214 C'], 
           OrbitalPeriod: [60182, '60,182 days'], 
           SurfaceGravity: [11.15, '11.15 m/s']
       },
    }
}


var modal = document.getElementById('modal');
var modalText = document.getElementById("caption");
var modalText2 = document.getElementById("caption2");
var modalComparison = document.getElementById("comparison-text");
var closeButton = document.getElementById("closeButton");
var button = document.getElementById('compareButton')
var firstPlanet;



var displayModal = function (yesOrNo) {
    if (yesOrNo) {
        modal.style.display = "block";

    } else {
        modal.style.display = "none";
    }
}


window.onclick = function (event) {
    if (event.target == modal || event.target == closeButton) {
        displayModal(false);
        modalComparison.innerHTML = ""
        modalText2.innerHTML = ""

    }

    if (event.target.tagName === "IMG") {
        firstPlanet = event.target.id;
        document.getElementById("modalImage1").src = event.target.src;
        modalText.innerHTML = getPlanetInfo(event.target.id);
        displayModal(true);
    }
    if (event.target == button) {
        buttonDrop();
    }

    if (event.target.tagName === "BUTTON" && event.target !== button) {
        document.getElementById("modalImage2").src = document.getElementById(event.target.innerHTML.toLowerCase()).src;
        modalText2.innerHTML = getPlanetInfo(event.target.innerHTML.toLowerCase());
        modalComparison.innerHTML = comparePlanets(firstPlanet, event.target.innerHTML.toLowerCase());

    }
}

var getPlanetInfo = function (planet) {
    var planetInfo = information.planets[planet];
    var text = "";
    for (var key in planetInfo) {
        text = text.concat(key + ": " + planetInfo[key][1] + "<br>");
    }
    return text;
};

function buttonDrop() {
    document.getElementById("Dropdown").classList.toggle("show");
}


var comparePlanets = function (planet1, planet2) {
    var onePlanet;
    onePlanet = getPlanetInfoValue(planet1);
    var twoPlanet;
    twoPlanet = getPlanetInfoValue(planet2);
    var result = [];
    var message = "";
    for (i = 0; i < onePlanet.length; i++) {
        if (i === 2) {

            if (onePlanet[2] > twoPlanet[2]) {
                result.push(onePlanet[2] - twoPlanet[2]);
                message = message.concat("Temperature" + " : " + planet1.charAt(0).toUpperCase() + planet1.slice(1) + " is " + result[i].toFixed() + " degrees Celsius hotter than " + planet2.charAt(0).toUpperCase() + planet2.slice(1) + "<br>");
            } else {
                result.push(twoPlanet[2] - onePlanet[2]);
                message = message.concat("Temperature" + " : " + planet2.charAt(0).toUpperCase() + planet2.slice(1) + " is " + result[i].toFixed() + " degrees Celsius hotter than " + planet1.charAt(0).toUpperCase() + planet1.slice(1) + "<br>");
            }

        } else if (i === 0) {
            if (onePlanet[0] > twoPlanet[0]) {
                result.push(onePlanet[i] / twoPlanet[i]);
                message = message.concat("Radius" + " : " + planet1.charAt(0).toUpperCase() + planet1.slice(1) + " is " + result[i].toFixed(2) + " times bigger than " + planet2.charAt(0).toUpperCase() + planet2.slice(1) + "<br>");
            } else {
                result.push(twoPlanet[0] / onePlanet[0]);
                message = message.concat("Radius" + " : " + planet2.charAt(0).toUpperCase() + planet2.slice(1) + " is " + result[i].toFixed(2) + " times bigger than " + planet1.charAt(0).toUpperCase() + planet1.slice(1) + "<br>");
            }
        } else if (i === 1) {
            if (onePlanet[1] > twoPlanet[1]) {
                result.push(onePlanet[i] / twoPlanet[i]);
                message = message.concat("Mass" + " : " + planet1.charAt(0).toUpperCase() + planet1.slice(1) + " is " + result[i].toFixed(2) + " times heavier than " + planet2.charAt(0).toUpperCase() + planet2.slice(1) + "<br>");
            } else {
                result.push(twoPlanet[1] / onePlanet[1]);
                message = message.concat("Mass" + " : " + planet2.charAt(0).toUpperCase() + planet2.slice(1) + " is " + result[i].toFixed(2) + " times heavier than " + planet1.charAt(0).toUpperCase() + planet1.slice(1) + "<br>");
            }
        } else if (i === 3) {
            if (onePlanet[3] > twoPlanet[3]) {
                result.push(onePlanet[i] - twoPlanet[i]);
                message = message.concat("Orbital Period" + " : " + planet1.charAt(0).toUpperCase() + planet1.slice(1) + " takes " + result[i].toFixed(0) + " days longer to orbit the sun than " + planet2.charAt(0).toUpperCase() + planet2.slice(1) + "<br>");
            } else {
                result.push(twoPlanet[3] - onePlanet[3]);
                message = message.concat("Orbital Period" + " : " + planet2.charAt(0).toUpperCase() + planet2.slice(1) + " takes " + result[i].toFixed() + " days longer to orbit the sun than " + planet1.charAt(0).toUpperCase() + planet1.slice(1) + "<br>");
            }
        } else if (i === 4) {
            if (onePlanet[4] > twoPlanet[4]) {
                result.push(onePlanet[i] / twoPlanet[i]);
                message = message.concat("Surface Gravity" + " : " + planet1.charAt(0).toUpperCase() + planet1.slice(1) + "'s gravity pull is " + result[i].toFixed(2) + " times faster than " + planet2.charAt(0).toUpperCase() + planet2.slice(1) + "<br>");
            } else {
                result.push(twoPlanet[4] / onePlanet[4]);
                message = message.concat("Surface Gravity" + " : " + planet2.charAt(0).toUpperCase() + planet2.slice(1) + "'s gravity pull is " + result[i].toFixed(2) + " times stronger than " + planet1.charAt(0).toUpperCase() + planet1.slice(1) + "<br>");
            }
        }


    }
    return message;


};


var getPlanetInfoValue = function (planet) {
    var planetInfo = information.planets[planet];
    var valueArray = [];
    for (var key in planetInfo) {
        valueArray.push(planetInfo[key][0]);
    }
    return valueArray;
}

