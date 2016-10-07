import angular from 'angular';

import routing from './app.config';
import uirouter from 'angular-ui-router';

import home from './home';

export default angular
    .module( "InventarioApp", [ uirouter, home ] )
    .config( routing )
    .name;
