//fisk
// nob
var product;
var wallType;
var width;
var height;
var amount;
var wall;
var counter = 0;
var totArea=0;
var products = [];
var wallTypes = [];
var widths = [];
var heights = [];
var amounts = [];
var walls = [];

var productName = [];
var productQuantity = [];
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
    produkt = document.getElementById("Produkt").innerText = "Produkt";
    wall = document.getElementById("Wall").innerText = "Väggtyp";

    if(amount == "" || width == "" || height == "" || product == "Produkt" || wall == "Väggtyp" )
    {
        alert("Fyll i alla fält!");
    }
    else{    
        var list = document.getElementById('test');

     
    
        var entry = document.createElement('li');
        entry.id = counter;

        // Ändrar färg beroende på product typ
        if(product === "PF 1090"){
            entry.style.backgroundColor = "#f18973"; 
        }
        if(product === "PF 1290"){
            entry.style.backgroundColor = "#e4b652"; 
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
        
         var newWindow = window.open("","Test","width=300,height=300,scrollbars=1,resizable=1");
         newWindow .document.open();
         for(i=0; i<products.length;i++){
            newWindow.document.writeln(i+": "+products[i]+", "+walls[i]+", "+widths[i]+", "+heights[i]+", "+amounts[i]+"<br>");
         }
        newWindow.document.close();
     
        });
    
     
       

        list.appendChild(entry);

        widths.push(width);
        heights.push(height);
        amounts.push(amount);
        products.push(product);
        walls.push(wallType);
        pf1090();
    }
 }

 function pf1090()
 {

    productQuantity.fill(0);
    for(i = 0;i < products.length;i++){
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
                productQuantity[7] += 2*amounts[i];// AVT-1 0500
                productQuantity[8] +=2*amounts[i]; //ASP WHITE hprofil u.klack
                productQuantity[10] +=2*amounts[i];//ASPD NCS 0500
                productQuantity[12] += 0;  //PFClips
                productQuantity[13] +=0;;// sgv-2
            }
            if(products[i] === "PF 1290"){
                if(walls[i] === "Ovanstycke dörr/GP"){
                    productQuantity[2] +=1
                }
                else{
                    productQuantity[2] += Math.round((2*widths[i])/0.9+0.49)*amounts[i];//rågips
                }
                
            }
            else if(products[i] === "PF 1290 (Med osb)"){
                if(walls[i] === "Ovanstycke dörr/GP"){
                    productQuantity[14] +=1
                }
                else{
                    productQuantity[14] += Math.round((2*widths[i])/0.9+0.49)*amounts[i];//rågips
                }
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
                productQuantity[7] += 2*amounts[i];// AVT-1 0500
                productQuantity[8] +=2*amounts[i]; //ASP WHITE hprofil u.klack
                productQuantity[10] +=2*amounts[i];//ASPD NCS 0500
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
                
            }
            else if(products[i] === "PV 1290 (Med osb)"){
                if(walls[i] === "Ovanstycke dörr/GP"){
                    productQuantity[14] +=1
                }
                else{
                    productQuantity[14] += Math.round((2*widths[i])/0.9+0.49)*amounts[i];//rågips
                }
            }
            
        }
     }
    
     for(i=0; i<productName.length;i++){
       // document.writeln(productName[i],":: ", productQuantity[i],"  ",("<br>"));
     }
     //for(i=0; i<productName.length;i++){
     //   document.writeln(productName[i],":: ", productQuantity[i],"  ",("<br>"));
     //}

 }
 function createMatList(){
   productName= ["GLB D 700","GPF D 700","13MM GYPSUMBOARD","SG-2 WITH JOINT STRIP","SZ-2","SD-2","C67",
                "AVT-1 NCS 0500","ASP WHITE","ASPV WHITE","ASPD NCS 0500","50 MM MINERAL WOOL","PF-CLIPS","SGV-2","OSB Skiva"];
    
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

 }
 function popUp(){

    var newWindow = window.open("","Test","width=300,height=300,scrollbars=1,resizable=1")

    //read text from textbox placed in parent window
    //var text = document.form.input.value

    //var html = "<html><head></head><body>Hello, <b>"+ text +"</b>."
    //html += "How are you today?</body></html>"


    newWindow.document.open();
    for(i=0; i<productName.length;i++){
        newWindow.document.writeln(productName[i],":: ", productQuantity[i],"  ",("<br>"));
     }
    
    newWindow .document.close()

    } 

    function calc(){
       // beräkna
       pf1090();
       popUp();
    }