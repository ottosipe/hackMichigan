
/*
 * GET home page.
 */


var verbs = ['code','hack','learn','build','think','test'];
exports.index = function(req, res){
	i = Math.floor(Math.random()*verbs.length);
	// eventually this might be cooler to have change after page load?
	// easy switch
  res.render('index', { title: 'Hack Michigan', 
  	info: "Hack Michigan is Michigan Hackers second hackathon and aims to be the biggest student run hackathon ever held at the University of Michigan. The theme of this hackathon is “impact”. As such, we want each and every team to build something that has an impact on real people. Hack Michigan is scheduled for November 3rd - 4th, and will be held in North Quad. The event will be 28 hours long with 24 hours devoted to hacking." ,
  	verb: verbs[i]
  	});
};

exports.about = function(req, res){
	i = Math.floor(Math.random()*verbs.length);
	//need page for this
  res.render('about', { title: 'Hack Michigan',
  	info: "" ,
  	verb: verbs[i]
  });
};

exports.schedule = function(req, res){
 	//need page for this
  res.render('schedule', { title: 'Hack Michigan'});
};

exports.sponsors = function(req, res){
 //need page for this
  res.render('coming', { title: 'Hack Michigan'});
};

exports.contact = function(req, res){
 //need page for this
  res.render('coming', { title: 'Hack Michigan'});
};




