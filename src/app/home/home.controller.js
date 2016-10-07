
var myPrivateMethod;

export default class HomeController {
    constructor (){
        this.name = 'world';
        myPrivateMethod = () => { console.log( "Private Method" ); }
    }

    changeName(){
        this.name = 'angular-tips';
    }

    publicMethod(){
        console.log( 'Public Method' );
        myPrivateMethod();
    }
}
