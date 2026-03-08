import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './app.html',
    styleUrls: ['./app.css']
})

export class App {

    applicant: any = {
        name: '',
        email: '',
        phone: '',
        address: '',
        position: '',
        location: '',
        salary: '',
        qualification: '',
        university: '',
        year: '',
        skills: [],
        exp: '',
        yearsExp: '',
        agree: false
    };

    qualifications = [
        "Diploma",
        "UG",
        "PG",
        "PhD"
    ];

    universities = [
        "Anna University",
        "Bharathiar University",
        "Madras University"
    ];

    years = [2020, 2021, 2022, 2023, 2024];

    positions = [
        "Software Engineer",
        "Web Developer",
        "UI Designer"
    ];

    locations = [
        "Chennai",
        "Bangalore",
        "Hyderabad"
    ];

    skillsList = [
        "Java",
        "Python",
        "HTML",
        "CSS",
        "JavaScript"
    ];

    onSkillChange(event: any) {

        if (event.target.checked) {
            this.applicant.skills.push(event.target.value);
        } else {
            this.applicant.skills =
                this.applicant.skills.filter(
                    (s: any) => s !== event.target.value
                );
        }

    }

    submitForm(form: any) {

        if (form.valid) {
            alert("Application Submitted Successfully");
        }

    }

}
