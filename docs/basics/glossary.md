---
id: glossary
title: Glossary
sidebar_label: Glossary
---

- [**Terminal Pay**](): Service which enables meta-transactions using a relayer.

- [**Relay Key**](): standard ethereum address, which is generated for each dapp, used to submit meta-transactions on behalf of the user.

- [**Wireless Signing (WiSi)**](): Service which generates a public key for each user, derives one or more ethereum addresses, and stores the private key(s) in an encrypted form on Terminal servers. The private key(s) can be decrypted using the user’s email, password, and random salt. An account recovery option is also available, which encrypts the private ley(s) using a recovery question and answer.

- [**Terminal Universal Friendly Onboarding (Terminal UFO)**](): Service which includes both Terminal Pay and WiSi to provide standard username/password login and “gass-less” onboarding for users to interact with a blockchain application.

- **JSON Web Token (JWT)**: An ephemeral string used to temporarily decrypt a WiSi private key during a Signing Session.

- [**Signing Session**](): A period of time specified by the dapp owner during which the user can sign messages using their WiSi, without requiring login or confirmations for each transaction.

- [**Signing Service**](): Service which handles ethereum wallet creation and signing.

- **Ethereum address**: A public/private keypair for signing messages/transactions. Also called user’s “wallet” or “address.”

- [**ERC-725 Proxy Identity**](): A smart contract wallet which is used as a single “identity”, for which multiple wallets can be used to sign on behalf of the identity
