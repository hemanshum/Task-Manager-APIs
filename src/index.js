const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');

require('./db/mongoose');
const userRouter = require('./routes/user');
const taskRouter = require('./routes/task');

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

//Server Code
app.listen(port, () => {
	console.log('Server is up on port ' + port);
});
