# Build your own DAO

This is the repository for the Buildspace x thirdweb course on "Build your own DAO with just Javascript in a weekend"!

You can find the course here: https://buildspace.so/p/build-dao-with-javascript

## Tools

- [Vote Contract](https://portal.thirdweb.com/pre-built-contracts/vote): To orchestrate votes and view proposals for members of the DAO, using the governance token created in the token contract.

- [Token Contract](https://portal.thirdweb.com/pre-built-contracts/token): To act as the governance token for the DAO, which is required to participate in the voting process.

- [Edition Drop Contract](https://portal.thirdweb.com/pre-built-contracts/edition-drop): To mint NFTs for the DAO using the same asset (i.e. a membership card NFT)

## Using This Repo

To get started with this repo, you'll need to deploy your own:

1. [Token Contract](https://portal.thirdweb.com/pre-built-contracts/token)
2. [Vote Contract](https://portal.thirdweb.com/pre-built-contracts/vote)
3. [Edition Drop Contract](https://portal.thirdweb.com/pre-built-contracts/edition-drop)

Then, clone this example project by running:

```bash
npx thirdweb create --template dao
```

Replace the addresses in [App.jsx](./src/App.jsx) with your own contract addresses.

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
