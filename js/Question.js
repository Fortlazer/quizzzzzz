class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here");
    this.input2 = createInput("Enter Correct Option number");
    this.button = createButton('Submit');
    this.button2 = createButton('Reset');
    this.question = createElement('h3');
    this.option11 = createElement('h4');
    this.option12 = createElement('h4');
    this.option13 = createElement('h4');
    this.option14 = createElement('h4');
    this.question = createElement('h3');
    this.option21 = createElement('h4');
    this.option22 = createElement('h4');
    this.option23 = createElement('h4');
    this.option24 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.button2.hide();
    this.input2.hide();
  }

  display(){

    
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    for(var i = 0 ; i <= 2 ; i++){
      var questions = ["Question- What is the most popular video game in 2022? ","Question- What is the oldest game in the answer choices? "];
      var options1 = ["1 Minecraft ","1: Fortnite"];
      var options2 = ["2 Fortnite","2 PUBG"];
      var options3 = ["3 PubG ","3 Valorant"];
      var options4 = ["4 Roblox","4 Minecraft"];
    

    this.question.html(questions[i]);
    this.question.position(150, 80);
    this.option11.html(options1[i]);
    this.option11.position(150, 100);
    this.option12.html(options2[i]);
    this.option12.position(150, 120);
    this.option13.html(options3[i]);
    this.option13.position(150, 140);
    this.option14.html(options4[i]);
    this.option14.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);
    this.button2.position(360, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
     // this.secondQuestion();
    });
  }

    this.button2.mousePressed(()=>{
      contestant.updateCount(0)
      quiz.update(0)
      var ref = database.ref("contestants")
      ref.remove()
    })
  }
  /*secondQuestion(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- What is the oldest game in the answer choices? " );
    this.question.position(150, 80);
    this.option11.html("1: Fortnite" );
    this.option11.position(150, 100);
    this.option12.html("2: PUBG" );
    this.option12.position(150, 120);
    this.option13.html("3: Valorant" );
    this.option13.position(150, 140);
    this.option14.html("4: Minecraft" );
    this.option14.position(150, 160);
    //this.input2.position(350, 230);
    //this.button.position(290, 300);
    this.button2.position(360, 300);
  }*/


}
