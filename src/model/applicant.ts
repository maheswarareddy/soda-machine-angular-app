import { ApplicantName } from './applicant-name';

export interface Applicant {
    applicationId: String;
    applicantId: String;
    name: ApplicantName;
    ssn: String;
    citizenship: String;
    dateOfBirth: Date;
}