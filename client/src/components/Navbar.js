import {Link} from 'react-router-dom';
const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{position:"sticky"}}>
        <div className="container-fluid">
            <Link className="navbar-brand fs-4" to="/">CodeFlix</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active text-warning" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <Link className="nav-link btn link-warning" to="/workspace">Workspace</Link>
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-item btn link-warning" to="/newProject">
                    Create +
                </Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-item btn link-warning" to="/timer">
                        Timer
                    </Link>
                </li>
            </ul>
            <form className="d-flex">
                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                <button className="btn btn-outline-warning" type="submit">Logout</button>
            </form>
            </div>
        </div>
        </nav>
    )};

export default Navbar;