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

router.get('/player', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT * FROM "players"`;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error with GET', err);
        res.sendStatus(500);
      });
});


// POST route
router.post('/', rejectUnauthenticated, (req, res) => {
    const player = req.body;
    const queryText = `INSERT INTO "players" ( "username")
                VALUES ($1)`;
    const queryValues = [
        player.newPlayer,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing POST Player query', err);
            res.sendStatus(500);
        });
});

// DELETE route
router.delete('/:id', (req, res) => {
    const queryText = `DELETE FROM "players" WHERE "id" = $1`
    pool.query(queryText, [Number(req.params.id)]).then(() => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error with DELETE', error);
        res.sendStatus(500);
    })
});
module.exports = router;