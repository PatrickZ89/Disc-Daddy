const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET route
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT * FROM "games"
    JOIN "players" ON "games"."player_id" = "players"."id" ORDER BY "games"."id";`;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error with GET', err);
        res.sendStatus(500);
      });
});

router.get('/current/:id', rejectUnauthenticated, (req, res) => {
    console.log(req.params)
    const queryText = `SELECT * FROM "games" JOIN "players" ON "games"."player_id" = "players"."id"
    WHERE "game_id"=($1) ORDER BY "players"."id";`;
    pool.query(queryText, [Number(req.params.id)])
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
    const queryText = `INSERT INTO "players" ( "name")
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

router.post('/gamedata', rejectUnauthenticated, (req, res) => {
    const gamedata = req.body;
    const queryText = `INSERT INTO "games" ( "game_id", "date", "course_id", "player_id")
                VALUES ($1, $2, $3, $4)`;
    const queryValues = [
        gamedata.gameID,
        gamedata.time,
        gamedata.courseID,
        gamedata.playerID,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing POST Player query', err);
            res.sendStatus(500);
        });
});

router.post('/score', rejectUnauthenticated, (req, res) => {
    const gamedata = req.body;
    console.log('gamedata:', gamedata)
    const holeNames = ['hole_1', 'hole_2', 'hole_3', 'hole_4', 'hole_5', 'hole_6', 'hole_7', 'hole_8', 'hole_9', 'hole_10', 'hole_11', 'hole_12', 'hole_13', 'hole_14', 'hole_15', 'hole_16', 'hole_17', 'hole_18'];
    if(holeNames.includes(gamedata.hole)) {
        const queryText = `UPDATE "games" SET ${gamedata.hole} = $1, "score"=$2 WHERE "game_id"=$3 AND "player_id"=$4;`;
        const queryValues = [
            gamedata.strokes,
            gamedata.score,
            gamedata.gameID,
            gamedata.playerID,
        ];
        pool.query(queryText, queryValues)
            .then(() => { res.sendStatus(201); })
            .catch((err) => {
                console.log('Error completing POST SCORE query', err);
                res.sendStatus(500);
            });

    } else {
        res.sendStatus(500);
    }
   
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