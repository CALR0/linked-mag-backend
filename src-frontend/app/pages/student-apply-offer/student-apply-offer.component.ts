import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { DialogModule } from 'primeng/dialog';
import { EditorModule } from 'primeng/editor';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-student-apply-offer',
  imports: [ButtonModule, DialogModule, InputTextModule, 
    EditorModule, FormsModule, DatePickerModule, 
    SelectModule, KeyFilterModule, InputNumberModule, TextareaModule],
  templateUrl: './student-apply-offer.component.html',
  styleUrl: './student-apply-offer.component.css'
})
export class StudentApplyOfferComponent implements OnInit {
  visible: boolean = false;
  offerId: string = ''; // ID of the offer being applied to

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Extract offerId from route parameters
    this.route.params.subscribe(params => {
      this.offerId = params['offerId'];
    });
  }

  showDialog() {
    this.visible = true;
  }

  applyToOffer() {
    const updatedData = {
      applicants: 1 // Increment applicants by 1 (or handle this logic in the backend)
    };

    this.apiService.updateOffer(this.offerId, updatedData).subscribe({
      next: (response) => {
        console.log('Offer updated successfully:', response);
        alert('Aplicación realizada correctamente.');
        this.visible = false; // Close the dialog
      },
      error: (err) => {
        console.error('Error updating offer:', err);
        alert('Error al aplicar a la oferta.');
      }
    });
  }
}
