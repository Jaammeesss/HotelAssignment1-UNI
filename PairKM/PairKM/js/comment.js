// these are the functions for the localstorage utility 
function setObject(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}
function getObject(key) {
  var storage = window.localStorage,
      value = storage.getItem(key);
  return value && JSON.parse(value);
}
function clearStorage() {
  window.localStorage.clear();
}

// this section clears the comment fields and the localstorage
function clearComment(){
  $('#txt1').val('');
  $('#namebox').val('');
  clearStorage();
}

function saveComment(){
  var cText = $('#txt1').val(),
      cName = $('#namebox').val(),
      cmtList = getObject('cmtlist');

  if (cmtList){
    cmtList.push({name: cName, text: cText});
    setObject('cmtlist', cmtList);
  }else{ //Add a comment
    setObject('cmtlist', [{name: cName, text: cText}]);
  }

  bindCmt();
}

function bindCmt(){
  var cmtListElement = $('#cmtlist'),
      cmtList = getObject('cmtlist');

  
  cmtListElement.empty();
  
  $.each(cmtList, function(i, k){
    cmtListElement.append( $('<p><span>'+ k.name + ': '+ k.text +'</p>' + '</span>') );
  });
}


$(function(){
  bindCmt();
});