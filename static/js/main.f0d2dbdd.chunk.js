(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Captain Sisco",image:"https://pixel.nymag.com/imgs/daily/vulture/2018/01/04/04-deep-space-9-214.w710.h473.2x.jpg",clicked:!1},{id:2,name:"Kira Nerys",image:"https://alchetron.com/cdn/kira-nerys-eb9e894d-7032-4f38-880f-fe0ac6d9d86-resize-750.jpeg",clicked:!1},{id:3,name:"Dax",image:"http://images2.fanpop.com/images/photos/8400000/Jadzia-Dax-star-trek-deep-space-nine-8476384-1000-1165.jpg",clicked:!1},{id:4,name:"Odo",image:"http://ds9.trekcore.com/gallery/albums/5x20/childrenoftime004.jpg",clicked:!1},{id:5,name:"Dr. Bashir",image:"http://www.treknews.net/wp-content/uploads/2017/03/star-trek-ds9-bashir.jpg",clicked:!1},{id:6,name:"Quark",image:"https://scifanatic-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/armin-ds9-publicty.jpg",clicked:!1},{id:7,name:"Worf",image:"http://www.durfee.net/startrek/images/ds9484.jpg",clicked:!1},{id:8,name:"Rom",image:"https://media.wired.com/photos/59330d5b4cd5ce6f96c0c26f/master/pass/rommain.jpg",clicked:!1},{id:9,name:"Jake Sisco",image:"https://66.media.tumblr.com/a3ab3f49a9b783fa67174b46b576ed0c/tumblr_nrx9arp4dC1ryfpsio1_500.jpg",clicked:!1},{id:10,name:"Chief O'Brien",image:"https://thenerdsofcolor.files.wordpress.com/2013/09/amatterofhonor016.jpg",clicked:!1},{id:11,name:"Morn",image:"https://m.media-amazon.com/images/M/MV5BMzFkNjM5ZTItNTAzNy00NjZmLTliMjUtMTEyZDRmZDJmZWIyXkEyXkFqcGdeQXVyMzQ2MDUxMTg@._V1_.jpg",clicked:!1},{id:12,name:"Garak",image:"http://www.letswatchstartrek.com/wp-content/uploads/2013/06/Picture-72.png",clicked:!1}]},,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(3),i=a.n(r),s=a(4),o=a(5),m=a(7),l=a(6),d=a(8);a(15);var p=function(e){return n.a.createElement("div",{className:"row align-items-center nav"},n.a.createElement("span",{className:"col-12 col-md-4 nav-title"},"DS9 Clicky Game"),n.a.createElement("span",{className:"col-12 col-md-4 message"},e.message," "),n.a.createElement("span",{className:"col-12 col-md-4 scores"},"Score: ",e.currentScore," | Top Score: ",e.topScore))},u=(a(16),function(e){return n.a.createElement("div",{onClick:function(){return e.cardClick(e.id)},className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image})))});a(17);var g=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)},f=a(1),k=(a(18),function(e){function t(){var e,a;Object(s.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={friends:f,currentScore:0,topScore:0,clicked:[0],message:"Click any character to Engage"},a.cardClick=function(e){-1===a.state.clicked.indexOf(e)?(a.correctGuess(),a.setState({clicked:a.state.clicked.concat(e)})):a.wrongGuess()},a.correctGuess=function(){var e=a.state.clicked.length;a.setState({currentScore:e,message:"Excellent work ensign."}),12===e?a.setState({topScore:e,clicked:[0],message:"Congratulations, you've won!"}):e>=a.state.topScore&&a.setState({topScore:e}),a.cardShuffle()},a.wrongGuess=function(){a.setState({currentScore:0,topScore:a.state.topScore,message:"You need more training.",clicked:[0]}),a.cardShuffle()},a.cardShuffle=function(){var e=h(f);a.setState({friends:e})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(p,{message:this.state.message,currentScore:this.state.currentScore,topScore:this.state.topScore}),n.a.createElement(g,null,n.a.createElement("div",{className:"header-area"}),n.a.createElement("div",{className:"cards-area"},this.state.friends.map(function(t){return n.a.createElement(u,{cardClick:e.cardClick,id:t.id,key:t.id,image:t.image})}))))}}]),t}(c.Component)),h=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),c=[e[a],e[t]];e[t]=c[0],e[a]=c[1]}return e},w=k;a(19);i.a.render(n.a.createElement(w,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.f0d2dbdd.chunk.js.map