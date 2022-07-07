import React, { useEffect } from 'react'
import env from 'env'
import System from '../../System'

export const TodoInput789 = (props) => {
  const [system, setSystem] = React.useState(undefined)
  function setLayout() {
    setSystem({
      url: `${env.BLOX_ENV_URL_todoInput789}/remoteEntry.js`,
      scope: 'todoInput789',
      module: './todoInput789',
    })
  }
  useEffect(() => {
    setLayout()
  }, [])
  return <System system={system} {...props} />
}
