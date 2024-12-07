// tailwind.config.js
export const content = [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    backgroundColor: {
      'b-main': '#05070c',
      'b-ss':'#050911',
      'sss':"#080f1c",
      'br':'#4f0202',
      'bx':'#030d8e',
      'bt':'#30f30a',
      'mid':'#0f1418',
      'idf':'#002359',
      'bf':'#441935E6',
      'bv':'#110f14',
      'App':'#110e19',
      'vf':'#1e2432',
      'nav':'#02020a',
      'No':'#050505'       
    
    },
    width: {
      'w-v': '500px',
      'w-d':'900px',
      'wr':'600px',
      'wv':'760px',
      'wc':'450px',
      'wz':'400px',
      'wg':'325px',
      'wd':'310px',
      'wf':'1000px',
      'ws':'250px',
      'ww':'290px'
    },height:{
      'h-d':'400px',
      'h-v':'450px',
      'hr':'500px',
      'ht':'650px',
      'hh':'600px',
      'hw':'850px',
      'hg':'900px',
      'hk':'790px',
      'hl':'545px'
      
    },relative :{
      'lf':'300px',
      'bf':'100px',
      'yt':'900px'
    },
    colors:{
      'tt':'#ff5400',
      'tr':'#bdb7b4',
      'rr':'#cd784e',
      'wx':'#b7bcb6',
      'fg':'#dbe8e6',
      'by':'#09e0ed',
      'br':'#00ff00',
      'cr':'#282e3f',
      'vv':"#8c8b8a"
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
};
export const plugins = [];
