console.log("Let's get this party started!");

async function getGif(search) {
    const result = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    const url = result.data.data[(Math.floor(Math.random()*50))].images.original.url;
    return url
}

function addGif(url) {
    const newGif = document.createElement('img');
    newGif.src = url
    newGif.classList.add('col-sm-6', 'col-md-4')
    $('#gifBoxBody').append(newGif)
}

const searchBtn = document.querySelector('#searchBtn');
searchBtn.addEventListener('click', async function(event){
    event.preventDefault();
    if ($('#searchTerm').val() === '') {
        alert('Please enter a valid search term.')
    } else {
        try {
            const searchTerm = $('#searchTerm').val();
            const result = await getGif(searchTerm)
            addGif(result)
            $('#searchTerm').val('');
        } catch(e) {
            alert('Please try another search term. No gifs to discover here.')
        }
    }
})

$('#deleteBtn').on('click', function(event){
    event.preventDefault();
    $('#gifBoxBody').html('');
})
