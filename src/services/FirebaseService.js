import { firebaseDatabase } from '../utils';

class FirebaseService {
  static getDataList = (nodePath, callback) => {

    let query = firebaseDatabase.ref(nodePath);

    query.once('value', dataSnapshot => {
      let items = [];
      dataSnapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item['key'] = childSnapshot.key;
        items.push(item);
      });
      callback(items);
    });

    return query;
  };

  static pushData = (node, objToSubmit, callback) => {
    const ref = firebaseDatabase.ref(node).push();
    const id = firebaseDatabase.ref(node).push().key;
    ref.set(objToSubmit, (erro) => { callback(erro, id) });
  };

  static remove = (node, id) => {
    return firebaseDatabase.ref(node + '/' + id).remove();
  };

}

export { FirebaseService }