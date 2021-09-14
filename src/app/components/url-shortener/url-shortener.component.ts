import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  url = '';
  generatedUrl = '';
  isLoading = false;
  showErrorMessage = false;
  errorMessage = '';
  showUrl = false;

  ngOnInit(): void {
  }

  onSubmit() {
    this.clearVariables();
    this.url = this.form.value.url
    this.isLoading = true;
    this.urlShortenerService.getUrl(this.url)
      .subscribe(
        data => {
          this.generatedUrl = data.url;
          this.showUrl = true;
          this.isLoading = false;
        },
        error => {
          this.errorMessage = error.error['message'];
          this.showErrorMessage = true;
          this.isLoading = false;
        }
      );
    this.form.reset();
  }

  clearVariables() {
    this.isLoading = false
    this.showErrorMessage = false;
    this.showUrl = false;
    this.url = '';
  }
}
