$(document).ready(function(){
  $('a#get_color').on('click', function(e) {
    e.preventDefault()
    var random_num = Math.floor((Math.random()*9)+1)
    var num = Math.floor((Math.random()* 0xffffff)+1).toString().slice(0,6)
    var color = '#' + num
    // color= "#" + "%06x" % (rand * 0xffffff)
    $.ajax({
      url: '/color',
      method: 'post',
      data: {submit: true}
    }).done(function(server_data) {
      $('li:nth-child(' + random_num +')').css('background-color', color)
    })
  })
});