
//creating an IIFE function to make our code safe such that it is invoked on the fly
(function(global){
  //defining a bmi object which gets created by invokig a function cosntructor bmi.init
   var bmi=function(height,weight)
   {
   	   return new bmi.init(height,weight);
   };
//variable used for saving hte current state of the object
   var self;
  //defining hte function constructor
    bmi.init=function(height,weight)
   {  self=this;
   	//adding properties height and weight to the bmi object by using this which points to
   	//the empty object bmi.
   	  self.height=height;
   	  self.weight=weight;
   };

  //defining the prototype of hte object bmi.Our object inherits all properties
  // of this protoype
    bmi.init.prototype={

      //creating a property which calculates the BMI.     
       calculateBmi:function(){
       
        var k=document.getElementById("h2");
        var bmiRes=(self.weight)/(Math.pow(self.height/100,2));
        k.innerHTML="Your BMI is :"+bmiRes;
        //calling a function which displays the category of weights based on 
          //the computed BMI
             self.displayCategory(bmiRes);
            },  

       displayCategory:function(bmiRes){
           	 if(bmiRes<18.5)
           	 	document.getElementsByTagName('h3')[0].innerHTML="underweight";
           	  else if(bmiRes>=18.5 && bmiRes<25)
           	 	document.getElementsByTagName('h3')[0].innerHTML="normal weight";
           	  else if(bmiRes>=25 && bmiRes<30)
           	 	document.getElementsByTagName('h3')[0].innerHTML="overerweight";
           	  else
           	 	document.getElementsByTagName('h3')[0].innerHTML="heavily overweight";

          }               
   };

   

//creating a global variable on the fly which points to the bmi object so that all js files 
 //can access it.
   global.bmiObj=bmi;
}

)(window);//passing the window object 