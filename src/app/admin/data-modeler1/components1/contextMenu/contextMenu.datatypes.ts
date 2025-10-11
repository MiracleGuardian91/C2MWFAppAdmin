export interface IContextMenuModel {
  menuText: string;
   menuEvent: string;
  menuIcon: string;
}

export class ContextMenuPosition {
  rightClickMenuPositionX: number;
  rightClickMenuPositionY: number;
  
  // Boundary properties
  left: number;
  right: number;
  top: number;
  bottom: number;
  width: number;
  height: number;
  
  // Center position properties
  centerX: number;
  centerY: number;
  
  constructor() {
    this.rightClickMenuPositionX = 0;
    this.rightClickMenuPositionY = 0;
    this.left = 0;
    this.right = 0;
    this.top = 0;
    this.bottom = 0;
    this.width = 0;
    this.height = 0;
    this.centerX = 0;
    this.centerY = 0;
  }
}