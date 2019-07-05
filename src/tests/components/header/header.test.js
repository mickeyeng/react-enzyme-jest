import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../../components/header/Header'
import { italic } from 'ansi-colors';




describe('Header Component', () => {

    it('should render without errors', () => {
        const component = shallow(<Header />)
        const wrapper = component.find('.header-component')
        expect(wrapper.length).toBe(1)
    })

    it('should render a logo', () => {
        const component = shallow(<Header />)
        const logo = component.find('.logo-img')
        expect(logo.length).toBe(1)
    })
})