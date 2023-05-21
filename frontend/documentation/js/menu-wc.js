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
                    <a href="index.html" data-type="index-link">frontend documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
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
                                            'data-target="#components-links-module-AppModule-9321520a84330e9abe399a06b27828e2958be82491dc03cd6c82f84c62fb61f9e2f4456eaf7b0e4b70ea5b4635eda8cf9594da106fa69110358456335dbf2d0a"' : 'data-target="#xs-components-links-module-AppModule-9321520a84330e9abe399a06b27828e2958be82491dc03cd6c82f84c62fb61f9e2f4456eaf7b0e4b70ea5b4635eda8cf9594da106fa69110358456335dbf2d0a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-9321520a84330e9abe399a06b27828e2958be82491dc03cd6c82f84c62fb61f9e2f4456eaf7b0e4b70ea5b4635eda8cf9594da106fa69110358456335dbf2d0a"' :
                                            'id="xs-components-links-module-AppModule-9321520a84330e9abe399a06b27828e2958be82491dc03cd6c82f84c62fb61f9e2f4456eaf7b0e4b70ea5b4635eda8cf9594da106fa69110358456335dbf2d0a"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BodyBuilderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BodyBuilderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BodyElementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BodyElementComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CrearSitioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CrearSitioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterLienzoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterLienzoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImagenLienzoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImagenLienzoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LienzoPaginaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LienzoPaginaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuOptionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuOptionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MiCuentaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MiCuentaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MisSitiosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MisSitiosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RankingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RankingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SitiosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SitiosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuperAdminSitiosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuperAdminSitiosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextoLienzoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextoLienzoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TimelineComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TimelineComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TituloLienzoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TituloLienzoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideoLienzoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoLienzoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/SuperadministradorCuentaUsuarioComponent.html" data-type="entity-link" >SuperadministradorCuentaUsuarioComponent</a>
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
                                <a href="classes/Crypto.html" data-type="entity-link" >Crypto</a>
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
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
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
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
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
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
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