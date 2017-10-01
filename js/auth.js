const password = "ayusawa12";
input = window.prompt('パスワードを入力してください', '')

// 入力内容が tama の場合は example_tama.html にジャンプ
if (input == password) {
//   location.href = '/'
} else if (input != '' && input != null) {
    window.alert('パスワードが違います')
    location.href = '/'
}else {
  window.alert('キャンセルされました')
  location.href = '/'
}

