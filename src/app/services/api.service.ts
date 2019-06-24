import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public afs: AngularFirestore) { }
  /* Creating New User  */
  createUser(id: any, data: any) {
    return this.afs.doc('users/' + id).set(data);
  }

  getUser(id: any) {
    return this.afs.doc('users/' + id).valueChanges();
  }

  updateUser(id: any, data: any) {
    return this.afs.doc('users/' + id).update(data);
  }

  deleteUser(id: any) {
    return this.afs.doc('users/' + id).delete();
  }

  // Employeer OR Organization

  // getCompany() {
  //   return this.afs.collection('users', ref => ref.where('type', '==', 'EMPLOYER')).snapshotChanges();
  // }

  getAllEmployer() {
    return this.afs.collection('employer').snapshotChanges();
  }

  createEmployer(id: any, data: any) {
    return this.afs.doc('employer/' + id).set(data);
  }

  getEmployerData(id: any) {
    return this.afs.doc('employer/' + id).valueChanges();
  }

  updateEmployerData(id: any, data: any) {
    return this.afs.doc('employer/' + id).update(data);
  }
  deleteEmployer(id: any) {
    return this.afs.doc('employer/' + id).delete();
  }

  // Employees
  // getEmployees() {
  //   return this.afs.collection('users', ref => ref.where('type', '==', 'employees')).snapshotChanges();
  // }

  createEmployee(id: any, data: any) {
    return this.afs.doc('employees/' + id).set(data);
  }

  getAllEmployees() {
    return this.afs.collection('employees').snapshotChanges();
  }

  getEmployeeData(id: any) {
    return this.afs.doc('employees/' + id).valueChanges();
  }

  updateEmployee(id: any, data: any) {
    return this.afs.doc('employees/' + id).update(data);
  }
  deleteEmployee(id: any) {
    return this.afs.doc('employees/' + id).delete();
  }

  // Job or Ads 
  createAds(id: any, data: any) {
    return this.afs.doc('ads/' + id).set(data);
  }

  getAd(id: any) {
    return this.afs.doc('ads/' + id).valueChanges();
  }

  getAllAds() {
    return this.afs.collection('ads').snapshotChanges();
  }

  UpdateAds(id: any, data: any) {
    return this.afs.doc('ads/' + id).update(data);
  }

  deleteAds(id: any) {
    return this.afs.doc('ads/' + id).delete();
  }
}
