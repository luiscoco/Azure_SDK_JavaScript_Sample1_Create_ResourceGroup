# Azure SDK JavaScript Sample1 Create ResourceGroup

## 1. Create a blank JavaScript application in VSCode

Navigate to the folder where to place the new JavaScript application

Open VSCode running the command

```
code .
```

Then create a **main.js** file

Now create the package.json file running this command:

```
npm init -y
```

Inside a the **main.js** file place a sample code

```
console.log("Hello World!");
```

Run the application typing the command:

```
node main.js
```

Load the application dependencies

```
npm i @azure/identity
npm i @azure/arm-resources
```

Then input the application source code

```js
'use strict';

const resources = require("@azure/arm-resources");
const identity = require("@azure/identity");

const subscriptionId = process.env.AZURE_SUBSCRIPTION_ID;

const credential = new identity.DefaultAzureCredential();
const resourcesClient = new resources.ResourceManagementClient(credential, subscriptionId);

async function createResourceGroup(resourceGroupName) {
    const parameter = {
        location: "westeurope",
        tags: {
            tag1: "value1"
        }
    };
    const resourcesClient = new resources.ResourceManagementClient(credential, subscriptionId);
    await resourcesClient.resourceGroups.createOrUpdate(resourceGroupName, parameter).then(
        result => {
            console.log(result);
        }
    )
}
  
// Main function
function main() {

createResourceGroup("luismyrgfromjavascript");

}
  
// Call the main function
main();
```

Run the application with the command

```
node main.js
```

This is the output you will get

![image](https://github.com/luiscoco/Azure_SDK_JavaScript_Sample1_Create_ResourceGroup/assets/32194879/2b3d6e76-5d10-4368-9db0-21c8b6885bf1)
