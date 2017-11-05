itemBuilder.controller('itemBuilderController', function($scope, CleanHtmlService) {
    
    var itemBuilder = this;

    /* 
     * General
     */
    itemBuilder.link = "#";
    itemBuilder.srOnlyField = "sr only";
    itemBuilder.ctaText = "Call to Action";
    itemBuilder.checkMark = false;

    /* 
     * Image
     */
    itemBuilder.imageName = "howls castle.jpg";
    itemBuilder.imageAltText = "Howl's Moving Castle";
    
    /* 
     * Title
     */
    itemBuilder.titleTextRows = [
        {
            text:"Howl's Moving Castle",
            sup:"TM"
        }
    ];
    // Title Styles
    itemBuilder.titleColorClass = "";



    /* 
     * Sub Title
     */
    itemBuilder.subTitleTextRows = [
        {
            text:"Hayao Miyazaki",
            sup:"2"
        }
    ];
    // Sub Title Styles
    itemBuilder.subTitleColorClass = "";

    /* 
     * Description
     */
    itemBuilder.descriptionTextRows = [
        {
            text:"Sophie (Emily Mortimer) has an uneventful life at her late father's hat shop, but all that changes when she befriends wizard Howl (Christian Bale), who lives in a magical flying castle.",
            sup:""
        },
        {
            text:"However, the evil Witch of Waste (Lauren Bacall) takes issue with their budding relationship and casts a spell on young Sophie, which ages her prematurely. Now Howl must use all his magical talents to battle the jealous hag and return Sophie to her former youth and beauty.",
            sup:""
        }
    ];
    // Sub Title Styles
    itemBuilder.descriptionColorClass = "text-info";

    /* 
     * Functions
     */
    itemBuilder.addTextRow = function (textRowsArray) {
        textRowsArray.push({
            text:"",
            sup:"",
            clock:false
        })
    }
    itemBuilder.removeTextRow = function (textRowsArray) {
        textRowsArray.splice(-1, 1);
    }

    itemBuilder.cleanHtml = function () {
        itemBuilder.cleanedHTML = CleanHtmlService.cleanHtml();
    }
});