/*!
* Start Bootstrap - Stylish Portfolio v6.0.5 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)

$(document).ready(function(){
   $.getScript("http://mymlportfolio.com/js/monet_model/model.json", function() {
    async function loadmodel(){
        const model = await tf.loadLayersModel('/js/monet_model/model.json');
        picture = model.predict(tf.fromPixels('http://mymlportfolio.com/js/IMG-5297.RGB')) ;
        download('saved.JPG', picture);
       }
   loadmodel();
    });


    });


*/
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}


//INPUT BILL NAME TO GENERATE SUMMARY TEXT FROM BILL MODEL
    async function tensorFlow2(){
       const modelUrl2 = 'https://mymlportfolio.com/js/bills_model/model.json';
       $('#billspinner').show();
       let inputtext = $('#billtitle').val();
       $('#bill_sum_title').html(inputtext);
       inputtext = inputtext+':-:';
       
       console.log(inputtext);
    const model2 = await tf.loadLayersModel(modelUrl2);
    $('#bill_sum_text').append(generateText(model2, inputtext)+'.');
    $('#billspinner').hide();
}
   	$('#billmodel').submit(function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
   	 $("#billsubmit").click();   
   	    
   	});

$("#billsubmit").click(function(e) {
    console.log('click');
    $('#bill_sum_text').html('');
    tensorFlow2();
    let input = $('#billtitle').val();
    getdata(input);

    
   	$('#billmodel').submit(function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    
    var that =$(this),
        url = that.attr('action'),
        type = that.attr('method'),
        data = {};
        
    that.find('[name]').each(function(index, val){
        var that = $(this),
         name = that.attr('name'),
         value = that.val();
        data[name] = value;
    });
    
    $.ajax({
        url: url,
        type: type,
        data: data,
        
    });



});});


function getKeyByValue(object, value) {
	return Object.keys(object).find(key => object[key] === value);
}

var billswordkeys = {
    ":-:": 0,
    "D": 1,
    ")": 2,
    "_": 3,
    "O": 4,
    "=": 5,
    "d": 6,
    "/": 7,
    "\u00e9": 8,
    "#": 9,
    "\u0096": 10,
    "E": 11,
    "K": 12,
    "z": 13,
    "v": 14,
    "V": 15,
    "\u2019": 16,
    "[": 17,
    "]": 18,
    "i": 19,
    "1": 20,
    "W": 21,
    "2": 22,
    "+": 23,
    "\u0093": 24,
    "\u0094": 25,
    "l": 26,
    "\t": 27,
    "T": 28,
    "Y": 29,
    " ": 30,
    "P": 31,
    "I": 32,
    "\n": 33,
    "H": 34,
    "L": 35,
    "3": 36,
    "t": 37,
    "x": 38,
    "c": 39,
    "U": 40,
    "\u0092": 41,
    "N": 42,
    ",": 43,
    "S": 44,
    "k": 45,
    "'": 46,
    "j": 47,
    "n": 48,
    "b": 49,
    "J": 50,
    "q": 51,
    "5": 52,
    "X": 53,
    "`": 54,
    "p": 55,
    "$": 56,
    "6": 57,
    "m": 58,
    "\u00a0": 59,
    "7": 60,
    "A": 61,
    "f": 62,
    "\u201d": 63,
    "4": 64,
    "u": 65,
    ".": 66,
    "s": 67,
    "F": 68,
    "h": 69,
    "M": 70,
    ";": 71,
    "Q": 72,
    "R": 73,
    "g": 74,
    "e": 75,
    "!": 76,
    "-": 77,
    "y": 78,
    "Z": 79,
    "G": 80,
    "\"": 81,
    "0": 82,
    "9": 83,
    "o": 84,
    "w": 85,
    "?": 86,
    "%": 87,
    "a": 88,
    "B": 89,
    "r": 90,
    "\u2013": 91,
    "(": 92,
    "\u00ad": 93,
    "8": 94,
    ":": 95,
    "\u201c": 96,
    "C": 97,
    "&": 98
};


function generateText(model, startString) {
    // Number of characters to generate
    let numGenerate = 500;
    console.log('fired2!');
    const string = startString.split('');
    // Converting our start string to numbers (vectorizing)
    let inputEval = string.map(s => billswordkeys[s]);
    console.log(inputEval);
    inputEval = tf.expandDims(inputEval, 0);
    console.log(inputEval);
    // Empty string to store our results
    let textGenerated = [];
    
    // Low temperatures results in more predictable text.
    // Higher temperatures results in more surprising text.
    // Experiment to find the best setting.
    let temperature = 1.0;
    
    // Here batch size == 1
    model.resetStates();
    for (let i = 0; i < numGenerate; i++) {
    let predictions = model.predict(inputEval);
    predictions = predictions.dataSync();
    // remove the batch dimension
     // predictions = tf.squeeze(predictions, 0);
    
      // using a categorical distribution to predict the character returned by the model
     // predictions = predictions / temperature;
      
      let predictedId = tf.multinomial(predictions, 1);

      // We pass the predicted character as the next input to the model
      // along with the previous hidden state
      inputEval = tf.expandDims(predictedId.arraySync(), 0);
      textGenerated.push(getKeyByValue(billswordkeys, predictedId.arraySync()[0]));
      
    }
    console.log(textGenerated);
    return (textGenerated.join(''));
}






//TAKE PHOTOS

let camera_button = document.querySelector("#start-camera");
let video1 = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");

var myInt;

camera_button.addEventListener('click', async function() {
   	let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
	video1.srcObject = stream;
	myInt = setInterval(test, 1000);
	
});


function stopInterval() {
  clearInterval(myInt);
}


function test(){
    click_button.click();
}

click_button.addEventListener('click', function(e) {
    console.log('click');
   	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
   	let image_data_url = canvas.toDataURL('image/jpeg');
   	$('#filetxt').val(image_data_url);
   	$('#formfile').submit(function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    var that =$(this),
        url = that.attr('action'),
        type = that.attr('method'),
        data = {};
        
    that.find('[name]').each(function(index, val){
        var that = $(this),
         name = that.attr('name'),
         value = that.val();
        data[name] = value;
    });
    
    $.ajax({
        url: url,
        type: type,
        data: data,
        
    });
});
});


function uploadFile() {
         let formData1 = new FormData();
          formData1.append("file", fileupload.files[0]);
          
             fetch("php/filehandler.php", {
               
                method: "POST",
                
                body: formData1,
                enctype: "multipart/form-data"
                });
            return false;}
            
            
//APPLE MODEL PREDICTION ON VIDEO ANIMATION
var video2 = document.getElementById('my-video-element');

function getmedia() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    const videoElement = document.getElementById('my-video-element');
    const captureBtn = document.getElementById('apple');

    // Get access to the camera
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        // Set the video stream as the source for the video element
        videoElement.srcObject = stream;
        tensorFlow();
      })
      .catch(function(error) {
        console.error('Camera access error:', error);
      });
  }
}

const modelUrl = 'https://mymlportfolio.com/js/apple_Model/model.json';
var model, prediction, confidence, output, input2, input;
var animationFrameId = null;

async function tensorFlow() {
  model = await tf.loadLayersModel(modelUrl);
  console.log(model);

  function predict() {
    tf.tidy(() => {
      // Get the video element and create a tensor from its pixel data
      const input = tf.browser.fromPixels(video2).resizeBilinear([200, 200]);
      const input2 = input.reshape([1, 200, 200, 3]);

      // Use the model to make a prediction on the video tensor
      const output = model.predict(input2);

      // Get the predicted class and its confidence score
      const prediction = output.argMax();
      const confidence = output.max();
      var outputValue = output.dataSync()[0];

      // Update the page with the prediction and confidence score
      document.getElementById('confidence').innerHTML = confidence;

      // Threashold level for website output
      if (outputValue > 0.9) {
        $('#apple_pic').html('<img src="js/apple.jpg" />');
        $('#apple_id').css("border", "10px solid red");
      } else {
        $('#apple_pic').html('');
        $('#apple_id').css("border", "10px solid blue");
      }
    });

    animationFrameId = requestAnimationFrame(predict);
  }

  animationFrameId = requestAnimationFrame(predict);
}

            

//BILLS GPT FROM FLASK API

function getdata(user_input){
    //e.preventDefault();
    var xhr = new XMLHttpRequest();
    var params = {'text_input':user_input}

    xhr.open('POST', 'https://mknapp62.pythonanywhere.com', true);
    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.onload = function(){
    console.log('good');
    $('#bill_sum_text_gpt').text(this.responseText);
    console.log(this.responseText);//PLACE THIS IN DIV AND RETRAIN MODEL
    }
    xhr.send(JSON.stringify(params));
    }
    
//TRANSLATION API DEMO


function translate(user_input){
    //e.preventDefault();
    var xhr = new XMLHttpRequest();
    var params = {'text_input':user_input}

    xhr.open('POST', 'https://mknapp62.pythonanywhere.com/translator', true);
    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.onload = function(){
    console.log('good');
    $('#translatedtext').text(this.responseText);
    console.log(this.responseText);//PLACE THIS IN DIV AND RETRAIN MODEL
    }
    xhr.send(JSON.stringify(params));
    }
$("#transsubmit").click(function(e) {
    console.log('t')
    let input = $('#translate').val();
    translate(input);
})

// Check browser support for SpeechRecognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US'; // Set the desired language

  let isRecording = false;

  // Start recording
  $('#start-btn').on('click', function() {
    if (!isRecording) {
      recognition.start();
      isRecording = true;
    }
  });

  // Stop recording
  $('#stop-btn').on('click', function() {
    if (isRecording) {
      recognition.stop();
      isRecording = false;
    }
  });

  // Handle speech recognition results
  recognition.addEventListener('result', function(event) {
    const transcript = Array.from(event.results)
      .map(result => result[0].transcript)
      .join('');

    // Update the transcript element with the recognized speech
    $('#transcript').text(transcript);

    // Send the transcript to Deepgram for further processing
    translate(transcript);
  });

  // Handle errors
  recognition.addEventListener('error', function(event) {
    console.error('Speech recognition error:', event.error);
  });
}

