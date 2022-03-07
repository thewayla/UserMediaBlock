/**
 * @name UserMediaBlock
 * @version 0.0.1
 * @description Block media from selected users. 
 
 * Edit the code to add users to the blocklist. 
 * To add an user, enter their user id inside of the block() function, add multiple members by calling the block() function for each user. 
 * Example: block('193163974471188480') block('819778342818414632')
 * The script runs every 0.3 seconds, edit the interval by setting the setInterval method to your choosing by editing the number at the bottom of the code (300 by default). The interval parameter is in milliseconds. 
 * @author Wayla
 *  
 */



 module.exports = class UserMediaBlock{
     
  load() { }
  start() {


    function block(userid) {
      return setInterval(() => {
        let deleteMessages = false;
    
        [...document.getElementsByClassName('message-2CShn3')].forEach(i => {
          if(i) {
            if(i.className.match('groupStart-3Mlgv1')) {
              if(([...i.children].find(i => i.className.match('contents-2MsGLg')).children[0].src || '/1/').split('/').find(i => i.match(/^\d+$/)) === userid) {
                [...i.children].find(i => i.className.match('container-2sjPya')).style.display = 'none';
                deleteMessages = true
              } else deleteMessages = false
            } 
            else if(deleteMessages) {
              [...i.children].find(i => i.className.match('container-2sjPya')).style.display = 'none';
            }
          }
        })
    
        deleteMessages = false
      }, 200)
    }
    
    //add users to block here
    try {
      //block('');

    } catch(error){
      console.error(error);
    }
    


  }
  stop(){

  }
 }