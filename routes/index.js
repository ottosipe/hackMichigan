
/*
 * GET home page.
 */


var verbs = ['code','hack','learn','build','think','test'];
exports.index = function(req, res){
	i = Math.floor(Math.random()*verbs.length);
	// eventually this might be cooler to have change after page load?
	// easy switch
  res.render('index', { title: 'Hack Michigan', 
  	info: "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee." ,
  	verb: verbs[i]
  	});
};

exports.about = function(req, res){
	//need page for this
  res.render('coming', { title: 'Hack Michigan'});
};

exports.schedule = function(req, res){
 	//need page for this
  res.render('coming', { title: 'Hack Michigan'});
};

exports.sponsors = function(req, res){
 //need page for this
  res.render('coming', { title: 'Hack Michigan'});
};

exports.contact = function(req, res){
 //need page for this
  res.render('coming', { title: 'Hack Michigan'});
};




