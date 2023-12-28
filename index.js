const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectToDatabase = require('./db');
const RoleRouter = require('./Routes/role');
const UserRouter = require('./Routes/user');
const MemberRouter = require('./Routes/member');
const CommunityRouter = require('./Routes/community');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded(
  { extended: true }
))


const port = 4000;

connectToDatabase()
  .then(() => {
    app.use('/v1/role', RoleRouter);
    app.use('/v1/auth', UserRouter);
    app.use('/v1/community', CommunityRouter);
    app.use('/v1/member', MemberRouter);

    
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })