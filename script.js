const myUrl = 'https://bersoantik.com/ru/catalog/article/25_281/'

function reqListener () {
    console.log(this.responseText);
  }
  
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.open("get", myUrl, true);
  oReq.send();
  