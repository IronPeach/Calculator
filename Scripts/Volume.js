		//function of Volume
			//func of cube
				function CubeV(S){
					var a = S*S*S
					console.log("It's "+a+"!")
				}
			//help func of cube
				function CubeV_Help(){
					console.log("For CubeV(), You can find volume of a cube! Ex: Cube(5) output is 125.")

				}
			//func of RecPri
				function RecPriV(L,W,H){
					a = L*W*H
					console.log("It's "+a+"!")
				}
			//help func of RecPri
				function RecPriV_Help(){
					console.log("The RecPriV() function can help you find volume of your rectanglar prisim, Ex:RecPri(2,3,4) is 24.")
				}
			//func of TriPri
				function TriPri(L,A,H){
					a = (L*A*H)/2
					console.log("It's "+a+"!")
				}
			//help func of TriPri
				function TriPriV_Help(){
					console.log("TriPriV() can help you find the Volume if a Triangler prisim, for example, TriPri(2,3,4) will get out put 12.")
				}
			//func of RecPyr
				function RecPyrV(L,W,H){
					a = (L*W*H)/3
					console.log("It's "+a+"!")
				}
			//hfo RecPyr
				function RecPyrV_Help(){
					console.log("RecPryV() is for cauculating the volume, you can use like RecPry(2,3,4) to get volume.")
				}
			//func of cyl
				function CylV(R,H){
					var a = R*R*Math.PI*H
					var b = R*R*H
					console.log("It's "+a+"(in decimal form) or it's "+b+"π!")
			//hfo cyl
				function CylV_Help(){
					console.log("CylV_Help() can help you get the volume of a Cylinder, just give it the radius and hight, like CylV(2,3)...")
				}
			//func of ball
				function SphereV(R){
					a = R*R*R*(4/3)*Math.PI
					b = a/Math.PI
					console.log("It's "+a+"(in decimal form) or it's "+b+"π!")
				}
			//hfo Sphere'
				function SphereV_Help(){
					console.log("SphereV() can help you find the Volume of a sphere, just by radius, do things like SphereV(2) to get answer...")
				}
