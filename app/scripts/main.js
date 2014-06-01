'use strict';

var tinyServer;
var user = 'Snake-Like Dinosaur';
var msgbox = _.template($('.chat-message').text());

function renderChat(data) {
	$('.textappend').empty();
	for (var i = 0; i < data.length - 1; i += 1) {
		if (data[i].message) {
			var rendered = msgbox(data[i]);
			$('.textappend').append(rendered);    
		}  
	}
}

function loadChat() {
	$.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(function(data) {
		tinyServer = data;
		renderChat(data);  
	});
}

function Message(user, message, time) {  
	this.user = user || '';  
	this.message = message || '';  
	this.time = time || '';
}

function refreshChat(info) {  
	$.post('http://tiny-pizza-server.herokuapp.com/collections/chat-messages', info);
}

$('.send').click(function() {
	var message = $('.message').val();  
	$('.message').val('');
	var time = Date.now();
	var outgoing = new Message(user, message, time);
	refreshChat(outgoing);
});

setInterval(loadChat, 1000);



// // var gives a name to the below function where we are
// // creating a template to be reusable 
// var showMessages = _.template ($('.showMessages').text());

// // passing messages from getJSON through a forEach function
// function renderMessages(messagesData) {

// 	// we are using forEach to look over all the information in our API
// 	messagesData.forEach(function(messages) {

// 		// renderMessages sets the data out and gets it ready
// 		// the whole reason we have a function is to get an answer and
// 		// the answer to the for Each function is called rendered. 
// 		var rendered = showMessages(messages);
// 		$('.messages-container').append(rendered);
// 	});
// }
// $.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(function(data){
// 	renderMessages(data);
// });


// function getData(data) {
//     var chatInfo = _.template($('.getData').text());
//     var rendered = chatInfo(data);
//     $('.right-banner-container-body').append(rendered);
// }

// $.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(function(data){
// 	chatInfo(data);
// });