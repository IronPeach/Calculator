		//function of Area
			//function of Square
				function SquareA(SL){
					var a = isNaN(SL)
					if (a == true) {
						console.log("Please type a number!")
				}
					else {
						var b = SL*SL
						console.log("it's " + b + "!")
				}
				}
			//help function of SquareA
				function SquareA_Help(){
					console.log("Just type SquareA() and inside () put the side Side Length of the square, like SquareA(5) will give you 25. It's the area of your square!")

				}
			//function of Rectangle
				function RecA(W,H){
					var a = isNaN(W)
					var b = isNaN(H)
					if (a == true || b == true) {
						console.log("Please type a number!")
				}
					else {
						var three = W*H
						console.log("it's " + three + "!")
					}
				}
			//help func of rec
				function RecA_Help(){
					console.log("RecA(), put 2 number in it, first is length, and second is width. For example, RecA(3,5) will get 15, and that's the area of your Rectangle.")
				}
			//func of Triangle
				function TriA(B,H){
					var a = isNaN(B)
					var b = isNaN(H)
					if (a == true || b == true) {
						console.log("Please type a number!")
				}
					else {
						var three = (B*H)/2
						console.log("it's " + three + "!")
					}
				}
			//help func of Tri
				function TriA_Help(){
					console.log("find the Area of your  triangle, put base and Height in, for example, TriA(2,5) will give you 5, the area of the triangle.")
				}
			//func of circle_radius
				function CircleA(R){
					var a = isNaN(R)
					if (a == true) {
						console.log("Please type a number!")
				}
					else {
						var b = R*R*Math.PI
						var c = R*R
						console.log("it's " + b +

						 "(In decimal form), or it's " + c + "π!")
					}
				}
			//help func for circle
				function CircleA_Help(){
					console.log("CircleA() is for cauculating the area circle by using radius, for example, CircleA(5) will give you the out put of both decimal form and PI form of the area.")
				} 
			//fuc of Trapezoid
				function TrapezoidA(B1,B2,H){
					var a = isNaN(B1)
					var b = isNaN(B2)
					var c = isNaN(H)
					if (a == true || b == true || c == true) {
						console.log("Please type a number!")
					}
					else {
						var A = (B1 + B2 * H)/2
						console.log("it's " + A + "!")
					}
				}
			//fuc of semicircle
				function SemiCirA(r){
					a = r*r*Math.PI/2
					b = r*r/2
					console.log("It's "+a+"(in decimal form) or it's "+b+"π!")
				}
			//hfo semicir
				function SemiCirA_Help(){
					console.log("SemiCirA() can help you find the area of  your semi-circle by radius, put radius inside, SemiCirA(5) will give you answer both decimal form and PI form.")
				}