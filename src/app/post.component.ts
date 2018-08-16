import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'app-post',
    template: `
        <mat-card>
        <mat-card-header>
            <mat-card-title>
                <h4>New Post</h4>
            </mat-card-title>
        </mat-card-header>
        <mat-card-content>
        <form class="example-form">
        <mat-form-field class="example-full-width" style="width: 100%;">
            <textarea [(ngModel)]="postMsg" name="Post" matInput placeholder="Post Message"></textarea>
        </mat-form-field><br>
        <button (click)="post()" mat-raised-button color="primary">Post</button>
        </form>
        </mat-card-content>
        </mat-card>
  `,
})
export class PostComponent {
    postMsg: String;
    constructor(public apiService: ApiService) { }
    post() {
        if (this.postMsg) {
            this.apiService.postMessage({msg: this.postMsg});
        }
    }
}
