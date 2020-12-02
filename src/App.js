import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';
import FaceRecognition from './components/facerecognition/FaceRecognition';
import Clarifai from 'clarifai';
import { Component } from 'react';


const app = new Clarifai.App({
  apiKey: 'ded2f527db9840f484574ef63aebe113'
 });

const particleOptions = {
  "particles": {
      "number": {
          "value": 50,
          "density": {
            "enable": true,
            "value_area": 800
          }
      },
      "size": {
          "value": 5
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
}


// function App() {
  class App extends Component {
    constructor(){
      super();
      this.state = {
        input: '',
        imageUrl: ''
      }
    }

    onInputChange = (event) => {
      this.setState({input: event.target.value});
    }

    onButtonSubmit = () => {
      this.setState({imageUrl: this.state.input})
      console.log('click')
      app.models.predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
        .then(
          function(response) {
            console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
          },
        function(err) {
        //there was an error
        }
        );
    }

    render() {
      return (
        <div className="App">
          <Particles className='particles'
            params={particleOptions} />
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
          />
          <FaceRecognition imageUrl={this.state.imageUrl} />
        </div>
      );
    }
}

export default App;
