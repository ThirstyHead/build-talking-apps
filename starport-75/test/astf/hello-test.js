const alexaTest = require('alexa-skill-test-framework');

alexaTest.initialize( 
  require('../../lambda/index.js'),
  "amzn1.ask.skill.bfe3ef73-ca78-481b-8b51-02f761e4d21f",
  "amzn1.ask.account.VOID");

describe("Star Port 75 Travel - Hello Test", function(){
  describe("LaunchRequest", function(){
    alexaTest.test([
      {
        request: alexaTest.getLaunchRequest(),
        says: "Welcome to Starport 75 Travel, you can say Hello or Help. Which would you like to try?",
        shouldEndSession: false
      }
    ]);
  });

  describe("HelloWorldIntent", function(){
    alexaTest.test([
      {
        request: alexaTest.getIntentRequest("HelloWorldIntent"),
        says: "Hello Stellar World!",
        shouldEndSession: true
      }
    ]);
  });
  
});
