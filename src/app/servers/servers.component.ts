import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer : boolean = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server';
  username : string = '';
  allowUsernameReset : boolean;
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  paragraphVisible = false;
  toggleDisplayCounter = [];
  counterIndex = 0;
  

  // The constructor is a method executed at the point of time the component is created in Angular
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    // console.log('inside the onCreateServer method!');
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    // console.log('inside the onUpdateServerName method!');
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUsername() {
    console.log('Inside the resetUsername method!');
    this.username = '';
  }
  
  toggleParagraph() {
    this.paragraphVisible = !this.paragraphVisible;
    this.toggleDisplayCounter.push(this.counterIndex++);
    console.log(this.toggleDisplayCounter);
  }

}
