export interface Modeler {
  addCustomElements: (customElements: any[]) => void;
  getCustomElements:() => any;
  get: (name: string, strict?: boolean) => any;
  invoke: (func: Function, context: any, locals: any) => any;
  injector: any;
  importXML: (xml: string) => Promise<{ warnings: any[] }>;
  saveXML: () => Promise<string>;
  attachTo: (element: HTMLElement) => void;
  destroy: () => void;
  clear: () => void;

}
