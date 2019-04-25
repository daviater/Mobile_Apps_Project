import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventViewerProvider} from '../../providers/event-viewer/event-viewer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  events: any[];//holds event objects
  constructor(public navCtrl: NavController, public event: EventViewerProvider) {

  }

  ionViewDidLoad(){
    //Grabs json of events in ireland
    this.event.getEventData().subscribe(data=>{
      this.events = data._embedded.events;
    });
  } 

  GoEvent(url: string){//switches to the webview page which launches the in app brower then returns
    this.navCtrl.push('WebViewPage', {urlString: url})
  }
}
