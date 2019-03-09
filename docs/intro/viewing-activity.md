---
id: viewing-activity
title: Viewing activity feed of smart contract
sidebar_label: Viewing activity feed of smart contract
---

## Viewing the activity feed of smart contracts (SC Dashboard- details)

On the homepage dashboard, you have the option to see the ‘Overview’ section or the ‘Activity’ section. The ‘Overview’ has all of your projects, teams, smart contracts and wallets organized together. If you want a detailed list of all the activity that is going within your project and team, click the button “Activity”. 

 ![login](assets/images/intro/introc1.png)


Here is an example of what a populated ‘Activity’ section can look like on Terminal:  

 ![login](assets/images/intro/introc2.png)


The overview above should give you a general idea of how your project will look like as you continue to use Terminal for your team and/or personal use. Now, let’s head back to the smart contract we uploaded earlier and explore how we can interact with it further! 

After clicking on the smart contract we uploaded earlier, you can see that there is a vast amount of functionality and organizational features that Terminal offers you. 

![login](assets/images/intro/introc3.png)

*Note:* If you wish to edit the current smart contract details or delete the contract in general, click on the three vertical dots in the top right. 


![login](assets/images/intro/introc4.png)

The ‘Activity’ view will show you all the transactions and call that your smart contract hard been involved with in a list format like in the main page ‘Activity’ feed we just walked through. 

![login](assets/images/intro/introc5.png)

The ‘Functions’ tab clearly displays (in list format) all of the functions that your smart contract contains. On the tab bar to the right of the search bar, you can further categorize the functions into “All”, “Read”, and “Write” functions. Feel free to take some time to select one of the functions and play around with it before moving onto the next step. 

![login](assets/images/intro/introc6.png)

The ‘Code’ tab provides you with some crucial information about your smart contract(s).
1. ‘Source code status’ of your contract. This will confirm if your contract indeed has a “Verified” status. A verified status indicates that the Contract Address is verified to be on the Ethereum Blockchain.You can verify this through Etherscan on your own if you copy and paste the contract address and paste it in the search bar on https://etherscan.io/. 
2. ‘Compiler Test:’ for your contract:
3. Optimization Enabled 
4. Runs (Optimiser) 

![login](assets/images/intro/introc7.png)

The last feature tab within your smart contract is the ‘Permissions’ tab. To better understand the idea around permissioning, let’s walk through an example of setting up your permissions for your contract. After clicking on the “Setup Permissions” button on the top right in blue, it will take you to the following form: 

![login](assets/images/intro/introc8.png)

When selecting the owner address, you will have the ability to search for a specific address or scroll down the drop-down menu to find it. Simply select the address that is associated with the owners and click “Continue”. 

![login](assets/images/intro/introc9.png)

The next step is the formal creation of your identity (below).  As shown below, the structure is ID →  Admin →  User and then there is the potential to add a Signatory (adding another Admin or User). 

1. The ID:  These identity smart contracts can describe humans, groups, objects, and machines.
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









