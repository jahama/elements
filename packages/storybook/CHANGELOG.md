# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.1.1](https://github.com/inovex/elements/compare/v4.1.0...v4.1.1) (2021-09-06)


### Bug Fixes

* **elements|ino-input-file:** prevent drag and drop when set to false ([#420](https://github.com/inovex/elements/issues/420)) ([06ca871](https://github.com/inovex/elements/commit/06ca87194ebc16511295fbac1784ff6d695ba6fb))
* **elements|ino-select:** hide input used for form validation ([#416](https://github.com/inovex/elements/issues/416)) ([0b02c3b](https://github.com/inovex/elements/commit/0b02c3b7e9653569952e708bce4a02e1a387d201))
* **storybook:** scope all story styles ([#422](https://github.com/inovex/elements/issues/422)) ([62ce093](https://github.com/inovex/elements/commit/62ce093788928af472685bc8493987e6a2db02e4))


### Miscellaneous

* replace local commit linting with new component script ([#412](https://github.com/inovex/elements/issues/412)) ([81aa33d](https://github.com/inovex/elements/commit/81aa33d37c4417f64e216fab397e02280a52c5a7))

## [4.1.0](https://github.com/inovex/elements/compare/v4.0.0...v4.1.0) (2021-08-11)


### Features

* **elements:** add new component `<ino-autocomplete>` ([#402](https://github.com/inovex/elements/issues/402)) ([e93b20f](https://github.com/inovex/elements/commit/e93b20f7ac05500a11dbbeefbbcd382da6146ef3))
* **elements|ino-select:** add slot for leading icon ([#317](https://github.com/inovex/elements/issues/317)) ([2a656e6](https://github.com/inovex/elements/commit/2a656e646bd5ee8c52d217d07d9e0c59eba199a4))
* **elements|ino-tab-bar:** add autoFocus property ([#408](https://github.com/inovex/elements/issues/408)) ([03dc76a](https://github.com/inovex/elements/commit/03dc76ac8d45f15ad33441802c93d3854237566b))


### Bug Fixes

* **elements|ino-select:** fix form validation ([#355](https://github.com/inovex/elements/issues/355)) ([8eba403](https://github.com/inovex/elements/commit/8eba403f3aff575c1e73110a5cfba18159226d98))
* **storybook:** restore missing fav icon ([#411](https://github.com/inovex/elements/issues/411)) ([ef86527](https://github.com/inovex/elements/commit/ef865270003ccbf2c66f8eb9eafb340f824eadad))

## [4.0.0](https://github.com/inovex/elements/compare/v3.0.0...v4.0.0) (2021-07-05)


### ⚠ BREAKING CHANGES

* **elements-angular:** Angular 12 only works with Webpack 5, so we had to adapt our previous way of importing icons. To keep using our `ino-icon` it is necessary that you add the elements via Angular CLI: `ng add @inovex.de/elements-angular`. This also applies if the Elements are already installed. For more detailed instructions, check out our Angular integration guide.
* **storybook:** We decided to remove the `ino` prefixes of all component properties. Originally, they were a convenience to distinguish between native and custom properties. Nowadays the prefixes just make for unnecessarily longer code.

So to upgrade to the latest version it is necessary to remove these prefixes. As an example: `ino-loading` or `inoLoading` becomes `loading`.
To assist with this, here is a regex that can be used to search and replace these properties: `(?:\s)(ino)`.

### Features

* **elements:** allow lists with both single and double lines ([#338](https://github.com/inovex/elements/issues/338)) ([07609e4](https://github.com/inovex/elements/commit/07609e46e1c15d919eee57e130975b36401e2c5b))
* **elements|ino-img:** add fallback img ([#339](https://github.com/inovex/elements/issues/339)) ([6caec70](https://github.com/inovex/elements/commit/6caec708d4f61a64cd34dbebc119c9f70c9cd135))
* **elements|ino-snackbar:** add property to make snackbar stay visible on hover ([#365](https://github.com/inovex/elements/issues/365)) ([bf6b702](https://github.com/inovex/elements/commit/bf6b7023cd9fe9caf4761f6eb57b4f2cc63bc577))
* **storybook:** upgrade storybook to v6 ([#316](https://github.com/inovex/elements/issues/316)) ([dcd7260](https://github.com/inovex/elements/commit/dcd7260fd105339afbc8fd64c1557e9cc5fd723e))


### Bug Fixes

* **storybook|ino-snackbar:** avoid multiple snackbar instances ([#367](https://github.com/inovex/elements/issues/367)) ([ad386c9](https://github.com/inovex/elements/commit/ad386c9476e9aa8e6592798cd0aebab16d62886c))
* **storybook|ino-snackbar:** fix incorrect knob options ([#312](https://github.com/inovex/elements/issues/312)) ([741cd65](https://github.com/inovex/elements/commit/741cd659ed5004c0309b6ba3f6ffbc4644b7f44c))


### Miscellaneous

* **elements-angular:** update angular to work with version 12 ([#386](https://github.com/inovex/elements/issues/386)) ([c9d123e](https://github.com/inovex/elements/commit/c9d123ecc19f4ffe1de906645bef6de6310b7c19))
* publish v3.0.1 ([ca7a24d](https://github.com/inovex/elements/commit/ca7a24d68944c06c78d88f58ec5151966c0210a6))

### [3.0.1](https://github.com/inovex/elements/compare/v3.0.0...v3.0.1) (2021-04-22)


### Bug Fixes

* **storybook|ino-snackbar:** fix incorrect knob options ([#312](https://github.com/inovex/elements/issues/312)) ([741cd65](https://github.com/inovex/elements/commit/741cd659ed5004c0309b6ba3f6ffbc4644b7f44c))

## [3.0.0](https://github.com/inovex/elements/compare/v2.3.0...v3.0.0) (2021-04-13)


### ⚠ BREAKING CHANGES

* **elements|ino-menu:** We have reworked the `ino-menu` so that it is now a composition of the `ino-popover` and `ino-list`. It now acts as a smart component that manages its own state. As a result, fewer properties need to be specified. If more complex functionality is required, one can easily build this using the `ino-popover` and the `ino-list`.

To be specific, the `ino-open`, as well as the `ino-for` property has been removed. The parent node of the `ino-menu` now automatically acts as an anchor element for the menu. Since the state is now managed by the component, the `ino-open` property and the `menuClose` event are obsolete. The menu now opens on anchor click and closes on outside click.

Before:
```jsx
<button id="my-anchor" onClick={() => this.setState({ isMenuOpen: true })}>Open Menu</button>
<InoMenu ino-open={this.state.isMenuOpen} ino-for="my-anchor" onMenuClose={() => this.setState({ isMenuOpen: false })}>
  <InoListItem>...</InoListItem>
</InoMenu>
```
After:
```jsx
<button>
  Open Menu
  <InoMenu>
    <InoListItem>...</InoListItem>
  </InoMenu>
</button>
```

For more information, have a look at the [storybook page of the ino-menu](https://elements.inovex.de/dist/latest/storybook/?path=/story/structure-ino-menu--default-usage).
* **elements|ino-button:** We have removed the property `ino-full-width` of the `ino-button` as this styling should be achieved by simple css.

e.g.:
```css
ino-button {
  width: 100%;
}
```
* **elements|ino-icon:** We have changed our internal icon handling to make working with them more intuitive.
If you are currently using the elements with Vue.js, you need to update your icon import like this:

**From**: `import { ICON_PATHS } from '@inovex.de/elements/dist/inovex-elements/icon-assets/SVG/index.esm.js';`

**To**: `import { ICON_PATHS } from '@inovex.de/elements/dist/inovex-elements/ino-icon/index.esm.js';`
* **elements:** Previously, we used certain properties as flags to indicate that a slot was in use. 
We wrote our own utility to check the contents of the slot at runtime, making these properties obsolete. 
For this reason, we removed the following properties which can safely be removed:
- `inoIconLeading`
- `inoIconTrailing`

These properties occurred in the following components:
- `ino-button`
- `ino-chip`
- `ino-input`

### Features

* **elements|ino-chip:** add slot for trailing icon ([#221](https://github.com/inovex/elements/issues/221)) ([8b91f4e](https://github.com/inovex/elements/commit/8b91f4e51abf5a920ccf3718ccc54e13802768f1))
* **elements|ino-datepicker:** add language support ([#272](https://github.com/inovex/elements/issues/272)) ([85e129e](https://github.com/inovex/elements/commit/85e129e95bd1b696d13712611f67bc816d46446a))
* **elements|ino-fab:** add slot for leading icon ([#286](https://github.com/inovex/elements/issues/286)) ([6762544](https://github.com/inovex/elements/commit/6762544ceb83e2fa93fd60070af56a8e9336ef3c))
* **elements|ino-menu:** emit new closeMenu event on click ([#244](https://github.com/inovex/elements/issues/244)) ([372b15a](https://github.com/inovex/elements/commit/372b15a037a2aa9a0a676e354096f5c42d6a168b))
* **elements|ino-popover:** add functionality to control component ([#292](https://github.com/inovex/elements/issues/292)) ([df7757b](https://github.com/inovex/elements/commit/df7757bf2b2ea13a69661ae1d889cd92a29a0b6c))
* **elements|ino-popover:** add prop `ino-distance` to define offset ([#299](https://github.com/inovex/elements/issues/299)) ([ea03f3d](https://github.com/inovex/elements/commit/ea03f3dc242beb379e70e19406eb2d7e11429086))


### Bug Fixes

* **elements|ino-datepicker:** validate on min/max date changes ([#313](https://github.com/inovex/elements/issues/313)) ([f14da32](https://github.com/inovex/elements/commit/f14da32cf4855199c4fc30ea1ce8aea89d333163))


* **elements|ino-button:** inherit width ([#278](https://github.com/inovex/elements/issues/278)) ([75aca81](https://github.com/inovex/elements/commit/75aca81b3efe9b3ccf09b5f357d2eece85753125))


### Miscellaneous

* **storybook:** bump marked from 1.2.0 to 2.0.1 ([#304](https://github.com/inovex/elements/issues/304)) ([c45bebd](https://github.com/inovex/elements/commit/c45bebdc1176dadebe6a5554e3c1857195b43a93))


### Refactoring

* **elements:** remove ino-leading/trailing properties ([#277](https://github.com/inovex/elements/issues/277)) ([558d41f](https://github.com/inovex/elements/commit/558d41ff6b85d33976d02fbfb52c78bc9081e6d8))
* **elements|ino-icon:** avoid duplicate icon files ([#255](https://github.com/inovex/elements/issues/255)) ([cb6da53](https://github.com/inovex/elements/commit/cb6da5315c6a132f4d754d325b0aa19b06f9a6a6))
* **elements|ino-menu:** replace underlying mdc-menu with ino-popover ([#347](https://github.com/inovex/elements/issues/347)) ([68de0bd](https://github.com/inovex/elements/commit/68de0bd8758da5090e22cf793ad72150a243c33e))

## [2.3.0](https://github.com/inovex/elements/compare/v2.2.1...v2.3.0) (2021-01-27)


### Features

* **elements|ino-nav-item:** add prop for sub text ([#273](https://github.com/inovex/elements/issues/273)) ([746a7c3](https://github.com/inovex/elements/commit/746a7c35ce9c56d960c6a84b18d6990c6e62d503))
* **elements|ino-popover:** add interactive property ([#223](https://github.com/inovex/elements/issues/223)) ([bf6f0e5](https://github.com/inovex/elements/commit/bf6f0e53b5ca85230155d18ec2a21ec57d8ecc54))
* **elements|ino-textarea:** add filled style option ([#237](https://github.com/inovex/elements/issues/237)) ([81769ef](https://github.com/inovex/elements/commit/81769ef2515b50d7ba6626f2d16245e6cf478226))


### Bug Fixes

* **elements|ino-datepicker:** prevent interaction with disabled datepicker and fix validation ([#245](https://github.com/inovex/elements/issues/245)) ([ba0db4f](https://github.com/inovex/elements/commit/ba0db4f1221ce3ac56e461343809de4d1d2fb8cc))
* **storybook|ino-icon:** fix icon search ([#238](https://github.com/inovex/elements/issues/238)) ([26aad57](https://github.com/inovex/elements/commit/26aad57f9cd3eb6bba054cfa1d03be9bfd758420))


### Miscellaneous

* upgrade vulnerable highlight.js package from 9.18.1 to 10.5.0 ([#269](https://github.com/inovex/elements/issues/269)) ([7a3edd8](https://github.com/inovex/elements/commit/7a3edd8b55af548a5b0bc7f6c5b726cc884a6afb))


### Documentation

* **storybook|ino-progress-bar:** add customization options and examples ([#265](https://github.com/inovex/elements/issues/265)) ([16fba26](https://github.com/inovex/elements/commit/16fba264e5b46bf531a37b5c7feb5e72760b0f1d))

### [2.2.1](https://github.com/inovex/elements/compare/v2.2.0...v2.2.1) (2020-12-10)


### Bug Fixes

* **elements|ino-datepicker:** use date format to improve validation ([#226](https://github.com/inovex/elements/issues/226)) ([90a990c](https://github.com/inovex/elements/commit/90a990c32c92c0ebd1ad88613aafa99513d54d70))

## [2.2.0](https://github.com/inovex/elements/compare/v2.1.0...v2.2.0) (2020-12-01)


### Features

* **elements|ino-chip:** add slot for icons and mark ino-icon prop as deprecated ([#189](https://github.com/inovex/elements/issues/189)) ([edca6b8](https://github.com/inovex/elements/commit/edca6b8297191db80c2b2dd378b7b931bb035d3a))
* **elements|ino-input-file:** add drag and drop window ([#199](https://github.com/inovex/elements/issues/199)) ([6ede8b0](https://github.com/inovex/elements/commit/6ede8b0b7cf1e31921d5f5ddf58c3fab91d43407))

## [2.1.0](https://github.com/inovex/elements/compare/v2.0.0...v2.1.0) (2020-11-24)


### Features

* **elements|ino-checkbox:** add indeterminate state for selection checkbox ([#173](https://github.com/inovex/elements/issues/173)) ([da44ee4](https://github.com/inovex/elements/commit/da44ee48ec39f1527aa64f0d8a463e3765533447))
* **elements|ino-icon:** add icons opportunity, pin and save ([#179](https://github.com/inovex/elements/issues/179)) ([d50aa37](https://github.com/inovex/elements/commit/d50aa379042f9e1386c93801b4de56b9594b729d))
* **elements|ino-icon-button:** add managed option and provide customization options ([#176](https://github.com/inovex/elements/issues/176)) ([8aa55b4](https://github.com/inovex/elements/commit/8aa55b4751408be7a8b2d40e1997620693cc84c3))


### Bug Fixes

* **elements:** allow setting of box-sizing to border-box ([#174](https://github.com/inovex/elements/issues/174)) ([832ddd6](https://github.com/inovex/elements/commit/832ddd6700f5c4a3b66579cb0d006a0ad9d7451b))
* **elements|ino-card:** render slots only when used ([#207](https://github.com/inovex/elements/issues/207)) ([1c9dfc1](https://github.com/inovex/elements/commit/1c9dfc1f5ea77bab6fab320389b36be1d5ddbec4))


### Miscellaneous

* **elements:** bump material-components to 8.0.0 ([#171](https://github.com/inovex/elements/issues/171)) ([82eea25](https://github.com/inovex/elements/commit/82eea25089785029d0d4b02f26224e8121b80bc3))

## [2.0.0](https://github.com/inovex/elements/compare/v1.2.0...v2.0.0) (2020-10-20)


### Documentation

* **storybook:** update ino-fab and ino-card documentation ([#139](https://github.com/inovex/elements/issues/139)) ([3437cc7](https://github.com/inovex/elements/commit/3437cc71efffe6e7e159cb207db56a577aec984d))


### Miscellaneous

* remove duplicated entries in the changelog ([#149](https://github.com/inovex/elements/issues/149)) ([9f1b565](https://github.com/inovex/elements/commit/9f1b565402c80673b9fb6e51f595378e2c0d191e))

## [1.2.0](https://github.com/inovex/elements/compare/v1.1.0...v1.2.0) (2020-10-14)


### Features

* **elements:** add ino-carousel component ([#112](https://github.com/inovex/elements/issues/112)) ([e99b5d7](https://github.com/inovex/elements/commit/e99b5d723903a7060e0691b782d686db01480161))
* **elements|ino-card:** add property to disable hover animation ([#120](https://github.com/inovex/elements/issues/120)) ([0fac301](https://github.com/inovex/elements/commit/0fac301ab4b3fe1b078b5f4d09db97495aa2e779))
* **elements|ino-icon:** add refresh icon ([#136](https://github.com/inovex/elements/issues/136)) ([2953f0a](https://github.com/inovex/elements/commit/2953f0a7089fee9a529b0da63e118d4361a68964))
* **elements|ino-snackbar:** add property for warning and error states ([#116](https://github.com/inovex/elements/issues/116)) ([b648415](https://github.com/inovex/elements/commit/b64841571322656433ab8ed2ef1439b5cd40c23e))


### Bug Fixes

* **storybook|ino-nav-drawer:** fix broken link ([#124](https://github.com/inovex/elements/issues/124)) ([4c6845d](https://github.com/inovex/elements/commit/4c6845de5ddddef053bcfee10c7af8d0f3464c5c))


### Miscellaneous

* **deps:** bump marked from 0.6.3 to 1.2.0 in /packages/storybook ([#133](https://github.com/inovex/elements/issues/133)) ([323b844](https://github.com/inovex/elements/commit/323b844dff5c2d6dab26ac5d3cd30cb15615950a))
* hide refactoring commit type in changelog ([#130](https://github.com/inovex/elements/issues/130)) ([00dbf1a](https://github.com/inovex/elements/commit/00dbf1a55828aad4d2c0e29978dc3abe38ab7cbe))

## [1.1.0](https://github.com/inovex/elements/compare/v1.0.2...v1.1.0) (2020-10-07)


### Features

* **elements|ino-header:** add css variables ([#89](https://github.com/inovex/elements/issues/89)) ([3ab4e53](https://github.com/inovex/elements/commit/3ab4e534e0eccd6d7103294ac249d16547a65719))
* **elements|ino-icon:** add question mark icon ([#80](https://github.com/inovex/elements/issues/80)) ([4f06fa9](https://github.com/inovex/elements/commit/4f06fa995f6c63081fc32fe9b424b4908e72a1f2))
* **elements|ino-list-item:** add css variables ([#44](https://github.com/inovex/elements/issues/44)) ([fbf6fdc](https://github.com/inovex/elements/commit/fbf6fdc451498d6dd7c6ef2101a7964392981270))
* **elements|ino-option:**  add css variables ([#41](https://github.com/inovex/elements/issues/41)) ([0ed6aec](https://github.com/inovex/elements/commit/0ed6aecb77b5d384e400f5cd06aefbbf99f24e49))
* **elements|ino-segment-button:** add css variables ([#38](https://github.com/inovex/elements/issues/38)) ([69e84e1](https://github.com/inovex/elements/commit/69e84e121f65e819b308091a732602908564d7b1))
* **elements|ino-snackbar:** add property to set custom timeout ([#83](https://github.com/inovex/elements/issues/83)) ([d9608da](https://github.com/inovex/elements/commit/d9608daa9779acad4c1f43945a20382ca03f6d4e))


### Bug Fixes

* **elements|ino-switch:** fix color-schemes not working correctly ([#118](https://github.com/inovex/elements/issues/118)) ([e02e40a](https://github.com/inovex/elements/commit/e02e40a08181041aadd4b594ea9705bcfddab13d))


### Miscellaneous

* **deps:** bump handlebars from 4.5.1 to 4.7.6 in /packages/storybook ([#92](https://github.com/inovex/elements/issues/92)) ([1804d2c](https://github.com/inovex/elements/commit/1804d2c3dbe7d8c36aebbe88b37502a1a39201d1))
* **deps:** bump node-fetch from 1.7.3 to 2.6.1 in /packages/storybook ([#90](https://github.com/inovex/elements/issues/90)) ([58ae792](https://github.com/inovex/elements/commit/58ae7928377e0013e84ba0bc5c14cd90455dcfd9))


### Refactoring

* **elements:** move from local font files to font package ([#82](https://github.com/inovex/elements/issues/82)) ([c04d903](https://github.com/inovex/elements/commit/c04d903f7f238f950779d9fedf972f56df9647b2))

### [1.0.2](https://github.com/inovex/elements/compare/v1.0.1...v1.0.2) (2020-09-22)

### [1.0.1](https://github.com/inovex/elements/compare/v1.0.0...v1.0.1) (2020-09-22)


### Bug Fixes

* **storybook:** fix showcase urls ([#74](https://github.com/inovex/elements/issues/74)) ([60de0ff](https://github.com/inovex/elements/commit/60de0ffc3051d713d49cb07e4a00bc9de4cbf27a))

## [1.0.0](https://github.com/inovex/elements/compare/v0.21.0...v1.0.0) (2020-09-16)


### ⚠ BREAKING CHANGES

* We changed the scopes of all our packages from `@inovex` to  `@inovex.de` in order to match our newly created NPM org. Unfortunately, `@inovex` was already taken. To use the inovex-elements beyond version 0.21.0, you have to change the scope in your dependencies from `@inovex/*` to `@inovex.de/*`. This way you will receive our new versions from the public registry of npmjs.
* **elements|ino-button:** The API of the `<ino-button>` has changed. We've replaced the `ino-icon` property.
If you want to use an `ino-icon` inside of a button, use the `ino-icon-leading` or `ino-icon-trailing` property and provide the `<ino-icon>` element as a child of the `<ino-button>` with the slot being either `ino-icon-leading` or `ino-icon-trailing`. See the example below:

    ```html
    <!-- Old -->
    <ino-button ino-icon="info">Button with leading icon</ino-button>
    
    <!-- New -->
    <ino-button ino-icon-leading>
      <ino-icon ino-icon="info" slot="ino-icon-leading"></ino-icon>
      Button with leading icon
    </ino-button>
    ```
    
    While this does seem like more work for the consumer, we implemented this change in order to have a consistent way of using the `<ino-icon>` in combination with our other components. These changes also offer much more flexibility in the use of the `<ino-icon>` as you can now utilize the whole API of the `<ino-icon>` component (e.g. using your own icons, providing your custom click handler, ...).
* **elements:** The `tertiary` option for ino-color-scheme has been removed to match the colors specified by our design team

### Features

* **elements:** add component overview ([#68](https://github.com/inovex/elements/issues/68)) ([80c51b6](https://github.com/inovex/elements/commit/80c51b6084faaceaf904a12641d32ab90e802e3d))
* **elements|ino-datepicker:** validate input based on date format ([#50](https://github.com/inovex/elements/issues/50)) ([ea4d288](https://github.com/inovex/elements/commit/ea4d2887f9d96777bf294ea66af8766511b7c505))
* **elements|ino-dialog:** add dialog component ([da53a5a](https://github.com/inovex/elements/commit/da53a5a9c9f57a7fb7be91ced04c8a3db8c8ecc7))
* **elements|ino-icon:** add report icon ([27d3ea5](https://github.com/inovex/elements/commit/27d3ea58664fdfc6fe4c740b59ddb2e94af8e143))
* **elements|ino-input:** use native email validation ([#29](https://github.com/inovex/elements/issues/29)) ([6291bcb](https://github.com/inovex/elements/commit/6291bcbaa14466c8a2f14e757c8d47a3d7367b23))
* **storybook:** display favicon in production storybook ([#19](https://github.com/inovex/elements/issues/19)) ([5423671](https://github.com/inovex/elements/commit/54236710264c7872f658c606459d16d5eebae24a))


### Bug Fixes

* **storybook|ino-img-list:** fix example images not loading in story ([#20](https://github.com/inovex/elements/issues/20)) ([5158e86](https://github.com/inovex/elements/commit/5158e86d3ae38c9a36f34c4b0af9f2a39054abc4))


* **elements:** update style guide and colors according to the design specifications ([#7](https://github.com/inovex/elements/issues/7)) ([786c630](https://github.com/inovex/elements/commit/786c630b62cd2a9b0949afabd22af81a59e57192))


### Miscellaneous

* **storybook:** upgrade Storybook to v6 ([#51](https://github.com/inovex/elements/issues/51)) ([68b359c](https://github.com/inovex/elements/commit/68b359cdf6a8ca426b5fe08afd5b38215723468b))
* add heading for refactor commit type ([#54](https://github.com/inovex/elements/issues/54)) ([c5e0bdc](https://github.com/inovex/elements/commit/c5e0bdc793f5a26bd82166475ecd27a17f99f9d9))
* **elements|ino-icon:** remove icoMoon dependency ([#49](https://github.com/inovex/elements/issues/49)) ([aa05f5b](https://github.com/inovex/elements/commit/aa05f5b6e690ca6abe0d39be92061fd383163fd7))
* list additional commit types in generated changelogs ([#5](https://github.com/inovex/elements/issues/5)) ([7f7c7bf](https://github.com/inovex/elements/commit/7f7c7bff2cb4f795d7df30d3e0a86ffb12bef419))
* update references to new repository in changelogs ([#16](https://github.com/inovex/elements/issues/16)) ([06f83f1](https://github.com/inovex/elements/commit/06f83f1acd0aef1cf5941766ebc17203648cda52))
* update release workflow ([#13](https://github.com/inovex/elements/issues/13)) ([14b9578](https://github.com/inovex/elements/commit/14b9578fb437b2801a68e478007f581805ea34ef))
* update repository references in packages ([#15](https://github.com/inovex/elements/issues/15)) ([2b38cc5](https://github.com/inovex/elements/commit/2b38cc51f5c76851f127b9618ed3fda475c351a6))
* **storybook:** update storybook to 5.3.0 ([#9](https://github.com/inovex/elements/issues/9)) ([b8854a0](https://github.com/inovex/elements/commit/b8854a0c5b6cf20e67b45a9200e43a0158542a00))


### Refactoring

* change scope from (at)inovex to (at)inovex.de ([#66](https://github.com/inovex/elements/issues/66)) ([96186c2](https://github.com/inovex/elements/commit/96186c2b6f42eb202acf69cd7e0da6280b831864))
* **elements|ino-button:** replace icon property with icon slot ([#28](https://github.com/inovex/elements/issues/28)) ([388ce17](https://github.com/inovex/elements/commit/388ce17df09e8adb8b9d2c7e3a8a7025223cb5f6))
* **storybook:** remove deprecated addon-options ([#21](https://github.com/inovex/elements/issues/21)) ([ef27b02](https://github.com/inovex/elements/commit/ef27b02dadca41c2d635352f19b5cbae54db0b7c))


### Documentation

* link to github issues instead of jira ([#39](https://github.com/inovex/elements/issues/39)) ([5f2276d](https://github.com/inovex/elements/commit/5f2276d0ed5ba23a77395618cdb94ccc37ef0876))
* move html content out of knob ([#6](https://github.com/inovex/elements/issues/6)) ([7380b34](https://github.com/inovex/elements/commit/7380b345d4529c360c02551c12730d49ec321f9b))
* update url's of storybook ([#12](https://github.com/inovex/elements/issues/12)) ([791c8da](https://github.com/inovex/elements/commit/791c8daed3e774b31fb41259bf1410176f63fdaa))
* use self-hosted fonts ([#61](https://github.com/inovex/elements/issues/61)) ([6af692b](https://github.com/inovex/elements/commit/6af692b05baa80357ea2febf24632d8110fba706))

# [0.21.0](https://github.com/inovex/elements/compare/v0.20.0...v0.21.0) (2020-07-02)



# [0.20.0](https://github.com/inovex/elements/compare/v0.19.1...v0.20.0) (2020-06-25)


### Bug Fixes

* **elements|ino-icon:** fix internally used icon not loading correctly ([cc77301](https://github.com/inovex/elements/commit/cc77301e43afc3a44052dbbb56cbcccf76a4ab58))


### Features

* **elements:** add ino-img-list component ([3c15e98](https://github.com/inovex/elements/commit/3c15e9818a46e1f5860eed8e83ad6f200262f71f))



## [0.19.1](https://github.com/inovex/elements/compare/v0.19.0...v0.19.1) (2020-06-18)



# [0.19.0](https://github.com/inovex/elements/compare/v0.18.0...v0.19.0) (2020-06-18)


### Features

* **elements:** add ino-table/-row/-cell components ([fc2f778](https://github.com/inovex/elements/commit/fc2f778ada0c4153d9f67a2a8daef4250228b64f))
* **elements:** add progress-bar component ([5fbd35e](https://github.com/inovex/elements/commit/5fbd35e9c1a8e2494bdbce4f0148e39d7794d8c0))
* **elements|ino-icon:** add property to set svg title ([e6a6b60](https://github.com/inovex/elements/commit/e6a6b608168364186a840a1952f89afe046f4512))
* **elements|ino-icon:** add additional arrow icons ([8215b05](https://github.com/inovex/elements/commit/8215b05665e5fba9cd79edf41b4a1151d1699d26))



# [0.18.0](https://github.com/inovex/elements/compare/v0.17.0...v0.18.0) (2020-05-20)


### Bug Fixes

* **elements|ino-datepicker:** styles are now applied correctly ([b114ed3](https://github.com/inovex/elements/commit/b114ed3473f7e0a7e610c235aac6acfb74818f77))
* **elements|ino-sidebar:** fix icons in sidebar story ([e6c6a57](https://github.com/inovex/elements/commit/e6c6a5776493c9e3b5acecfc2f5cfc012e36857f))


### Features

* **elements|ino-button:** add css variables ([9295b65](https://github.com/inovex/elements/commit/9295b6510029e4c37ef25e535467d1ad3ce90fb2))
* **elements|ino-option-group:** add ino-option-group component ([6aa7a3c](https://github.com/inovex/elements/commit/6aa7a3ca7bbe771b269b27934bea88ce021b9bc6))
* **elements|ino-select:** add css variable for custom height ([7c8966b](https://github.com/inovex/elements/commit/7c8966b0aea80ba856ee13dd5d85295168e9d60b))
* **elements|ino-sidebar:** add css variable to specify the width ([062fe24](https://github.com/inovex/elements/commit/062fe24a1de532481e19f1f3b9aaf3ba69b8f74c))



# [0.17.0](https://github.com/inovex/elements/compare/v0.16.0...v0.17.0) (2020-04-29)


### Features

* **elements|ino-checkbox:** add selection variant ([3e74a78](https://github.com/inovex/elements/commit/3e74a7892bdaa9dd12e1be8cf60780881a7b10d4))
* **elements|ino-icon:** unify icons & add styling options with CSS variables ([a755e69](https://github.com/inovex/elements/commit/a755e69a656b591d869f23af818bc8a51b3718cb))
* **elements|ino-nav-drawer:** create nav-drawer element ([72dd914](https://github.com/inovex/elements/commit/72dd9143c3859a9b173a779de4d1ef9114d3f65c))
* **elements|ino-nav-item:** create nav-item element ([72dd914](https://github.com/inovex/elements/commit/72dd9143c3859a9b173a779de4d1ef9114d3f65c))
* **elements|ino-sidebar:** add ino-sidebar ([e9d56de](https://github.com/inovex/elements/commit/e9d56de9abfec70139f8f1cce9f164b245040f89))
* **storybook:** add pure js example and cleanup docs ([7cc9fdb](https://github.com/inovex/elements/commit/7cc9fdb77bf746096dcedfc769f66ecdf981d3ea))



# [0.16.0](https://github.com/inovex/elements/compare/v0.15.1...v0.16.0) (2020-04-01)


### Bug Fixes

* **storybook:** show elements logo also in storybook ([14cc38d](https://github.com/inovex/elements/commit/14cc38dccb50efb01e8fc842edef9254696e0980))


### Features

* **storybook:** integrate stackblitz code examples ([a4b0e8d](https://github.com/inovex/elements/commit/a4b0e8d7abaaca1753672b809ef48827113a1281))



## [0.15.1](https://github.com/inovex/elements/compare/v0.15.0...v0.15.1) (2020-03-26)



# [0.15.0](https://github.com/inovex/elements/compare/v0.14.0...v0.15.0) (2020-03-25)


### Features

* **elements|ino-button:** add property ino-loading to display a loading spinner ([7cbbce7](https://github.com/inovex/elements/commit/7cbbce7058162e2a585ce08431d28e0113a19cf8))
* **elements|ino-header:** add component ([4c5c69f](https://github.com/inovex/elements/commit/4c5c69f5f97f43beb462197aad0c62ffab2e80b6))
* **elements|ino-segment-group:** add ino-segment-group and -button ([e26478c](https://github.com/inovex/elements/commit/e26478cf593052c23cd707ecb678997dd5cd6e85))
* **elements|ino-snackbar:** add feedback variant ([252c044](https://github.com/inovex/elements/commit/252c0441131a97cc3c8151039c6727f48ae8809e))



# [0.14.0](https://github.com/inovex/elements/compare/v0.13.0...v0.14.0) (2020-03-17)


### Bug Fixes

* **elements:** fix wrong index in activeTabChange event in the ino-tab-bar ([4c90881](https://github.com/inovex/elements/commit/4c908817d62af58fc6442ebd5271c5b099ade997))


### Features

* **elements:** add option to align snackbar to the right ([eb8b8ab](https://github.com/inovex/elements/commit/eb8b8ab39660e0f5fe4ea3a99ae5aa338b37d31a))
* **elements:** ino-fab(-set) in inovex style ([8bd1b32](https://github.com/inovex/elements/commit/8bd1b32458f60ce2c876e005e5cbc1159e269587))



# [0.13.0](https://github.com/inovex/elements/compare/v0.12.0...v0.13.0) (2020-02-19)



# [0.12.0](https://github.com/inovex/elements/compare/v0.11.0...v0.12.0) (2020-02-12)

### Features

* **elements:** add option to mark inputs as optional ([6ee24de](https://github.com/inovex/elements/commit/6ee24de3e8953967e28483a7cc2c83e136a5d0bc))
* **elements:** add ino-switch ([23a5512](https://github.com/inovex/elements/commit/23a55126912e218b47170b9a0442b1c2924cc3d7))
* **elements:** add month picker option to ino-datepicker ([1f796a6](https://github.com/inovex/elements/commit/1f796a64bcd69d1dba450127589174fb1f3d0562))



# [0.11.0](https://github.com/inovex/elements/compare/v0.10.1...v0.11.0) (2020-02-07)


### Bug Fixes

* **elements-storybook:** fix icon search input not updating it's value ([64c7ad5](https://github.com/inovex/elements/commit/64c7ad5beee6015509e55760c9b08bc32ec3d7e3))
* **ino-textarea:** set inner width to 100% ([6c37996](https://github.com/inovex/elements/commit/6c379962b7d1373d2537f17ff222548bfc4d59f5))


### Features

* **elements:** add new ino-error prop to ino-input ([3e4ae46](https://github.com/inovex/elements/commit/3e4ae46b5cc26f57dd0c43ffac3b1d1d47d1d626))
* **elements:** add thousands sep., decimal places, unit to ino-input ([a7df4cb](https://github.com/inovex/elements/commit/a7df4cbe13e12c8069fddf29e760df080ccbcfd6))
* **elements:** ino-checkbox in inovex style ([5884df0](https://github.com/inovex/elements/commit/5884df0fd950fe02636731b7b6abf29af5f7b008))
* **icons:** add new icons, update icon names, update readme ([d176efa](https://github.com/inovex/elements/commit/d176efa3742fe51b6f3f880ec66378de5a5b31df))



## [0.10.1](https://github.com/inovex/elements/compare/v0.10.0...v0.10.1) (2019-12-09)



# [0.10.0](https://github.com/inovex/elements/compare/v0.9.0...v0.10.0) (2019-12-09)