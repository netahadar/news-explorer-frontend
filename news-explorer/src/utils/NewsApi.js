
  
  class NewsApi {
    constructor(baseUrl, headers, from, to) {
      this._baseUrl = baseUrl;
      this._headers = headers;
      this._from = from;
      this._to = to;
      this.fetchCall = this.fetchCall.bind(this);
    }

    fetchCall(url, headers) {
      return fetch(url, headers)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
    
          Promise.reject(`ERROR: ${res.statusText}`);
        })
    };
    
    // //Get articles from server:
    getArticles(keyword) {
      return this.fetchCall(`
      ${this._baseUrl}/everything?q=${keyword}&from=${this._from}&to=${this._to}&pageSize=100`, 
      {
        headers: this._headers,
        });
    }
  }
  
  //Calculate one week ago:
  const date = new Date();
  const last = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
  const day = last.getDate();
  const month = last.getMonth() + 1;
  const year = last.getFullYear();
  const from = year + "/" + month + "/" + day;
  const to = date;
//To-Do: change base url to https://nomoreparties.co/news/ before publishing site
  const newsApi = new NewsApi("https://newsapi.org/v2", {
    "X-Api-Key": "86396d5028184694985b36f420ef7036",
  }, from, to);
  
  export default newsApi;