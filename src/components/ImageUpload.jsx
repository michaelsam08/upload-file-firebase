import React, {Component} from 'react';
//import {storage} from '../firebase';


class ImageUpload extends Component {
    constructor(props){
        super(props);
        this.state = {
            file: null,
            // url: null,
            // showImage: []
         }
        this.handleChange = this.handleChange.bind(this);
        //this.handleUpload = this.handleUpload.bind(this);
    }
    handleChange = e => {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
          })
        // if (e.target.files[0]){
        //     const file = e.target.files[0];
        //     this.setState(() => ({file}));
                   
    }
    // handleUpload =()=>{
    //     this.setState(state => ({


    //     }))
    //     const {image}= this.state;
    //    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    //     uploadTask.on('state_changed',
    //     (snapshot)=>{
    //         // progress function
    //     },
    //     (error) => {
    //         // error function
    //         console.log(error);
    //     },
    //      () => {
    //          // complete function
    //          storage.ref('images').child(image.name).getDownloadURL().then(url => {
    //             console.log(url);
    //             this.setState({url});
    //          })
    //      });
    // }
    render() {
        const style ={
            height:'100vh',
            display:'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        };
       const fileAttached = this.state.file;
        return (
            <div style={style}>
            <input type="file" onChange={this.handleChange}/>
            {fileAttached ?(    
                <img src={this.state.file} alt="File Uploaded" height="300"width="400"/>) : 
                (
                        <img src="" alt="No file uploaded"/>)
                }
            
                {/* <input type="file" onChange={this.handleChange}/>

                <button onClick={this.handleUpload}>Upload</button>
               
               
                <br/>
                {fileAttached ? (
                <img src={this.state.url}
                    alt="File Uploaded" height="300"width="400" />
                    ): (
                        <img src="" alt="No file uploaded"/>)} */}
            </div>
         )
    }
}

export default ImageUpload;