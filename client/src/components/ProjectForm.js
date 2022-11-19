import { useState } from "react"

const ProjectForm = () => {
    const [title, setTitle] = useState('');
    const [file, setFile] = useState('');
    const [language, setLanguage] = useState('');
    const [description, setDescription] = useState('');
    return (
        <div className="conatiner-fluid-md border border-warning bg-dark text-white p-3 m-3" style={{maxWidth:"500px"}}>
            {/* <h2 className="text-center typed-cursor">Add a Project</h2> */}
            <div className="input-group mb-3">
            <span className="input-group-text bg-warning" id="basic-addon1" style={{width:"4rem"}} >Title</span>
            <input type="text" className="form-control text-input" placeholder="Project Title" aria-label="Title of the Project" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text bg-warning" id="basic-addon2" style={{width:"7rem"}} >Language</span>
            <input type="text" className="form-control text-input" placeholder="Project Language" aria-label="Language of the Project" aria-describedby="basic-addon2" />
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text bg-warning" style={{width:"8rem"}}>Description</span>
            <textarea className="form-control" aria-label="With textarea" placeholder="Add Project Description"></textarea>
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text bg-warning" style={{width:"8rem"}}>Code</span>
            <textarea className="form-control" aria-label="With textarea" placeholder="Add Project Code"></textarea>
            </div>
            {/* <button type="submit" class="btn btn-outline-warning align-self-center">Add Project</button> */}
            <button class="btn btn-outline-warning" type="submit">
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            &nbsp;  Add Project
            </button>
        </div>
    ) 
}
 export default ProjectForm;