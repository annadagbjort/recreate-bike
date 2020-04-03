fetch("http://annadagbjort.dk/cms-theme/bikes/wp-json/wp/v2/bike?_embed")
    .then(res => res.json())
    .then(handleData)

function handleData(posts) {
    console.log(posts);
}
