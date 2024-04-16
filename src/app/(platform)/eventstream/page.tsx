//rafce
"use client"

import React from 'react'
import { Stack, TextArea } from '@carbon/react'
const eventstream = () => {
  return (
    <div>
      <h2>EventStream Guide</h2>
      <br></br>
      <h4>How to login to ES</h4>
        <p> -login to event stream: cloudctl login -a https://cp-console.apps.65fc029a1ba90d001e7bf43a.cloud.techzone.ibm.com </p>
        <p> -username: admin</p>
        <p> -password: xaM8rUpnNByM8ixiuk6JGa9YmkreVZOP</p>
        <br></br>
      <h4> Create yaml file and send to oc </h4>
        <p>1.oc create -f es.yaml</p>
        <p>2.oc create -f rx-flyr-pipeline-senario3.yaml</p>
      <br></br>
      <h5> Send message to eventstream by rest API  </h5>
      <TextArea labelText="Text Area label"  rows={2} id="text-area-1" 
      value={`curl -H "Authorization: Basic dHAyOkxQSWxUVTZTaUY2SjNFa1RCdlcxeXV2UVhWWVV3Tnlz" -H "Accept: application/json" -H "Content-Type: text/plain" -d 'hiiiiii' --cacert es-cert.pem "https://eventstream-ibm-es-recapi-external-cp4i.apps.65fc029a1ba90d001e7bf43a.cloud.techzone.ibm.com/topics/tp1/records?schemaname=LongList&schemaversion=1.0.0"`} />
    </div>

    
  )
}
export default eventstream