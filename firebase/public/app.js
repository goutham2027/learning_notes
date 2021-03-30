document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    const db = firebase.firestore();

    // const productsRef = db.collection('products');
    // const query = productsRef.where('price', '>=', 10)

    // query.get()
    //     .then(products => {
    //         products.forEach(doc => {
    //             data = doc.data()
    //             document.write(`${data.name} at ${data.price} <br />`)
    //         })
    //     })

    // const myPost = db.collection('posts').doc('firstpost');

    // myPost.get()
    //     .then(doc => {
    //         const data = doc.data();
    //         document.write(data.title + `<br>`)
    //         console.log(data)
    //         document.write(data.createdAt)
    //     })

    // myPost.onSnapshot(doc => {
    //     const data = doc.data();
    //     document.write(data.title + `<br>`)
    //     console.log(data)
    //     document.write(data.createdAt)
    // })

    // myPost.onSnapshot(doc => {
    //     const data = doc.data();
    //     document.querySelector('#title').innerHTML = data.title;
    // })
});

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            document.write(`Hello ${user.displayName}`);
            document.write(`<button class="btn btn-warning">Logout</button>`)
            console.log(user);
        })
        .catch(console.log)
}

// function updatePost(e) {
//     const db = firebase.firestore();
//     const myPost = db.collection('posts').doc('firstpost');
//     myPost.update({ title: e.target.value })
// }
