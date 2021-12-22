<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v2
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework Node Prisma.io


## Usage

to install the dependencies (must have node js installed)

```
$ npm i
```

to install serverless framework

```
$ npm install -g serverless
```

to run the project locally

```
$ serverless offline
```

endpoint to create users

![image](https://user-images.githubusercontent.com/75379137/147017241-f595dd35-a114-4ca5-b2dd-b836152b507c.png)


endpoint to create a purchase order for a user to be charged from their balance

![image](https://user-images.githubusercontent.com/75379137/147017517-ecdeda78-60fd-4d2c-b92c-281736e64de3.png)


endpoint to increase a user's balance

![image](https://user-images.githubusercontent.com/75379137/147017807-646f252f-ec1d-467d-9c45-bd2611374eef.png)


endpoint to transfer money between users

![image](https://user-images.githubusercontent.com/75379137/147018099-9483401c-2505-4a01-a81a-f122ae692c30.png)

endpoint to get users list

![image](https://user-images.githubusercontent.com/75379137/147018321-15e21cfb-68b7-4431-a12f-8e73d2b0406e.png)

endpoint to get the list of total orders

![image](https://user-images.githubusercontent.com/75379137/147018527-ddc6735b-6059-4117-8619-ab622b816c52.png)



### Deployment

```
$ serverless deploy
```

After deploying, you should see output similar to:

```bash
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
........
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service aws-node-http-api.zip file to S3 (711.23 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
.................................
Serverless: Stack update finished...
Service Information
service: serverless-http-api
stage: dev
region: us-east-1
stack: serverless-http-api-dev
resources: 12
api keys:
  None
endpoints:
  ANY - https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  api: serverless-http-api-dev-hello
layers:
  None
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

Which should result in response similar to the following (removed `input` content for brevity):

```json
{
  "message": "Go Serverless v2.0! Your function executed successfully!",
  "input": {
    ...
  }
}
```
