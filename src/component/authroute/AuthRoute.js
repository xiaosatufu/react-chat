import React, {
    Component
} from 'react'
import axios from 'axios'
import {
    withRouter
} from 'react-router-dom'
import {
    connect
} from 'react-redux'
import {
    loadData
} from '../../redux/user.redux'
class AuthRoute extends Component {
    componentDidMount() {
        const publicList = ['/login', '/register']
        const pathname = this.props.location.pathname
        if (publicList.indexOf(pathname) > -1) {
            return null
        }
        //获取用户信息
        //是否登录 
        //现在的url地址 login 是不需要跳转
        //用户的身份
        //用户是否完善信息(选择头像,个人简介)
        axios.get('/user/info').then((res) => {
            if (res.status === 200) {
                // console.log(res.data)
                if (res.data.code === 0) {

                    this.props.loadData(res.data.data)
                } else {
                    this.props.history.push('/login')
                }
            }
        })
    }
    render() {
        return null
    }
}


const mapDispatchProps = dispatch => ({
    loadData(data) {
        dispatch(loadData(data))
    }
})

export default withRouter(connect(null, mapDispatchProps)(AuthRoute))