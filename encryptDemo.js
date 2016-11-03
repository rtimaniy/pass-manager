 var crypto = require('crypto-js');

 var secretMessage = {
	 name: 'Rajankumar',
	 secretName: 'Rajan'
 };

 var secretKey = "bmcAdm1n";

 // Encrypt
 var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage),secretKey);

 console.log('Encrypted Message: ' + encryptedMessage);
 console.log('Encrypted Message: ' + encryptedMessage.name);

 // Decrypt Message
 var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
 var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log('Decrypted Message: ' + decryptedMessage);
console.log('Name: ' + decryptedMessage.name);
console.log('secretName: ' + decryptedMessage.secretName);

