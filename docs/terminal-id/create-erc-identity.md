---
id: access-control
title: Create ERC-721 identity
sidebar_label: Access control
---

## 1. Create an ID

In order to create your first ERC-721 Identity, you must navigate back to the home dashboard and click on the same “Add” button as you did when you added your smart contract and your wallet.

![login](assets/images/erc/erca1.png)

To reiterate, the next step is to create your ID. There are three categories that need to be filled out before creating the identity. It requires:

1. ID Name
2. Network
3. ID Admin Address (Make sure you have full ownership of this address)

![login](assets/images/erc/erca2.png)

## 2. Add your wallet as a signatory

Before deploying your ID to the network, you must first decide what wallet you want as your signatory for the ID you are creating. Select from the wallet IDs within your address book or add a new one. Once you have finished this step, click ‘Deploy’ to officially create your ID.

![login](assets/images/erc/ercb1.png)

The last and final step is the ‘Confirm & Deploy’ page that will allow you to confirm all the information that you have entered during your ID creation plus the additional transaction details (ie; costs) of the ID deployment to the Ethereum mainnet. After everything looks to be correct, proceed by clicking the ‘Deploy’ button (as pictured below) to finalized the creation of your ID.

![login](assets/images/erc/ercb2.png)

## 3. Transfer contract ownership to your ID

In order to add a contract to a specific ID, you must first select one of your IDs from your main Terminal Dashboard and then click on the ‘Permissions’ tab.

From the permissions tab, you may add a new set up permissions for this contract by selecting ‘Setup Permissions’ (below):

![login](assets/images/dAppTool/dAppToola1.png)

You may select a already existing ID to manage the contracts permissions or you can also go through the process of creating a new identity for management purposes.

Once the ID has been selected, you will need to confirm and sign on the following screen:

![login](assets/images/dAppTool/dAppToola2.png)

Once the transaction has been approved, you will see that the ID you have selected to manage the contract’s permissions has been officially set on the right side of the top of the permissions tab bar. You can change the ID/Owner of your contracts by selecting ‘Change ID/Owner’ in the bottom right hand side.

![login](assets/images/dAppTool/dAppToola3.png)

## 4. Add Other Members or Wallets to you ID

To add new members (also referred to as signatories) or wallets to you ID, you will first have to select the ID you want to work with. Once you are within the ID, you can now navigate to it’s ‘Permissions’ tab.

![login](assets/images/dAppTool/dAppToolb1.png)

In order to add new wallets or IDs to your ID, you can select the blue highlighted button titled ‘Add Signing Method’ at the bottom of your permissions tab page.

![login](assets/images/dAppTool/dAppToolb2.png)

For the sake of this walkthrough we will be adding Daniel’s Wallet. Feel free to select or add any signing method that you want to work with.

Once selected, it will appear like the other Signing methods you have under your ID. However, it is not official until you officially apply the changes. Please select the ‘Apply’ button to do so (below):

![login](assets/images/dAppTool/dAppToolb3.png)

After selecting the ‘Apply’ button you will be brought to the ‘Confirm & Sign’ popup page to finalize your changes. Sign with the correct signatory of your ID and deploy your changes to your Terminal. There it is, you have successfully added an additional wallet to your ID as a signatory.

![login](assets/images/dAppTool/dAppToolb4.png)

Note: As you can see in this case, we selected a ‘restricted’ function and that requires an ID that has the specific permissions to sign with it. Luckily, we will be covering this in the next step.

## 5. Manage access-control

In order to manage specific permissions-access for functions within your contracts, you must first select the contract that you want to set up. From the contract dashboard, please navigate to the ‘Permissions’ tab, right next to the ‘Code’ tab. Below you will see a list of the functions within your contract.

![login](assets/images/dAppTool/dAppToolc1.png)

Above you can see that there is a manager of the permissions for this function (ie; Joseph ID). Note that this is not permanent and that you can change the ERC-725 ID at any time by clicking on the current Joseph ID card.

### Setting Permissions for each function

After selecting the contract that you want to set function permissions for, you will see an already filled list of members who have access to the contract with either a ‘Yes’ or ‘No’ next to their name.

![login](assets/images/dAppTool/dAppToolc2.png)

For the purpose of this walkthrough example, let us change all of the member’s permissions to ‘Yes’ (pictured below). Once you have done so, please proceed by click ‘Continue’:

![login](assets/images/dAppTool/dAppToolc3.png)

After clicking “Continue” the edited Function will be highlighted in blue and the “Sign” button will turn blue ready for action. Keep in mind the User can still edit more Function Permissions before signing.

![login](assets/images/dAppTool/dAppToolc4.png)

Once you are finished with the permission changes, navigate to the bottom of the above page and select ‘Apply’ to initiate a transaction to confirm you changes.

![login](assets/images/dAppTool/dAppToolc5.png)

Confirm and then deploy for your changes to be saved for your contract and function permissions.

## (leftover text from activity feed content- maybe ignore?)

```
![login](assets/images/intro/introc8.png)

When selecting the owner address, you will have the ability to search for a specific address or scroll down the drop-down menu to find it. Simply select the address that is associated with the owners and click “Continue”.

![login](assets/images/intro/introc9.png)

The next step is the formal creation of your identity (below). As shown below, the structure is ID → Admin → User and then there is the potential to add a Signatory (adding another Admin or User).

1. The ID: The ID is created from an identity smart contract. These smart contracts can represent humans, groups, objects, and even machines.
2. The Admin can:

- add/remove signatories & change permission levels on this ID
- Can call all restricted functions on all contracts owned by this ID
- Can grant/revoke permissions for non-admin users to call restricted functions on contracts owned by this ID

3. A User can:

- Can be granted permission by an admin to call restricted functions on contracts owned by this ID (on a per contract or function level)

4. Adding a Signatory - This option allows you to add other accounts to this specific contract permissions. You can later decide if you want to mark them as an Admin or as another User.

![login](assets/images/intro/introc10.png)

The next step (displayed on the left) is to ‘Deploy’ the permission edits you have just assigned to your contract. Please confirm the details of your transaction before officially deploying the changes.

![login](assets/images/intro/introc11.png)

Your permission changes have been completed!

```
