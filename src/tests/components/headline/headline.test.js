import React from 'react'
import Headline from '../../../components/headline/Headline'
import { shallow } from 'enzyme'
import { italic } from 'ansi-colors';


const setUp = (props = {}) => {
    const component = shallow(<Headline {...props} />)
    return component
}

describe('Headline Component', () => {


    describe('Have props', () => {

        const props = {
            header: 'Test header',
            description: 'Test description'
        }

        it('should render without errors', () => {
            const component = setUp()
            const headlineComponent = component.find(`[data-test='headline-component']`)
            expect(headlineComponent.length).toBe(1)

        })

        it('should render a H1 title', () => {
            const component = setUp()
            const header = component.find(`[data-test='headline-component__heading']`)
            expect(header.length).toBe(1)
        })

        it('should render a description', () => {
            const component = setUp()
            const description = component.find(`[data-test='headline-component_description']`)
            expect(description.length).toBe(1)
        })
    })


    describe('Have no props', () => {

        it('should not render', () => {
            const component = setUp()
            const headlineComponent = component.find(`[data-test='headline-component']`)
            expect(headlineComponent.length).toBe(0)
        })

    })


})
