'use strict';

function username(){
	$(".chat-message").html("<span class = 'bug'>TweatlBug: </span>Hello, what is your name?");
}

$(function(){
	// username()
    $("#textbox").keypress(function(event){
        if(event.which == 13){
        if ($("#enter").prop("checked")){
			$("#send").click();
			event.preventDefault();
        }
	}
});

    $("#send").click(function(){
		var username = "<span class ='username' = >You: </span>"
    	var newMessage = $("#textbox").val();
    	$("#textbox").val("");
    	var prevState = $(".chat-message").html();
    		if (prevState.length > 3){
    			prevState = prevState + "<br>";
    		}
    	$(".chat-message").html(prevState + username + newMessage);
    	$(".chat-message").scrollTop($(".chat-message").prop("scrollHeight"));
    })
});

var getData = _.template($(".messagedata").text());
function renderData(data){
	data.forEach(function(alldata){
		var renderedData = getData(alldata);
		$(".messages-box").append(renderedData);
		console.log(renderedData)
	});
}

$.getJSON("http://tiny-pizza-server.herokuapp.com/collections/chat-messages").done(function(alldata){
	renderData(alldata);
});


// var tinyServer;
// var user = 'meh';
// var msgbox = _.template($('.chat-message-box').text());

// function renderChat(data) {
// 	$('.bottom-right-bar-box').empty();
// 	for (var i = 0; i < data.length - 1; i += 1) {
// 		if (data[i].message) {
// 			var rendered = msgbox(data[i]);
// 			$('.bottom-right-bar-box').append(rendered);    
// 		}  
// 	}
// }

// function loadChat() {
// 	$.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(function(data) {
// 		tinyServer = data;
// 		renderChat(data);  
// 	});
// }

// function Message(user, message, time) {  
// 	this.user = user || '';  
// 	this.message = message || '';  
// 	this.time = time || '';
// }

// function refreshChat(info) {  
// 	$.post('http://tiny-pizza-server.herokuapp.com/collections/chat-messages', info);
// }

// $('.send').click(function() {
// 	var message = $('.message').val();  
// 	$('.message').val('');
// 	var time = Date.now();
// 	var outgoing = new Message(user, message, time);
// 	refreshChat(outgoing);
// });

// setInterval(loadChat, 1);










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