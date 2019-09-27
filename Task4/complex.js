var name = "Welcome"; //Global variable

function disp_showroom()   //function to display showroom name
{
document.getElementById("showroom").innerHTML=("----------------------------------------"+name+"---------------------------------------------<br><br>");
document.getElementById("showroom").innerHTML+="Bikers of the world, welcome home to your dream bike shop The Moto Hub.<br>Find your right bike/scooter from various brands at The Moto Hub. View two<br>  wheelers on road price, colours, compare bikes";
}
disp_showroom();        


function brand(brand1,brand2,brand3) //Constructor Function
{
    this.brand1 = brand1;
    this.brand2 = brand2;
    this.brand3 = brand3;
    this.display = function (){
    document.getElementById("demo").innerHTML =`------------------------------------Available Brands----------------------------------------<br><br>` ;
    document.getElementById("demo").innerHTML+=`* Brand 1: ${this.brand1} <br> * Brand 2: ${this.brand2} <br> * Brand 3: ${this.brand3} <br><br>` ;
    document.getElementById("demo").innerHTML+=`------------------------------------------------------------------------------------------------` ;
    }
} 
const bikes = new brand("Royal Enfield","Yamaha","TVS","Bajaj","Honda") //object creation
bikes.display();
    

class Bike_showroom                                //Class
{ 
    constructor(brand,model,year,color,price,tax,insurance) 
    {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.ex_price = price;
    this.tax = tax;
    this.insurance =insurance;}
    display_bike = function ()
    {
        if(this.brand=="Royal Enfield"){
        document.getElementById("top_line1").innerHTML =`-----------------------------------Available Variants----------------------------------------<br><br>` ;    
        document.getElementById("demo1").innerHTML+=`* Brand: ${this.brand}  <br> &nbsp&nbsp Model: ${this.model} <br> &nbsp&nbsp Year: ${this.year} model <br> &nbsp&nbsp Variant:  "${this.color}"<br> &nbsp&nbsp Price: Rs.${this.ex_price}<br><br>`;
        document.getElementById("bot_line1").innerHTML=`---------------------------------------------------------------------------------------------------` ;
        }
        if(this.brand=="Yamaha")
        {
        document.getElementById("top_line2").innerHTML =`-----------------------------------Available Variants----------------------------------------<br><br>` ;        
        document.getElementById("demo2").innerHTML+=`* Brand: ${this.brand}  <br> &nbsp&nbsp Model: ${this.model} <br> &nbsp&nbsp Year: ${this.year} model <br> &nbsp&nbsp Variant:  "${this.color}"<br> &nbsp&nbsp Price: Rs.${this.ex_price}<br><br>`;
        document.getElementById("bot_line2").innerHTML=`---------------------------------------------------------------------------------------------------` ;
        }
        if(this.brand=="TVS")
        {
        document.getElementById("top_line3").innerHTML =`-----------------------------------Available Variants----------------------------------------<br><br>` ;        
        document.getElementById("demo3").innerHTML+=`* Brand: ${this.brand}  <br> &nbsp&nbsp Model: ${this.model} <br> &nbsp&nbsp Year: ${this.year} model <br> &nbsp&nbsp Variant:  "${this.color}"<br> &nbsp&nbsp Price: Rs.${this.ex_price}<br><br>`;
        document.getElementById("bot_line3").innerHTML=`---------------------------------------------------------------------------------------------------` ;
        }
    }
        
}
    Bike_showroom.prototype.calculate_onroadprice = function() //prototype
    {
        return(this.ex_price+this.tax+this.insurance);
    }
    Bike_showroom.prototype.display_onroadprice=function()
    {
    var original_price=this.calculate_onroadprice();           //encapsulation
        if(this.brand=="Royal Enfield"){
        document.getElementById("separator1").innerHTML =`------------------------------------On-Road Price----------------------------------------<br><br>` ;    
        document.getElementById("onroad1").innerHTML+=`----- The On-road price of "${this.brand}-${this.model}" model is Rs. `+ original_price+' ------<br><br>';
        document.getElementById("onroad1").innerHTML+=` Ex-showroom Price: Rs. ${this.ex_price}<br> Road Tax: Rs. ${this.tax}<br> Insurance: Rs. ${this.insurance} <br><br>`;
        }
        if(this.brand=="Yamaha")
        {
        document.getElementById("separator2").innerHTML =`------------------------------------On-Road Price----------------------------------------<br><br>` ;             
        document.getElementById("onroad2").innerHTML+=`----- The On-road price of "${this.brand}-${this.model}" model is Rs. `+ original_price+' ------<br><br>';
        document.getElementById("onroad2").innerHTML+=` Ex-showroom Price: Rs. ${this.ex_price}<br> Road Tax: Rs. ${this.tax}<br> Insurance: Rs. ${this.insurance} <br><br>`;
        }
        if(this.brand=="TVS"){ 
        document.getElementById("separator3").innerHTML =`------------------------------------On-Road Price----------------------------------------<br><br>` ;    
        document.getElementById("onroad3").innerHTML+=`----- The On-road price of "${this.brand}-${this.model}" model is Rs. `+ original_price+' ------<br><br>';
        document.getElementById("onroad3").innerHTML+=` Ex-showroom Price: Rs. ${this.ex_price}<br> Road Tax: Rs. ${this.tax}<br> Insurance: Rs. ${this.insurance} <br><br>`;
        }
    };


const bike1 = new Bike_showroom("Royal Enfield","Classic 350",2018,"Matte Black",165000,1760,10000); //instantiation

const bike2 = Object.create(bike1); //prototype inheritance

bike2.model = "Thunderbird 350X";   //Modifying Properties of bike2
bike2.year = 2019;                  //Modifying Properties of bike2
bike2.ex_price = 175000;            //Modifying Properties of bike2
bike2.color = "Whimsical White";    //Modifying Properties of bike2

const bike3 = new Bike_showroom("Yamaha","R15 v3",2019,"Dark Knight",145000,1560,9000); //instantiation

const bike4 = new Bike_showroom("TVS","Apache 4V",2019,"Matte Blue",138000,1460,8700); //instantiation


Bike_showroom.prototype.discount_price=5000;


//IIFE
const dp1=Bike_showroom.prototype.discounted_price=(function(){
    var x = bike1.ex_price-bike1.discount_price;
    //document.getElementById("discount").innerHTML+=("* The discounted price of "+bike1.brand+" "+ bike1.model+" is Rs."+" "+x+ "<br><br>");
    return x;
})();

const dp2=Bike_showroom.prototype.discounted_price=(function(){
    var x = bike2.ex_price-bike2.discount_price;
    //document.getElementById("discount").innerHTML+=("* The discounted  price of "+bike2.brand+" "+ bike2.model+" is Rs."+" "+x+ "<br><br>");
    return x;
})();

const dp3=Bike_showroom.prototype.discounted_price=(function(){
    var x = bike3.ex_price-bike3.discount_price;
    //document.getElementById("discount").innerHTML+=("* The discounted price of "+bike3.brand+" "+ bike3.model+" is Rs."+" "+x+ "<br><br>");
    return x;
})();

const dp4=Bike_showroom.prototype.discounted_price=(function(){
    var x = bike4.ex_price-bike4.discount_price;
    //document.getElementById("discount").innerHTML+=("* The discounted price of "+bike4.brand+" "+ bike4.model+" is Rs."+" "+x+ "<br><br>");
    return x;
})();

Bike_showroom.prototype.display_discountprice=function()
{
    if(this.brand=="Royal Enfield")
    {
        document.getElementById("separator1x").innerHTML =`-------------------------------------Discount Price----------------------------------------<br><br>` ;    
        document.getElementById("discount1").innerHTML+=("* The discounted price of "+bike1.brand+" "+ bike1.model+" is Rs."+" "+dp1+ "<br><br>");
        document.getElementById("discount1").innerHTML+=("* The discounted price of "+bike1.brand+" "+ bike1.model+" is Rs."+" "+dp2+ "<br><br>");
    }
    if(this.brand=="Yamaha")
    {
        document.getElementById("separator2x").innerHTML =`-------------------------------------Discount Price----------------------------------------<br><br>` ; 
        document.getElementById("discount2").innerHTML+=("* The discounted price of "+bike1.brand+" "+ bike1.model+" is Rs."+" "+dp3+ "<br><br>");
    }
    if(this.brand=="TVS")
    {
        document.getElementById("separator3x").innerHTML =`-------------------------------------Discount Price----------------------------------------<br><br>` ; 
        document.getElementById("discount3").innerHTML+=("* The discounted price of "+bike1.brand+" "+ bike1.model+" is Rs."+" "+dp4+ "<br><br>");
    }
}