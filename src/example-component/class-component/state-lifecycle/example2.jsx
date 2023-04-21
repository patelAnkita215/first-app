import React, { Component } from 'react';
import { MDBSpinner } from 'mdb-react-ui-kit';

class ExampleCompo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
        };
    }

    componentDidMount() {
        // this.loaderID = setTimeout(
        //     () => this.state = {loading: true},
        //     1000
        // );
        this.loaderID = setTimeout(
            () => this.toggleLoader(),
            1000
        );
    }
    componentWillUnmount() {
        // clearTimeout(this.loaderID);
        this.setState({ loading: false });
    }
    toggleLoader = () => {
        if (!this.state.loading) {
          this.setState({ loading: true });
        }
        //  else {
        //   this.setState({ loading: false });
        // }
    };    

    render() {
        
        return (
            <>
                <div className="btnContainer mt-5">
                    {this.state.loading ? (
                        <MDBSpinner role='status'>
                        <span className='visually-hidden'>Loading...</span>
                      </MDBSpinner>
                    ) : null}

                    <button
                        onClick={() => this.toggleLoader()}
                        variant={"primary"}
                        size="lg"
                        className='btn btn-primary'
                    >
                        {this.state.loading ? "Hide Loader" : "Show Loader"}
                    </button>
                </div>
            </>
        );
    }
}

export default ExampleCompo;