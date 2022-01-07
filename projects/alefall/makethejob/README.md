<!-- ## How Use?

```html
<form class="form-format">
  <fieldset>
    <legend>Format Inputs With AlefFormat</legend>
    <p>
      <label for="cep">CEP</label><br/>
      <input alefCepFormat type="text" name="cep" id="cep"/>
    </p>
    <p>
      <label for="cnpj">CNPJ</label><br/>
      <input alefCnpjFormat type="text" name="cnpj" id="cnpj"/>
    </p>
    <p>
      <label for="date">Date</label><br/>
      <input alefDateFormat type="text" name="date" id="date"/>
    </p>
    <p>
      <label for="date-dashers">Date with dashers</label><br/>
      <input alefDateWithDashersFormat type="text" name="date-dashers" id="date-dashers"/>
    </p>
    <p>
      <label for="paste-lock">Paste lock</label><br/>
      <input alefPastLock type="text" name="paste-lock" id="paste-lock"/>
    </p>
    <p>
      <label for="money">Money</label><br/>
      <input alefMoneyFormat type="text" name="money" id="money"/>
    </p>
    <p>
      <label for="phone-ddi">Phone DDI</label><br/>
      <input alefPhoneDDIFormat type="text" name="phone-ddi" id="phone-ddi"/>
    </p>
    <p>
      <label for="phone">Phone</label><br/>
      <input alefPhoneFormat type="text" name="phone" id="phone"/>
    </p>
    <p>
      <label for="pis">Pis</label><br/>
      <input alefPisFormat type="text" name="pis" id="pis"/>
    </p>
  </fieldset>
</form>
``` -->
 
This library aims to facilitate the formatting of inputs in angular. 
It is still being developed and is in a trial version.

<p align="center">
  <img height="100px" width="200px" style="text-align: center;" src="src/assets/logo-completo.png">
  <h1 align="center">Alef All Library Inputs</h1>
</p>


[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Olafi-MooN/alefall-lib)

## What's New

- Format in inputs

Use appropriate version based on your Angular version.

| Angular 4   | Angular 5   | Angular 6/7 | Angular 8 | Angular 9  | Angular 10  | Angular 11  | Angular 12  |
| ----------- | ----------- | ----------- | --------- | ---------- | ----------- | ----------- | ----------- |
| >= `v1.2.0` | >= `v2.0.0` | `v7.2.0`    | `v8.1.0`  | >=`v9.0.1` | >=`v10.0.1` | >=`v11.0.2` | >=`v12.0.0` |



## Browser Support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                                                                                                                                      | Latest ✔                                                                                                                                                                                                          | IE11, Edge ✔                                                                                                                                                                                                    | Latest ✔                                                                                                                                                                                                                  | Latest ✔                                                                                                                                                                                                  |

## Features

- Format input with directives

## Demo
- In development
<!-- [Working Demo](https://alefall.github.io/all/) -->

### StackBlitz Demo
- In development
<!-- - [Normal Usage](https://stackblitz.com/) -->

## Installation

`MakeTheJob` is available via [npm](https://www.npmjs.com/package/ngx-spinner)

Using npm:

```bash
$ npm install MakeTheJob --save
```

Using yarn: (no version)

<!-- ```bash
$ yarn add MakeTheJob
``` -->

Using angular-cli: (no version)
<!-- 
```bash
$ ng add MakeTheJob
``` -->

## Usage

Import `MakethejobModule` in the root module(`AppModule`):

```typescript
import { MakethejobModule } from '@alefall/makethejob';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MakethejobModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

Now use in your template

```html
<form class="form-format">
  <fieldset>
    <legend>Format Inputs With AlefFormat</legend>
    <p>
      <label for="cep">CEP</label><br/>
      <input alefCepFormat type="text" name="cep" id="cep"/>
    </p>
    <p>
      <label for="cnpj">CNPJ</label><br/>
      <input alefCnpjFormat type="text" name="cnpj" id="cnpj"/>
    </p>
    <p>
      <label for="date">Date</label><br/>
      <input alefDateFormat type="text" name="date" id="date"/>
    </p>
    <p>
      <label for="date-dashers">Date with dashers</label><br/>
      <input alefDateWithDashersFormat type="text" name="date-dashers" id="date-dashers"/>
    </p>
    <p>
      <label for="paste-lock">Paste lock</label><br/>
      <input alefPastLock type="text" name="paste-lock" id="paste-lock"/>
    </p>
    <p>
      <label for="money">Money</label><br/>
      <input alefMoneyFormat type="text" name="money" id="money"/>
    </p>
    <p>
      <label for="phone-ddi">Phone DDI</label><br/>
      <input alefPhoneDDIFormat type="text" name="phone-ddi" id="phone-ddi"/>
    </p>
    <p>
      <label for="phone">Phone</label><br/>
      <input alefPhoneFormat type="text" name="phone" id="phone"/>
    </p>
    <p>
      <label for="pis">Pis</label><br/>
      <input alefPisFormat type="text" name="pis" id="pis"/>
    </p>
  </fieldset>
</form>
```

See [Demo](#demo)

## Methods

- `NgxSpinnerService.show()` Shows the spinner
- `NgxSpinnerService.hide()` Hides the spinner

## Available Options

- **[alefCepFormat]**: format cep #####-###.
- **[alefCnpjFormat]**: format cnpj ##.###.###/####-##.
- **[alefDateFormat]**: format date ##/##/####
- **[alefDateWithDashersFormat]**: format date with dashers ##-##-####.
- **[alefPastLock]**: Block paste in input;
- **[alefMoneyFormat]**: Format number for real R$ #.###.###,##.
- **[alefPhoneDDIFormat]**: Format phone with ddi +## (##) #####-####.
- **[alefPhoneFormat]**: format phone without ddi (##) #####-####
- **[alefPisFormat]**: format pis ###.#####.##-#

#### NOTE

- You just need to add directives.
## Creator

#### [Yuvraj Chauhan](mailto:alefmastertutor@gmail.com)

- [@GitHub](https://github.com/Olafi-MooN)

## Future Plan
- Add more formatting 
- Create components

## Credits.

### License

Alef MakeTheJob is [MIT licensed](./LICENSE).