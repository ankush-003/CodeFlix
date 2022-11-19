import React from 'react'
import {useEffect} from 'react';



export default function ProjectDetails({project}) {
  let text = project.file
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => console.log("Hello, World!"), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="card text-white bg-dark border-warning m-3" style={{maxWidth: "20rem"}}>
        <div className="card-header bg-warning text-dark fs-5 g-0 row">
        <div className="col-8 m-2">{project.title}</div>
        <button type="button" className="btn col-2 m-2" onClick={copyContent}>
          <img src="" alt="copy" />
        </button>
        </div>
        <div className="card-body">
            <h5 className="card-title" id={project._id}>{project.file}</h5>
            <p className="card-text">Language: {project.language}</p>
            <p className="card-text">Description: {project.description}</p>
            <p className="card-text">Created on: {project.createdAt}</p>
        </div>
        
    </div>
  )
}
