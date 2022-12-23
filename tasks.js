
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
  if(process.argv.length == 2 )
  {
h ="database.json"
  } else {
    h = process.argv[2]
  }
 read(h)
}
function read(h){
  try{
    TaskofList = JSON.parse(fs.readFileSync(h).toString());
    }
    catch(error){
      console.log('error')
    }
}
function save(h){
  try {
    fs.writeFileSync(h,JSON.stringify(TaskofList,null,3))

      } catch(error){
    console.log('error')
      }
      process.exit();
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  console.log(text.replace("\n","")  + "!".trim() . split() )
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text.trim().startsWith('hello')) {
    hello();
  }
 
  else if(text.trim().startsWith('help')){
    help();
  }
  else if(text === 'list\n'){
    list();
  }
  else if(text.split(" ")[0]=== 'add'){
    add(text);
  }
  else if(text.startsWith('remove ') ){
    remove(text)
  }
  else if(text.split(" ")[0] === 'edit'){
    if( text === `edit\n`)
     return console.log("error");
    edit(text);
  }
  else if(text.startsWith('check')){
    check(text)
  }
  else if(text.startsWith('uncheck')){
    uncheck(text)
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(){

  var fs = require("fs");
var Data = fs.readFileSync("database.json", "utf8");
var lines = Data.split("\n");
var lines = lines.map(function (line) {
  return line.split("\t");
});
  
  // console.log('hello!')
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  if(process.argv.length == 2 )
  {
r ="database.json"
  } else {
    r = process.argv[2]
  }
  save(h)






  // try {
  //   fs.writeFileSync("database.json",JSON.stringify(TaskofList,null,3))
  //     } catch(error){
  //   console.log('error')
  //     }
  
  // process.exit();
}
// function help make list of exit ,quit and help
function help(){
   //console.log("hello    :hello dear!\nhello+any :hello any!\nlist    :display list of tasks\nadd     :add task to the list\nremove      :remove element from the list\nquit or exit :exit the app\ncheck    :to check if the task is done\nuncheck      :to uncheck if the task is not done")
   console.log("hello    :hello dear!\nhello+any :hello any!\nlist    :display list of tasks\nadd     :add task to the list\nremove      :remove element from the list\nquit or exit :exit the app\ncheck    :to check if the task is done\nuncheck      :to uncheck if the task is not done")
   //console.log('the commands are: exit ,quit ,help')

}
 var TaskofList=[{task:"edit",done:true}
            ,{task:"add",done:true}
            ,{task:"remove",done:false}
            ,{task:"list",done:true}];
//var TaskofList = ["task 1", "task 2"]
// function list 
function list(){
  if(TaskofList.length === 0) {
    console.log("no tasks to do")
  }
  TaskofList.forEach((element, index) => {
    console.log(`${TaskofList.indexOf(index)+1}-[*]${index}`);
  })
}
//function add 
function add(task){
  if(!task) {
    console.error("error needs an argument")
  } else {
    task = task.replace('\n', '').trim()
    task = task.split(" ").slice(1).join(' ');
    TaskofList.push(task)
  }
}
// function remove(test){
  // if (text==="remove"){ 
  //   task = task.splice(-1)
  // }
  // if(text.slice(6).trim() == ""){
  //   NewList.shift();
  // }else {
  //   NewList.splice(parseInt(text.substring(6))-1,1)
  // }
  
    function remove(element){
      if(element === 'remove\n') {
        TaskofList.pop()
      } 
      // else if ( element === 'remove 1\n'){
      //   TaskofList.splice(0,1)

      // }
      // else if ( element === 'remove 2\n'){
      //   TaskofList.splice(1,1)

      // }
      // better remove
      else {

       removable = parseInt(removable.split(" ").slice(1).join(' '));
       TaskofList.splice(removable - 1,1);
       if(removable > TaskofList.length) console.log("number does not exist")

        // element = element.replace('\n', '').trim()
        //  element = element.split(" ").slice(1).join(' ');
        //  TaskofList.splice(parseInt(element) - 1,1)
        //  if(parseInt(element) > TaskofList.length) console.log("not available number");
       }
       
      
  
    }
    //function edit... 

    function edit(x){
      let task = x.trim().split(" ").slice(1);
      if(Number.isInteger(parseInt(task[0]))){
        TaskofList[parseInt(task[0] -1 )] = task.slice(1).join(" ");
      } else {
        task = task.join(" ");
      TaskofList[TaskofList.length -1] = task;
      }
    }
//check function
function check(text){
  if(text.slice(5).trim()==""){
    console.log("error")
  }else{
    TaskofList[parseInt(text.slice(6).trim())-1].done =true;
  }
}
//uncheck function
function uncheck(text){
  if(text.slice(7).trim()==""){
    console.log("error")
  }else{
    TaskofList[parseInt(text.slice(8).trim())-1].done =false;
  }}
// The following line starts the application
startApp("Rayan Hussein")
