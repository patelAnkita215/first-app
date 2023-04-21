import React, { Component } from 'react';
import ChildCompo from './childprops-ex'

class PropsExample extends Component {
    render(props) {
        return (
            <>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <ChildCompo title="hello"></ChildCompo>
                        </div>
                        <div className='col-md-4'>
                            <ChildCompo></ChildCompo>
                        </div>
                        <div className='col-md-4'>
                            <ChildCompo title="My App"></ChildCompo>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PropsExample;