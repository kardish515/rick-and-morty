import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {ApiCall} from './api.js';

function numberGenerator() {
  return Math.floor(Math.random() * 436 + 1);
}



let displayData = function(response) {
  let body = JSON.parse(response);
  $('.image').empty();
  $('.namebox').hide();
  $('.namebox2').hide();
  $('.card-text').removeClass('namebox2');
  $('.name').text('');
  if (body.name.length >= 35) {
    $('#name2').text(body.name);
    $('.namebox2').show();
  } else if (body.name.length < 35) {
    $('#name1').text(body.name);
    $('.namebox').show();
  }

    $('#species').text('Species: ' + body.species);
    $('#status').text('Status: ' + body.status);

  $('.image').append('<img src ="' + body.image + '">');

}

$(function(){
  $(".border").hide();
  $('.namebox2').hide();
  let apiCall = new ApiCall();
  $('#getCharacter').click(function(){
    $(".border").show();
    let num = numberGenerator();
    apiCall.getData(displayData, num);
  });
});
