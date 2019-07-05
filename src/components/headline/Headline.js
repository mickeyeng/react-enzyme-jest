import React from 'react'

class Headline extends React.Component {

    constructor(props) {
        super()

    }


    render() {

        const { header, description } = this.props

        return (
            <div data-test="headline-component">
                <h1 data-test="headline-component__heading">{header ? header : null}</h1>
                <p data-test="headline-component_description">{description}</p>
            </div>
        )
    }

}


export default Headline