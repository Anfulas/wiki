//rafce
"use client"

import React from 'react'
import { Stack, TextArea } from '@carbon/react'
const rxcicd = () => {
  return (
    <div>
      <h2>Command</h2>
      <br></br>
      <h4>Link</h4>
      <h5> Send message to eventstream by rest API  </h5>
      <TextArea labelText="Scenario1 CICD"  rows={10} id="Scenario1 CICD" 
      value={`Task2-create-draft-product.yaml
      apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: create-draft-product
spec:
  params:
    - name: mgmt-url
      type: string
      description: provider Url
    - name: draft-product-name
      type: string
      description: draft-product-name
    - name: draft-product-version
      type: string
      description: draft-product-version
    # TODO
    # - name: draft-product-apis
    #   type: string
    #   description: draft-product-apis
  steps:
    - name: step-create-draft-product
      image: alpine/curl
      env:
      - name: token  
        valueFrom:
          secretKeyRef:
            name: shared-token 
            key: token
      script: |
        curl -k -L '$(params.mgmt-url)/orgs/flyr/drafts/draft-products' -H 'Content-Type: application/json' -H 'Accept: application/json' -H  "Authorization: Bearer $token" -d '{"draft_product":{"info":{"version":"$(params.draft-product-version)","title":"$(params.draft-product-name)","name":"$(params.draft-product-name)"},"gateways":["datapower-api-gateway"],"plans":{"default-plan":{"title":"Default Plan","description":"Default Plan","rate-limits":{"default":{"value":"100/1hour"}}}},"apis":{"customerapi2.0.0":{"name":"customerapi:2.0.0"}},"visibility":{"view":{"type":"public","orgs":[],"tags":[],"enabled":true},"subscribe":{"type":"authenticated","orgs":[],"tags":[],"enabled":true}},"product":"1.0.0"}}'
        param_value=$(curl -k -L '$(params.mgmt-url)/orgs/flyr/drafts/draft-products/$(params.draft-product-name)/$(params.draft-product-version)?fields=url' -H 'Accept: application/json' -H "Authorization: Bearer $token" | awk -F'"' '/url/ {print $4}')
        printf "%s" "$param_value" > $(results.draft-product-url.path)
  results:
    - name: draft-product-url
      description: draft-product-url`} />
      <br></br>

      <TextArea labelText="Scenario1 CICD: Task3-publish-draft-product.yaml"  rows={10} id="Scenario1 CICD" 
      value={`
      apiVersion: tekton.dev/v1beta1
      kind: Task
      metadata:
        name: publish-draft-product
      spec:
        params: 
          - name: mgmt-url
            type: string
            description: provider Url
          - name: draft-product-name
            type: string
            description: draft-product-name
          - name: draft-product-version
            type: string
            description: draft-product-version
          - name: draft-product-url
            type: string
            description: draft-product-url
        steps:
          - name: step-publish-draft-product
            image: alpine/curl
            env:
            - name: token
              valueFrom:
                secretKeyRef:
                  name: shared-token 
                  key: token
            script: |
              echo $(params.draft-product-url)
              curl -k -L '$(params.mgmt-url)/catalogs/flyr/sandbox/publish-draft-product' -H 'Content-Type: application/json' -H 'Accept: application/json' -H "Authorization: Bearer $token" -d '{"draft_product_url": "$(params.draft-product-url)"}'
              
      
              param_value=$(curl -k -L '$(params.mgmt-url)/catalogs/flyr/sandbox/products/$(params.draft-product-name)/$(params.draft-product-version)?fields=url' -H 'Accept: application/json' -H  "Authorization: Bearer $token" | awk -F'"' '/url/ {print $4}')
              printf "%s" "$param_value" > $(results.product-url.path)
        results:
          - name: product-url
            description: product-url`} />
      <br></br>

      <TextArea labelText="Scenario1 CICD: Task4-create-subscription.yaml"  rows={10} id="Scenario1 CICD" 
      value={`
      apiVersion: tekton.dev/v1beta1
      kind: Task
      metadata:
        name: create-subscription
      spec:
        params: 
          - name: mgmt-url
            type: string
            description: provider Url
          - name: product-url
            type: string
            description: product-url
        steps:
          - name: step-create-subscription
            image: alpine/curl
            env:
            - name: token
              valueFrom:
                secretKeyRef:
                  name: shared-token 
                  key: token
            script: |
              echo $(params.product-url)
              curl -k -L  '$(params.mgmt-url)/apps/flyr/sandbox/pipeline-test-org/pipeline-test-app/subscriptions' -H 'Content-Type: application/json' -H 'Accept: application/json' -H  "Authorization: Bearer $token" -d '{"name":"pipeline-subscription","title":"pipeline-subscription","product_url":"$(params.product-url)","plan":"default-plan","plan_title":"Default Plan"}'
      FooterIBM - Office of the CIO
      IBM - Office of the CIO
      `} />
      <br></br>

      <TextArea labelText="Scenario1 CICD: Task5-test-api.yaml"  rows={10} id="Scenario1 CICD" 
      value={`
      apiVersion: tekton.dev/v1beta1
      kind: Task
      metadata:
        name: test-api
      spec:
        params: 
          - name: mgmt-url
            type: string
            description: provider Url
          - name: gateway-url
            type: string
            description: gateway-url
          - name: test-api-endpoint
            type: string
            description: test-api-endpoint
          - name: api-key
            type: string
            description: api-key
        steps:
          - name: test-api
            image: alpine/curl
            env:
            - name: token  
              valueFrom:
                secretKeyRef:
                  name: shared-token 
                  key: token
            script: |
              curl -k -L -v '$(params.gateway-url)/$(params.test-api-endpoint)' -H 'X-IBM-Client-Id: $(params.api-key)'
              param_value=$(curl -k -L -v '$(params.gateway-url)/$(params.test-api-endpoint)' -H 'X-IBM-Client-Id: $(params.api-key)')
              printf "%s" "$param_value" > $(results.api-data.path)
        results:
          - name: api-data
            description: data returned by api
      `} />
      <br></br>

      <TextArea labelText="Scenario2 CICD: Task6-send-data-to-mq.yaml"  rows={10} id="Scenario2 CICD" 
      value={`
      apiVersion: tekton.dev/v1beta1
      kind: Task
      metadata:
        name: send-data-to-mq
      spec:
        params: 
          - name: api-data
            type: string
            description: api-data
        steps:
          - name: step-send-data-to-mq
            image: alpine/curl
            env:
            - name: token
              valueFrom:
                secretKeyRef:
                  name: shared-token 
                  key: token
            script: |
              curl -s -k "https://example-09-qm9-rest-route-cp4i.apps.65feb6cf03ade6001e899f7e.cloud.techzone.ibm.com/ibmmq/rest/v2/messaging/qmgr/QM9/topic/order/message" -X POST -u app1:passw0rd  -H "Content-Type: text/plain;charset=utf-8" -H "ibm-mq-rest-csrf-token:blank" --data "$(params.api-data)"
      `} />
      <br></br>

      <TextArea labelText="Scenario3 CICD: Task6-send-data-to-es.yaml"  rows={10} id="Scenario3 CICD" 
      value={`
      apiVersion: tekton.dev/v1beta1
      kind: Task
      metadata:
        name: send-data-to-es
        namespace: tekton-demo

      spec:
        steps:
          - env:
              - name: token
                valueFrom:
                  secretKeyRef:
                    key: token
                    name: shared-token
            image: alpine/curl
            name: step-send-data-to-es
            resources: {}
            script: >
              echo "$(cat /certs/es-cert.pem)" >
              "$(workspaces.task-ws.path)/es-cert.pem" curl -H "Authorization: Basic
              dHAyOkxQSWxUVTZTaUY2SjNFa1RCdlcxeXV2UVhWWVV3Tnlz" -H "Accept:
              application/json" -H "Content-Type: text/plain" -d 'hiiiiii' --cacert
              es-cert.pem
              "https://eventstream-ibm-es-recapi-external-cp4i.apps.65fc029a1ba90d001e7bf43a.cloud.techzone.ibm.com/topics/tp1/records?schemaname=LongList&schemaversion=1.0.0"
        workspaces:
          - description: Workspace for sharing files between tasks
            name: task-ws
            `} />
      <br></br>
    </div>

    
  )
}
export default rxcicd