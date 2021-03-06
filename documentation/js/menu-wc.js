'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">geofence-rs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-bc1655c54e8150118c8bfe4d39e6f69066632456015156655a70b4e1a15462b9428f0969d6f568582dfb8d8212ee3fb2780fb9bf809570e74e1ba9b9c7ec2bde"' : 'data-target="#xs-controllers-links-module-AppModule-bc1655c54e8150118c8bfe4d39e6f69066632456015156655a70b4e1a15462b9428f0969d6f568582dfb8d8212ee3fb2780fb9bf809570e74e1ba9b9c7ec2bde"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-bc1655c54e8150118c8bfe4d39e6f69066632456015156655a70b4e1a15462b9428f0969d6f568582dfb8d8212ee3fb2780fb9bf809570e74e1ba9b9c7ec2bde"' :
                                            'id="xs-controllers-links-module-AppModule-bc1655c54e8150118c8bfe4d39e6f69066632456015156655a70b4e1a15462b9428f0969d6f568582dfb8d8212ee3fb2780fb9bf809570e74e1ba9b9c7ec2bde"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GeofenceModule.html" data-type="entity-link" >GeofenceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GeofenceModule-3301cd3f14de29388a81ace3cfa4967a966dab99c71153ea8751bc099ba9e882510254202f1a26c40b2551b1bd783025c7643291454b1631f39f264e2eb14176"' : 'data-target="#xs-controllers-links-module-GeofenceModule-3301cd3f14de29388a81ace3cfa4967a966dab99c71153ea8751bc099ba9e882510254202f1a26c40b2551b1bd783025c7643291454b1631f39f264e2eb14176"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GeofenceModule-3301cd3f14de29388a81ace3cfa4967a966dab99c71153ea8751bc099ba9e882510254202f1a26c40b2551b1bd783025c7643291454b1631f39f264e2eb14176"' :
                                            'id="xs-controllers-links-module-GeofenceModule-3301cd3f14de29388a81ace3cfa4967a966dab99c71153ea8751bc099ba9e882510254202f1a26c40b2551b1bd783025c7643291454b1631f39f264e2eb14176"' }>
                                            <li class="link">
                                                <a href="controllers/GeofenceController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeofenceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GeofenceModule-3301cd3f14de29388a81ace3cfa4967a966dab99c71153ea8751bc099ba9e882510254202f1a26c40b2551b1bd783025c7643291454b1631f39f264e2eb14176"' : 'data-target="#xs-injectables-links-module-GeofenceModule-3301cd3f14de29388a81ace3cfa4967a966dab99c71153ea8751bc099ba9e882510254202f1a26c40b2551b1bd783025c7643291454b1631f39f264e2eb14176"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GeofenceModule-3301cd3f14de29388a81ace3cfa4967a966dab99c71153ea8751bc099ba9e882510254202f1a26c40b2551b1bd783025c7643291454b1631f39f264e2eb14176"' :
                                        'id="xs-injectables-links-module-GeofenceModule-3301cd3f14de29388a81ace3cfa4967a966dab99c71153ea8751bc099ba9e882510254202f1a26c40b2551b1bd783025c7643291454b1631f39f264e2eb14176"' }>
                                        <li class="link">
                                            <a href="injectables/GeofenceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeofenceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/GeofenceController.html" data-type="entity-link" >GeofenceController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Coordinates.html" data-type="entity-link" >Coordinates</a>
                            </li>
                            <li class="link">
                                <a href="classes/GeofenceDTO.html" data-type="entity-link" >GeofenceDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/GeofenceUtils.html" data-type="entity-link" >GeofenceUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/Geometry.html" data-type="entity-link" >Geometry</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/GeofenceService.html" data-type="entity-link" >GeofenceService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Coordinates.html" data-type="entity-link" >Coordinates</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Geofence.html" data-type="entity-link" >Geofence</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Geometry.html" data-type="entity-link" >Geometry</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});