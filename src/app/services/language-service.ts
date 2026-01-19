import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly LANG_KEY = 'app_lang';
  private translate = inject(TranslateService);
  private platformId = inject(PLATFORM_ID);

  private currentLang: 'en' | 'es' = 'en';

  init() {
    let lang: 'en' | 'es' = 'en';

    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem(this.LANG_KEY) as 'en' | 'es' | null;
      const browserLang = this.translate.getBrowserLang();

      lang =
        savedLang ??
        (browserLang?.match(/es|en/) ? (browserLang as 'en' | 'es') : 'en');
    }

    this.currentLang = lang;
    this.translate.use(lang);
  }

  setLanguage(lang: 'en' | 'es') {
    this.currentLang = lang;
    this.translate.use(lang);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.LANG_KEY, lang);
    }
  }

  getCurrentLanguage(): 'en' | 'es' {
    return this.currentLang;
  }
}
