import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective implements OnDestroy {
  @Input() public appTooltip: string = '';
  @Input() public template?: TemplateRef<any>;

  private tooltip!: HTMLDivElement;

  constructor(private el: ElementRef, private vcr: ViewContainerRef) {}

  ngOnDestroy(): void {
    this.tooltip.remove();
  }

  @HostListener('mouseenter')
  public onMouseEnter() {
    const el = this.el.nativeElement;

    const coordX = el.getBoundingClientRect().left + el.offsetWidth / 2;
    const coordY = el.getBoundingClientRect().top + el.offsetHeight + 5;

    this.createTooltip(coordX, coordY);
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.vcr.clear();
    this.tooltip.remove();
  }

  public createTooltip(x: number, y: number) {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;

    if (this.template) {
      const tmpl = this.vcr.createEmbeddedView(this.template).rootNodes;
      tooltip.append(...tmpl);
    } else {
      tooltip.textContent = this.appTooltip;
    }

    this.tooltip = tooltip;
    document.body.appendChild(tooltip);
  }
}
