import { Component } from '@angular/core';

interface User {
  id: string;
  company: Company;
  username: string;
  email: string;
  profilePictureUrl: string;
  initials?: string;
  jobTitle?: string;
  roles?: Roles;
  language?: string;
  plant?: any;
  department?: any;
  productType?: any;
}

interface Roles {
  [x: number]: boolean;
}

interface Company {
  id: string;
  defaultTemplateId: string;
  name: string;
  incidentIdCounter?: number;
  incidentIdPrefix?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-tailwind-starter';
  mockUsers: User[] = [
    {
      company: {
        id: 'companyId',
        name: 'companyName',
        defaultTemplateId: 'defaultTemplateId',
      },
      email: 'tim@email.com',
      id: '1',
      profilePictureUrl: '',
      username: 'Tim',
      jobTitle: '',
    },
    {
      company: {
        id: 'companyId',
        name: 'companyName',
        defaultTemplateId: 'defaultTemplateId',
      },
      email: 'paul@email.com',
      id: '1',
      profilePictureUrl: '',
      username: 'Paul',
      jobTitle: '',
    },
  ];
}
