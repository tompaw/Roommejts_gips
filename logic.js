var product;
var wallType;
var width;
var height;
var amount;
var wall;
var counter = 0;
var totArea=0;
var totWidth=[];
var heightMax=0;
var products = [];
var wallTypes = [];
var widths = [];
var heights = [];
var amounts = [];
var walls = [];
var WallList=[];
var productName = [];
var productQuantity = [];

var knappAlarmProdukt = 0;
var knappAlarmWall = 0;

createMatList();


function showDropdown(i) {
    if(i == 1){
        document.getElementById("myDropdown").classList.toggle("show");
    }
    else
        document.getElementById("myDropdown2").classList.toggle("show");
}


function produktF(i)
{
    knappAlarmProdukt = 1;
    var e = document.getElementById("Produkt");

    if(i == 1){
    e.innerText = "PF 1090";
    product = "PF 1090";
    }
    else if(i == 2) {
        e.innerText = "PV 1090";
        product = "PV 1090";
    }
    else if(i == 3) {
        e.innerText = "PF 1290";
        product = "PF 1290";
    }
    else if(i == 4) {
        e.innerText = "PV 1290";
        product = "PV 1290";
    }
    else if(i == 5) {
        e.innerText = "PF 1290 (Med osb)";
        product = "PF 1290 (Med osb)";
    }
    else {
        e.innerText = "PV 1290 (Med osb)";
        product = "PV 1290 (Med osb)";
    }
   
    
    
}

function wallF(i)
{
    knappAlarmWall = 1;
    var e = document.getElementById("Wall");
    if(i == 1){
        e.innerText = "Vägg till vägg";
        wallType = "Vägg till vägg";
        }
        else if(i == 2) {
            e.innerText = "Vägg till dörr";
            wallType = "Vägg till dörr";
        }
        else if(i == 3) {
            e.innerText = "Dörr till dörr";
            wallType = "Dörr till dörr";
        }
        else if(i == 4) {
            e.innerText = "Ovanstycke dörr/GP";
            wallType = "Ovanstycke dörr/GP";
        }
        }
 function save(){
    
    width = document.getElementById("wid").value;
    height = document.getElementById("hei").value;
    amount = document.getElementById("amount").value;

    if(isNaN(width)){
        width = convertStringToDec(width);
        //document.write(width);
    }
    if(isNaN(height)){
        height = convertStringToDec(height);
    }

    // Onödig?
    if(isNaN(amount)){
        amount = convertStringToDec(amount);
    }

    if(amount == "" || width == "" || height == "" || knappAlarmProdukt != 1 || knappAlarmWall != 1)
    {
        alert("Fyll i alla fält!");
    }
    else{    
        var list = document.getElementById('test');
        
        var entry = document.createElement('li');
        entry.id = counter;

        // Ändrar färg beroende på product typ
        if(product === "PF 1090"){
            entry.style.backgroundColor = "#ffff66"; 
        }
        if(product === "PF 1290"){
            entry.style.backgroundColor = "#999900"; 
        }
        if(product === "PF 1290 (Med osb)"){
            entry.style.backgroundColor = "#23906c";
        }
        if(product === "PV 1090"){
            entry.style.backgroundColor = "#ee7600";
        }
        if(product === "PV 1290"){
            entry.style.backgroundColor = "#a65200";
        }
        if(product === "PV 1290 (Med osb)"){
            entry.style.backgroundColor = "#09ff00";
        }
        

        counter++;
        
        entry.appendChild(document.createTextNode(product+', '+wallType+', Bredd: '+width+'m, Höjd: '+height+'m, Antal: '+amount+'  '));
    
        var btn = document.createElement("Button");
        btn.innerHTML = 'Ta bort';
        entry.appendChild(btn);
        btn.addEventListener("click", function (e) {
        
        
       

        widths.splice(this.parentNode.id, 1);
        heights.splice(this.parentNode.id, 1);
        amounts.splice(this.parentNode.id, 1);
        products.splice(this.parentNode.id, 1);
        walls.splice(this.parentNode.id, 1);

        


        this.parentNode.parentNode.removeChild(this.parentNode);

           var ul = document.getElementById("test");
           var items = ul.getElementsByTagName("li");
            for (var i = 0; i < items.length; ++i) {
             items[i].id = i;
            }
            counter--;
        
       /*  var newWindow = window.open("","Test","width=300,height=300,scrollbars=1,resizable=1");
         
        newWindow .document.open();
         for(i=0; i<products.length;i++){
            newWindow.document.writeln(i+": "+products[i]+", "+walls[i]+", "+widths[i]+", "+heights[i]+", "+amounts[i]+"<br>");
         }
        newWindow.document.close();*/
     
        });
    
     
       

        list.appendChild(entry);

        widths.push(width);
        heights.push(height);
        amounts.push(amount);
        products.push(product);
        walls.push(wallType);

      /*  if(heights.length > 3){
        for(i = 0; i < heights.length;i++)
            if(isNaN(heights[i]))
             document.writeln(heights[i]+ " is not a number. <br>");

             else
                document.writeln(heights[i]+ " is a number. <br>");
        }*/
        pf1090();
    }
 }

 function pf1090()
 {

    productQuantity.fill(0);
    totWidth.fill(0);
    heightMax=0;
    for(i = 0;i < products.length;i++){
        if(heights[i]>heightMax){
            heightMax = heights[i];
        }  
            if(products[i].charAt(1) === "F"){ // PROFILFRI VÄGG
                if(walls[i] === "Vägg till vägg"){
                    productQuantity[1] += Math.round((2*widths[i])/0.9+0.49)*amounts[i]; //vitgips PF
                    productQuantity[3] += Math.round((2*widths[i]+2*heights[i])/3+0.49)*amounts[i]; // Stålskena SG-2
                    productQuantity[4] += Math.round((widths[i]/0.9)-0.49)*amounts[i];// SZ-2
                    productQuantity[7] += Math.round((4*widths[i]+2*heights[i])/3+0.49)*amounts[i];// AVT-1 0500
                    productQuantity[9] +=2*amounts[i];   //ASPV WHITE hprofil m.klack
                    productQuantity[10] +=2*amounts[i];  //ASPD NCS 0500
                    productQuantity[12] += Math.round(heights[i]/0.225)*Math.round((widths[i]/0.9)-0.49)*amounts[i];  //PFClips
                    productQuantity[13] += Math.round(heights[i]/1.2)*Math.round((widths[i]/0.9)-0.49)*amounts[i]; //SGV-2

                }
                else if(walls[i] === "Vägg till dörr"){
                    productQuantity[1] += Math.round((2*widths[i])/0.9+0.49)*amounts[i]; //vitgips PF
                    productQuantity[3] +=  Math.round((2*widths[i]+1*heights[i])/3+0.49)*amounts[i];/// Stålskena SG-2
                    productQuantity[4] += Math.round((widths[i]/0.9)-0.49)*amounts[i];// SZ-2
                    productQuantity[6] +=1*amounts[i]; //c67
                    productQuantity[7] += Math.round((4*widths[i]+2*heights[i])/3+0.49)*amounts[i];// AVT-1 0500
                    productQuantity[8] +=2*amounts[i]; //ASP WHITE hprofil u.klack
                    productQuantity[10] +=2*amounts[i];//ASPD NCS 0500
                    productQuantity[12] += Math.round(heights[i]/0.225)*Math.round((widths[i]/0.9)-0.49)*amounts[i];  //PFClips
                    productQuantity[13] += Math.round(heights[i]/1.2)*Math.round((widths[i]/0.9)-0.49)*amounts[i];// sgv-2
                }
                else if(walls[i] === "Dörr till dörr"){
                    productQuantity[1] += Math.round((2*widths[i])/0.9+0.49)*amounts[i]; //vitgips PF
                    productQuantity[3] +=  Math.round((2*widths[i])/3+0.49)*amounts[i];/// Stålskena SG-2
                    productQuantity[4] += Math.round((widths[i]/0.9)-0.49)*amounts[i];// SZ-2
                    productQuantity[6] +=2*amounts[i]; //c67
                    productQuantity[7] += Math.round((4*widths[i])/3+0.49)*amounts[i];// AVT-1 0500
                    productQuantity[8] +=4*amounts[i]; //ASP WHITE hprofil u.klack
                    productQuantity[10] +=4*amounts[i];//ASPD NCS 0500
                    productQuantity[12] += Math.round(heights[i]/0.225)*Math.round((widths[i]/0.9)-0.49)*amounts[i];  //PFClips
                    productQuantity[13] += Math.round(heights[i]/1.2)*Math.round((widths[i]/0.9)-0.49)*amounts[i];// sgv-2
                }
                else if(walls[i] === "Ovanstycke dörr/GP"){
                    productQuantity[1] +=1*amounts[i]; //vitgips PF
                    productQuantity[3] +=1*amounts[i];/// Stålskena SG-2
                    productQuantity[4] +=0;// SZ-2
                    productQuantity[6] +=0; //c67
                    productQuantity[7] += 1*amounts[i];// AVT-1 0500
                    productQuantity[8] +=1*amounts[i]; //ASP WHITE hprofil u.klack
                    productQuantity[10] +=1*amounts[i];//ASPD NCS 0500
                    productQuantity[12] += 0;  //PFClips
                    productQuantity[13] +=0;;// sgv-2
                }
                
                if(products[i] === "PF 1290"){//om Pf1290vägg
                    if(walls[i] === "Ovanstycke dörr/GP"){
                        productQuantity[2] +=1
                    }
                    else{
                        productQuantity[2] += Math.round((2*widths[i])/0.9+0.49)*amounts[i];//rågips
                    }
                    totWidth[1]+=widths[i]*amounts[i];
                }
                else if(products[i] === "PF 1290 (Med osb)"){//om Pf1290vägg med osb
                    if(walls[i] === "Ovanstycke dörr/GP"){
                        productQuantity[14] +=1
                    }
                    else{
                        productQuantity[14] += Math.round((2*widths[i])/0.9+0.49)*amounts[i];//rågips
                    }
                    totWidth[2]+=widths[i]*amounts[i];
                }
                else{//om Pf1090vägg
                    totWidth[0]+=widths[i]*amounts[i];
                }
            }


            else if(products[i].charAt(1) === "V"){ // PROFILVÄGG
                if(walls[i] === "Vägg till vägg"){
                    productQuantity[0] += Math.round((2*widths[i])/0.9+0.49)*amounts[i]; //vitgips PV
                    productQuantity[3] += Math.round((2*widths[i]+2*heights[i])/3+0.49)*amounts[i]; // Stålskena SG-2
                    productQuantity[4] += Math.round((widths[i]/0.9)-0.49)*amounts[i];// SZ-2
                    productQuantity[7] += Math.round((4*widths[i]+2*heights[i])/3+0.49)*amounts[i];// AVT-1 0500
                    productQuantity[8] += 2*Math.round((widths[i]/0.9)-0.49)*amounts[i];//ASP WHITE hprofil u.klack
                    productQuantity[9] +=2*amounts[i];   //ASPV WHITE hprofil m.klack
                    productQuantity[10] +=(2+2*Math.round((widths[i]/0.9)-0.49))*amounts[i];  //ASPD NCS 0500
                //   productQuantity[12] += Math.round(heights[i]/0.225)*Math.round((widths[i]/0.9)-0.49)*amounts[i];  //PFClips
                    productQuantity[13] += Math.round(heights[i]/1.2)*Math.round((widths[i]/0.9)-0.49)*amounts[i]; //SGV-2
                }
                else if(walls[i] === "Vägg till dörr"){
                    productQuantity[0] += Math.round((2*widths[i])/0.9+0.49)*amounts[i]; //vitgips PV
                    productQuantity[3] +=  Math.round((2*widths[i]+1*heights[i])/3+0.49)*amounts[i];/// Stålskena SG-2
                    productQuantity[4] += Math.round((widths[i]/0.9)-0.49)*amounts[i];// SZ-2
                    productQuantity[6] +=1*amounts[i]; //c67
                    productQuantity[7] += Math.round((4*widths[i]+2*heights[i])/3+0.49)*amounts[i];// AVT-1 0500
                    productQuantity[8] +=(2+2*Math.round((widths[i]/0.9)-0.49))*amounts[i]; //ASP WHITE hprofil u.klack
                    productQuantity[10] +=(2+2*Math.round((widths[i]/0.9)-0.49))*amounts[i];//ASPD NCS 0500
                // productQuantity[12] += Math.round(heights[i]/0.225)*Math.round((widths[i]/0.9)-0.49)*amounts[i];  //PFClips
                    productQuantity[13] += Math.round(heights[i]/1.2)*Math.round((widths[i]/0.9)-0.49)*amounts[i];// sgv-2
                }
                else if(walls[i] === "Dörr till dörr"){
                    productQuantity[0] += Math.round((2*widths[i])/0.9+0.49)*amounts[i]; //vitgips PF
                    productQuantity[3] +=  Math.round((2*widths[i])/3+0.49)*amounts[i];/// Stålskena SG-2
                    productQuantity[4] += Math.round((widths[i]/0.9)-0.49)*amounts[i];// SZ-2
                    productQuantity[6] +=2*amounts[i]; //c67
                    productQuantity[7] += Math.round((4*widths[i])/3+0.49)*amounts[i];// AVT-1 0500
                    productQuantity[8] +=(4+2*Math.round((widths[i]/0.9)-0.49))*amounts[i]; //ASP WHITE hprofil u.klack
                    productQuantity[10] +=(4+2*Math.round((widths[i]/0.9)-0.49))*amounts[i];//ASPD NCS 0500
                    productQuantity[12] += Math.round(heights[i]/0.225)*Math.round((widths[i]/0.9)-0.49)*amounts[i];  //PFClips
                    productQuantity[13] += Math.round(heights[i]/1.2)*Math.round((widths[i]/0.9)-0.49)*amounts[i];// sgv-2
                }
                else if(walls[i] === "Ovanstycke dörr/GP"){
                    productQuantity[1] +=1*amounts[i]; //vitgips PF
                    productQuantity[3] +=1*amounts[i];/// Stålskena SG-2
                    productQuantity[4] +=0;// SZ-2
                    productQuantity[6] +=0; //c67
                    productQuantity[7] += 1*amounts[i];// AVT-1 0500
                    productQuantity[8] +=1*amounts[i]; //ASP WHITE hprofil u.klack
                    productQuantity[10] +=1*amounts[i];//ASPD NCS 0500
                    productQuantity[12] += 0;  //PFClips
                    productQuantity[13] +=0;;// sgv-2
                }
                if(products[i] === "PV 1290"){
                    if(walls[i] === "Ovanstycke dörr/GP"){
                        productQuantity[2] +=1
                    }
                    else{
                        productQuantity[2] += Math.round((2*widths[i])/0.9+0.49)*amounts[i];//rågips
                    }
                    totWidth[4]+=(widths[i]*amounts[i]);
                }
                else if(products[i] === "PV 1290 (Med osb)"){
                    if(walls[i] === "Ovanstycke dörr/GP"){
                        productQuantity[14] +=1
                    }
                    else{
                    productQuantity[14] += Math.round((2*widths[i])/0.9+0.49)*amounts[i];//rågips
                    }
                    totWidth[5]+=(widths[i]*amounts[i]);
                }
                else{// om PV1090
                    totWidth[3]+=(widths[i]*amounts[i]);
                }
                
            }
        }
     productQuantity[11]=0;
     var totWallwidth=0;
    for(i=0; i<totWidth.length;i++){
        totWallwidth+=totWidth[i];
    }
    productQuantity[11]=Math.round((totWallwidth*heightMax/6.5)+0.49);

     for(i=0; i<productName.length;i++){
       // document.writeln(productName[i],":: ", productQuantity[i],"  ",("<br>"));
     }
     //for(i=0; i<productName.length;i++){
     //   document.writeln(productName[i],":: ", productQuantity[i],"  ",("<br>"));
     //}

     /*if(heights.length > 3){
     for(i = 0; i < heights.length;i++)
          document.writeln(heights[i]+" ");
     }*/
 }  
 function createMatList(){
   productName= [" GLB D 700","GPF D 700","13MM GYPSUMBOARD","263546 SG-2 WITH JOINT STRIP","SZ-2","SD-2","243373 C67",
                "991045 AVT-1 L.3m NCS 0500 ","ASP WHITE","324023 ASPV WHITE","324095 ASPD L.3m NCS S 0500-N ",
                "xxxxxx 50 MM MINERAL WOOL","775655 PF-CLIPS ","263559 SGV-2 L.0,9m","xxxxxx OSB Skiva"];
    WallList=["PF1090","PF1290","PF1290 m. OSB","PV1090","PV1290","PV1290 m. OSB"];
   for(i=0; i<productName.length;i++){
        productQuantity.push(0);
        //document.write("[",i,"]",":",productName[i]);
           /*
        [0]:GLB D 700 
        [1]:GPF D 700
        [2]:13MM GYPSUMBOARD
        [3]:SG-2 WITH JOINT STRIP
        [4]:SZ-2
        [5]:SD-2
        [6]:C67
        [7]:AVT-1 NCS 0500
        [8]:ASP WHITE hprofil u.klack
        [9]:ASPV WHITE hprofil m.klack
        [10]:ASPD NCS 0500
        [11]:50 MM MINERAL WOOL
        [12]:PF-CLIPS
        [13]:SGV-2
        [14]: OSB skiva
        */
   }
   for(i=0; i<6;i++){
       totWidth.push(0);
   }

 }
 function popUp(){

    //var newWindow2 = window.open("","Test","width=300,height=300,scrollbars=1,resizable=1")


   // newWindow2.document.open();
    if(heightMax<2.5){
        productName[0]="133011 GLB D 700 H.2550 NCS S 0500-N";
        productName[1]="123051 GPF D 700 H.2550 NCS S 0500-N";
        productName[2]="xxxxxx 13MM GYPSUMBOARD H.2550";
        productName[4]="263511 SZ-2 250 H.2500";
        productName[5]="263582 SD-2 270 H.2700";
        productName[8]="324011 ASP WHITE H.2500 NCS S 0500-N";
    }
    else if(heightMax<2.7){
        productName[0]="113012 GLB D 700 H.2750 NCS S 0500-N";
        productName[1]="123052 GPF D 700 H.2750 NCS S 0500-N";
          productName[2]="xxxxxx 13MM GYPSUMBOARD H.2750"; 
          productName[4]="263512 SZ-2 270 H.2700";
          productName[5]="263583 SD-2 270 H.2700";
          productName[8]="324012 ASP WHITE H.2700 NCS S 0500-N";
    }
    else if(heightMax<2.95){
        productName[0]="113013 GLB D 700 H.3000 NCS S 0500-N";
        productName[1]="123053 GPF D 700 H.3000 NCS S 0500-N";
        productName[2]="xxxxxx 13MM GYPSUMBOARD H.3000 ";
        productName[4]="263513 SZ-2 300 H.3000 ";
        productName[5]="263583 SD-2 310 H.3100 ";
        productName[8]="324013 ASP WHITE H.3000 NCS S 0500-N";
    }

    else{
        productName[0]="113015 GLB D 700 H.3300 NCS S 0500-N";
        productName[1]="123055 GPF D 700 H.3300 NCS S 0500-N";
        productName[2]="xxxxxx 13MM GYPSUMBOARD H.3300";
        productName[4]="263516 SZ-2 330 H.3300";
        productName[5]="263584 SD-2 360 H.3600";
        productName[8]="324015 ASP WHITE H.3300 NCS S 0500-N";
    }

    /*
    for(i=0; i<productName.length;i++){
        newWindow2.document.writeln(productName[i],":: ", productQuantity[i],"  ",("<br>"));
     }
     for(i=0; i<6;i++){
        if(totWidth[i]!=0){
            newWindow2.document.writeln(WallList[i],": ",totWidth[i],("<br>"));
        }
      
     }*/
     
    // newWindow2.document.writeln("Högst inmatat höjdmått: ",heightMax,("<br>")    );
    //newWindow2.document.close()

     var output = "<h2>Uträkning</h2>";
     output  += "Från DEKO: "+"<br>";
     for(i=0; i<productName.length;i++){
         if(productQuantity[i]!=0 && i!=2 && i!=11&& i!=14){
            output += productName[i]+":: "+productQuantity[i]+"  "+("<br>");
         }
        
     }
     output  += "Från Optimera: "+"<br>";
     if(productQuantity[2]!=0){
        output += productName[2]+": "+productQuantity[2]+"  "+("<br>");
     }
     if(productQuantity[11]!=0){
        output += productName[11]+": "+productQuantity[11]+"  "+("<br>");
     }
     if(productQuantity[14]!=0){
        output += productName[14]+": "+productQuantity[14]+"  "+("<br>");
     }
      output  += "Högst inmatat höjdmått: "+heightMax+"<br>";
    
     document.getElementById('calculationField').innerHTML = output;
     
    } 

    function calc(){
       // beräkna
       pf1090();
       popUp();
    }

    function convertStringToDec(number){
        var tempnbr = parseFloat(number.replace(',','.'));
        return tempnbr;
    }