let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let parsedGreeting = JSON.parse(greeting);

let fromName = document.getElementById("FromName");
fromName.textContent = "From: " + parsedGreeting.from;

let toName = document.getElementById("ToName");
toName.textContent = "To: " + parsedGreeting.to;

let greetingText = document.getElementById("GreetingText");
greetingText.textContent = parsedGreeting.greetText;