import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-waterfall',
  templateUrl: './waterfall.component.html',
  styleUrls: ['./waterfall.component.sass']
})
export class WaterfallComponent {

	@ViewChild('waterfallCanvas', {static: false}) public canvas: ElementRef;

	public context: CanvasRenderingContext2D;

	ngAfterViewInit(): void {
		this.context = this.canvas.nativeElement.getContext('2d');
	}
}
