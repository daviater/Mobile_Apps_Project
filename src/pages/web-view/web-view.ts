import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@IonicPage()  
@Component({
  selector: 'page-web-view',
  templateUrl: 'web-view.html',
})
export class WebViewPage {
public url: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private inAppBrowser: InAppBrowser) {
  
  this.url = navParams.get("urlString"); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WebViewPage');
  
    const browser = this.inAppBrowser.create(this.url);//launches in app browser 

    this.navCtrl.pop();// pops back to home page
  }

}
