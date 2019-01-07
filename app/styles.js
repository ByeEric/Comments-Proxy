// Javascript styling object
// used as a sort of global style object
const styles = {
  // UI Button Component Main
  uiButton: {
    base: {
      outline:'none',
      borderRadius:'5px',
      borderWidth:'1px',
      borderColor:'#4cc1df',
      fontSize:'17px',
      fontFamily:'Raleway, sans-serif',
      transitionDuration:'0.3s',
      cursor:'pointer',
      display:'inline-block',
    }, 
    primary: {
      display:'inline-block',
      ":hover": {
        backgroundColor:'#4cc1df',
        color:'white'
      },
    },
  },
  // UI Button Component Div
  uiButtonDiv: {
    base: {
      margin:'5px',
      display:'inline-block'
    },
    primary: {
      display:'inline'
    }
  },
  // UI Link Component Main
  uiLink: {
    base: {
      fontSize:'14px',
      fontFamily:'Roboto, sans-serif',
      transitionDuration:'0.3s',
      cursor:'pointer',
      textDecoration:'none',
      color:'black',
      display:'inline-block',
      ":hover": {
        color:'#FF4136',
      },
    },
  },
  // UI Link Component Div
  uiLinkDiv: {
    base: {
      padding:'0%',
      margin:'0%',
    },
  },
  // price Main
  price: {
    base: {
      padding:'0%',
      margin:'0%',
      fontSize:'20px',
      fontFamily:'Roboto, sans-serif',
      color:'black',
      transitionDuration:'0.3s',
      outline:'none',
      display:'inline-block',
    },
  },
  // price Div 
  priceDiv: {
    base: {
      display:'inline-block',
      marginRight:'5px',
    },
  },
  // Title Main - wrapper for animal info
  titleDiv: {
    base: {
      margin:'10px',
    },
  },
  // disclaimer Main
  disclaimer: {
    base: {
      fontFamily:'Thasadith, sans-serif',
      fontSize:'14px',
      fontWeigth:'500',
      width:'70%',
      margin:'10px',
    },
  },
  // disclaimer Div
  disclaimerDiv: {
    base: {
      margin:'10px',
      width:'80%',
      fontFamily:'Thasadith, sans-serif',
      fontWeigth:'200',
    },
  },
  // Options Main
  options: {
    base: {
      border:'none',
      outline:'none',
      fontSize:'16px',
      fontStyle:'italic',
      padding:'2px',
      display:'inline-block',
      ":hover": {
        color:'#4cc1df',
      },
    },
  },
  // back button
  back:{
    base:{
      cursor:'pointer',
      height:'30px',
      margin:'3px',
      transitionDuration:'0.2s',
      color:'black',
      fontSize:'28px',
      display:'inline-block',
      ":hover": {
        color:'#FF4136',
      },
    }
  },
  // div wrapper
  div: {
    base: {
      margin:'10px',
      padding:'0%'
    }
  },
  info: {
    base: {
      fontFamily:'Raleway, sans-serif',
      margin:'0px 0px 0px 10px',
      fontSize:'12px',
      display:'inline-block',
      animationFillMode:'forwards',
      animationIterationCount:'1',
    }
  },
  infoDiv: {
    base: {
      margin:'0px',
      padding:'0px'
    }
  },
  petInfo: {
    base: {
      display:'inline-block'
    }
  },
  purchase: {
    base: {
      marginTop:'50px',
      display:'inline-block',
      width:'30%',
      height:'100%',
    }
  },
  logo: {
    base: {
      display:'block',
      marginLeft:'auto',
      marginRight:'auto',
      padding:'0%',
      width:'20%'
    }
  },
  petImageDiv: {
    base: {
      marginLeft:'10%',
      display:'inline',
    }
  },
  petImage: {
    base: {
      display:'inline-block',
      borderRadius:'20px',
    }
  },
  description: {
    base: {
      width:'50%',
      marginTop:'20px',
      marginLeft:'15%',
      fontFamily:'Raleway, sans-serif',
      fontSize:'14px',
      display:'inline-block',
    },
    primary: {
      display:'inline-block',
      float:'left',
      width:'70%',
      height:'100%',
    }
  },
  product: {
    base: {
      marginTop:'30px',
      marginBottom:'100px',
    }
  }
}

export default styles;
