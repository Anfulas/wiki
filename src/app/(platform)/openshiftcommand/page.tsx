//rafce
"use client"

import React from 'react'
import { Stack, TextArea } from '@carbon/react'
const openshiftcommand = () => {
  return (
    <div>
      <h2>Command</h2>
      <br></br>
      <h4>找网页拿证书：</h4>
        <p>{`echo "" | openssl s_client -connect mq-qm1-rest-route-cp4i.apps.clstr02.dev.rx.int:443 -showcerts 2>/dev/null | openssl x509 -out mq.pem`}</p>
      <br></br>

      <h4>怎么Curl MQ Rest API</h4>
        <p>curl -k -i https://example-09-qm9-rest-route-cp4i.apps.daffy-cprg9a1a.cloud.techzone.ibm.com/ibmmq/rest/v2/messaging/qmgr/QM9/queue/Q1/message  -H "Content-Type: text/plain;charset=utf-8" -u app1:passw0rd -H "ibm-mq-rest-csrf-token: blank" --data 'Test message 1 - put using MQ REST API'</p>
      <br></br>

      <h4>怎么连apic cloud manager</h4>
        <p>./apic-slim login --username admin  --server cpd-integration.apps.65ea733c0dfb940011a877d9.cloud.techzone.ibm.com/integration/apis/integration/small --realm admin/default-idp-1</p>
      <br></br>

      <h4>取secret密码：</h4>
        <p>oc extract secret/apic-gw-admin -n cp4i --to=-</p>
        <p>oc extract secret/platform-auth-idp-credentials -n ibm-common-services --to=-</p>
      <br></br>

      <h4>找TLS文件</h4>
        <p>oc attach -ti  apic-min-gw-0</p>

    </div>

    
  )
}
export default openshiftcommand