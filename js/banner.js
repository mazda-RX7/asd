$("#banner").css('background-image', localStorage.getItem("#banner"));
$("#container").css('background-image', localStorage.getItem("#container"));
	$("#my-button").click(function () {
			var myData = {
		1: {
			image: "banner/banner1.jpg",
			landscape:"background/background01.jpg",

		},
		2: {
			image: "banner/banner2.jpg",
			landscape:"background/background02.jpg",

		},
		3: {
			image: "banner/banner3.jpg",
			landscape:"background/background03.jpg",

		},
		4: {
			image: "banner/banner4.jpg",
			landscape:"background/background04.jpg",

			},
		 5: {
		 	 image: "banner/banner5.jpg",
		 	 landscape:"background/background05.jpg",

		 	 },
		6: {
			image: "banner/banner6.jpg",
			landscape:"background/background06.jpg",

			},
	 7: {
		 image: "banner/banner7.jpg",
		 landscape:"background/background07.jpg",

		 },
		 8: {
			 image: "banner/banner8.jpg",
			 landscape:"background/background08.jpg",

			 },
	};
	var randomNumber = Math.floor((Math.random() * 9) + 1);
	var URL = myData[randomNumber].image;
	$("#banner").css('background-image', "url("+URL+")");
	var status = $("#banner").css('background-image');
	localStorage.setItem("#banner", status);
	var URLB = myData[randomNumber].landscape;
	$("#container").css('background-image', "url("+URLB+")");
	var status2 = $("#container").css('background-image');
	localStorage.setItem("#container", status2);
})
