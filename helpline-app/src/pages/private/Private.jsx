import React from 'react';
import Posts from './Posts';
import Addpost from './Addpost';
import Logout from './Logout';
import Profile from './Profile';
import ProtectedRoute from './ProtectedRoute';
import {
  Switch,
  Link
} from 'react-router-dom';

class Private extends React.Component{
  
  // constructor(props){
  //   super(props);
  // }

  componentDidMount() {
    document.getElementById('body').className='private';
  }

  componentWillUnmount() {
    document.getElementById('body').className='';
  }

  render(){
    return(
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
              <h6 className="nav-link active" >Helpline Kerala</h6>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  <li className="nav-item">
                    <Link className="nav-link active"  to="/app">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link"  to="/app/create">Add Post</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link"  to="/app/profile">Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link"  to="/app/logout">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main className="px-3 mt-menu">
          <Switch>
            <ProtectedRoute path="/app" exact component={Posts}/> 
            <ProtectedRoute path="/app/profile" component={Profile}/>
            <ProtectedRoute path="/app/create" component={Addpost}/>
            <ProtectedRoute path="/app/logout" component={Logout}/>
          </Switch>
        </main>
      </div>  
    );
  }
  
}
export default Private;