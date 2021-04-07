/***************************************************
 * クエリパラメータから値を取得する。
 ***************************************************/

const url = new URL(window.location.href)
const params = url.searchParams
const isError = params.get('is_error')

if (isError) {
  const elem = document.getElementById('error')
  elem.innerHTML = '各項目の値を確認してください。'
}
