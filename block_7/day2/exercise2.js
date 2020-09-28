const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const exercise1 = (lesson1,lesson2,param) => lesson2[param] = lesson1[param]

exercise1(lesson1,lesson2,'turno')
//console.log(lesson2)

// 

const exercise2 = lesson => Object.keys(lesson)

//console.log(exercise2(lesson3))

// 

const exercise3 = lesson => Object.keys(lesson).length

//console.log(exercise3(lesson3))

//

const exercise4 = lesson => Object.values(lesson)

//console.log(exercise4(lesson3))
//
const allLessons = Object.assign(this, { lesson1, lesson2, lesson3 });

//console.log(allLessons)
//

const countstudents = lessons => {
  let out = 0; 
  for(i in lessons){
    out += lessons[i].numeroEstudantes;
  }
  return out;
}

//console.log(countstudents(allLessons))
//

const getValueByNumber = (lesson,num) => Object.values(lesson)[num]

//console.log(getValueByNumber(lesson1,0));
//

const verifyPair = (lesson, key, value) => lesson[key] == value ?  true :  false

//console.log(verifyPair(lesson3, 'turno', 'noite'));
