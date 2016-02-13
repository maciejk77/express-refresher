$(function() {
  $.get('/blocks', appendToList);

  function appendToList(blocks) {
    var list = [];
    for(var i in blocks){
      list.push($('<li>', { text: blocks[i] }));
    }
    $('.blocks-list').appendToList(list);
    //console.log($('.blocks-list'));
  }
});