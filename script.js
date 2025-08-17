(() =>{

    //1.Nan= Not a number
    // if(NaN * 1 === NaN){
    //     console.log('Equal');
    // }

    // const result = 1/'hello'
    // //เป็นฟังก์ชันที่ใช้หาว่า ค่านี้เท่ากับ NaN หรือเปล่า เพราะใน JAVA NaN=! ตัวมันเอง
    // if(Number.isNaN(result))
    // console.log('Equal to NaN');
    //2.Type Coercion การบังคับ การแปลง type ในภาษา JAVA
      if(3>2>1){
        //ถ้าพิม true > 1 = true=1 มันจะแปลงอัติโนมัติ
        console.log('Inside');
      }
      console.log(2-'1'); //2=number, 1=string แต่java แปลงให้ 1เป็นnumber ผลลัพท์เลยเท่ากับ1
      console.log(2+'1'); //number+stringแปลงเป็น string+string = 21 ไม่งั้นต้องใช้ (2+Number.parseInt('1',10));
      console.log(true+true); //trueโดนแปลงเป็น1มันเลยกลายเป็น = 1+1 =2
    //3.Interpreter & Compiler
    function getPerson(){
        //ถ้าไม่ใช่ { เปิดด้านหลัง return java จะใส่ ; ให้เราทันที ผลลัพท์จะ=undefine และถ้าเราไม่ใส่ ; javascript engine จะใส่ให้เราอัติโนมัติ
        return{
            name:'Chalothorn'

        };
    }
        console.log(getPerson());
    

    //4.Checking Object Type
    //ถึงจะใช้ถามว่า null เป็น object ไหม มันก็จะบอกว่าใช่
    //ถ้าอยากรุ้ว่าค่า null ไม่ใช่ object ต้องเพิ่มเงื่อนไขว่า person ต้องไม่ใช่null(ถึงจะเป็น object)
    const person ={};
    if (typeof person=== 'object' && person !==null){
        console.log('Yes, object');
    }
})();