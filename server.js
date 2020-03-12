const express = require('express');
const app = express();
const port = 3051;
app.use(express.static('./static'));
app.get('/', (req, res) => {res.send(`<html>
<head>
    <title>
       Tv Info
    </title>
    
</head>
<body>
    <div id="root"></div>
    <script src='/dist/main.js'></script>
</body>
</html>`);});


app.listen(port, () => console.log(`App listening on port ${port}!`))
