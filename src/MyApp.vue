<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>

import bootstrap from './vendors/bootstrap/dist/js/bootstrap.min.js';

export default {
    name: 'app',
    created: function() {
        window.hostURL = 'http://ApiExample.dev';
        window.$ = window.jQuery = require('jquery');
        window._ = require('lodash');
        window.axios = require('axios');
        window.axios.defaults.baseURL = hostURL + '/' + 'api';
    }
}
</script>

<style src="./vendors/font-awesome/css/font-awesome.min.css"></style>
<style src="./vendors/themify-icons/css/themify-icons.css"></style>
