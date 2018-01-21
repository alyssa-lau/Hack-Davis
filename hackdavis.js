draw = function() {
    if (page_choice === "start"){
        background(207, 171, 219);
        fill(102, 8, 88);
        textSize(34);
        textAlign(CENTER,CENTER);
        text("HOME PAGE",196,28);
        textSize(19);
        text("Select an Option!", 199,61);

        //chatbot
        noStroke();
        fill(136, 204, 219);
        rect(50,105,100,100,10);
        //search
        rect(150,105,100,100,10);
        //for the forum button
        rect(250,105,100,100,10);
        //make appointment button
        rect(100,250,200,100,10);
        fill(176, 38, 189);

        //words on buttons
        text("Chatbot", 124,139);
        text("SEARCH",150,139);
        text("FORUM",250,139);
        text("Make Appointment",100,298);
    }

    //coding the make appointments button
      if (mouseIsPressed && mouseX>100 && mouseX<300 && mouseY>250 && mouseY<350){
          page_choice = "instructions";
          background(207, 171, 219);
          textSize(25);
          fill(80, 15, 133);
          textAlign(CENTER,CENTER);
          text("Instructions Page ",200,25);
          image(getImage("avatars/mr-pants-with-hat"), 135, 167,150,150);
          textSize(16);
          textAlign(LEFT,CENTER);
          text(" 1. Use the arrow keys to control player movements \n     and WASD to control Player 2 movements \n 2. Avoid running into the walls or your own Tron cycle. \n 3. Don't run into the pink asteroids! \n 4. Experiment and train to beat the computer! \n 5. Have a blast!", 6,102);
          text("Click restart to return to home screen",68,350);
      }
      //coding the chatbot button
      if (mouseIsPressed && mouseX>75 && mouseX<175 && mouseY>105 && mouseY<205){
          page_choice = "one";
          background(0,0,0);
      }
      //coding the search button
      if (mouseIsPressed && mouseX>150 && mouseX<250 && mouseY>105 && mouseY<205){
      page_choice = "two";
      background(0,0,0);
      }
      //coding the forum button
      if (mouseIsPressed && mouseX>250 && mouseX<350 && mouseY>105 && mouseY<205){
      page_choice = "two";
      background(0,0,0);
      }
    //one player choice
    if (page_choice === "one"){
        background(0,0,0)
    }
    //two player choice
    if (page_choice === "two"){
        background(100,100,100)
    }
};

fill(100,200,150);
rect(75,105,100,100);
if (mouseIsPressed && mouseX>75 && mouseX<175 && mouseY>105 && mouseY<205){
    background(0,0,0);
}
