let App = React.createClass({ displayName: "App",
  // initialize

  bookmarks: [
  {
    name: 'EVIDENCIAS',
    url: 'https://drive.google.com/drive/folders/1UcAP__fO8sJssfBQRyxLK0Wsjz_qWYqw?usp=sharing',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Logo_of_Google_Drive.svg/2000px-Logo_of_Google_Drive.svg.png' },

  {
    name: 'CLASSROOM',
    url: 'https://classroom.google.com/c/MjAwODUyNzc3NDEy?cjc=iue7u22',
    img: 'https://cdn.worldvectorlogo.com/logos/google-classroom.svg' },

  {
    name: 'LIBROS PACO EL CHATO',
    url: 'https://pacoelchato.org/cuarto.html',
    img: 'https://pacoelchato.org/Imagenes/logo-paco-el-chato.png' },

  {
    name: 'APRENDE EN CASA',
    url: 'https://www.youtube.com/watch?v=zDW49Z3JEWc&list=PLXePZPcIO6RMszsJgoRFo4dyRSxwdMz14',
    img: 'https://i.pinimg.com/originals/2d/2b/e2/2d2be2421911037d80f9921dc29d54c2.jpg' },

  {
    name: 'JUEGOS',
    url: 'https://boardgamearena.com/gamelist',
    img: 'https://gacetalogos.files.wordpress.com/2014/10/9-juego-de-gato.png' },

  {
    name: 'Tomato Timer',
    url: 'https://tomato-timer.com',
    img: 'http://is3.mzstatic.com/image/thumb/Purple49/v4/5d/6f/07/5d6f078f-f44f-cffd-c15d-ea8d6b56a6f1/source/1200x630bb.jpg' },

  {
    name: 'CSCE 4650',
    url: 'http://www.cse.unt.edu/~bryant/csce4650/spring2017/',
    img: 'http://j2objc.org/images/j2objc-logo.png' }],





  // template
  render: function () {

    let bookmarks = this.bookmarks.map(bookmark => {
      console.log(bookmark);
      return React.createElement(Bookmark, {
        url: bookmark.url,
        name: bookmark.name
        // img={"http://s2.googleusercontent.com/s2/favicons?domain_url=" + bookmark.url}
        , img: bookmark.img });

    });

    return (
      React.createElement("div", { className: "app" },
      bookmarks));


  } });


let Bookmark = React.createClass({ displayName: "Bookmark",
  openBookmark() {
    console.log('test');
    window.open(this.props.url, '_blank');
  },
  render() {
    return (
      React.createElement("button", { onClick: this.openBookmark, className: "bookmark" },
      React.createElement("div", { className: "bookmark--img" },
      React.createElement("img", { src: this.props.img })),


      React.createElement("label", null,
      this.props.name)));



  } });


// render component to screen
ReactDOM.render(React.createElement(App, null), document.querySelector('#app'));