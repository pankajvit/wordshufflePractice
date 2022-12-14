({
    doInit : function(component, event, helper) { 
        let mode = component.get("v.mode");
        let column = 0;
        if(mode === "hard"){
            column = 6;
        } else if(mode === "medium"){
            column = 4;
        } else {
            column = 3;
        }
        let blockSize = 12/column;
        component.set("v.blockSize", blockSize);
        let wordsList = helper.getWords(column * column);
        component.set("v.words", wordsList);
        console.log("Words list is :"+wordsList);
        let winWord = helper.getWinWord(wordsList);
        component.set("v.winWord", winWord);
        console.log("winning word is :"+winWord);

        // reset the board
        helper.resetBoard(component);
    },

    handleBlockComponentEvent : function(component, event, helper){
        let count = component.get("v.count") + 1;
        const value = event.getParam("value");
        if(value === component.get("v.winWord")){
            // user win
            component.set("v.result", "YOU WIN !!");
            console.log("you win !!!");
            helper.disableBoard(component);
            helper.fireResultEvent("win");
        } else if(count === 3){
            // user lose
            component.set("v.result", "YOU LOOSE !!!");
            console.log("you loose !!");
            helper.disableBoard(component);
            helper.fireResultEvent("lose");
        }
        component.set("v.count", count);
    },

    reshuffleBoard : function(component, event, helper){
        const words = component.get("v.words");
        const randomizedWords = helper.randomizeArray(words);
        component.set("v.words", randomizedWords);
        helper.resetBoard(component);
    }
})