var expression="";

var arrexp=[];
var temparr="";
var indarrexp=0;
var braces=0;
var mapping=new Map([["AC","one"],["(","two"],[")","three"],["÷","four"],["7","five"],["8","six"],["9","seven"],["*","eight"],["4","nine"],["5","ten"],["6","eleven"],["-","twelve"],["1","thirteen"],["2","fourteen"],["3","fifteen"],["+","sixteen"],["0","seventeen"],[".","eighteen"],["←","nineteen"],["=","twenty"]]);
var mappingkeypress=new Map([["AC","one"],["(","two"],[")","three"],["/","four"],["7","five"],["8","six"],["9","seven"],["*","eight"],["4","nine"],["5","ten"],["6","eleven"],["-","twelve"],["1","thirteen"],["2","fourteen"],["3","fifteen"],["+","sixteen"],["0","seventeen"],[".","eighteen"],["Backspace","nineteen"],["Enter","twenty"],["=","twenty"]]);

$(".keys").on("mousedown",function(){
    var clickedkey=this.innerText;
    var selector=mapping.get(clickedkey);
    
    $("#"+selector).addClass("fade");
    $("#"+selector).addClass("style");
    
});
function reset(){
    
     expression="";
     arrexp=[];
     temparr="";
     indarrexp=0;
     braces=0;
    
    $(".expression").text("0");
    $(".answer").text("");
}
$(".keys").on("mouseup",function(){
    var clickedkey=this.innerText;
    var selector=mapping.get(clickedkey);
    $(".expression").css("fontSize","3rem");
    $("#"+selector).removeClass("fade");
    $("#"+selector).removeClass("style");
   
    if(selector==="two")
      { braces++;
         expression=expression.concat("("); 
         $(".expression").text(expression);
		 if(temparr!="")
			  {arrexp[indarrexp++]=temparr;
			  temparr="";}
         arrexp[indarrexp++]="(";
      }
      else if(selector==="three")
      { braces--;
         expression=expression.concat(")"); 
         $(".expression").text(expression);
		 if(temparr!="")
			  {arrexp[indarrexp++]=temparr;
			  temparr="";}
		 arrexp[indarrexp++]=")";
	  }
    else if(selector==="one")
          reset();
    else if(selector==="twenty")
         { $(".expression").text(expression);
		 if(temparr!="")
		 {arrexp[indarrexp++]=temparr;
		 temparr="";}
          showans();}
    else if(selector==="nineteen")
           { if(expression.charAt(expression.length-1)=="(")
                braces--;
             else if(expression.charAt(expression.length-1)==")")
                braces++;
			 else if(temparr!="")
			      {temparr=temparr.slice(0,-1);}
			 else
			    arrexp[indarrexp--]=""; 
            expression=expression.slice(0,-1);
			if(expression==="")
			   reset();
            else{$(".expression").text(expression);}
		 }
    else
       { expression=expression.concat(clickedkey);
        $(".expression").text(expression);
		if(selector==="five" || selector==="six" ||selector==="seven" ||selector==="nine" ||selector==="ten" ||selector==="eleven" ||selector==="thirteen" ||selector==="fourteen" ||selector==="fifteen" ||selector==="seventeen" ||selector==="eighteen")
	     temparr=temparr.concat(clickedkey);
		else{ 
			if(temparr!="")
			  {arrexp[indarrexp++]=temparr;
			  temparr="";}
			  arrexp[indarrexp++]=clickedkey;
             }
	   }
});
$(document).on("keydown",function(event){
	var pressed=event.key;
	if(pressed==="(" ||pressed===")"||pressed==="/"||pressed==="7"||pressed==="8"||pressed==="9"||pressed==="*"||pressed==="1"||pressed==="2"||pressed==="3"||pressed==="4"||pressed==="5"||pressed==="6"||pressed==="0"||pressed==="."||pressed==="Backspace"||pressed==="="||pressed==="Enter"||pressed==="+"||pressed==="-")
	{var selector=mappingkeypress.get(event.key);
	   $(".expression").css("fontSize","3rem");
       $("#"+selector).addClass("fade");
       $("#"+selector).addClass("style"); 
	   if(selector==="two")
	   {  braces++;
		  expression=expression.concat("("); 
		  $(".expression").text(expression);
		  if(temparr!="")
			   {arrexp[indarrexp++]=temparr;
			   temparr="";}
		  arrexp[indarrexp++]="(";
	   }
	   else if(selector==="three")
	   { braces--;
		  expression=expression.concat(")"); 
		  $(".expression").text(expression);
		  if(temparr!="")
			   {arrexp[indarrexp++]=temparr;
			   temparr="";}
		  arrexp[indarrexp++]=")";
	   }
	 else if(selector==="one")
		   reset();
	 else if(selector==="twenty")
		  { $(".expression").text(expression);
		  if(temparr!="")
		  {arrexp[indarrexp++]=temparr;
		  temparr="";}
		   showans();}
	 else if(selector==="nineteen")
			{ if(expression.charAt(expression.length-1)=="(")
				 braces--;
			  else if(expression.charAt(expression.length-1)==")")
				 braces++;
			  else if(temparr!="")
				   {temparr=temparr.slice(0,-1);}
			  else
				 arrexp[indarrexp--]=""; 
			 expression=expression.slice(0,-1);
			 if(expression==="")
			 reset();
		  else{$(".expression").text(expression);}
		  }
       else if(event.key!="Shift" && event.key!="Control")
	   { expression=expression.concat(event.key);
        $(".expression").text(expression);
		if(selector==="five" || selector==="six" ||selector==="seven" ||selector==="nine" ||selector==="ten" ||selector==="eleven" ||selector==="thirteen" ||selector==="fourteen" ||selector==="fifteen" ||selector==="seventeen" ||selector==="eighteen")
	     temparr=temparr.concat(event.key);
		else{ 
			if(temparr!="")
			  {arrexp[indarrexp++]=temparr;
			  temparr="";}
			  arrexp[indarrexp++]=event.key;
             }
	   }}
})
$(document).on("keyup",function(event){
	var pressed=event.key;
	if(pressed==="(" ||pressed===")"||pressed==="/"||pressed==="7"||pressed==="8"||pressed==="9"||pressed==="*"||pressed==="1"||pressed==="2"||pressed==="3"||pressed==="4"||pressed==="5"||pressed==="6"||pressed==="0"||pressed==="."||pressed==="Backspace"||pressed==="="||pressed==="Enter"||pressed==="+"||pressed==="-")
    {var selector=mappingkeypress.get(event.key);
    $("#"+selector).removeClass("fade");
    $("#"+selector).removeClass("style");  } 
})

function showans()
 { if(braces!=0)
     $(".answer").text("invalid expression");

    else {
		var expressionpostfix=[];
		  expressionpostfix=InfixtoPostfix(arrexp);
         var ans=evaluatePostfix(expressionpostfix);
		$(".expression").css("fontSize","1rem");
        $(".answer").text(ans); }
   
 }

 //infix to postfix convertor

  // Created an empty array
var stackarr = [];

// Variable topp initialized with -1
var topp = -1;

// Push function for pushing
// elements inside stack
function push(e) {
	topp++;
	stackarr[topp] = e;
}

// Pop function for returning top element
function pop() {
	if (topp == -1)
		return 0;
	else {
		var popped_ele = stackarr[topp];
		topp--;
		return popped_ele;
	}
}

// Function to check whether the passed
// character is operator or not
function operator(op) {
	if (op == '+' || op == '-' ||
		op == '^' || op == '*' ||
		op == '/' || op == '(' ||
		op == ')'|| op=='÷') {
		return true;
	}
	else
		return false;
}

// Function to return the precedency of operator
function precedency(pre) {
	if (pre == '@' || pre == '(' || pre == ')') {
		return 1;
	}
	else if (pre == '+' || pre == '-') {
		return 2;
	}
	else if (pre == '/' || pre == '*' || pre=='÷') {
		return 3;
	}
	else if (pre == '^') {
		return 4;
	}
	else
		return 0;
}

// Function to convert Infix to Postfix
function InfixtoPostfix(infixval) {
   console.log(infixval);
	// Postfix array created
	var postfix = [];
	var temp = 0;
	push('@');
	

	// Iterate on infix string
	for (var i = 0; i < infixval.length; i++) {
		var el = infixval[i];

		// Checking whether operator or not
		if (operator(el)) {
			if (el == ')') {
				while (stackarr[topp] != "(") {
					postfix[temp++] = pop();
				}
				pop();
			}

			// Checking whether el is ( or not
			else if (el == '(') {
				push(el);
			}

			// Comparing precedency of el and
			// stackarr[topp]
			else if (precedency(el) > precedency(stackarr[topp])) {
				push(el);
				
			}
			else {
				while (precedency(el) <=
					precedency(stackarr[topp]) && topp > -1) {
					postfix[temp++] = pop();
				}
				push(el);
			}
		}
		else {
			postfix[temp++] = el;
		}
	}

	// Adding character until stackarr[topp] is @
	while (stackarr[topp] != '@') {
		postfix[temp++] = pop();
	}
    console.log(postfix);
	return postfix;
}



//postfix evaluator

function evaluatePostfix(exp)
{   
	//create a stack
		var stack=[];
		
		// Scan all characters one by one
		for(let i=0;i<exp.length;i++)
		{
			var c=exp[i];
			
			// If the scanned character is an operand (number here),
			// push it to the stack.
			if(! isNaN( parseInt(c) ))
			stack.push(parseInt(c));
			
			// If the scanned character is an operator, pop two
			// elements from stack apply the operator
			else
			{
				let val1 = stack.pop();
				let val2 = stack.pop();
				
				switch(c)
				{
					case '+':
					stack.push(val2+val1);
					break;
					
					case '-':
					stack.push(val2- val1);
					break;
					
					case '/':
					stack.push(val2/val1);
					break;

					case '÷':
					stack.push(val2/val1);
					break;
					
					case '*':
					stack.push(val2*val1);
					break;
			}
			}
		}
		
		return stack.pop();
}


