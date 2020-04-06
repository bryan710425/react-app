import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import BasicRouter from './route'
// import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { IntlProvider } from 'react-intl'
import en from './i18n/en.js'
import zh from './i18n/zh.js'
import ja from './i18n/ja.js'

const Root = () => {
  const [locale, setLocale] = useState(navigator.language) // (navigator.language) 預設使用者瀏覽器語言
  const store = createStore(rootReducer)
  let messages = zh
  switch (locale) {
    case 'zh-TW':
      messages = zh
      break
    case 'en':
      messages = en
      break
    case 'ja':
      messages = ja
      break
    default:
      messages = en
      break
  }

  return (
    <Provider store={store}>
      <IntlProvider
        locale={locale}
        key={locale}
        defaultLocale='zh'
        messages={messages}
      >
        <header className='App-header'>
          <div>
            <button onClick={() => setLocale('en')}>英文</button>
            <button onClick={() => setLocale('zh-TW')}>中文</button>
            <button onClick={() => setLocale('ja')}>日文</button>
          </div>
        </header>
        <BasicRouter />
      </IntlProvider>
    </Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
