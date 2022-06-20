const Mock =require('mockjs')

const Random = Mock.Random

let Result ={
    code:200,
    msg:'成功',
    data:null
}
Mock.mock('/captcha','get',()=>{
    Result.data = {
        token:Random.string(32),
        captchaImg:Random.dataImage('80x40','Capta')
    }

    return Result
})




Mock.mock('/login','post',()=>{
    return Result
})