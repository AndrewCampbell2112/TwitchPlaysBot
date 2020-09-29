let {PythonShell} = require('python-shell');
const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: "YOUR BOT'S NAME HERE",
    password: "oauth:YOUR PASSWORD HERE"
  },
  channels: [
    "YOUR CHANNEL"
  ]
};
// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, it gets executed
  if (commandName === '!a') {
    keyPress("a");
    console.log(`* Executed ${commandName} command`); //Each if statement looks for a
  }                                                   //certain input
  else if (commandName === '!b') {
    keyPress("b");
    console.log(`* Executed ${commandName} command`); 
  }
  else if (commandName === '!x') {
    keyPress("x");
    console.log(`* Executed ${commandName} command`);
  }
  else if (commandName === '!y') {
    keyPress("y");
    console.log(`* Executed ${commandName} command`);
  }
  else if (commandName === '!left') {
    keyPress("f");
    console.log(`* Executed ${commandName} command`);
  }
  else if (commandName === '!right') {
    keyPress("h");
    console.log(`* Executed ${commandName} command`);
  }
  else if (commandName === '!up') {
    keyPress("t");
    console.log(`* Executed ${commandName} command`);
  }
  else if (commandName === '!down') {
    keyPress("g");
    console.log(`* Executed ${commandName} command`);
  }
  else if (commandName === '!commands') {       //Reads the controls text file and
    var fs = require('fs');                     //Sends it as a msg on the twitch chat
    fs.readFile('./Controls.txt', 'utf8', function(err, data) {
        if (err) throw err;
        client.say(target, data);
        console.log(data);
    });
    console.log(`* Executed ${commandName} command`);
  } 
  else {
    console.log(`* Unknown command ${commandName}`);
  }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

function keyPress (pressedKey) {
    console.log("starting pythonshell");
    PythonShell.run('./keyPress.py', {
        args: [pressedKey]
    });
    console.log("ending python shell");
    console.log(pressedKey);
}
