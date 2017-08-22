import React, {Component} from 'react'
import Dom from 'react-dom'
import Mu from 'mu'
import style from 'style'

class Index extends Component {
    render () {
        return (<div>hello world</div>)
    }
}
console.log(['this is mu', Mu, style])

Dom.render(<Index/>, document.querySelector('#wrapper'))
