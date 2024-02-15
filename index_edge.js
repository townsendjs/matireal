/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'background',
            type:'image',
            rect:['0%','0%','100%','100.3%','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"background.jpg",'0px','0px','100%','auto']
         },
         {
            id:'matireal_white2',
            type:'image',
            tag:'img',
            rect:['783px','643px','auto','auto','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"matireal_white.png",'0px','0px']
         },
         {
            id:'integration',
            type:'image',
            rect:['28.7%','63.3%','282px','19px','auto','auto'],
            clip:['rect(0px 282pxpx 19pxpx 0px)'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"integration%28white%29.png",'0px','0px']
         },
         {
            id:'space',
            type:'image',
            rect:['39.6%','56.4%','55px','15px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"space%28white%29.png",'0px','0px']
         },
         {
            id:'plus_3',
            type:'image',
            rect:['38.1%','56.3%','12px','12px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"plus_3%28white%29.png",'0px','0px']
         },
         {
            id:'culture',
            type:'image',
            rect:['32.3%','55.9%','64px','15px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"culture%28white%29.png",'0px','0px']
         },
         {
            id:'plus_2',
            type:'image',
            rect:['30.8%','56.3%','12px','12px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"plus_2%28white%29.png",'0px','0px']
         },
         {
            id:'resources2',
            type:'image',
            rect:['22.9%','56.4%','93px','12px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"resources%28white%29.png",'0px','0px']
         },
         {
            id:'plus_1',
            type:'image',
            rect:['21.3%','56.3%','12px','12px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"plus_1%28white%29.png",'0px','0px']
         },
         {
            id:'people',
            type:'image',
            rect:['15.7%','55.9%','63px','19px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"people%28white%29.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_plus_2}": [
            ["style", "top", '61.88%'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '29.06%'],
            ["style", "cursor", 'pointer']
         ],
         "${_culture}": [
            ["style", "top", '61.5%'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '30.63%'],
            ["style", "cursor", 'pointer']
         ],
         "${_matireal_white2}": [
            ["style", "top", '643px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", 'auto'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '783px'],
            ["style", "width", 'auto']
         ],
         "${_background}": [
            ["style", "top", '0%'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '100.25%'],
            ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
            ["style", "left", '0%'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_people}": [
            ["style", "top", '61.5%'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '13.98%'],
            ["style", "cursor", 'pointer']
         ],
         "${_space}": [
            ["style", "top", '61.88%'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '37.89%'],
            ["style", "cursor", 'pointer']
         ],
         "${_plus_3}": [
            ["style", "top", '61.88%'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '36.33%'],
            ["style", "cursor", 'pointer']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '100%'],
            ["style", "height", '100%'],
            ["style", "overflow", 'hidden']
         ],
         "${_plus_1}": [
            ["style", "top", '61.88%'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '19.61%'],
            ["style", "cursor", 'pointer']
         ],
         "${_integration}": [
            ["style", "top", '74.13%'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '30.63%'],
            ["style", "clip", [0,0,19,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_resources2}": [
            ["style", "top", '61.88%'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '21.17%'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8000,
         autoPlay: true,
         timeline: [
            { id: "eid74", tween: [ "style", "${_resources2}", "left", '21.17%', { fromValue: '21.17%'}], position: 8000, duration: 0 },
            { id: "eid73", tween: [ "style", "${_resources2}", "top", '61.88%', { fromValue: '61.88%'}], position: 8000, duration: 0 },
            { id: "eid6", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0.000000'}], position: 93, duration: 500 },
            { id: "eid80", tween: [ "style", "${_integration}", "left", '30.63%', { fromValue: '30.63%'}], position: 8000, duration: 0, easing: "easeInQuad" },
            { id: "eid83", tween: [ "style", "${_background}", "background-size", [100,'auto'], { valueTemplate: '@@0@@% @@1@@', fromValue: [100,'auto']}], position: 8000, duration: 0 },
            { id: "eid10", tween: [ "style", "${_plus_2}", "opacity", '1', { fromValue: '0.000000'}], position: 1593, duration: 500 },
            { id: "eid11", tween: [ "style", "${_culture}", "opacity", '1', { fromValue: '0.000000'}], position: 2093, duration: 500 },
            { id: "eid89", tween: [ "style", "${_matireal_white2}", "opacity", '1', { fromValue: '0.000000'}], position: 5822, duration: 2178, easing: "easeInQuad" },
            { id: "eid12", tween: [ "style", "${_plus_3}", "opacity", '1', { fromValue: '0.000000'}], position: 2593, duration: 500 },
            { id: "eid23", tween: [ "style", "${_resources2}", "opacity", '1', { fromValue: '0.000000'}], position: 1093, duration: 500 },
            { id: "eid67", tween: [ "style", "${_plus_3}", "top", '61.88%', { fromValue: '61.88%'}], position: 8000, duration: 0 },
            { id: "eid66", tween: [ "style", "${_culture}", "left", '30.63%', { fromValue: '30.63%'}], position: 8000, duration: 0 },
            { id: "eid70", tween: [ "style", "${_space}", "left", '37.89%', { fromValue: '37.89%'}], position: 8000, duration: 0 },
            { id: "eid75", tween: [ "style", "${_people}", "top", '61.5%', { fromValue: '61.5%'}], position: 8000, duration: 0 },
            { id: "eid81", tween: [ "style", "${_Stage}", "height", '100%', { fromValue: '100%'}], position: 8000, duration: 0, easing: "easeInQuad" },
            { id: "eid18", tween: [ "style", "${_integration}", "clip", [0,287,19,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,19,0]}], position: 3680, duration: 1750 },
            { id: "eid68", tween: [ "style", "${_plus_3}", "left", '36.33%', { fromValue: '36.33%'}], position: 8000, duration: 0 },
            { id: "eid65", tween: [ "style", "${_culture}", "top", '61.5%', { fromValue: '61.5%'}], position: 8000, duration: 0 },
            { id: "eid72", tween: [ "style", "${_plus_2}", "left", '29.06%', { fromValue: '29.06%'}], position: 8000, duration: 0 },
            { id: "eid63", tween: [ "style", "${_plus_1}", "top", '61.88%', { fromValue: '61.88%'}], position: 8000, duration: 0 },
            { id: "eid79", tween: [ "style", "${_integration}", "top", '74.13%', { fromValue: '74.13%'}], position: 8000, duration: 0, easing: "easeInQuad" },
            { id: "eid69", tween: [ "style", "${_space}", "top", '61.88%', { fromValue: '61.88%'}], position: 8000, duration: 0 },
            { id: "eid82", tween: [ "style", "${_background}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 8000, duration: 0 },
            { id: "eid71", tween: [ "style", "${_plus_2}", "top", '61.88%', { fromValue: '61.88%'}], position: 8000, duration: 0 },
            { id: "eid7", tween: [ "style", "${_plus_1}", "opacity", '1', { fromValue: '0.000000'}], position: 593, duration: 500 },
            { id: "eid13", tween: [ "style", "${_space}", "opacity", '1', { fromValue: '0.000000'}], position: 3093, duration: 500 },
            { id: "eid64", tween: [ "style", "${_plus_1}", "left", '19.61%', { fromValue: '19.61%'}], position: 8000, duration: 0 },
            { id: "eid76", tween: [ "style", "${_people}", "left", '13.98%', { fromValue: '13.98%'}], position: 8000, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-84954903");
