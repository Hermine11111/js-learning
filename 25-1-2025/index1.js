//Homework 1
// 1․ Ծրագրավորողը ստեղծել է մի օբյեկտ՝ ինչ-որ անհայտ Function Constructor-ի օգնությամբ
// const obj = new Human ("John", "Smith") Սակայն մենք գիտենք, որ այդ օբյեկտը ունի հետևյալ property-ները՝
// name: "John", 
// surname: "Smith",
// speed: 0,
// state: undefined 
// բացի դրանից, մենք գիտենք, որ չնայած այն չունի իր սեփական մեթոդները, սակայն ենթարկվում է հետևյալ մեթոդներին՝ run(speed), 
//stop (), changeState(state)
// ընդ որում, run մեթոդը օբյեկտի վրա կանչելիս և որպես արգումենտ նշելով որևէ արագություն պետք է օբյեկտի speed property-ն 
//փոխվի տրված արագության չափով և alert լինի, name-ի և speed-ի արժեքները։ Իսկ stop մեթոդի դեպքում speed property-ն նորից 
//դառնա 0 և alert լինի name-ի արժեքը և հետյալ տեքստը "is stopped", իսկ changeState մեթոդի կանչի դեպքում և որպես արգումենտ 
//նշելով որպես string որևէ կարգավիճակ, օրինակ "thinking" պետք է state property-ի արժեքը փոխվի գրված string-ով։





function Human(name, surname) {
    this.name = name;
    this.surname = surname;
    this.speed = 0;
    this.state = undefined;
  }
  
  // Adding methods to Human's prototype so they are shared by all instances
  Human.prototype.run = function(speed) {
    this.speed = speed;
    alert(`${this.name} is running at speed ${this.speed}`);
  };
  
  Human.prototype.stop = function() {
    this.speed = 0;
    alert(`${this.name} is stopped`);
  };
  
  Human.prototype.changeState = function(state) {
    this.state = state;
  };
  
  // Create a new object using the Human constructor
  const obj = new Human("John", "Smith");
  
  
  obj.run(20);         
  obj.stop();          
  obj.changeState("thinking");  


  