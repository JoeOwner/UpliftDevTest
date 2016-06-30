var JS = {
 	data : {
 		articles: [],
 		articleMarkup: "<div id='{{id}}' class='article_section colapsed'> \
 			<h1>{{title}}</h1></ br> \
 			<h2>{{date}}</h2> </ br> \
 			<div  class='colapsedSection'> \
		 		<p>{{excerpt}}</p> \
		 		<a href='#' onclick='return JS.expandSection({{id}})' class='colapsedSection'> see content </a> \
	 		</div> \
 			<div  class='expandedSection'> \
		 		<p>{{content}}</p> \
		 		<a href='#' onclick='return JS.colapseSection({{id}})'> hide content </a> \
	 		</div> \
 		</div>" 
 	},
 	fetchData : function(){
 		var data = JS.makeRequest("http://dev.upliftconnect.com/wp-json/wp/v2/posts?context=view&per_page=3&page=1&orderby=id&order=asc&include=12814%2C11627%2C12130", function(){
		
			JS.printAllData(JS.data.articles);

 		});
 	},
 	printAllData: function(data){
 		var i=0,
 			displayData = "";

		for(i; i < data.length; i++){
			var item = data[i];
			 item.cleanDate = JS.convertGMTDate(item.date_gmt);
			 displayData += JS.printDataItem(item);
		};
		document.getElementById("upliftData").innerHTML = displayData
 	},
 	printDataItem: function(data){
 		var itemMarkup = JS.data.articleMarkup;

 		itemMarkup = itemMarkup.replace(new RegExp("{{id}}", "g"),data.id);	
 		itemMarkup = itemMarkup.replace(new RegExp("{{title}}", "g"),data.title.rendered);	
 		itemMarkup = itemMarkup.replace(new RegExp("{{date}}", "g"),data.cleanDate);
 		itemMarkup = itemMarkup.replace(new RegExp("{{excerpt}}", "g"),data.excerpt.rendered);
 		itemMarkup = itemMarkup.replace(new RegExp("{{content}}", "g"),data.content.rendered);

 		return itemMarkup;	
 	},
 	makeRequest : function(url, callback){
	    var ud = '_' + +new Date,
	        script = document.createElement('script'),
	        head = document.getElementsByTagName('myDiv')[0] 
	               || document.documentElement;

	    window[ud] = function(data) {
	        head.removeChild(script);
	        success && success(data);
	    };

	    script.src = url.replace('callback=?', 'callback=' + ud);
	    head.appendChild(script);

	    JS.data.articles = upliftData
	    if(callback){
	    	callback();
	    }
 	},
 	convertGMTDate : function(gmtDate){
 		var newDate = new Date(gmtDate).toLocaleString();
 		return newDate.substr(0, newDate.indexOf(','));
 	},
 	expandSection : function(id){
 		console.log(id);
 		document.getElementById(id).className = 'expanded'
 	},
 	colapseSection : function(id){
 		console.log(id);
 		document.getElementById(id).className = 'colapsed'
 	}
 }


var upliftData = [{
	"id": 11627,
	"date": "2014-12-18T12:16:55",
	"date_gmt": "2014-12-18T01:16:55",
	"guid": {
		"rendered": "http:\/\/dev.upliftconnect.com\/?p=11627"
	},
	"modified": "2016-01-14T11:22:36",
	"modified_gmt": "2016-01-14T00:22:36",
	"slug": "the-programmable-mind",
	"type": "post",
	"link": "http:\/\/dev.upliftconnect.com\/the-programmable-mind\/",
	"title": {
		"rendered": "The Programmable Mind by Bruce Lipton"
	},
	"content": {
		"rendered": "<p>A program that can be changed. In this clip from <strong>UPLIFT2014<\/strong>, Bruce Lipton PhD, explains how the mind functions as a regulator between our beliefs and reality, making sure that the experience is coherent. This is why when we change our beliefs, we can also change our reality. Studies have shown that in ordinary waking consciousness, we are in fact, conscious only about 5% of the time. This means that 95% of our decisions and actions are actually regulated by unconscious activity. Another way of expressing that is that programming accounts for the vast majority of our actual behaviour.<\/p>\n"
	},
	"excerpt": {
		"rendered": "<p>Bruce explains how the mind functions as a regulator between our beliefs and reality, making our experience coherent. <\/p>\n"
	},
	"author": 2,
	"featured_media": 20406,
	"comment_status": "open",
	"ping_status": "open",
	"sticky": false,
	"format": "standard",
	"categories": [336, 4, 332],
	"tags": [],
	"featured_image_url": "http:\/\/dev.upliftconnect.com\/wp-content\/uploads\/2014\/12\/ProgrammableMindThumb.png",
	"_links": {
		"self": [{
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/posts\/11627"
		}],
		"collection": [{
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/posts"
		}],
		"about": [{
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/types\/post"
		}],
		"author": [{
			"embeddable": true,
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/users\/2"
		}],
		"replies": [{
			"embeddable": true,
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/comments?post=11627"
		}],
		"version-history": [{
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/posts\/11627\/revisions"
		}],
		"wp:featuredmedia": [{
			"embeddable": true,
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/media\/20406"
		}],
		"wp:attachment": [{
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/media?parent=11627"
		}],
		"wp:term": [{
			"taxonomy": "category",
			"embeddable": true,
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/categories?post=11627"
		}, {
			"taxonomy": "post_tag",
			"embeddable": true,
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/tags?post=11627"
		}],
		"curies": [{
			"name": "wp",
			"href": "https:\/\/api.w.org\/{rel}",
			"templated": true
		}]
	}
}, {
	"id": 12130,
	"date": "2015-01-26T06:37:48",
	"date_gmt": "2015-01-25T19:37:48",
	"guid": {
		"rendered": "http:\/\/dev.upliftconnect.com\/?p=12112"
	},
	"modified": "2015-08-28T13:21:25",
	"modified_gmt": "2015-08-28T03:21:25",
	"slug": "warrior-to-pilgrim-satish-kumar",
	"type": "post",
	"link": "http:\/\/dev.upliftconnect.com\/warrior-to-pilgrim-satish-kumar\/",
	"title": {
		"rendered": "Warrior to Pilgrim: Satish Kumar&#8217;s journey"
	},
	"content": {
		"rendered": "<p>As a former monk and long-term peace and environmental activist, <a href=\"http:\/\/www.upliftfestival.com\/lecture\/satish_kumar\" target=\"_blank\"><b>Satish Kumar<\/b><\/a> has been a pilgrim of positive change on the planet since a very young age. He was just nine when he left his family home in India to become a Jain Monk. At age 18, Satish read a book by Mahatma Ghandi and his life with the Jains was interrupted by a calling to flee the order and carry the message of non-violence out into the world &#8211; campaigning for land reform in India and working to turn Gandhi\u2019s vision of a renewed India and a peaceful world into reality. <\/p>\n<p>Several years later after reading a newspaper article about Bertrand Russell\u2019s civil disobedience against the atomic bomb, Satish and friend EP Menon felt similarly called to embark upon a 8,000 mile \u201cpeace walk\u201d from India to the four nuclear capitals of the world. Carrying no money and depending on the kindness and hospitality of strangers, they walked from India to America, via Moscow, London and Paris, to deliver a humble packet of \u2018peace tea\u2019 to the then leaders of the world\u2019s four nuclear powers.<\/p>\n<p>Since 1973 Satish has served as the editor of <a href=\"http:\/\/www.resurgence.org\" target=\"_blank\">Resurgence<\/a> magazine, during which time he has been the guiding spirit behind a number of now internationally-respected ecological and educational ventures including <a href=\"http:\/\/schumachercollege.org.uk\/\" target=\"_blank\">Schumacher College<\/a> in South Devon where he is still a Visiting Fellow.<\/p>\n<p>At the 2014 UPLIFT Festival, Satish shared a powerful glimpse into his life, his approach to service and his steps as a pilgrim on the path of positive change. The following are excerpts from a panel discussion titled \u201cOneness in Action\u201d.<\/p>\n<h3>UPLIFT: What does it mean to be of service and how have you experienced service as a empowering path to a new world?<\/h3>\n<p><strong>Satish:<\/strong> Service, in a way, is the outcome of the spirit. Without spirit you cannot have service. When we listen to Bruce Lipton he speaks to us of Science, Spirit and Service. We are the embodiment of these three aspects. Our science is in our thinking. Our spirit is in our heart. With our hands we serve.<\/p>\n<p>But how do you manifest that science that is in your head? How do manifest that love and spirit in your heart? Only through service. Through science you know the harmony of the world. Through spirit you experience the harmony of the world.\u00a0 And through hands, you express that harmony in the world.\u00a0 These three concepts are a continuum. We need to know. We need to feel. And we need to make. We are the makers. We are the creators. And we can be of service every moment.<\/p>\n<p>I don\u2019t like fighting, even for peace. The metaphor of a warrior is for me an old story. Pilgrim is the story that I love. We are all pilgrims and when you act from the position of a pilgrim &#8211; not from a position of anxiety, anguish or anger, but a position of love and service and unity \u2013 then you radiate. And your action radiates.<\/p>\n<p>And a radiator doesn\u2019t go and shout, \u201cCome! I will warm you.\u201d Those who are called will come to the radiator. The radiator will attract you. Ghandi is a radiator.\u00a0 Martin Luther King is a radiator. They radiate that love, that energy, that compassion, that unity. They have no enemies.<\/p>\n<p>We are all together and our job is to be healers. Not fighters, but healers. So our actions come from the strength and resilient position of compassion. Buddha was an activist. Jesus was an activist. Ghandi, Martin Luther King, these are our heroes and they all <i>acted<\/i> from that position of love and compassion.<\/p>\n<h3>Satish Kumar explains that despite the world&#8217;s many problems and challenges, it is actually Love that sustains life.<\/h3>\n<p>A pilgrim is an activist. An activist is an optimist. Without optimism, there is no true activism. Without hope there is no activism. For me there is no tension between activism and optimism. We are all pilgrims.<\/p>\n<p>As an example, I have been editing the magazine Resurgence for the last 41 years in England and during this time I had two children and I wondered where am I going to send them for education? I didn\u2019t want to send my children simply to be programmed and conditioned, so in a very natural way, without any big fan fare, I decided to start a small school. I called it the Small School.<\/p>\n<p>I called a meeting in my village and 30 people came to my house. And I said, \u201cI want to start a small school for my two children. Is anybody else interested?\u201d And to my delight and surprise, parents of nine children said, \u201cIf you are going to start a school we will send our children to your school, because we don\u2019t want our children to be programmed and conditioned in the mainstream system either.\u201d Can you imagine? I, an Indian in this very conservative Devon English countryside, and all these parents said, \u201cWe will send our children to your school.\u201d So that happened. And I was not doing it. I was just acting in service of something that was coming through me. I was being the hand of some Divine power.<\/p>\n<p>One day, years later, I was talking to the trusties of Dartington Hall and they said they had an empty building and I said, \u201cWhat are you going to do with this empty building?\u201d And they said, \u201cWe don\u2019t know what to do with it. We are looking for someone to rent it perhaps\u2026 a tenant.\u201d I said, \u201cI know what you should do. You should start a college. All the universities are brainwashing people to be instruments of the capitalist system. We need education for ecological, spiritual, holistic science.\u201d And so that\u2019s how the\u00a0<a href=\"http:\/\/schumachercollege.org.uk\/\" target=\"_blank\">Schumacher College<\/a> started.<\/p>\n<p>And so service\u2026 it\u2019s a kind of offering ourselves. Making ourselves available. It\u2019s happening through us, not from us. Like Kalil Kabran said, <strong>\u201cChildren come through you. not from you. They are not your children. They are life\u2019s longing for itself.\u201d<\/strong> So, the Small School, the Shumacher College, Resurgence, ORGANIC INDIA, they are <em>life\u2019s longing for itself<\/em>.\u00a0They come through us.<\/p>\n<div class=\"upl-in-post-image-full\"><img title=\"Barbara Marx Hubbard and Satish Kumar share a moment at UPLIFT 2014\" src=\"http:\/\/dev.upliftconnect.com\/wp-content\/uploads\/2015\/08\/warrior-pilgrim-satish_barbara.jpg\" alt=\"Barbara Marx Hubbard and Satish Kumar share a moment at UPLIFT 2014\" \/><em>Barbara Marx Hubbard and Satish Kumar share a moment at UPLIFT 2014<\/em><\/div>\n<p>In the same way, this UPLIFT movement is coming through this wonderful group of people. All of YOU.\u00a0 You are being the instrument of making this wonderful great movement around the world.<\/p>\n<p><strong><em>So let us be that instrument. That occasion.\u00a0That little excuse for Divine to move through us. That is how I act. I am not a fighter. I am a pilgrim and things happen through me. We all are pilgrims on this path of transformation and transcendence.<\/em><\/strong><\/p>\n"
	},
	"excerpt": {
		"rendered": "<p>What does it mean to live a path of service? As a former monk and peace activist, Satish Kumar found pilgrimage was his form of activism.<\/p>\n"
	},
	"author": 9,
	"featured_media": 17013,
	"comment_status": "open",
	"ping_status": "open",
	"sticky": false,
	"format": "standard",
	"categories": [336, 4, 328],
	"tags": [],
	"featured_image_url": "http:\/\/dev.upliftconnect.com\/wp-content\/uploads\/2015\/08\/warrior-pilgrim-satish_feature.jpg",
	"_links": {
		"self": [{
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/posts\/12130"
		}],
		"collection": [{
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/posts"
		}],
		"about": [{
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/types\/post"
		}],
		"author": [{
			"embeddable": true,
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/users\/9"
		}],
		"replies": [{
			"embeddable": true,
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/comments?post=12130"
		}],
		"version-history": [{
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/posts\/12130\/revisions"
		}],
		"wp:featuredmedia": [{
			"embeddable": true,
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/media\/17013"
		}],
		"wp:attachment": [{
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/media?parent=12130"
		}],
		"wp:term": [{
			"taxonomy": "category",
			"embeddable": true,
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/categories?post=12130"
		}, {
			"taxonomy": "post_tag",
			"embeddable": true,
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/tags?post=12130"
		}],
		"curies": [{
			"name": "wp",
			"href": "https:\/\/api.w.org\/{rel}",
			"templated": true
		}]
	}
}, {
	"id": 12814,
	"date": "2015-03-13T12:51:04",
	"date_gmt": "2015-03-13T01:51:04",
	"guid": {
		"rendered": "http:\/\/dev.upliftconnect.com\/?p=12814"
	},
	"modified": "2015-08-24T17:22:36",
	"modified_gmt": "2015-08-24T07:22:36",
	"slug": "thank-water-for-life",
	"type": "post",
	"link": "http:\/\/dev.upliftconnect.com\/thank-water-for-life\/",
	"title": {
		"rendered": "Grandma Agnes Baker Pilgrim: Thank Water for Life"
	},
	"content": {
		"rendered": "<p>Honored as a \u201cLiving Treasure\u201d by her tribe, the <a href=\"http:\/\/www.ctsi.nsn.us\">Confederated Tribes of Siletz<\/a>, and as a \u201cLiving Cultural Legend\u201d by the Oregon Council of the Arts, <a href=\"http:\/\/www.upliftfestival.com\/lecture\/grandma_agnes_baker_pilgrim\" target=\"_blank\">Grandmother Agnes Baker-Pilgrim<\/a> (or \u201cGrandma Aggie\u201d as she is affectionately known) is an Ambassador for Mother Earth who has touched the lives of people from many lands, helping us remember sacred ways of living that we came here to share as people of the Earth.<\/p>\n<p><strong>The following is a message from Grandma Aggie to the world, in the lead up to <a href=\"http:\/\/unify.org\/\" target=\"_blank\">World Water Day\u00a02015<\/a>:<\/strong><\/p>\n<p>I\u2019ve been talking about Water around the world for about 15 years.<\/p>\n<p>The Creator called upon me to be a Voice for the Voiceless and for a long time I didn\u2019t know what that meant. \u00a0But then I hit upon that one of those, that needs our voice, is Water.<\/p>\n<p>And spirit said, all humans came from water in the amniotic sac of our mother\u2019s womb and that Water is our first medicine. We are to take care of it and guard it . Not just for now but for seven generations to come in the unborn.<\/p>\n<p>Water is very sacred. We are all born in water. We have an obligation to take care of it.<\/p>\n<p>75% of our bodies are made of water. There\u2019s water in our blood, water in our tears, water in our spit, \u00a0and water in our brain. The brain has zillions of cells and each one needs to be coated with water.\u00a0 The elements that are in good water are what we need to oil our joints. If you\u2019re an elder like me you listen, so you can have those elements flowing through your body.<\/p>\n<div class=\"upl-in-post-image-full\"><img title=\"Grandma Agnes Love Water Quote\" src=\"http:\/\/dev.upliftconnect.com\/wp-content\/uploads\/2015\/08\/grandma-agnes-water_quote.jpg\" alt=\"Grandma Agnes Love Water Quote\" \/><\/div>\n<p>And I found out water can hear. So talk to the water inside of you and thank it for your life. When I use water &#8212; whether I\u2019m\u00a0 drinking it or cooking with it, taking a shower, washing my hands, washing my clothes, brushing my teeth of flushing the toilet&#8230; Wherever I use water, I bless it.<\/p>\n<p>I believe that if you do a ritual with water every morning and thank it for your life &#8211; even if you do that for two weeks &#8211; you will find a difference in your body.<\/p>\n<p>Here\u00a0 I am going on 90 years. Water keeps me agile and strong and well because when I drink my water I tell it, \u201cI love you! Do whatever you need to do to take care of my body. You know your job and I will always bless you.\u201d<\/p>\n<p>When I\u2019m standing in the shower, \u201cBless me. I love you.\u201d<\/p>\n<p>When I\u2019m driving my car over a bridge of water anywhere in the world I say, \u201cBless you water. Thank you for all that live in you and drink from your banks.\u201d And I thank it in that way.<\/p>\n<p>When I\u2019m in an airplane and I look out the window and see lakes and rivers and oceans, I bless the water. \u00a0I thank it for taking care of the habitat and the whales and all those that are out in the water. Us humans, us two-leggeds are the caretakers of this planet.\u00a0 It is our job.<\/p>\n<p>A long time ago the Beloved Creator woke me in the Dreamtime and he said, \u201cGo and be this Voice for the water.\u00a0 Tell everyplace you go about water, that it is our first medicine.\u201d<\/p>\n<p>Everybody has to take care of the water. Not for the adults so much, but for the children that are going to come after you and for the next seven generations of the unborn.<\/p>\n<p>Water should be everyone&#8217;s concern. Without water we all die. All life dies. Water is precious.<\/p>\n<p>I pray that whoever sees this, that you too will take care of your Mother Earth wherever you live and you will care for the water that surrounds you and the water that is within you.<\/p>\n<h4 style=\"text-align: center\"><span style=\"color: #000080\"><strong>Thank water for your life.<\/strong><\/span><\/h4>\n<div class=\"upl-in-post-video\"><iframe src=\"https:\/\/www.youtube.com\/embed\/N9kh179Mhig\" width=\"750\" height=\"422\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"><\/iframe><\/div>\n<p class=\"upl-in-post-video-caption\"><em>Grandma Agnes Pilgrim shares her message to the world about the precious nature of Water.<\/em><\/p>\n"
	},
	"excerpt": {
		"rendered": "<p>A Global Message and Call to Action from Grandma Agnes Baker-Pilgrim to thank Water! #LoveWater with us on March 22<\/p>\n"
	},
	"author": 2,
	"featured_media": 15923,
	"comment_status": "open",
	"ping_status": "open",
	"sticky": false,
	"format": "standard",
	"categories": [333, 4, 330],
	"tags": [],
	"featured_image_url": "http:\/\/dev.upliftconnect.com\/wp-content\/uploads\/2015\/03\/grandma-agnes-baker-pilgrim.jpg",
	"_links": {
		"self": [{
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/posts\/12814"
		}],
		"collection": [{
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/posts"
		}],
		"about": [{
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/types\/post"
		}],
		"author": [{
			"embeddable": true,
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/users\/2"
		}],
		"replies": [{
			"embeddable": true,
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/comments?post=12814"
		}],
		"version-history": [{
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/posts\/12814\/revisions"
		}],
		"wp:featuredmedia": [{
			"embeddable": true,
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/media\/15923"
		}],
		"wp:attachment": [{
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/media?parent=12814"
		}],
		"wp:term": [{
			"taxonomy": "category",
			"embeddable": true,
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/categories?post=12814"
		}, {
			"taxonomy": "post_tag",
			"embeddable": true,
			"href": "http:\/\/dev.upliftconnect.com\/wp-json\/wp\/v2\/tags?post=12814"
		}],
		"curies": [{
			"name": "wp",
			"href": "https:\/\/api.w.org\/{rel}",
			"templated": true
		}]
	}
}]