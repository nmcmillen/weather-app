console.log('hello world')
//let title = document.createElement("elementName");
let appId = '151fc331ffb2d59e71cc69883616aee0';
let zipcode = 40509;
let expandingList = document.createElement('ul', { is : 'expanding-list' })




function addElement () {
    // create a new div element
    const newDiv = document.createElement("div");
  
    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }

  addElement();

//main API fetch and response which is working (hardcoded to appId and zipcode variables currently)
//need to add async/await
axios
.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${appId}`)
.then(res => console.log(res.data))
.catch(err => console.error(err));





//api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid=151fc331ffb2d59e71cc69883616aee0
// test the API link for Lexington: api.openweathermap.org/data/2.5/weather?zip=40509,us&appid=151fc331ffb2d59e71cc69883616aee0