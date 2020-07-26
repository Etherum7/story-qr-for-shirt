import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

{
	// Limited Scoping Very Important
	const firebaseConfig = {
		apiKey            : 'AIzaSyDKrkdNb-fTQ9mLMq_VXd_kZQ-tERUBuvw',
		authDomain        : 'story-qr-for-shirt.firebaseapp.com',
		databaseURL       : 'https://story-qr-for-shirt.firebaseio.com',
		projectId         : 'story-qr-for-shirt',
		storageBucket     : 'story-qr-for-shirt.appspot.com',
		messagingSenderId : '832429245247',
		appId             : '1:832429245247:web:69bfaa408aee18242e898a',
		measurementId     : 'G-6769LTJG6Z'
	};
	firebase.initializeApp(firebaseConfig);
}
// We will see in course
export var db = firebase.firestore();

export default firebase;
