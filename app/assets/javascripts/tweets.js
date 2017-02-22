// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function(){
  $('#new_tweet').submit(function(event){
    event.preventDefault();

    $.ajax({
      url: $(this).attr('action'),
      method: $(this).attr('method'),
      data: $('#tweet_message').serialize(),
      dataType: 'json' //json, text, html


    }).done(function(data){
      console.log(data);
      var list = '<li class="tweet"><p>' + data.message + '</p><time>'+ data.created_at +'</time></li>';
      $('.tweets').prepend(list);

    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log('Ajax Request Failed');
      console.log(jqXHR);
    }).always(function(){
      console.log('Ajax Request Sent');
    });
  });
});
