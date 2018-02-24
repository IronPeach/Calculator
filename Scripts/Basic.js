	//Basic calculation function
		//function of add
			function Add(one,two){
				var a = isNaN(one)
				var b = isNaN(two)
				if (a == true || b == true) {
					console.log("Please type a number!")
				}
				else {
					var three = one+two
					console.log("it's " + three + "!")
				}
			}
		//The Help function of Add()
			function Add_Help(){
				console.log("Add() can do addition for you, in the (), only put 2 numbers in, and split it with a comma, for example, do Add(2,3) and you will get a output 5.")
				console.log("P.S.:Really, if you read the direction, you won't use this function...")
			}
		//function of subtract
			function Subtract(one,two){
				var a = isNaN(one)
				var b = isNaN(two)
				if (a == true || b == true) {
					console.log("Please type a number!")
				}
				else {
					var three = one-two
					console.log("it's " + three + "!")
				}
			}
		//The Help function of Subtract()
			function Subtract_Help(){
				console.log("In the Subtract() function, the way to use it is real easy, the first number is the number that is gonna been subtract, and second number is how many number you want to reduce. For example, Subtract(5,2) means 5 - 2, and the output will be 3, because 5 - 2 = 3")
			}
		//function of mutiply
			function Multiply(one,two){
				var a = isNaN(one)
				var b = isNaN(two)
				if (a == true || b == true) {
					console.log("Please type a number!")
				}
				else {
					var three = one*two
					console.log("it's " + three + "!")
				}
			}
		//The Help function of multiply
			function Multiply_Help(){
				console.log("This function just multiply those two number for you, for example, Multiply(3,5) will give you 15.")
			}
		//function of divide
			function Divide(one,two){
				var a = isNaN(one)
				var b = isNaN(two)
				if (a == true || b == true) {
					console.log("Please type a number!")
				}
				else {
					var three = one/two
					console.log("it's " + three + "!")
				}
			}
		//The Help function of divide
			function Divide_Help(){
				console.log("In the Divide(), it do division for you, for example, Divide(15,3) would give you 5.")
			}