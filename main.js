Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera=document.getElementById('camera');
Webcam.attach('#camera');

function cap_img() {
    Webcam.snap(function(data_uri){
        document.getElementById('images').innerHTML="<img src="+data_uri+" id='r_img'>"; 
    })
}

function dis_img() {
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-_iKZ5-6J/model.json", modelLoaded);
    
}