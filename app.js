const searchBtn = document.querySelector('#search-btn');
const form = document.querySelector('#form-tv');
const container = document.querySelector('#container-fluid');
const clearResults = document.querySelector('#clear-results');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
   const searchTerm = form.elements.query.value;
   const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
   
   makeImages(res.data);
   form.elements.query.value = '';
   
})

clearResults.addEventListener('click', function(e) {
    container.innerHTML = '';
})

const makeImages = function (dataResults) {
    for (let d of dataResults){
        let imageLink = d.show.image.medium;
        let image = document.createElement('img')
        image.src = imageLink;
        container.append(image);
    }
}
