 import Forms from './Login';
import Contact from "./Contact";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { getDownloadURL, ref,uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import {storage} from "./firebase"
import {Button} from 'react-bootstrap';

function App() {
  const [progress , setProgress] = useState(0);
  const formhandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
   uploadFiles(file);
  };
const uploadFiles = (file) => {
  if(!file) return;
  const storageRef = ref(storage,'/files/$(file.name)');
  const uploadTask = uploadBytesResumable(storageRef,file);
uploadTask.on("state_changed",(snapshot) => {
  const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100
);
setProgress(prog);
}, 
(err) => console.log(err),
() => {
getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
}
);
};



  return (
    <div className="App">
      {/* <Forms/> */}
      <Contact />
     
     <form onSubmit={formhandler}>
      <br></br>
      <input type="file" classname="input text-center" />
      <Button type="submit"> Upload CV/Resume</Button>
     </form>
     <hr/>
     <h4 className='method'>Uploading {progress}  % </h4>
     <Button type="submit" className='submit-img text-center'>Submit File</Button>
     
    </div>
  );
}

export default App;
