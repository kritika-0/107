//https://teachablemachine.withgoogle.com/models/V8UekE2Te/model.json
function start_classification()
{
  navigator.mediaDevices.getUserMedia({
    audio:true
  });   
  classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/V8UekE2Te/model.json',modelReady);
  
}

function modelReady()
{
 classifier.classify(gotResults);

}

function gotResults(results)
{
   console.log(results) ;
}