import { 
    addArgonaute,
    collection,
    db,
    onSnapshot,
    orderBy,
    query,
} from './firebase.js'

const listArgonautes = document.querySelector('.member-item')
const newArgonaute = document.querySelector('.new-member-form')


newArgonaute.addEventListener('submit', (e) => {
    e.preventDefault()

    // console.log('submitted');
    const argonaute = newArgonaute['name']
    const idName= document.querySelector('#name').value
    // console.log(idName);

if (!idName) {

    // console.log('vide');
    alert('Par Zeus, veuillez remplir ce champ manquant si vous ne voulez pas vous retrouver dans les gêoles de Poséidon !')

} else {

    console.log(argonaute);
    console.log(argonaute.value);

    addArgonaute(argonaute.value);

    newArgonaute.reset()
    }
})

window.addEventListener('DOMContentLoaded', () => {
    // console.log('DOMContentLoaded');

    // orderBy permet d'organiser la collection argonautes par ordre alphabétique
    const q = query(collection(db, 'argonautes'), orderBy('argonaute'));

    // onSnapshot surveille les modifications de la collection argonautes et exécute une fonction de rappel chaque fois qu'un document est ajouté
    onSnapshot(q, (querySnapshot) => {

        let memberItem = ''

        querySnapshot.forEach(doc => {
            // console.log(doc.data());
            // console.log( listArgonautes);
            const member = doc.data()
            memberItem += `
                <div class="member-item">
                    ${member.argonaute}
                </div>
            `
        
            // console.log(member.argonaute);
        })
        
        listArgonautes.innerHTML = memberItem
        

    } )

})