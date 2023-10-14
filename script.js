// class Phone {
//     constructor (brand, model, color, price, issueDate){    this.brand=brand;
//     this.model=model;
//     this.color=color;
//     this.price=price;
//     this.issueDate=issueDate;
//     }
     
//     set issueDate(value){ 
//         if(typeof value !== "number"){
//             throw new   TypeError("Must be number");
//         } else if (value  <1999 || value>2023){
//             throw new RangeError( "Date must be more then 1999  and more then 2023.");

//         } 
//         this.issueDate = value;
          
       
//     }
//     get issueDate(){
//         return this.issueDate
        
        
//     }
//     getageOfPhone(){
//         return  2023 - this.issueDate;
//     }

// }
// try{
// const copyInClass = new Phone(
//     "Samsung",
//     "SAMSUNG Galaxy S22",
//     "Phantom Black",
//     "599€",
//     2022

// )

// console.log(copyInClass);
// console.log(copyInClass.getageOfPhone());
// } catch(error){
//     console.log(error);
// }

 class RangeValidator{
    constructor(from, to){
     this.from= from;
     this.to= to;
    }
    set from(value1){
        if(typeof value1 !== "number"){
            throw new   TypeError("Must be number");
        } else if(!value1<=value2){
            throw new RangeError("must be from <= to");
        }
        this.from = value1
    }
    get from(){
        return this.from
    }
    set to(value2){
        if(typeof value2 !== "number"){
            throw new   TypeError("Must be number");
        } else if(!value1<=value2 ){
            throw new RangeError("must be from <= to");
        }
        this.to=value2
        
    }
    get to(){
        return this.to;
    }

 }
 try{
    const range1= new RangeValidator(1, 5.5);
    // const range1 = new RangeValidator(10, 5.5)
    console.log(range1);
    // range1.from= 5;
    // range1.from = 200;
    // range1.to = 80; 
    // range1.to = -55; 
    console.log(range1.from);
    console.log(range1.to);
    console.log(range1.range);
 } catch (error){
    console.log(error);
 }

