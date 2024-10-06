// let arr=[12,2,4,,1,5,6,78,12,5]
// let data=  arr.filter((a)=>{
//   return a>3
// })
// console.log(data);


//  let sum = arr.reduce((a,b,c,d)=>{
//   return a+b

// })
// console.log(sum

// );



// let odd=  arr.filter((a,b,c)=>{
//   // console.log();
//   return a%2==0

// })
// console.log(odd);

// arr.forEach(   (a,b,c)=>{
//   console.log(a*5);
//   return a


// })
// console.log(data);

//  let data=  arr.map((a,b,c)=>{
//   // console.log(b);
//   return a


// })
// console.log(data);

// for(let i of arr){
//   console.log(i);

// }
// for(let i in arr){
//   console.log(i);

// }

// setTimeout(()=>{
//   console.log('one');
// },2000)

// console.log('two');
// setTimeout(()=>{
//   console.log('three');
// },1000)



// function step1(fn){
//   console.log(fn);

//   setTimeout(()=>{
//     console.log('select ');
//     fn()

//   },3000)
// }

// function step2(fn){
//   setTimeout(()=>{
//     console.log('filterr');
//     fn()

//   },4000)
// }
// function step3(fn){
//   setTimeout(()=>{
//     console.log('captionsss ');
//     fn()

//   },2000)
// }
// function step4(){
//   setTimeout(()=>{
//     console.log('posttt ');

//   },1000)
// }

// step1( ()=>{
//   step2(()=>{
//     step3()

//   })
// }
//   )


// const array = [1, 3, 65, 43, 23, 76, 27, 83]

// array.forEach((a, b, c) => {
  // console.log(a);
  // console.log(b);
  // console.log(c);
//   console.log(a);
// });

// array.filter((a, b, c) => {
  // console.log(a);
  // console.log(b);
  // console.log(c);
//   console.log(a);
// });

// array.map((a, b, c) => {
  // console.log(a);
  // console.log(b);
  // console.log(c);
//   console.log(a);
// });

// let promise=   new Promise((res,rej)=>{
//   let barish=false
//   if(barish){
//     res()
//   }
// else{
//   rej()
// }


// })
// promise.then(()=>{
//   console.log('wada pura huaaa');
  
// })
// .catch(()=>{
//   console.log('errr');
  
// })




// fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>{
//   return res.json()

// }).then((data)=>{
//   console.log(data);
  

// })


//  async function api(){
//   try{
//     let data=     await   fetch('https://nplaceholder.typicode.com/todos')
//     // console.log(data);
//     let res=    await data.json()
//     console.log(res);
//   }
//   catch(err){
//     console.log('errrr',err);
    
//   }

      

      

// }
// api()



// function sum(a,b,c,...num){
//   console.log(num[1]+num[5]);
  

// }
// sum(2,3,4,4,5,6,7,8,9,10)


// let arr=[1,2,3,4,5,6,7]
// let num=[1,2,3,3,4,...arr]
// console.log(num);



// let arr=[1,2,3,4,5,5]
// let [a,b,...c]=arr
// console.log(c);

// console.log(arr[0]);

// let obj={
//   name:"rahul",
//   id:1
// }
// // console.log(obj.name);
// let {name}=obj
// console.log(name);

