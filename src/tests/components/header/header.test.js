import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../../components/header/Header'

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />)
    return component
}


describe('Header Component', () => {

    it('should render without errors', () => {
        const component = setUp()
        const wrapper = component.find(`[data-test='header-component']`)
        expect(wrapper.length).toBe(1)
    })

    it('should render a logo', () => {
        const component = shallow(<Header />)
        const logo = component.find(`[data-test='logo-img']`)
        expect(logo.length).toBe(1)
    })
})