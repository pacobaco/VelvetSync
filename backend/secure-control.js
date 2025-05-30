const express = require('express');
const crypto = require('crypto');
const router = express.Router();

const SECRET_KEY = Buffer.from('your-256-bit-secret-key-here', 'hex');

router.post('/control', (req, res) => {
  const { encryptedData, iv, token } = req.body;

  if (token !== 'velvetsync-token') {
    return res.status(403).json({ message: 'Invalid token' });
  }

  try {
    const decipher = crypto.createDecipheriv('aes-256-cbc', SECRET_KEY, Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    console.log('📟 Decrypted control signal:', decrypted);
    res.status(200).json({ message: 'Signal received' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to decrypt' });
  }
});

module.exports = router;