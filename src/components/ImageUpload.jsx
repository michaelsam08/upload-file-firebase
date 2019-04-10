import React, {Component} from 'react';
import {storage} from '../firebase';


class ImageUpload extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: null,
            url: null
         }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleChange = e => {
        if (e.target.files[0]){
            const image = e.target.files[0];
            this.setState(() => ({image}));
        }
    }
    handleUpload =()=>{
        const {image}= this.state;
       const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
        (snapshot)=>{
            // progress function
        },
        (error) => {
            // error function
            console.log(error);
        },
         () => {
             // complete function
             storage.ref('images').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                this.setState({url});
             })
         });
    }
    render() {
        const style ={
            height:'100vh',
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        };
        const fileAttached = this.state.url;
        return (
            <div style={style}>
                <input type="file" onChange={this.handleChange}/>
                <button onClick={this.handleUpload}>Upload</button>
                <br/>
                {fileAttached ? (
                <img src={this.state.url}
                    alt="File Uploaded" height="300"width="400" />
                    ): (
                        <img src="" alt="No file uploaded"/>)}
            </div>
         )
    }
}
export default ImageUpload;