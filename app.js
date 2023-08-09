// giphy api key = BYnR5rr1Y4cMImAKleLbUiIv7AQ9zPXL
const
    $searchForm = $('#form'),
    $searchBar = $('#search-bar'),
    $clearBtn = $('#clear-button'),
    $gifs = $('#gifs')
;

function appendGif(data) {
  if (!data.length) {
    alert('No gifs found. Please try again.');
    return;
  }

  let index = Math.floor(Math.random() * data.length);
  const gifSrc = data[index].images.original.url;
  $gifs.append(`<img src="${gifSrc}" alt="gif">`);
}

async function searchGiphy(query) {
  try {
    let response = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: {
        q: query,
        api_key: "BYnR5rr1Y4cMImAKleLbUiIv7AQ9zPXL",
      },
    });
    appendGif(response.data.data);
  } catch (e) {
    alert('Something went wrong. Please try again.');
  }
}

$searchForm.on('submit', async e => {
  e.preventDefault();
  const query = $searchBar.val();
  $searchBar.val('');
  if (!query) return;
  await searchGiphy(query);
});

$clearBtn.on('click', () => $gifs.empty());




