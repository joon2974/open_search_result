
var target = document.querySelector("#gsr")

if(target){
  var urlList = []
  var urls = document.querySelectorAll('cite')

  for(var i = 0; i < urls.length; i++){
    urlList.push(urls[i].innerText)
  }

  console.log(urlList)
}
var check = document.getElementsByClassName('srp tbo vasq')

if(check.length > 0){
  if(urlList.length > 0){
    for(var i = 0; i < urlList.length; i++){
      window.open(urlList[i])
      // console.log(urlList[i])
    }
  }
}
