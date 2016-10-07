routes.$inject = [ '$stateProvider' ];

export default function routes( $stateProvider ){
    $stateProvider
        .state( 'home', {
            url: '/',
            template: require( './home.tmpl.html' ),
            controller: 'HomeController',
            controllerAs: 'home'
        });
}
