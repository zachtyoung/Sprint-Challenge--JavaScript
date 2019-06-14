// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker (attr){
//     this.length = attr.length;
//     this.width = attr.width;
//     this.height = attr.height;
//   }
  class CubeMaker{
      constructor(attr){
        this.length = attr.length;
        this.width = attr.width;
        this.height = attr.height;
      }
      volume (){ 
          return this.length * this.width * this.height 
        }
      surfaceArea (){
        const a = 2 *( this.length * this.width)
        const b = 2 *( this.length * this.height)
        const c = 2 *( this.width * this.height)
        return a+b+c
        }
  }
//Cuboid already declared in prototypes.js
//   const cuboid = new CuboidMaker({
//     length: 4,
//     width: 5,
//     height: 5
//   })
// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.