import "./style.css";

async function fetchJSONData() {
	const cards = await fetch("/api/fetchNotion")
		.then((res) => res.json())
		.then((data) => data.results);

	document.querySelector(".card-container").innerHTML = cards
		.map(
			(card) => `
		<article class="card">
				<img
					src=${card.properties.Cover.files[0].file.url}
					alt=""
					class="card__image"
				/>
				<h2 class="card__heading">${card.properties.Name.title[0].plain_text}</h2>
				<div class="card__content">
					<p>
						${card.properties.Author.select.name}
					</p>
					<a href="https://media.tenor.com/awZg-WgEyTYAAAAM/goofy-funny.gif" class="card__btn">Check me Out!</a>
				</div>
			</article>
		`
		)
		.join("");
}

fetchJSONData();
