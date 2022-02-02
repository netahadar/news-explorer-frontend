import { MAIN_API_BASE_URL } from "./constants";

  class MainApi {
    constructor(baseUrl, headers) {
      this._baseUrl = baseUrl;
      this._headers = headers;
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
  
    //Get user info from server:
    getUserInfo() {
      return this.fetchCall(`${this._baseUrl}/users/me`, {
        headers: this._headers,
      });
    }
  

    //Get saved cards from server:
    getSavedCards() {
      return this.fetchCall(`${this._baseUrl}/articles`, {
        method:"GET",
        headers: this._headers,
      });
    }
  
    //Save card:
    saveCard(obj, cardKeyword) {
      return this.fetchCall(`${this._baseUrl}/articles`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
            keyword: cardKeyword,
            title: obj.title,
            text: obj.description,
            date: obj.publishedAt,
            source: obj.source.name,
            link: obj.url,
            image: obj.urlToImage,
        }),
      });
    }
  
    //Delete card:
    deleteCard(cardId) {
      return this.fetchCall(`${this._baseUrl}/articles/${cardId}`, {
        method: "DELETE",
        headers: this._headers,
      });
    }
  
    //Add like to card:
    _addLike(cardId) {
      return this.fetchCall(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: "PUT",
        headers: this._headers,
      });
    }
  
    //Remove like from card:
    _dislike(cardId) {
      return this.fetchCall(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: "DELETE",
        headers: this._headers,
      });
    }

    //toggle likes:
    changeLikeCardStatus(cardID, isLiked){
      if (isLiked){
        return this._dislike(cardID);
      } else {
        return this._addLike(cardID);
      }
    }
  }
  
  const mainApi = new MainApi(MAIN_API_BASE_URL, {
    authorization: `Bearer ${localStorage.jwt}`,
    "Content-Type": "application/json",
  });
  
  export default mainApi;