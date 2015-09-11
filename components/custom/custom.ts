import {Component, View, CORE_DIRECTIVES,} from 'angular2/angular2';

import {NamesList} from '../../services/NameList';
import {Http, HTTP_BINDINGS, Response} from 'http/http';
import {ObservableWrapper} from 'angular2/src/facade/async';


@Component({
  selector: 'custom',
  viewBindings: [HTTP_BINDINGS]
})
@View({
  templateUrl: './components/custom/custom.html?v=<%= VERSION %>',
  directives: [CORE_DIRECTIVES]
})
export class Custom {
   userDetail: Object;
  constructor(http:Http) {
    alert("abc");
    ObservableWrapper.subscribe<Response>(http.get('./custom.json'),
                                          res => this.userDetail = res.json());
                                          
  }
}
