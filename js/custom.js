		//js for header
	
var headerDom = document.querySelector("header");
	//console.log(headerDom);
	
	//headerDom.setAttribute("style", "padding:8px 0px;");
	headerDom.classList.add("bg-primary");
	headerDom.innerHTML+=`
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-2 mt-2 text-end">	
					<div>
						<a href="index.html">
							<img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" width="70px">
						</a>
					</div>
					<div class="relative">	
						<a href="index.html" class="text-decoration-none italic text-light text-10">Explore</a>
						<a href="index.html" class="text-decoration-none italic text-warning text-10"><b>Plus</b></a>
						<a href="index.html">
							<img src="	https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/plus-brand-bc165b.svg">
						</a>
					</div>
				</div>	
					<div class="col-md-4 mt-2">
						<div>
							
							<input type="text" placeholder="Search for Products, Brands & More" id="input" onkeyup="Filter(this.value)" class="width-100 form-control bg-light"><a class="text-warning relative-1"><i class="fa fa-search" style="font-size:20px;"></i></a>
						</div>						
					</div>
					<div class="col-md-6 mt-2">
						<ul class="list-unstyled d-flex">
							<li class=" col flex-fill dropdown">
								<button class="btn btn-light px-4 text-primary"><b>Log in</b></button>
									<ul id="dropdownList" class="list-unstyled width-100">
										
									</ul>
							</li>
							<li class=" col flex-fill mt-1">
								<a href="#" class="text-decoration-none text-light"><b>Become a Seller</b></a>
							</li>
							<li class=" dropdown col flex-fill mt-1">
								<a href="#" class="text-decoration-none text-light"><b>More</b> <i class="fa fa-angle-down"></i></a>
									<ul id="ddmoreList" class="list-unstyled">
									</ul>
								
							</li>
							<li class="col flex-fill mt-1">
								<a href="#" class="text-decoration-none text-light"><i class="fa fa-shopping-cart" style="font-size:17px"></i> <b>Cart</b></a>
							</li>
							
					</div>
				</div>
		</div>
	`;
	
	var ddContent=["New Customer?", "Sign up", "My Profile", "Flipkart Plus Zone", "Orders", "Wishlist", "Rewards", "Gift Cards" ];	
	var ddContenticon=[" ", " ", "fa fa-user", "fa fa-plus", "fa fa-first-order", "fa fa-heart", "fa fa-diamond", "fa fa-gift" ];
	var moreContent=["Notification Preference", "24x7 Customer Care", "Advertise", "Download App", " ", " ", " ", " "];
	for(var i in ddContent){
		dropdownList.innerHTML+=`<li class="py-2 border-bottom px-2"><a href="#" class="text-decoration-none"><i class="${ddContenticon[i]}"></i> ${ddContent[i]}</a></li>`
		;
		ddmoreList.innerHTML+=`<li class="py-2 border-bottom px-2"><a href="#" class="text-decoration-none">${moreContent[i]}</a></li>`;	
	}
	
					
					
					//js for nav
let navData=[
		{
			tabImg:"https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
			tabName:"Grocery",
			tabLink:"#"
		},
		{
			tabImg:"https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
			tabName:"Mobiles",
			tabLink:"#"
		},
		{
			tabName:{
				dropdown:[
					{
						tabname:"Mens Top Wear",
						tablink:"#"
					},
					{
						tabname:"Womenen Top Wear",
						tablink:"#"
					},
					{
						tabname:"Men FootWear",
						tablink:"#"
					},
					{
						tabname:"Women FootWear",
						tablink:"#"
					},
					{
						tabname:"Kids",
						tablink:"#"
					},
					{
						tabname:"Winter",
						tablink:"#"
					},
					{
						tabname:"Essential",
						tablink:"#"
					}
				]
			},
			
			
		},
		{
			tabImg:"https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
			tabName:"Electronics",
			tabLink:"#"
		},
		{
			tabImg:"https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
			tabName:"Home & Furniture",
			tabLink:"#"
		},
		{
			tabImg:"https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
			tabName:"Appliances",
			tabLink:"#"
		},
		{
			tabImg:"https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
			tabName:"Travels",
			tabLink:"#"
		},
		{
			tabImg:"https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
			tabName:"Beuty Toys & More",
			tabLink:"#"
		},
		{
			tabImg:"https://rukminim2.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100",
			tabName:"Two Wheelers",
			tabLink:"#"
		},
		
	];
	
	var navDom= document.querySelector("nav");
		navDom.innerHTML+=`<ul id="navList" class="list-unstyled d-flex"></ul>`;
		navData.forEach(function(item){
			navList.innerHTML+=`
				<li class="col">
					<div class="text-center">
						<img src="${item.tabImg}" width="80px">
						<div>		
							<a href="#" class="text-decoration-none">${item.tabName}</a>
						</div>
					</div>	
				</li>
			`;	
	});
	
	//js for dropdown
	
	var dropDownList=document.querySelectorAll("#navList>li");
		//console.log(dropDownList);
		dropDownList[1].innerHTML=`<div class="text-center">	
									<div>
										<img src="https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" width="80px">
									</div>
									<div>
										<a href="product.html" class="text-decoration-none">Mobile</a>
									</div>
								</div>`;
		//dropDownList[2].innerHTML+=`<div><a>Fashion</a></div>`;
		dropDownList[2].classList.add("dd-relative");
		dropDownList[2].innerHTML=`
								<div class="text-center">	
									<div>
										<img src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100" width="80px">
									</div>
									<div>
										<a href="#" class="text-decoration-none">Fashion</a>
									</div>
								</div>`;
		dropDownList[2].innerHTML+=`<div ">	
											<ul id="ddList" class="list-unstyled"></ul>
										</div>`;
			
				//Accesss dropdown array
			//console.log(navData[2].tabName.dropdown);
			navData[2].tabName.dropdown.forEach(function(item){
				ddList.innerHTML+=`
						<li class="width-100 py-1 ">
							<a href="#" class="text-decoration-none " >${item.tabname}</a>
						</li>
				`;
			});
			
	//js for slider

	var sliderDom = document.querySelector("slider");
		sliderDom.innerHTML+=`
			<div class="container-fluid">
		<!-- Carousel -->
				<div id="demo" class="carousel slide" data-bs-ride="carousel">

		<!-- Indicators/dots -->
			  <div class="carousel-indicators">
				<button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
				<button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
				<button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
			  </div>
  
		<!-- The slideshow/carousel -->
			  <div class="carousel-inner">
				<div class="carousel-item active">
				  <img src="		https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/18fc3bbbbd8fb921.jpg?q=50" class="d-block" style="width:100%">
				</div>
				<div class="carousel-item">
				  <img src="	https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/05adcdf765d309fd.jpg?q=50" alt="Chicago" class="d-block" style="width:100%">
				</div>
				<div class="carousel-item">
				  <img src="https://rukminim2.flixcart.com/fk-p-flap/1688/280/image/8a89ee09acc1a9e5.jpg?q=50" alt="New York" class="d-block" style="width:100%">
				</div>
			  </div>
  
	<!-- Left and right controls/icons -->
			  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
				<span class="carousel-control-prev-icon"></span>
			  </button>
			  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
				<span class="carousel-control-next-icon "></span>
			  </button>
			</div>
		</div>`;
		
	//js for article
var articleDom=document.querySelector("article");
	articleDom.innerHTML+=`
		<div class="container-fluid py-3">
			<div class="row">
				<div class="col-md-2">
					<div class="text-center">
						<div>
							<h3>Best Of Electronics</h3>
						</div>
						<div class="py-2">
							<button class="bg-primary px-2 text-light">VIEW ALL</button>
						</div>
						<div class="bg-img">
						</div>
					</div>
				</div>
				<div class="col-md-10 py-2" >
					<div class="container-fluid">
		<!-- Carousel -->
				<div id="demo" class="carousel slide" data-bs-ride="carousel">

		<!-- Indicators/dots -->
			  <div class="carousel-indicators">
				<button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
			  </div>
  
		<!-- The slideshow/carousel -->
			  <div class="carousel-inner">
				<div class="carousel-item active">
					<div class="row" id="electronics">
					</div>
				</div>
				
			  </div>
  
	<!-- Left and right controls/icons -->
			  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
				<span class="carousel-control-prev-icon"></span>
			  </button>
			  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
				<span class="carousel-control-next-icon "></span>
			  </button>
			</div>
		</div>
				</div>`;		
		
		var electronicItem=["https://rukminim2.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70", "https://rukminim2.flixcart.com/image/200/200/xif0q/power-bank/d/a/f/-original-imagky3e8yp5ebvr.jpeg?q=70", "https://rukminim2.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70", "https://rukminim2.flixcart.com/image/200/200/xif0q/monitor/9/x/a/-original-imagsatb6cbghctx.jpeg?q=70", "https://rukminim2.flixcart.com/image/200/200/xif0q/monitor/x/y/o/ls49a950uiwxxl-uwqhd-49-ls49a950uiwxxl-samsung-original-imagz8ydgfwg5en2.jpeg?q=70", "https://rukminim2.flixcart.com/image/200/200/xif0q/power-bank/d/a/f/-original-imagky3e8yp5ebvr.jpeg?q=70"	];
		
		var electronicName=["Printers", "premiumsed", "Top Mirrorless Cameras", "Moniters", "moniters", "premiumsed" ];
		var electronicprice=["Shop Now", "Shop Now", "Shop Now", "Shop Now", "Shop Now", "Shop Now",];
		var electronicModel=["HP", "Asus", "Canon", "acer", "Samsung", "MI"];
		for(var i in electronicItem){
			electronics.innerHTML+=`
				<div class="col-md-2 text-center">
					<div class="text-center p-2">	
							<div>
								<img class="height-40 "  src="${electronicItem[i]}" alt="Chicago" class="d-block" style="width:100%">
							</div>	
							<div>
								<div>
									<a>${electronicprice[i]}</a>
								</div>
								<div>
									<a>${electronicModel[i]}</a>
								</div>
							</div>
					</div>
					
				</div>
			`;
			
		};
		
		
	