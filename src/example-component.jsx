import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

class ExampleComponent extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row mt-5 border border-warning">
                        <div className="col-12 text-center py-2">
                            <Link to="/component/ComponentName" className="text-center fs-3 fw-bold text-primary">Example Component</Link>
                        </div>
                        <Outlet />
                        {/* <div className="col-md-6 col-12 border border-top-0 border-warning py-3">
                            <Link to="/component/classComponent" className="text-center fs-5 fw-bold text-dark text-opacity-75">Class Component</Link>
                            <Outlet />
                        </div>
                        <div className="col-md-6 col-12 border border-top-0 border-warning py-3">
                            <Link to="/component/functionComponent" className="text-center fs-5 fw-bold text-dark text-opacity-75">Functional Component</Link>
                            
                        </div> */}
                    </div>
                    
                </div>
                
            </>
        );
    }
}

export default ExampleComponent;