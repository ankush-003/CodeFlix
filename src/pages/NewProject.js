import React from 'react'
import ProjectForm from '../components/ProjectForm'
export default function NewProject() {
  return (
    <div className="container-fluid-md m-3 px-4">
        <h2 className='typed-cursor'>Add New Project</h2>
        <div className="container mx-auto projectForm">
                <ProjectForm />
        </div>
    </div>
  )
}
