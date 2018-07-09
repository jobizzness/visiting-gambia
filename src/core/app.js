
window.__VG_APP__ = window.__VG_APP__ || new class {

    get firebaseConfig() {
        return {
            apiKey: "AIzaSyCo-dZOVaM_ZzNgbTNxptrPnSB086hZMgo",
            authDomain: "reminiscebyro-b534f.firebaseapp.com",
            databaseURL: "https://reminiscebyro-b534f.firebaseio.com",
            projectId: "reminiscebyro-b534f",
            storageBucket: "reminiscebyro-b534f.appspot.com",
            messagingSenderId: "644416860629"
        }
    }

    constructor() {
        console.log('App is created')
        //this.firebase = this._initializeFirebase(this.firebaseConfig);
    }

    // _initializeFirebase(config) {
    //     return firebaseApp.initializeApp(config);
    // }

}();

// We are exporting firebase app
export const firebase = () => {
    return window.__VG_APP__.firebase.firebase_;
}


//Export remi app or something
//this is one useless comment
export const VGApp = window.__VG_APP__;