// 簡易ログイン
const password = 'ayusawa'
var input = ''
var isLogin = localStorage.getItem('isLogin')
console.log(input)

if (isLogin != 1) {
  console.log('入力ボックス')
  input = window.prompt('パスワードを入力してください', '')

  if (input == password) {
    // location.href = '/'
    localStorage.setItem('isLogin', 1)
  } else if (input != '' && input != null) {
    window.alert('パスワードが違います')
    location.href = '/'
    localStorage.setItem('isLogin', 0)
  } else {
    window.alert('キャンセルされました')
    location.href = '/'
    localStorage.setItem('isLogin', 0)
  }  
}
