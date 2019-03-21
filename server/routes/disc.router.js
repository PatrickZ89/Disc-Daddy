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

router.post('/game', rejectUnauthenticated, (req, res) => {
    console.log("GAME POST:", req.body.length)
    for (let i = 0; i < req.body.length; i++){
        const player = req.body[i];
        // adding total score for each player
        let score=0;
        for (let i = 0; i < 18; i++){
            score=score+player[i];
        };
    const queryText = `INSERT INTO "recent_games" ("hole_1", "hole_2", "hole_3", "hole_4", "hole_5", "hole_6", 
    "hole_7", "hole_8", "hole_9", "hole_10", "hole_11", "hole_12", "hole_13", "hole_14", "hole_15", "hole_16", "hole_17", "hole_18", "player_id", "score")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20);`;
    const queryValues = [
        player[0],
        player[1],
        player[2],
        player[3],
        player[4],
        player[5],
        player[6],
        player[7],
        player[8],
        player[9],
        player[10],
        player[11],
        player[12],
        player[13],
        player[14],
        player[15],
        player[16],
        player[17],
        player[18],
        score,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing POST Player query', err);
            res.sendStatus(500);
        });
    }
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