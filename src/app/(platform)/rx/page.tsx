//rafce
"use client"

import React from 'react'
import { Stack, TextArea } from '@carbon/react'
const openshiftmongo = () => {
  return (
    <div>
      <h2>Command</h2>
      <br></br>
      <h4>Link</h4>
      <h5> Send message to eventstream by rest API  </h5>
      <TextArea labelText="Text Area label"  rows={12} id="text-area-1" 
      value={`cpd-cp4i.apps.clstr02.dev.rx.int
      apic-mgmt-admin-cp4i.apps.clstr02.dev.rx.int
      apic-mgmt-api-manager-cp4i.apps.clstr02.dev.rx.int
      [ibmuac01@neupljmpsrvin01 ~]$ oc extract secret/apic-mgmt-admin-pass -n cp4i --to=-
      # email
      admin@apiconnect.net
      # password
      ((Q9iz^6<w!*0of>Ry}^4y}~
      id - yuanbing pw- Yuan1234!
      Huan Meng  [2:21 PM]
      Username - admin
      Password - N5Jn3UIO1zWe8IozQj41noCPAI5oIJlN`} />
      <br></br>

      <h4>Dev</h4>
       <p>https://integration-pn-pn-cp4i.apps.clstr02.dev.rx.int/</p>
       <p>https://console-openshift-console.apps.clstr02.dev.rx.int/</p>
       <p>Username - admin   Password - N5Jn3UIO1zWe8IozQj41noCPAI5oIJlN</p>
      <br></br>

      <h4>Pre-Pro</h4>
        <p>https://console-openshift-console.apps.neuuaroclstr02.uat.rx.int/</p>


    </div>

    
  )
}
export default openshiftmongo