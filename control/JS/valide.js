
let email = document.querySelector("#email");
let pwd   = document.querySelector("#pwd");
let tdi   = document.querySelector("#tdi");
let tri   = document.querySelector("#tri"); 
let tsm   = document.querySelector("#tsm");
let ville = document.querySelector("#ville");
let errorsMessage = document.querySelector("#message");
let reponse = document.querySelector("reponse");

/*Declaration of function Valide()*/

function valide()
{
    errorsMessage.innnrHTML="";
    errorsMessage.innerHTML="<ul>";
 if(email.value == "")
 {
     errorsMessage.innerHTML+="<li>email est obligatoire !!</li>";
 }
 else
   {
     let reg1 = new RegExp("^[^0-9][a-z0-9]{4,}@[a-z]{4,}.[a-z]{3}$","g");
     if(reg1.test(email.value)==false)
        {
            console.log('hello');
            errorsMessage.innerHTML+="<li>Format incorrect d'email :) </li>";
        }
   }

    

 
    /*verifie password*/
    if(pwd.value == "")
    {
        errorsMessage.innerHTML+="<li> vous devez saisire votre password! </li>";
    } 
    else
    {
        let reg2 = new RegExp("^[0-9]{2}[a-z]{8,}$","g");
        if(reg2.test(pwd.value)==false)
        {
            errorsMessage.innerHTML+="<li>password incorrect ex'23frkrhsb'</li>";
        }
    }
    if(tri.checked==false && tdi.checked==false && tsm.checked==false)
    {
      errorsMessage.innerHTML+="<li>vous devez au moins choise une ville !!</li>";
    }
 errorsMessage.innerHTML+="</ul>";
}