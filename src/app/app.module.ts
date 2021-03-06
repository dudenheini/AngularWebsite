import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TestpageComponent } from './pages/testpage/testpage.component';
import { PixelCanvasComponent } from './shared/pixel-canvas/pixel-canvas.component';
import { CanvasControlComponent } from './shared/pixel-canvas/canvas-control/canvas-control.component';
import { MachineLearningHomeComponent } from './pages/machine-learning-home/machine-learning-home.component';
import { ProgrammierProjekteHomeComponent } from './pages/programmier-projekte-home/programmier-projekte-home.component';
import { ConwayComponent } from './pages/programmier-projekte-home/conway/conway.component';
import { HeaderComponent } from './header/header.component';
import { WindowSizeManager } from './shared/services/windowSizeManager.service';
import { LinkManager } from './shared/services/linkManager.service';
import { SonstigesHomeComponent } from './pages/sonstiges-home/sonstiges-home.component';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { BlenderBilderComponent } from './pages/sonstiges-home/blender-bilder/blender-bilder.component';
import { AStarPathfindingComponent } from './pages/programmier-projekte-home/a-star-pathfinding/a-star-pathfinding.component';
import { AStarGridComponent } from './shared/a-star-grid/a-star-grid.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SubheaderComponent } from './header/subheader/subheader.component';
import { MainheaderComponent } from './header/mainheader/mainheader.component';
import { TreeFractalGeneratorComponent } from './pages/programmier-projekte-home/tree-fractal-generator/tree-fractal-generator.component';
import { ShowcaseComponentComponent } from './shared/showcase-component/showcase-component.component';
import { MnistDetectionComponent } from './pages/machine-learning-home/mnist-detection/mnist-detection.component';
import { MnistGeneratorComponent } from './pages/machine-learning-home/mnist-generator/mnist-generator.component';
import { UnityFractalGeneratorComponent } from './pages/programmier-projekte-home/unity-fractal-generator/unity-fractal-generator.component';
import { MainhaderP5Component } from './header/mainhader-p5/mainhader-p5.component';
import { MainheaderColorfulComponent } from './header/mainheader-colorful/mainheader-colorful.component';
import { P5NoiseComponent } from './pages/programmier-projekte-home/p5-noise/p5-noise.component';
import { TensorflowObjectdetectionComponent } from './pages/machine-learning-home/tensorflow-objectdetection/tensorflow-objectdetection.component';
import { P5WebglComponent } from './pages/programmier-projekte-home/p5-webgl/p5-webgl.component';
import { GeneticAlgorithmComponent } from './pages/machine-learning-home/genetic-algorithm/genetic-algorithm.component';
import { HunterPreyComponent } from './pages/machine-learning-home/hunter-prey/hunter-prey.component';
import { BlackWhiteComponent } from './pages/machine-learning-home/black-white/black-white.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomepageComponent,
    TestpageComponent,
    PixelCanvasComponent,
    CanvasControlComponent,
    MachineLearningHomeComponent,
    ProgrammierProjekteHomeComponent,
    ConwayComponent,
    HeaderComponent,
    SonstigesHomeComponent,
    GalleryComponent,
    BlenderBilderComponent,
    AStarPathfindingComponent,
    AStarGridComponent,
    PageNotFoundComponent,
    SubheaderComponent,
    MainheaderComponent,
    TreeFractalGeneratorComponent,
    ShowcaseComponentComponent,
    MnistDetectionComponent,
    MnistGeneratorComponent,
    UnityFractalGeneratorComponent,
    MainhaderP5Component,
    MainheaderColorfulComponent,
    P5NoiseComponent,
    TensorflowObjectdetectionComponent,
    P5WebglComponent,
    GeneticAlgorithmComponent,
    HunterPreyComponent,
    BlackWhiteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatIconModule,
    MatExpansionModule,
    MatSliderModule,
    MatSnackBarModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatTabsModule,
    HttpClientModule,
    MatMenuModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  providers: [WindowSizeManager, LinkManager],
  bootstrap: [AppComponent],
})
export class AppModule {}
