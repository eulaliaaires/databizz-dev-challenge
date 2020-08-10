import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private firestore: AngularFirestore) {}
  create_NewComment(record) {
    return this.firestore.collection('Comments').add(record);
  }
  read_Comments() {
    return this.firestore
      .collection('Comments', (ref) => ref.orderBy('Created_At', 'desc'))
      .snapshotChanges();
  }
}
