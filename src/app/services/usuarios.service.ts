import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, addDoc, getDoc, collection, collectionData, deleteDoc, doc, getDocs, setDoc, updateDoc, QueryDocumentSnapshot, SnapshotOptions } from '@angular/fire/firestore';
import { Usuario } from '../models/usuario.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  constructor(private firestore: Firestore) { }
  
  private loginState = new BehaviorSubject('');
  currentLoginState = this.loginState.asObservable();
  updateLoginState(id: string) {
    this.loginState.next(id)
  }
  
  private coleccion : CollectionReference<DocumentData> = collection(this.firestore,'usuarios');

  async guardar(usuario:Usuario,id:string) {
    //addDoc(this.coleccionPeliculas, {nombre:"It"})
    const documentoNuevo = doc(this.coleccion,id)
    usuario.id = id;
    setDoc(documentoNuevo, {...usuario});
  }
  
  traerSubscripcion(){
    const respuesta = collectionData(this.coleccion);
    const subscripcion = respuesta.subscribe((informacion) => {
      console.log(informacion);
    })
    //subscripcion.unsubscribe();
  }

  async traer(id:string){
    const respuesta = collectionData(this.coleccion);
    var documentData: DocumentData = new Document();
    const querySnapshot = await getDocs(this.coleccion);
    querySnapshot.forEach((doc) => {
      if(doc.id == id) {
        documentData = doc.data();
      }
    });
    return new Usuario(documentData['mail'], documentData['password'], documentData['nombre']);
  }

  modificar(usuario:Usuario){
    const documento = doc(this.coleccion, usuario.mail)
    updateDoc(documento, {...usuario});
  }

  eliminar(id: string){
    const documento = doc(this.coleccion, id)
    deleteDoc(documento);
  }

}
