/**
 * 创建验证码工具类
 * @package /src/utils/localStorage
 * @description 对 localStorage 做了简单的封装，以便于存取数据
 * @params 参数
 * {
 *  num int 验证码位数
 *  letters string 验证码随机生成字符串库
 * }
 */

export default function(num = 6, 
    letters = 'QWERTYUIOPLKJHGFDSAZXCVBNM1234567890') {
    let tpl = ''
    let captcha = []

    try {
        captcha = [...Array(num)].map(() => letters[Math.floor(Math.random() * letters.length)])
    } catch (e) {}

    captcha.forEach(item => {
        tpl += `<span class="flex1 hcenter">${item}</span>`
    })

    captcha = captcha.join('')

    return {
        tpl,
        captcha
    }
}