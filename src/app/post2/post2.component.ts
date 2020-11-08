import {Component} from "@angular/core";

@Component({
  selector: 'app-post2',
  template: `
    <div class="post2">
      <h2>post title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque earum esse fugit harum in inventore labore laudantium perspiciatis possimus?</p>
    </div>
  `,
  styles: [`
    .post2 {
      padding: 5rem;
      border: 2px solid yellow;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  `]
})
export class Post2Component {

}
