const axios = require('axios');

const api = axios.create({
  baseURL: 'https://newsapi.org/v2/'
});

const loadProducts = async () => {
  const params = {
      from: '2019-07-25',
      to: '2019-07-25',
      sortBy: 'popularity',
      apikey: 'b720df1c750242b39ae21b0915372a4e',
      q: 'slipknot'
  }
  const response = await api.get('/everything', {params});
  const { articles } = response.data;
  let newArticle = articles.filter(article => article.title.toLowerCase().includes('slipknot'))

  let res = Array.prototype.reverse.apply(newArticle)

  for (let ind = 0; ind < res.length; ind++) {
    console.log(`${ind} -> ${JSON.stringify(res[ind]['title'])}`)
  }
}

loadProducts();
