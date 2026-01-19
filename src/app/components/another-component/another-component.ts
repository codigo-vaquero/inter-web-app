import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language-service';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-another-component',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './another-component.html',
})
export class AnotherComponent {}
