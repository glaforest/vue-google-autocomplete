import Vue from 'vue';
import VueGoogleAutocomplete from './../../src/VueGoogleAutocomplete.vue';

const app = new Vue({
    el: '#app',

    components: { VueGoogleAutocomplete },

    data: {
        autocompleteText: '',
        address: ''
    },

    methods: {
        /**
         * When the location found
         * @param {Object} addressData Data of the found location
         * @param {Object} placeResultData PlaceResult object
         * @param {String} id Input container ID
         */
        getAddressData(addressData, placeResultData, id) {
            this.address = addressData;
        },

        updateAutoCompleteText(text) {
            console.log(text)
            this.autocompleteText = text
        },

        handleError(error) {
            alert(error)
        }
    }
});