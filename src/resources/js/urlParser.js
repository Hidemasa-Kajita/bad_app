/***************************************************
 * クエリパラメータから値を取得する。
 ***************************************************/

const url = new URL(window.location.href)
const params = url.searchParams
const isError = params.get('is_error')

if (isError) {
  const elem = document.getElementById('error')
  elem.classList.add('alert')
  elem.classList.add('alert-danger')

  const isLoginPath = url.pathname === '/login'

  elem.innerHTML = isLoginPath ? 'Failed to login.' : 'Failed to register.'
}
