import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { StudentProfile } from '../models/student-profile.model'; // Import the StudentProfile interface

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  // Headers comunes
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  // ========== STUDENTS ==========
  registerStudent(studentData: any): Observable<any> {
    const payload = {
      name: studentData.name,
      email: studentData.email,
      studentCode: studentData.studentCode,
      password: studentData.password,
      academicProgram: {
        name: studentData.academicProgram.name,
        code: studentData.academicProgram.code,
      },
    };

    return this.http.post(`${this.apiUrl}/api/students`, payload, {
      headers: this.getHeaders(),
    });
  }

  loginStudent(credentials: {
    studentCode: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/students/login`, credentials, {
      headers: this.getHeaders(),
    });
  }

  getStudentById(studentId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/students/id/${studentId}`, {
      headers: this.getHeaders(),
    });
  }

  getAllStudents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/students/`, {
      headers: this.getHeaders(),
    });
  }

  getStudentByCode(studentCode: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/students/code/${studentCode}`, {
      headers: this.getHeaders(),
    });
  }

  updateStudent(studentCode: string, studentData: any): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/api/students/${studentCode}`,
      studentData,
      {
        headers: this.getHeaders(),
      }
    );
  }

  deleteStudent(studentCode: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/students/${studentCode}`, {
      headers: this.getHeaders(),
    });
  }

  getStudentProfile(): Observable<StudentProfile> {
    return this.http.get<StudentProfile>(`${this.apiUrl}/api/students/me`, {
      headers: this.getHeaders(),
    });
  }

  getLastAppliedOffer(studentId: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/api/students/${studentId}/last-applied-offer`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  getAppliedOffersCount(studentId: string): Observable<number> {
    return this.http.get<number>(
      `${this.apiUrl}/api/students/${studentId}/applied-offers/count`,
      {
        headers: this.getHeaders(),
      }
    );
  }

  // ========== POSTULATIONS ==========
  createPostulation(postulationData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/postulations`, postulationData, {
      headers: this.getHeaders(),
    });
  }

  getPostulationById(postulationId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/postulations/${postulationId}`, {
      headers: this.getHeaders(),
    });
  }

  updatePostulation(postulationId: string, postulationData: any): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/api/postulations/${postulationId}`,
      postulationData,
      {
        headers: this.getHeaders(),
      }
    );
  }

  deletePostulation(postulationId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/postulations/${postulationId}`, {
      headers: this.getHeaders(),
    });
  }

  getAllPostulations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/postulations/`, {
      headers: this.getHeaders(),
    });
  }

  // ========== CURRICULUM VITAE ==========
  uploadCV(file: File, studentId: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(
      `${this.apiUrl}/api/curriculum-vitae/upload`,
      formData,
      {
        params: { studentId },
      }
    );
  }

  getCVById(cvId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/curriculum-vitae/${cvId}`, {
      headers: this.getHeaders(),
    });
  }

  getAllCVs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/curriculum-vitae/`, {
      headers: this.getHeaders(),
    });
  }

  updateCV(cvId: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.put(`${this.apiUrl}/api/curriculum-vitae/${cvId}`, formData);
  }

  deleteCV(cvId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/curriculum-vitae/${cvId}`, {
      headers: this.getHeaders(),
    });
  }

  // ========== OFFERS ==========
  createOffer(offerData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/offers`, offerData, {
      headers: this.getHeaders(),
    });
  }

  updateOffer(offerId: string, offerData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/api/offers/${offerId}`, offerData, {
      headers: this.getHeaders(),
    });
  }

  getAllOffers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/offers`, {
      headers: this.getHeaders(),
    });
  }

  getOfferById(offerId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/offers/${offerId}`, {
      headers: this.getHeaders(),
    });
  }

  deleteOffer(offerId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/offers/${offerId}`, {
      headers: this.getHeaders(),
    });
  }

  // ========== COMPANIES ==========
  createCompany(companyData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/companies`, companyData, {
      headers: this.getHeaders(),
    });
  }

  updateCompany(nitCode: string, companyData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/api/companies/${nitCode}`, companyData, {
      headers: this.getHeaders(),
    });
  }

  getCompanyByNitCode(nitCode: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/companies/${nitCode}`, {
      headers: this.getHeaders(),
    });
  }

  getAllCompanies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/companies`, {
      headers: this.getHeaders(),
    });
  }

  deleteCompany(nitCode: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/companies/${nitCode}`, {
      headers: this.getHeaders(),
    });
  }
}
