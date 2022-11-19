import {useEffect, useState} from 'react';
import ProjectDetails from '../components/ProjectDetails';
import ProjectForm from '../components/ProjectForm';
const Home = () => {
    // States initialized to empty array
    const [projects, setProjects] = useState(null);
    // will only run once when the component is mounted
    useEffect(() => {
        console.log('useEffect ran');
        const fetchProjects = async () => {
            const response = await fetch('/api/projects');
            const json = await response.json();
            if(response.ok) {
                setProjects(json);
            } 
            // console.log(json);
        }
        fetchProjects();
    }, []);
    return (
        <>
        <div className="container-fluid-md m-3 px-4">
                <h2 className='text-center fst-italic text-warning'><span className="typed">My Projects</span> <span className="typed-cursor">|</span> </h2>
                <div className="row g-0">
                {projects ? projects.map((project) => 
                    (
                            <ProjectDetails key={project._id} project={project} />
                    )):
                    <div className="d-flex align-items-center text-warning mt-5">
                    <h1 className='mx-auto typed-cursor'>Loading Projects &nbsp;
                    <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                    </h1>
                    </div> 
                    }
                </div>
            </div>
        </>
    );
};

export default Home;