#### Notes on the creating a validator section
---

# Creating A Validator

## 1. Creating a new validator wallet

This section will walk you through making a brand new wallet. If that's what you'd like to do you can follow that. 

### Another Option - Using an existing wallet instead

You can also import an existing wallet in a variety of ways. Take a look at the output of the command `./hmy keys` below to see your options.

```text
./hmy keys
Manage your local keys

Usage:
  hmy keys [flags]
  hmy keys [command]

Available Commands:
  add                   Create a new keystore key
  check-passphrase      Check if passphrase for given account is valid.
  export-ks             Export the keystore file contents
  export-private-key    Export the secp256k1 private key
  generate-bls-key      Generate bls keys then encrypt and save the private key with a requested passphrase
  generate-bls-keys     Generates multiple bls keys for a given shard network configuration and then encrypts and saves the private key with a requested passphrase
  get-public-bls-key    Get the public bls key associated with the provided private bls key
  import-ks             Import an existing keystore key
  import-private-key    Import an existing keystore key (only accept secp256k1 private keys)
  list                  List all the local accounts
  location              Show where `hmy` keeps accounts & their keys
  mnemonic              Compute the bip39 mnemonic for some input entropy
  recover-bls-key       Recover bls keys from an encrypted bls key file
  recover-from-mnemonic Recover account from mnemonic
  remove                Remove a key from the keystore
  save-bls-key          Encrypt and save the bls private key with a requested passphrase

Flags:
  -h, --help   help for keys

Global Flags:
      --file string   Path to file for given command when applicable
  -e, --ledger        Use ledger hardware wallet
      --no-latest     Do not add 'latest' to RPC params
      --no-pretty     Disable pretty print JSON outputs
  -n, --node string   <host> (default "http://localhost:9500")
  -v, --verbose       dump out debug information, same as env var HMY_ALL_DEBUG=true

Use "hmy keys [command] --help" for more information about a command.
```

For example, if you'd like to recover your wallet from a mnemonic phrase, run the following command.

```text
./hmy keys recover-from-mnemonic [myUserAccount] --passphrase
```

{% hint style="warning" %}
 Add your linux user account name in place of [myUserAccount] - We use serviceharmony as our user name.
{% endhint %}


