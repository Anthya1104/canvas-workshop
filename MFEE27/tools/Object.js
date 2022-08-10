Object 自訂物件

1. 建立 Object
    //給空的
    let obj = new Object()
    let obj = {}

    //給值
    let obj = {
      name: 'Peter',
      age: 40,
      gender: 'male',
    }

2. 如何存取? 
  [example]
    let man = {
      name: 'Peter',
      age: 40,
      gender: 'male',
      favoriteColor: ['black,','green','red'],
      car: {
        make: 'BMW',
        mode: 'X5',
        year: 2021,
      },
      retire: false,
      //ES5寫法
      // sayHello: function(){},
      // diving: function(){},

      //ES6寫法
      sayHello(){},
      diving(){},
    }

    console.log(man.name);//Peter
    man.age ---> 40
    man.diving() -----> //diving function
    man.favoriteColor[1] ----> green
        物件的陣列表示法: man['favoriteColor'][1]
    man.car.mode ------> X5
        物件的陣列表示法: man['car']['mode']

    //for-in 迴圈
    // for(let key in Object | Array){}
    for(let key in man){
      console.log(key) //印出所有的key
      console.log(man[key])//印出所有value
    }

    //console.log(key)
    // output:
    //     age
    //     gender
    //     favoriteColor
    //     car
    //     retire
    //     sayHello
    //     diving
    --------------------------------------------------------------------

    [example]
    let products = {
      10: 'Hat',
      20: 'T-shirt',
      30: 'iPhone',
      40: 'Mac Pro',
      50: 'iPad Air',
      60: 'AirPods',
    }
    console.log(products.20);//不能這樣寫 常數不能當作指向的address
    console.log(products['20']);//要這樣寫