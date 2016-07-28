var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var course_id = req.query.course_id;
    var result= null;
   var data = {
        "CS551": {
            1:{
            'homework_id': 1,
            'score': 84
            },
            2: {
                'homework_id': 2,
                'score': 93
            },
            3: {
                'homework_id': 3,
                'score': 88
            }
        },
        "CS557": {
            1: {
                'homework_id': 1,
                'score': 90 
            },
            2: {
                'homework_id': 2,
                'score': 85
            }
        }
    };
    
    //console.log(data.length);
    for(var a in data){
        if (a == course_id) {
            result = data[a];
            }
    }
   
    if (result!=null) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end("404----Course not found.")
    }
});

module.exports = router;
