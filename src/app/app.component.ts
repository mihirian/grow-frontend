import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppConfigService } from './shared/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  header: boolean=true;   
  showanim=true;
  myDynamicFaviconUrl:any;
  dynamicTitleHead:any;
  backgroundTheme:any;
  public showLoader = true;




  constructor(private router:Router,private appConfigService: AppConfigService) { 
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if (event['url'] == '/login'||event['url'] == '/admin.login'||event['url'] == '/privacypolicy') {
          this.header = false;
          this.showanim=true;
        } else {
          // console.log("NU")
          this.header = true;
          setTimeout(()=>{                           // <<<---using ()=> syntax
            this.showanim = false;
        }, 5000);
        }
      }
    });
    const currentURL = window.location.href;
    this.appConfigService.setConfigByURL(currentURL);
    
  }

  ngOnInit(): void {
    console.log("whitelable title"+  this.appConfigService.getTitle());
    this.myDynamicFaviconUrl=this.appConfigService.getFavicon();
    this.dynamicTitleHead=this.appConfigService.getTitle();
    this.title=this.dynamicTitleHead;
    // this.loaderSubscription = this.loaderControlService.getLoaderVisibility().subscribe((status) => {
    //   this.showLoader = status;
    // });
    this.backgroundTheme=this.appConfigService.getBackgroundColor();

    console.log(this.backgroundTheme);
    this.webDesign();

    
  }



  webDesign(){
    this.backgroundTheme=this.appConfigService.getBackgroundColor();

    if(this.backgroundTheme=='Mangovita')
    {
      const rootElement = document.documentElement;
    rootElement.style.setProperty('--theme', '#FF5D0B');
    rootElement.style.setProperty('--box-heading', '#FFCE0E');
    }
    else if(this.backgroundTheme=='Scotish')
    {
      const rootElement = document.documentElement;
    rootElement.style.setProperty('--theme', 'black');
    rootElement.style.setProperty('--box-heading', '#00FF00');
    }
    else if(this.backgroundTheme=='Amber')
    {
      const rootElement = document.documentElement;
    rootElement.style.setProperty('--theme', 'black');
    rootElement.style.setProperty('--box-heading', '#00FF00');
    }
    else if(this.backgroundTheme=='Grow')
      {
        const rootElement = document.documentElement;
      rootElement.style.setProperty('--theme', '#FC0FC1');
      rootElement.style.setProperty('--box-heading', '#00FF00');
      }

  };
  title = '';

}
