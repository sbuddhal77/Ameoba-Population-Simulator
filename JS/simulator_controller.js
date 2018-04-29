var baby_ameoba ;
var adult_ameoba;
var k = 0.3;   //percentage of death rate

function simulateGrowth()
{

	var years = document.getElementById("years").value;
	
	
	if(years == null || years == '')
	{
			window.alert("No of years is mandatory");
	}
	
	calculatePopulation(years);
}

function init()
{
	var cur_date = new Date();
	var cur_year = cur_date.getFullYear();
	
	baby_ameoba = 1;
	adult_ameoba =0;
	
	console.log("Current Year:"+cur_year);
	var start_year = 2000;
	
	var i;
	for(i = start_year+1; i<=cur_year;i++)
	{
		var baby_temp = Math.ceil(1 * adult_ameoba);   //baby ameoba population at each passing year
		
		adult_ameoba = adult_ameoba + baby_ameoba;
		
		baby_ameoba = baby_temp;
		
		adult_ameoba = Math.ceil(adult_ameoba - (adult_ameoba*(k/100)));
		
	}
	
	 document.getElementById("adultPop").innerHTML = adult_ameoba;
	 document.getElementById("babyPop").innerHTML = baby_ameoba;
	
	 console.log("Baby Ameoba population:"+baby_ameoba);
		console.log("Adult Ameoba population:"+adult_ameoba);

}

//this function calculates current population relative to 1950 which has just one baby ameoba
window.onload = function()
{

	init();
		
	
}

function calculatePopulation(years)
{
	 
	 var i;
	 init();
	 
	 for(i =0;i<=years;i++)
	 {
		 var baby_temp = Math.ceil(1 * adult_ameoba);   //baby ameoba population at each passing year
			
			adult_ameoba = adult_ameoba + baby_ameoba;
			
			baby_ameoba = baby_temp;
			
			adult_ameoba = Math.ceil(adult_ameoba - (adult_ameoba*(k/100)));
	
	 }
	 
	 document.getElementById("adultPop").innerHTML = adult_ameoba;
	 document.getElementById("babyPop").innerHTML = baby_ameoba;
}

function Reset()
{
	
	document.getElementById("years").value = "";
	init();
}
