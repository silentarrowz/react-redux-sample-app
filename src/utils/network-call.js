import axios from 'axios';


export function getRequest(url, successCallback, errorCallback) { 
  _handleResponse(axios.get(url), successCallback, errorCallback);
}

function _handleResponse(response, successCallback, errorCallback) {
    response.then(({data}) => {
      successCallback(data);
    }).catch((error) => {
        errorCallback(error);     
    });
  }