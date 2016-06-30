module.exports ={
  overlay:{
    position : 'fixed',
    top : 0,
    left : 0,
    right : 0,
    bottom : 0,
    backgroundColor : 'rgba(0, 0, 0, 0.9)'
  },
  content: {
    objectFit:"contain",
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor : "black",
    border: '1px solid black',
    background : '#fff',
    borderRadius : '4px',
    outline : 'none',
    padding: '20px',
    opacity : '0',
    transition : 'opacity 0.5s'
  }
};
