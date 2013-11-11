$(document).ready(function() {
  $('a#get_color').on('click', function(e) {
    e.preventDefault()
    var random_num = Math.floor((Math.random()*9)+1)

    $.post('/color', {
      dataType: 'json'
    }, function(data, status) {
      $('li:nth-child(' + data.cell + ')').css('background-color', data.color)
    })
  })
})