// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// // <script src="/socket.io/socket.io.js"></script>
// import { io } from 'socket.io-client';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent implements OnInit{
//   title = 'Test Websocket App';
//   messages: string[] = [];
//   socket: any;
//   msg: string = '';
  
//   ngOnInit(): void {
//     this.socket = io('http://localhost:3000');
//     this.socket.on('msgToClient', (msg) => {
//       console.log(this.msg);
//       this.messages.push(this.msg);
//     });
//   }

//   sendMsg() {
//     console.log(`sendMsg: ${this.text}`);
//     this.socket.emit('msgToServer', this.text)
//     this.text = '';
//   }
  
  //   <script>
  //   var app = new Vue({
  //       el: '#v-app',
  //       data: { 
  //           title: 'Test Websocket App',
  //           text: '',
  //           messages: ['some message', 'another message', 'one more message'],
  //           socket: null,
  //        },
  //       methods: {
  //           sendMsg() {
  //               console.log(`sendMsg: ${this.text}`);
  //               this.socket.emit('msgToServer', this.text)
  //               this.text = '';
  //           },
  //           receiveMsg(msg) {
  //               console.log(`receiveMsg: ${msg}`);
  //               this.messages.push(msg);
  //           }
  //       },
  //       created() {
  //           this.socket = io('http://localhost:3000');
  //           this.socket.on('msgToClient', (msg) => {
  //               console.log(msg);
  //               this.receiveMsg(msg);
  //           });
  //       }
  //   });

  // </script>
// }
