# Message Mixer
(From CodeCademy - Learn Intermediate JavaScript)

Message Mixer Inc. offers a message-encryption service that transforms input text, using various ciphers, and displays the encrypted message to the console.

There are three encryption methods provided by this service:

- A "Caesar Cipher" in which the characters of the input message are shifted alphabetically by a given amount.

- A "Symbol Cipher" in which select characters from the input message are replaced with visually similar symbols.

- A "Reverse Cipher" in which each word of the input message is reversed in place.

To use the service, run:
```bash
node message-mixer.js ['caesar'|'symbol'|'reverse'] [amount]
```

Examples:
```bash
$ node message-mixer.js caesar 4
Enter the message you would like to encrypt...
> hello world
 
Here is your encrypted message:
> lipps asvph
 
$ node message-mixer.js 'reverse'
Enter the message you would like to encrypt...
> hello world
 
Here is your encrypted message:
> olleh dlrow 
```

## `super-encoder.js` - Create a new program using the module
The developers over at Super Encoder LLC heard about the encryptors.js module that you just released and want to use your encryption functions to create a new program.

The Super Encoder developers want the user to be able to use their program to encode messages and decode them using the commands below:
```
node super-encoder.js encode
```
and
```
node super-encoder.js decode
```

