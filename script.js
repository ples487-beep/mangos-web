function showSection(id) {
    const sections = document.querySelectorAll('section');

    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.add('hidden');
    }

    document.getElementById(id).classList.remove('hidden');
}

const links = document.querySelectorAll('.sidebar a');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
        event.preventDefault();

        const sectionName = links[i].dataset.section;

        showSection(sectionName);
    });
}

const projects = document.querySelectorAll('.project');

for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener('click', function () {
        const dialogId = projects[i].dataset.dialog;
        document.getElementById(dialogId).showModal();
    });
}

const closeButtons = document.querySelectorAll('.close-dialog');

for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function () {
        closeButtons[i].closest('dialog').close();
    });
}

async function updateWeather() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=40.2056&longitude=-8.4196&current=weather_code,temperature_2m';
    const sky = document.getElementById('bg-sky');
    const weatherText = document.getElementById('weather-status');

    try {
        const response = await fetch(url);
        const data = await response.json();
        const code = data.current.weather_code;
        const temp = Math.round(data.current.temperature_2m);

        if (code === 0) {
            document.body.style.backgroundColor = '#0066ff';
            sky.style.backgroundImage = "url('img/skychuva.png')";
            if (weatherText) weatherText.textContent = `coimbra // ${temp}°C // clear`;
        } else if (code <= 3) {
            document.body.style.backgroundColor = '#0066ff';
            sky.style.backgroundImage = "url('img/skychuva.png')";
            if (weatherText) weatherText.textContent = `coimbra // ${temp}°C // partly cloudy`;
        } else if (code >= 51) {
            document.body.style.backgroundColor = '#003380';
            sky.style.backgroundImage = "url('img/skychuva.png')";
            if (weatherText) weatherText.textContent = `coimbra // ${temp}°C // rain`;
        } else {
            document.body.style.backgroundColor = '#1a5cc8';
            sky.style.backgroundImage = "url('img/skychuva.png')";
            if (weatherText) weatherText.textContent = `coimbra // ${temp}°C // cloudy`;
        }
    } catch (error) {
        if (weatherText) weatherText.textContent = 'coimbra // offline mode';
    }
}

updateWeather();