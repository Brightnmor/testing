const functions = require('firebase-functions');
var admin = require("firebase-admin");


admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "student-resource-api",
    clientEmail: "firebase-adminsdk-szez0@student-resource-api.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDCBkT6u4pUmecj\nS4CtetwEaDJhcnu1nII3v785SMbR6EtCdnXyrHrFuR0tjuYlV7c0H7jdf+heCWtn\nuS1QE6FdjG/SBlWQMWAnLD8iIV2FPoCCyHUgMm2gEAO/b5pQ9dfwUHK5HjCINadK\n4Cqdqi92msenbMdeJMZZdig2sjbU10CmmPFWAUsp+wYT5wlaJ/xAbjLAJ3/cigjv\nqoPQoZObISAUGkci/Y7DGt3MJr7sLw6wuSdweaXDY8mdjU6+0jq7abX5Seh/ToLF\nraI+pkXsrM4hrYZoAXwWaB8XB2JKVQf8o4p/9WqU9dMcpFlTq6QLFkm+zjC/H1F4\nRty/U6r5AgMBAAECggEACXHxWlyrejzXvKcd8ilV8Tz6nuB01z1xirHh5txSbsDR\nJmt1Mxq5tfWx+ZgdlK8gHashqQljUBiYoD7/zrMgmtji+fq8SuhXFvEXeFuJcvAS\nT3Y0sBw5q/NmS05tLl3ED6XK6pS7+2rT5Fg58DJAXJS3qBXVNWcIOi3/Unz7IFdC\n+9gXW5CBhyU+jNwsOSVheQRh/Hj8maaeAWuGow8lAIEM0fO9HQgLBRJfc/H/ti67\nF1IKx9e8i0PsnguyU6TLsQ0QBfsawtIRQW1yTFq0L+dofTpuBU9piS22BVpP3QeO\nz1EJbLjUxC5Tq6D008UuJSGa0Z61t2XSvZAclx8pJQKBgQD8wbV/YampJPz0r1sK\nh3yuHmlohnhYaFfqcuRxu2ekUWZhHbvOMiSlEldatkUuHzV8EI41j75abUfk69Ci\nwoIgHyqoBvxKcHOJzxTZsSnldIp1HI+drkJndgk5CQvioyVF6s9epeU2KjRY0JOI\nanzEYFVB9M9cAVhtvI6KDbSLEwKBgQDEg6DvS0F6g8RYNjBg7w2h+yO1seO1APoc\nWDiEuqZxvKHl9cMyuGyij0xBqZI06JilDPBi8toF2KcLBpu3Pud+k/KT10BRYQmP\nfCu6r818NgwCQO5AemaBXGmODOLEQnmsmfxXCqSWVqkz9HG2WIg+aIVH1MkmC4Pn\nID+01ptHQwKBgQDNJUvyf4n8xxCoaEs0WJNRn01ekQXMe6QfnfDcfoa4T3kRCdkM\nmpYzhJdyAM5ViO8YKzfBMVIGgvv/SYalE8oZ2DH+/ux2Xp7oEzORHMIsglJ+ixfl\nmzI6VwtVR4pmAJSYEuUMpQlM1SR3kZKs/gEWQjnwtoo22sCzEH+AfW80EQKBgBOy\ngeoaZ/jIxmB1JgpBS+OFkcG/j+xvqaI3sYqUTuStnKi5JpSp6bGtnV4jihUlj09T\n6bBxWSsm2S+AvRD0DC4i1Di/ZaICkPvB3Xw77OPbYv7C1V6/JhEnWyky33P+mcWU\nNbffyDmNfC5J/S/i1d0zitB1YqgelV0QXXJZ5HyTAoGAf4Ub1nbvpBaFPfZhpgmZ\nL/7I6yS8ffGEgoqBdLoEzv2eJXdoDVXyPFt/slKkB/jNvG90eitLYLVo0NMLZclA\nC4/qy/W9wsH3REFz/lThYALoxT9L0kDpbUIZ/TNh5DKqQKUdIuDiWBVXFu9ci+J/\nwhGRw20fn2j8ketCzlI1OKo=\n-----END PRIVATE KEY-----\n"
  }),
  databaseURL: "https://student-resource-api.firebaseio.com"
});
const express = require('express');
const app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

var student = [ {
   "id": 1, 
   "name": "Mr. Bright",
   "level":"HND 2",
   "department": "Computer Science"
  },
  {
   "id": 2, 
   "name": "John",
   "level":"ND 1",
   "department": "Agric Tech" 
  },
  {
   "id": 3, 
   "name": "Mr. Nelson",
   "level":"HND 1",
   "department": "BAM" 
  },
  {
   "id": 4, 
   "name": "Sandra",
   "level":"ND 2",
   "department": "Accounting" 
  }];

  var studentresource = [
    {
  "id":"1",
  "title":"Todoist",
  "body":"A beautifully simple task-tracking app. It’s free (with premium features for less than $2.50/month), syncs across all platforms and devices (and the web), has recurring tasks, multiple lists, and is pretty to boot."
  },
  {
  "id":"2",
  "title":"The Ultimate Study Music Playlist",
  "body":"I study far, far more effectively when I'm listening to music - as long as it's the right kind of music. This is a playlist of 160-odd songs I've been building; it's got a ton of variety, and features music from video game soundtracks, movie/anime scores, and artists from many genres." 
  },
  {
  "id":"3",
  "title":"Habitica - Habit Tracker",
  "body":"A habit tracking app that I use every single day. I use it for smaller habits – remembering to floss, doing pull-ups, juicing, reading 30 minutes a day, taking vitamins, etc. Without it, I’m prone to letting work take over my life and forgetting to do these things. With it, I’m a small-habit superhero."
  },
  {
  "id":"4",
  "title":"Tomighty - Pomodoro Timer",
  "body":"One of the most effective ways to immediately stop procrastinating is to use the Pomodoro Technique: set a timer for 25 minutes, commit to one task, and do nothing but that task until the timer dings. I do this almost every day, and I use Tomighty - a free app for Mac and PC - as my timer." 
  },
  {
  "id":"5",
  "title":"Google Drive - File Syncing and Backup",
  "body":"The most essential app ever for anyone who uses a computer. Keeps your files backed up and synced across all your computers and devices, as well as on the web. Forget your paper on your home computer? No worries, it's in Drive."
  }
  ];


// get student resource
app.get('/studentresource.json', (request, response) =>{
response.json(studentresource);
});

app.get('/studentresource/:id.json',function(request, response){
	var detail = studentresource[request.params.id - 1];
	if(!detail){
		response.status(404).json('no detail for '+request.params.id);
	}else{
		response.json(detail);
	}	
});



app.get('/admin/student.json', (request, response) =>{
 
response.json(student);
});

app.get('/admin/student/:id',function(request, response){

	var detail = student[request.params.id - 1];
	if(!detail){
		response.status(404).json('no detail for '+request.params.id);
	}else{
		response.json(detail);
	}	
});



// post request
app.post('/admin/studentresource.json',parseUrlencoded, function(request, response){ 
    //Check if all fields are provided and are valid: 
   
    var newId = studentresource[studentresource.length-1].id+1; 
    studentresource.push({ 
        id: newId, 
        title: request.body.title, 
        body: request.body.body 
    }); 
    response.json({message: "New student resource created.", location: "/admin/studentresource" + newId}); 
     
}); 


// post request
app.post('/admin/student.json',parseUrlencoded, function(req, res){ 
    //Check if all fields are provided and are valid: 
   
  var newId = student[student.length-1].id+1; 
  student.push({ 
      id: newId, 
      name: req.body.name, 
      level: req.body.level,
      department:req.body.department
  }); 
  res.json({message: "New student created.", location: "/admin/student" + newId}); 
     
}); 
// update student resoure
app.put('/admin/studentresource/edit/:id', function(req, res){
	   var newId = req.params.id - 1; 
        studentresource[newId]={ 
            id: newId, 
            title: req.body.title, 
            body: req.body.body 
        }; 
        res.json({message: "New student resource created.", location: "/admin/studentresource/edit" + newId}); 
     
});

// update student resoure
app.put('/admin/student/edit/:id', function(req, res){
	   var newId = req.params.id - 1; 
        student[newId]={ 
           id: newId, 
            name: req.body.name, 
            level: req.body.level,
            department:req.body.department
        }; 
        res.json({message: "New student created.", location: "/admin/student/edit" + newId}); 
     
});

// delete student resource
app.delete('/admin/studentresource/delete/:id', function(req, res){ 
    //Check if all fields are provided and are valid: 
   
        var newId = req.params.id - 1; 
        studentresource.splice(newId, 1); 
        res.json({message: "New student resource created.", location: "/admin/studentresource/delete/" + newId}); 
     
});

// delete student 
app.delete('/admin/student/delete/:id', function(req, res){ 
    //Check if all fields are provided and are valid: 
   
        var newId = req.params.id - 1; 
        student.splice(newId, 1); 
        res.json({message: "New student created.", location: "/admin/student/delete/" + newId}); 
     
});


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);

