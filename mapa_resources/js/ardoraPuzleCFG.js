//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=240; timeIni=240; timeBon=20;
var successes=0; successesMax=25; attempts=0; attemptsMax=2;
var score=0; scoreMax=1000; scoreInc=1000; scoreDec=50
var typeGame=1;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=false;
var textButtonTime="Iniciar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#80FF80"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Muy bien, ya conoces el mapa curricular de Informática"; messageTime="Debes ser mas rapido para contestar"; messageError="Verifica tu respuesta"; messageAttempts="Repasa nuevamente el mapa curricular"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var boardGame=[["0","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"]]; var imaSel=0; texSel=0;
var original="mapa_resources/media/original.jpg";
var board=[["mapa_resources/media/cGllY2UxXzE.jpg","mapa_resources/media/cGllY2UyXzE.jpg","mapa_resources/media/cGllY2UzXzE.jpg","mapa_resources/media/cGllY2U0XzE.jpg","mapa_resources/media/cGllY2U1XzE.jpg"],["mapa_resources/media/cGllY2UxXzI.jpg","mapa_resources/media/cGllY2UyXzI.jpg","mapa_resources/media/cGllY2UzXzI.jpg","mapa_resources/media/cGllY2U0XzI.jpg","mapa_resources/media/cGllY2U1XzI.jpg"],["mapa_resources/media/cGllY2UxXzM.jpg","mapa_resources/media/cGllY2UyXzM.jpg","mapa_resources/media/cGllY2UzXzM.jpg","mapa_resources/media/cGllY2U0XzM.jpg","mapa_resources/media/cGllY2U1XzM.jpg"],["mapa_resources/media/cGllY2UxXzQ.jpg","mapa_resources/media/cGllY2UyXzQ.jpg","mapa_resources/media/cGllY2UzXzQ.jpg","mapa_resources/media/cGllY2U0XzQ.jpg","mapa_resources/media/cGllY2U1XzQ.jpg"],["mapa_resources/media/cGllY2UxXzU.jpg","mapa_resources/media/cGllY2UyXzU.jpg","mapa_resources/media/cGllY2UzXzU.jpg","mapa_resources/media/cGllY2U0XzU.jpg","mapa_resources/media/cGllY2U1XzU.jpg"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[];letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="bWFwYQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
