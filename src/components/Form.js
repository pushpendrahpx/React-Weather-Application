import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.getweather}>
                    <div className='form-group'>
                        <input type='text' name='city' placeholder='City' />
                    </div>
                    <div className='form-group'>
                        <input type='text' name='country' placeholder='Country' />
                    </div>

                    <div className='form-group'>
                        <button> Submit </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
