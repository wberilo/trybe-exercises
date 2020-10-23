const calculate = async () =>{
  let result = await Math.floor(new Array(10)
  .fill(1)
  .map((element) => element * Math.random() * 50)
  .map((element) => element * element)
  .reduce((acc,curr)=>acc+curr))
  if(result<8000){
    return new Array(result/2,result/3,result/5,result/10).map((element)=>Math.floor(element))
  }
  else{
    throw new Error('é mais de 8000!');
  }
}
calculate()
.then((result)=>console.log(result.reduce((prev,curr)=>prev+curr)))
.catch((error)=>console.log(error))

