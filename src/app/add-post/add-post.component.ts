import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostPayload } from '../post-payload';
import { PostService } from '../post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addPostForm = new FormGroup({
    title: new FormControl(),
    body: new FormControl()
  });

  postPayload: PostPayload = {
    id: '',
    content: '',
    title: '',
    username: ''
  }

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
  }

  addPost(){
    this.postPayload.content = this.addPostForm.get('body').value;
    this.postPayload.title = this.addPostForm.get('title').value;
    this.postService.addPost(this.postPayload).subscribe(data => {
      this.router.navigateByUrl("/");
    },error => {
      console.log("Failure Response");
    })
  }

}
