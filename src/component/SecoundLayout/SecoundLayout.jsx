import React from 'react'

import Headers from './Header'
import Footers from "../Footer/Footers";
function SecoundLayout({children}) {
  return (
    <React.Fragment>
        <Headers/>
        {children}
        <Footers />
    </React.Fragment>
  )
}

export default SecoundLayout