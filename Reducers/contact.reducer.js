

export default function(contactList=[], action) {
    if(action.type === 'addcontact') {
        console.log(action)
        // création d'une copie de contacts car on ne peut pas directement modifier l'état du store
        var contactsListCopy = [...contactList]
        var contactsExist = false;

        // on va verifier si le contact existe ou pas via son email
        for (var i=0 ; i < contactsListCopy.length; i++) {
        // si l'email exist alors on renvoie true et la liste des contacts
            if (contactsListCopy[i].email === action.email) {
                contactsExist = true;
                return contactList
            }
        }
// sinon on push le contact pour mettre à jour l'état du store  en executant l'action
    if (!contactsExist) {

        contactsListCopy.push({
            name: action.name,
        firstName: action.firstName,
        email: action.email,
        company: action.company,
        });
        return contactsListCopy
    }
} else {
    return contactList;
}
    
}