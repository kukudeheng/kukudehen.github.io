// 提取出来的key
// 后续代码直接用即可
// TOKENKEY 全大写的目的，和普通的区分
// 一般key都是全大写
// 选中 ，ctrl+shift+p 输入大写
// 选择 转大写
const TOKENKEY = 'token'




// 保存token
// 保存的token从外部传入
export function setToken(token) {
  localStorage.setItem(TOKENKEY, token)
}
// 获取 并返回token
// 获取到之后给调用者使用
// 不返回 拿不到
export function getToken() {
  return localStorage.getItem(TOKENKEY)
}
// 删除token
export function removeToken() {
  localStorage.removeItem(TOKENKEY) // 根据key删除指定值
  // localStorage.clear()// 全部删掉
}
