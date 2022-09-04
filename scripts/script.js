let height = window.innerHeight;
let width = window.innerWidth;

document.body.style.height = window.innerHeight;
document.body.style.width = window.innerWidth;

let background = {
    audio: document.getElementsByClassName('backgroundAudio')[0],
    permission: true
}

document.body.addEventListener('click', function() {
    if (background.permission) {
        background.permission = false;
        background.audio.play();
    }
});

let planets = [];

for (let i = 0; i < 9; i++) {
    planets.push({
        image: document.getElementsByClassName('image')[i],
        video: document.getElementsByClassName('video')[i],
        header: document.getElementsByClassName('header')[i],
        leftText: document.getElementsByClassName('leftText')[i],
        rightText: document.getElementsByClassName('rightText')[i],
        instruction: document.getElementsByClassName('secondInstruction')[0],
        permission: false
    });

    planets[i].image.addEventListener('click', function() {
        appearence(planets[i]);
    });

    planets[i].video.addEventListener('click', function() {
        disappearance(planets[i]);
    });

    planets[i].header.addEventListener('click', function() {
        disappearance(planets[i]);
    });

    planets[i].leftText.addEventListener('click', function() {
        disappearance(planets[i]);
    });

    planets[i].rightText.addEventListener('click', function() {
        disappearance(planets[i]);
    });

    planets[i].instruction.addEventListener('click', function() {
        disappearance(planets[i]);
    })
}

console.log(planets[0].image.hasAttribute('top'));

//planets[0].image.setAttribute('top', `${0.6435 * window.innerHeight.toFixed(3)}px`);
planets[0].image.style.top = 0.6435 * window.innerHeight + 'px';
//planets[0].image.setAttribute('left', `${0.1755 * window.innerWidth}px`);
planets[0].image.style.left = 0.1755 * window.innerWidth + 'px';
//planets[0].image.setAttribute('width', `${0.026 * window.innerWidth}px`);
planets[0].image.style.width = 0.026 * window.innerWidth + 'px';

console.log(planets[0].image.hasAttribute('top'));
console.log(planets[0].image.getAttribute('top'), planets[0].image.getAttribute('left'));

function appearence(planet) {
    planet.permission = false;

    let opacity = 0;

    planet.video.classList.remove('hidden');
    planet.header.classList.remove('hidden');
    planet.leftText.classList.remove('hidden');
    planet.rightText.classList.remove('hidden');
    planet.instruction.classList.remove('hidden');

    setTimeout(function increasing() {
        if (opacity > 1)
            return;

        opacity += 0.01;

        planet.video.style.opacity = opacity;
        planet.header.style.opacity = opacity;
        planet.leftText.style.opacity = opacity;
        planet.rightText.style.opacity = opacity;
        planet.instruction.style.opacity = opacity;

        setTimeout (increasing, 10);
    }, 10);  

    setTimeout(function() {
        planet.permission = true;
    }, 1100);
}

function disappearance(planet) {
    if (planet.permission) {
        planet.permission = false;

        let opacity = 1;

        setTimeout(function decreasing() {
            if (opacity < 0)
                return;

            opacity -= 0.01;

            planet.video.style.opacity = opacity;
            planet.header.style.opacity = opacity;
            planet.leftText.style.opacity = opacity;
            planet.rightText.style.opacity = opacity;
            planet.instruction.style.opacity = opacity;

            setTimeout (decreasing, 10);
        }, 10);  

        setTimeout(function() {
            planet.video.classList.add('hidden');
            planet.header.classList.add('hidden');
            planet.leftText.classList.add('hidden');
            planet.rightText.classList.add('hidden');
            planet.instruction.classList.add('hidden');
        }, 1100);
    }
}