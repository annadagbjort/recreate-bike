fetch("http://annadagbjort.dk/cms-theme/bikes/wp-json/wp/v2/bike?_embed")
    .then(res => res.json())
    .then(handleData)

function handleData(posts) {
    console.log(posts);
    posts.forEach(showBikes)
}

function showBikes(bikes) {
    console.log(bikes)
    const template = document.querySelector("template").content;

    const copy = template.cloneNode(true);

    console.log(bikes._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url)

    copy.querySelector(".brand").textContent = bikes.brand;

    copy.querySelector(".model").textContent = bikes.model;
    copy.querySelector(".price").textContent = bikes.price;
    copy.querySelector(".toPrice").textContent = bikes.price_to;
    copy.querySelector(".colour").textContent = bikes.colours;
    copy.querySelector(".inStock").textContent = bikes.in_stock;


    copy.querySelector(".img-bike").src = bikes._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url
    copy.querySelector(".img-bike").alt = bikes.brand;


    document.querySelector("main").appendChild(copy);
}
