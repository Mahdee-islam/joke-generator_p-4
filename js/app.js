const jokeEl = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

const generateJoke = () => {
    const url = `https://icanhazdadjoke.com/`;
    fetch(url,{
		headers: {
			'Accept': 'application/json'
		}
	})
    .then(res => res.json())
    .then(joke => jokeElement(joke.joke))

    const jokeElement = joke => {
            jokeEl.innerHTML = joke;
    }
}


get_joke.addEventListener('click', generateJoke)
generateJoke();


