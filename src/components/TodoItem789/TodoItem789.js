import React, { useEffect } from 'react'
import env from 'env'
import System from '../../System'

export const TodoItem789 = (props) => {
  console.log(props, 'gh')
  const [system, setSystem] = React.useState(undefined)
  function setLayout() {
    setSystem({
      url: `${env.BLOX_ENV_URL_todoItem789}/remoteEntry.js`,
      scope: 'todoItem789',
      module: './todoItem789',
    })
  }
  useEffect(() => {
    setLayout()
  }, [])
  return <System system={system} {...props} />
}
