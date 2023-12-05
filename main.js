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