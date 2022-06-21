const Mock = require('mockjs')

const Random = Mock.Random

let Result = {
    code: 200,
    msg: '成功',
    data: null
}
Mock.mock('/captcha', 'get', () => {
    Result.data = {
        token: Random.string(32),
        captchaImg: Random.dataImage('80x40', 'Capta')
    }

    return Result
})




Mock.mock('/login', 'post', () => {
    return Result
})


Mock.mock('/sys/UserInfo', 'get', () => {


    Result.data = {
        username: '张三',
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
    }
    return Result

})



Mock.mock('/sys/updatePassword', 'post', () => {
    return Result
})


Mock.mock('/logout','post',()=>{
    return Result
})