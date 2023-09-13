
let productItem=[
	{
		tabimg:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70",
		tabname:"SAMSUNG Galaxy F13 (Nightsky Green, 64 GB)",
		price:9499
	},
	{
		tabimg:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/t/a/c51-mzb0e6din-poco-original-imagzdzzraqzsrzc.jpeg?q=70",
		tabname:"POCO C51 (Power Black, 64 GB)  (4 GB RAM)",
		price:6499
	},
	{
		tabimg:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/j/n/-original-imags37gyajqxkgp.jpeg?q=70",
		tabname:"REDMI 12 (Moonstone Silver, 128 GB)  (4 GB RAM)",
		price:9999
	},
	{
		tabimg:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70",
		tabname:"SAMSUNG Galaxy F13 (Waterfall Blue, 64 GB)  (4 GB RAM)",
		price:19999
	},
	{
		tabimg:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70",
		tabname:"Vivo F13 (Waterfall Blue, 64 GB)  (4 GB RAM)",
		price:10000
	},
	{
		tabimg:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70",
		tabname:"Vivo A13 (Waterfall Blue, 64 GB)  (4 GB RAM)",
		price:15000
	},
	{
		tabimg:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70",
		tabname:"Vivo A13 (Waterfall Blue, 64 GB)  (4 GB RAM)",
		price:20000
	},
	{
		tabimg:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70",
		tabname:"Vivo N3 (Waterfall Blue, 64 GB)  (4 GB RAM)",
		price:30000
	},
	{
		tabimg:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70",
		tabname:"MI (Waterfall Blue, 128 GB)  (8 GB RAM)",
		price:40000
	},
		{
		tabimg:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70",
		tabname:"MI (Waterfall Black, 128 GB)  (8 GB RAM)",
		price:50000
	},
	{
		tabimg:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70",
		tabname:"MI (Waterfall Black, 228 GB)  (16 GB RAM)",
		price:60000
	},
	{
		tabimg:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70",
		tabname:"OPPO (Waterfall Black, 128 GB)  (8 GB RAM)",
		price:45000
	},
	{
		tabimg:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70",
		tabname:"Nokia (Waterfall Black, 128 GB)  (8 GB RAM)",
		price:65000
	},
		{
		tabimg:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70",
		tabname:"NOKIA (Waterfall Black, 128 GB)  (8 GB RAM)",
		price:55000
	},
	{
		tabimg:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70",
		tabname:"MI (Waterfall Black, 128 GB)  (8 GB RAM)",
		price:25000
	},
	{
		tabimg:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70",
		tabname:"MI (Waterfall Black, 128 GB)  (8 GB RAM)",
		price:15000
	},
];
	


//js for product

	var productDom=document.querySelector("#productDiv");
	productDom.innerHTML+=`
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-2 bg-white py-3">
				<div class="border-bottom">
					<h4>Filters</h4>
				</div>	
				<div class="border-bottom py-4">
					<p>CATEGORIES</p>
					<a href="#" class="text-secondary text-decoration-none">< Mobile & Accessories</a>
					<h6>Mobiles</h6>
				</div>
				<div class="border-bottom py-4">
					<h6>Price</h6>
						<div class="py-2">
							<select id="min" onchange="pricechange()">
								<option>minimum prize</option>
								<option>10000</option>
								<option>20000</option>
								<option>30000</option>
							</select>
						</div>
						<div>
							<select id="max" onchange="pricechange()">
								<option>maximum prize</option>
								<option>40000</option>
								<option>50000</option>
								<option>60000</option>
							</select>
						</div>
				</div>
				<div class="border-bottom py-4">
					<h6>Brand</h6>
					<input type="text" onkeyup="Filter(this.value)">
				</div>
			</div>
			<div class="col-md-1">
			</div>
			<div class="col-md-9	bg-white ">
				<div id="inputValue" class="">
					
				</div>
			</div>
		</div>
	</div>
`;

function Filter(t){
	//console.log(t);
	var filterData=productItem.filter(function(item){
		return item.tabname.toLowerCase().includes(t.toLowerCase()) || item.price==parseInt(t);
	});
	display(filterData);
}

function pricechange(){
		var minvalue=parseInt(min.value);
		var maxvalue=parseInt(max.value);
	var filterprice=productItem.filter(function(item){
		return item.price<=maxvalue && item.price>=minvalue;
	});
	display(filterprice);
}

function display(filterData){
		inputValue.innerHTML="";
	filterData.forEach(function(item){
		inputValue.innerHTML+=`
			<div class="row py-5">
				<div class="col-md-8">
					<div class="d-flex">
						<div>
							<img src="${item.tabimg}">
						</div>
						<div class="px-2">
							<a class="text-decoration-none" href="#"><b>${item.tabname}</b></a>
								<div class="p-2">
									<p>4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</p>
									<p>16.76 cm (6.6 inch) Full HD+ Display</p>
									<p>50MP + 5MP + 2MP | 8MP Front Camera</p>
									<p>6000 mAh Lithium Ion Battery</p>
									<p>Exynos 850 Processor</p>
								</div>
						</div>
					</div>
				</div>
				<div class="col-md-4 text-center">
					<a>₹${item.price}Rs <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"class="px-100 px-4"></a>
				</div>
			</div>
		`;
	});
	
}