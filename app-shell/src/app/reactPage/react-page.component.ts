import { Component, QueryList, ViewChildren } from '@angular/core';
import { loadRemoteModule } from '../utils/federation-utils';
import { AppService } from '../app.service';

@Component({
  selector: 'react-page',
  templateUrl: './react-page.component.html',
})
export class ReactPageComponent {
  @ViewChildren('comp') components!: QueryList<any>;
  loaders: any = [];

  constructor(readonly appService: AppService) {}

  async ngAfterViewInit() {
    loadRemoteModule(this.appService.authorized_modules[2])
      .then((module) => {
        this.loaders.push(module.default);
      })
      .finally(() => {
        console.log("this.loaders: ", this.loaders)
      });
  }
}
