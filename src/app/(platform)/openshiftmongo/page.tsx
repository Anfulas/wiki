//rafce
"use client"

import React from 'react'
import { Stack, TextArea } from '@carbon/react'
const openshiftmongo = () => {
  return (
    <div>
      <h2>Command</h2>
      <br></br>
      <h4>Reference Link</h4>
        <p>https://developers.redhat.com/articles/2023/06/19/how-set-mongodb-atlas-openshift#how_to_configure_mongodb_atlas</p>
      <br></br>

      <h4>How to configure MongoDB Atlas</h4>
        <p>{`oc create secret generic mongodb-atlas-operator-api-key --from-literal='orgId=<the_atlas_organization_id>' --from-literal='publicApiKey=<the_atlas_api_public_key>'  --from-literal='privateApiKey=<the_atlas_api_private_key>`}</p>
      <br></br>

      <h4>How to install mongoDB on Kubernetes</h4>
       <p>https://antonputra.com/kubernetes/how-to-install-mongodb-on-kubernetes/#install-mongodb-on-kubernetes-standalonesingle-replica</p>
      <br></br>


      <h4> 根据Chatgpt3.5给出的答案：
        <p>oc create -f https://operatorhub.io/install/mongodb-enterprise-operator.yaml</p>
      </h4>
      <br></br>


    </div>

    
  )
}
export default openshiftmongo