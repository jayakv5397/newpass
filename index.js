


function random(selection,characters) {
    var pwd = [];
    password='';

    switch (selection) {
        case "Alphabets":

            console.log("working for alpha");
            for (let index = 0; index < characters; index++) {
                var num = Math.floor(Math.random()*93)+33;
            if (num>64&&num<91 | num>96&&num<123) {
                pwd.push(num);
            }
            else {
                pwd.push(Math.floor(Math.random()*26+1)+64);
            }

            
                }
            // let text = pwd.toString();
            // console.log(pwd);
            for (let index = 0; index < characters; index++) {
                let temp = String.fromCharCode(pwd[index]);
                password = password+temp;
                }
            console.log(password);
            // console.log(selection);
            $("#password").html(password);


            
            break;

        case "AlphaNumeric":

            console.log("working for alphanum");

            for (let index = 0; index < characters; index++) {
                    var num = Math.floor(Math.random()*93)+33;
                if (num>47&&num<58 | num>64&&num<91 | num>96&&num<123) {
                    pwd.push(num);
                }
                else {
                    pwd.push(Math.floor(Math.random()*26+1)+64);
                }

                
                    }
                // let text = pwd.toString();
                // console.log(pwd);
                for (let index = 0; index < characters; index++) {
                    let temp = String.fromCharCode(pwd[index]);
                    password = password+temp;
                    }
                console.log(password);
                // console.log(selection);
                $("#password").html(password);

        
            break;

        case "include-Special":

            console.log("working for special");
            for (let index = 0; index < characters; index++) {
                pwd.push(Math.floor(Math.random()*93)+33);
                    }
                // let text = pwd.toString();
                // console.log(pwd);
                for (let index = 0; index < characters; index++) {
                    let temp = String.fromCharCode(pwd[index]);
                    password = password+temp;
                    }
                console.log(password);
                // console.log(selection);
                $("#password").html(password);
        
            break;
    
        default:

            console.log("error at radio buttons");
            break;
    }



}

// random(10);

// $(".radio").click(function(){
//     var selection='';
//     selection = $('input[name="selection"]:checked')[0].attributes[1].nodeValue
//     console.log(selection);

//   });


  $(".generate").click(function(){

    selection = $('input[name="selection"]:checked')[0].attributes[1].nodeValue;

    characters=$("#test").val();
    if (characters<20) {
        random(selection,characters);
    }
    else{

        $("#password").addClass("less-size").html("Enter characters less than 20");
        $("#test").val("0")
    }
  });

