import React, { Component } from 'react';
import "./component.css";

class ClassComponent extends Component {
    render() {
        return (
            <>
                <div className="col-md-6 col-12 border border-bottom-0 border-start-0 border-top-0 border-warning pb-3">
                    <div className="class-content mt-4">
                        <ul>
                            <li>
                                <p>create a class and extend <span className="text-info fw-bold">React.Component</span> class.</p>
                            </li>
                            <li>
                                <p>The component also requires a <span className="text-info fw-bold">render()</span> method, this method returns HTML.</p>
                            </li>
                            <li>
                                <p> <strong>Syntax:</strong></p>
                                <p className="bg-info bg-opacity-10 py-3 px-4 border border-info">
                                    <span className="text-primary">class</span> <span className="text-success">ClassComponent</span> <span className="text-primary">extends</span> <span className="text-success">Component</span> 	<span className="text-warning">&#123;</span> <br />
                                    <span className="text-warning ms-3">render</span><span className="text-danger">&#40;&#41; &#123;</span> <br />
                                    <span className="text-danger ms-4">return</span> <span className="text-info">&#40;</span> <br />
                                    <span className="text-info ms-5">&#60;&#62;</span><br /><span className="text-secondary ms-5 ps-4">Code here...</span> <br /><span className="text-info ms-5">&#60;/&#62;</span>    <br/>       
                                    <span className="text-info ms-4">&#41;</span>; <br />
                                    <span className="text-danger ms-3">&#125;</span> <br />
                                    <span className="text-warning">&#125;</span>;
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 col-12 border border-bottom-0 border-end-0 border-top-0 border-warning pb-3"></div>
            </>
        );
    }
}

export default ClassComponent;