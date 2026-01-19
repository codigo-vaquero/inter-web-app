import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language-service';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  protected readonly title = signal('ngx-translate-demo-standalone');
  private langService = inject(LanguageService);

  useLanguage(language: 'en' | 'es') {
    this.langService.setLanguage(language);
  }
}
