const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET route
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT * FROM "recent_games"
    JOIN "players" ON "recent_games"."player_id" = "players"."id";`;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error with GET', err);
        res.sendStatus(500);
      });
});


// POST route
router.post('/', (req, res) => {

});

module.exports = router;