## Will create an out files by Nextjs, a default location for static build application, which can be used in any deploy servers. 
- `npm run build` 

## start replica
`dfx start --background --clean`

## stop replica
`dfx stop`
## script to deploy locally
- `dfx deploy portfolio` -it is dfx.json

## script to deploy to mainnet (ic)

build
```sh
dfx build portfolio
```

deploy
```sh
dfx canister --network ic --no-wallet install --mode=reinstall portfolio
```

## Sample URL
http://localhost:8000/?canisterId=rrkah-fqaaa-aaaaa-aaaaq-cai


## render typescript syntax
```typescript
    let name = 'MomoSama'
```