import React,{Component} from 'react';
import Logo from '../components/Logo/Logo';
import {Imagelinkinput} from '../components/Input/ImageLinkInput';
import {Rank} from '../components/Rank/Rank';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import { useState } from 'react';
import Navigation from '../components/Navigation/Navigation';



const Homepage= ({NavigateToSignin , rank ,  setrank}) => {

 const [input , setinput] = useState('');
 const [url , seturl] = useState('');
 const [box , setbox] = useState({});
 


  const onInputChange = (event) => {
    setinput(event.target.value);
  }

  const calculateFaceLocation = (data) => {
    const face_box = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.querySelector('#face');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftcol : face_box.left_col * width,
      toprow : face_box.top_row * height,
      rightcol : width - (face_box.right_col * width),
      bottomrow : height - (face_box.bottom_row * height),
    }
  }

  const display_box = (box) =>{
    setbox(box);
  }
 
  const  ondetect = () => {
    seturl(input);
      const raw = JSON.stringify({
        "user_app_id": {
        "user_id": "clarifai",
        "app_id": "main"
    },
  "inputs": [
      {
          "data": {
              "image": {
                  "url": input
              }
          }
      }
  ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + "35a9506c1d704e44adea8f3bbb9f1f69"
    },
    body: raw
};

fetch(`https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`, requestOptions)
    .then(response => response.json())
    .then(result => {
        display_box(calculateFaceLocation(result));
        if(result){
          let id = sessionStorage.getItem('id');
          fetch('http://localhost:3000/image',{
              method: 'PUT',
              headers: { 'content-type': 'application/json'},
              body : JSON.stringify({'id' : id})
          })
          .then(result => result.json())
          .then(data => {
            setrank(data)
            console.log(data)
               
           })
        }
      }
    )
    .catch(error => { 
      console.log('error', error)});

   
      
  }

  
  
  

    
  return  (
    <div className='tc'>
        <Navigation NavigateToSignin={NavigateToSignin}/> 
        <Logo/>
        <Rank rank ={rank} />
        <Imagelinkinput onInputChange={onInputChange} onsubmit = {ondetect}  />
        <FaceRecognition box= {box} url = {url}/>
    </div>
  )

}
export default Homepage;
