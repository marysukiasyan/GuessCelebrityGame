function challenge(){

   var arrName=["Barbara Palvin",  "Alessandra Ambrosio", "Lily Aldridge", 
"Candice Swanepoel", "Sara Sampaio", "Taylor Hill", "Stella Maxwell", "Romee Strijit", "Tyra Banks"];
var arrWrongName=["Adriana Lima", "Lais Ribeiro ", "Martha Hunt", "Elsa Hosk", "Jasmine Tookes", 
"Behati Prinsloo", "Karolina Kurkova", "Mirinda Kerr", "Gisele Bundchen"];
var arrImage=["barbara.jpg", "alessandra.jpg", "lily.jpg", "candice.jpg", 
"sara.jpg", "taylor.jpg", "stella.jpg", "romee.jpg", "tyra.jpg"];

var startButton=document.getElementById("startButtonId");


var firstNameBtn=document.getElementById("nameButton");
var secondNameBtn=document.getElementById("wrongNameButton");

var count=0;


var result=0;






var rightAnswerNum=0;



startButton.addEventListener("click", function(){


    firstNameBtn.style.backgroundColor="gray";
    secondNameBtn.style.backgroundColor="gray"; 
   
    

   
    firstNameBtn.style.visibility="visible";
    secondNameBtn.style.visibility="visible";

    firstNameBtn.disabled=false;
        secondNameBtn.disabled=false;

   
    startButton.innerHTML="Next Angel";
    
    document.getElementById("img").src=arrImage[count];
    
     var rightAnswer= Math.floor(Math.random()*2+1);

     rightAnswerNum=rightAnswer;
    
    if(rightAnswer==1){
    firstNameBtn.innerHTML=arrName[count];
    secondNameBtn.innerHTML=arrWrongName[count];
    }
    if(rightAnswer==2){
    firstNameBtn.innerHTML=arrWrongName[count];
    secondNameBtn.innerHTML=arrName[count];
    }



    

    count++;

    if(count-1==arrImage.length){
        
        firstNameBtn.remove();
        secondNameBtn.remove();
        startButton.remove();
    



        if(result===0){
            
            document.getElementById("img").src="bad.jpg";
            document.getElementById("finalResult").innerHTML="Seems you aren't a VS fan at all. Here are some FS links";
          

            linkTag1=document.createElement("a");

            linkTag1.href="https://www.youtube.com/watch?v=CWlbjXwUMJI";
            linkTag1.innerHTML="VSFS 2018";
            document.getElementById("link1").appendChild(linkTag1);
            linkTag1.target="_blank";


            linkTag2=document.createElement("a");
            
            linkTag2.href="https://www.youtube.com/watch?v=FESrH3RM-8c";
            linkTag2.innerHTML="VSFS 2014";
            document.getElementById("link2").appendChild(linkTag2);
            linkTag2.target="_blank";


            linkTag3=document.createElement("a");
            
            linkTag3.href="https://www.youtube.com/watch?v=FESrH3RM-8c";
            linkTag3.innerHTML="VSFS 2006";
            document.getElementById("link3").appendChild(linkTag3);

            linkTag3.target="_blank";


        }


        if(result>=1 && result<=3){

            document.getElementById("img").src="low.jpg";
            document.getElementById("finalResult").innerHTML="Your score is too low, try to know more";




        }
        if(result>=4 && result<=6){
    
           document.getElementById("img").src="middle.jpg";
           document.getElementById("finalResult").innerHTML="Not so bad. Keep going!";
        }
        if(result>=7 && result<=9){
                
                document.getElementById("img").src="high.jpg";
                document.getElementById("finalResult").innerHTML="Congrats! Seems you are a VS top fan";

        }

    }


        console.log (result)


    
    
       
       
  
            });






            firstNameBtn.addEventListener("click", function(){
                if(rightAnswerNum==1){
                   
                    result++;
                   firstNameBtn.style.backgroundColor="green";
        
                }
                else if(rightAnswerNum==2){
                firstNameBtn.style.backgroundColor="red";
                secondNameBtn.style.backgroundColor="orange"; 
                
                 
        
            }
              
        
        
                firstNameBtn.disabled=true;
                secondNameBtn.disabled=true;
                
        
            });
        
            secondNameBtn.addEventListener("click", function(){
                if(rightAnswerNum==2){
                  
                    secondNameBtn.style.backgroundColor="green"; 
                    result++;
                }
                else if(rightAnswerNum==1){
                    firstNameBtn.style.backgroundColor="orange";
                 secondNameBtn.style.backgroundColor="red"; 
        
                }
        
                
        
                firstNameBtn.disabled=true;
                secondNameBtn.disabled=true;
            });

           

        }

        challenge();

        