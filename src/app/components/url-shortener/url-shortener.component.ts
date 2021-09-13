import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UrlShortenerService } from 'src/app/services/url-shortener.service';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private urlShortenerService: UrlShortenerService,
  ) { }

  form = this.formBuilder.group({
    url: null
  })

  generatedUrl = '';
  isLoading = false;

  ngOnInit(): void {
  }

  onSubmit() {
    const url = this.form.value.url
    this.isLoading = true;
    this.urlShortenerService.getUrl(url)
    .subscribe(
      data => {
        this.generatedUrl = data;
        this.isLoading = false;
      }
    )
    this.form.reset();
  }

}
