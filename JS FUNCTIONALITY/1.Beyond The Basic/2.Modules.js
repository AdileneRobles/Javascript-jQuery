function Hello(name){
    
    function speak(lastName){
        console.log(name, lastName);
    }

    function firstname(){
        return name;
    }

    return {
        say: speak,
        firstname: firstname
    };
}
var o = Hello("Kyle");
o.say("Simpson"); // Kyle Simpson
o.firstname(); //Kyle