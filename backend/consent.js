const express = require('express');
const fs = require('fs');
const router = express.Router();

router.post('/consent', (req, res) => {
  const { userId, partnerId } = req.body;
  const log = `${new Date().toISOString()} | ${userId} consented to ${partnerId}\n`;

  fs.appendFileSync('consent-log.txt', log);
  console.log('✅ Consent logged:', log.trim());

  res.status(200).json({ status: 'Consent Granted' });
});

module.exports = router;